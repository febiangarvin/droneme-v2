const User = require('../models/user');
const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

// ----- USER SERACH BY ID ----- //
exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

// ----- READ USERS ----- //
exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

// ----- UPDATE USER ----- //
exports.update = (req, res) => {
    const { password } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        /**
         * jika user tidak ditemukan
         */
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }

        if (password) {
            /**
             * jika password tidak sesuai ketentuan
             */
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

// ----- ADDING ORDERS AS TRANSACTION HISTORY ----- //
exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];
    /**
     * push informasi sebuah produk ke array history
     */
    req.body.order.products.forEach(item => {
        history.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            category: item.category,
            quantity: item.count,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.order.amount
        });
    });

    /**
     * melakukan update untuk keterangan pembelanjaan
     */
    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update user purchase history'
            });
        }
        next();
    });
};

// ----- USER'S PURCHASE HISTORY ----- //
exports.purchaseHistory = (req, res) => {
    Order.find({ user: req.profile._id })
        .populate('user', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};
