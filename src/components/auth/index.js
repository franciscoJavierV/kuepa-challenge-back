const express = require("express");
const authCtrl = require("./authController");
const router = express.Router();


//user routes
router.post("/provider", authCtrl.provider);

module.exports.routes = router;
