const express = require("express");
const passport = require('../authentication.js');
const router = express.Router();
const { Homepage, Aboutus, Loginpage, Signuppage, Contactsave, Contactfailed, Loggersave, Getmygear, Getmyachi ,Logout,isAuthenticated} = require("../controllers/functions.js");

router.route("/").get(Homepage);
router.route("/aboutus").get(Aboutus);
router.route("/signup").get(Signuppage).post(Loggersave);
router.route("/contact").post(Contactsave);
router.route("/contactfailed").get(Contactfailed);
router.route("/mygear").get(isAuthenticated, Getmygear);
router.route("/achi").get(Getmyachi);
router.route("/login").get(Loginpage).post(passport.authenticate('local', {
  successRedirect: '/mygear',
  failureRedirect: '/login'
}));
router.route("/logout").get(Logout);







module.exports = router;
