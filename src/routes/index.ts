const express = require("express");
const router = express.Router();

const { sendAirtime } = require("../controller/sendAirtime.controller");

router.route("/send").post(sendAirtime);

module.exports = router;
export {};
