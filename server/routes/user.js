const express = require('express');
const router = express.Router();

// // ----- FUNCTION CALL FROM CONTROLLERS FOLDER ----- // //
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, read, update, purchaseHistory } = require('../controllers/user');

// // ----- ROUTER FUNCTIONS ----- // //
router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'droneme'
    });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;
