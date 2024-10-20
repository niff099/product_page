const express = require("express");
const router = express.Router();

const { dashboardController } = require("../controllers");

router.get("/dashboard", dashboardController.showDashboardPage);

module.exports = router;
