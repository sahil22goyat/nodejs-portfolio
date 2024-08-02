const express = require("express");
const router = express.Router();
const{ Homepage,Aboutus,Loginpage,Signuppage ,Contactsave,Contactfailed,Loggersave,Getmygear,Getmyachi} = require("../controllers/functions.js");
router.route("/").get(Homepage);
router.route("/aboutus").get(Aboutus);

router.route("/signup").get(Signuppage).post(Loggersave);
router.route("/login").get(Loginpage);
router.route("/contact").post(Contactsave);
router.route("/contactfailed").get(Contactfailed);
router.route("/mygear").get(Getmygear);

router.route("/achi").get(Getmyachi);

module.exports = router;
