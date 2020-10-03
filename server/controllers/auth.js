const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');

// ----- SIGNUP USING PROMISE ----- //
exports.signup = (req, res) => {
    /*
     - membuat user baru dari body / form pada interface
    */
    const user = new User(req.body);
    user.save((err, user) => {
        /*
         - jika terjadi error (email yang ganda)
        */
       if (err) {
        return res.status(400).json({
            error: errorHandler(err)
        });
    }
        /*
         - akan membuat sebuah password dengan sebuah tulisan random di database
        */
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

// ----- SIGNUP USING ASYNC/AWAIT ----- //
// exports.signup = async (req, res) => {
//     try {
//         const user = await new User(req.body);
//         console.log(req.body);
//         await user.save((err, user) => {
//             if (err) {
//                 // return res.status(400).json({ err });
//                 return res.status(400).json({
//                     error: 'Email is taken'
//                 });
//             }
//             res.status(200).json({ user });
//         });
//     } catch (err) {
//         console.error(err.message);
//     }
// };

// ----- SIGNIN ----- //
exports.signin = (req, res) => {
    /*
     - find the user based on email
    */
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup with another email'
            });
        }
        /*
         - if user is found make sure the email and password match
         - create authenticate method in user model
        */
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }
        /*
         - generate a signed token with user id and secret
        */
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        /*
         - persist the token as 't' in cookie with expiry date
        */
        res.cookie('t', token, { expire: new Date() + 9999 });
        /*
         - return response with user and token to frontend client
        */
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
    });
};

// ----- SIGNOUT ----- //
exports.signout = (req, res) => {
    /*
     - menhapus cookie user tersebut
    */
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};

// ----- SIGNIN REQUIREMENT ----- //
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    // algorithms: ['RS256'],
    algorithms: ['HS256'],
    userProperty: "auth"
});

// ----- AUTHENTICATION ----- //
exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        });
    }
    next();
};

// ----- ADMIN ACCESS ----- //
exports.isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: 'Admin only! Access is denied!'
        });
    }
    next();
};
