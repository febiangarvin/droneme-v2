/*
- functions/fitur dari package express-validator
- berguna sebagai validasi untuk registrasi user
*/
exports.userSignupValidator = (req, res, next) => {
    /*
    - req.check = request dan melakukan checking (pemeriksaan)
    - ditulis dengan persyaratan untuk tiap form yang akan diisi oleh user ssat registrasi
    */
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');
    /*
    - jika terjadi error
    */
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};
