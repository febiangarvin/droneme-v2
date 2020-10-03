const express = require("express");
const router = express.Router();

// ----- FUNCTION CALL FROM CONTROLLERS FOLDER ----- //
/*
- routes berguna untuk menyambungkan antar function pada controller dengan server.js
- agar code lebih pendek
*/
const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../helpers/validator");

// ----- ROUTER FUNCTIONS ----- //
/*
- get = read
- post = menambah
- put = update
- delete = hapus
*/
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
