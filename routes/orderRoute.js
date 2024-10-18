const express = require("express");
const router = express.Router();

const { orderController } = require("../controllers");

router.get("/orders", orderController.showOrderPage);
router.get("/orders/create", orderController.createPage);
router.post("/orders/create", orderController.createPage);
router.post("/orders/delete/:id", orderController.deleteOrder);

// Get detail data order
router.get("/api/v1/orders/:id", orderController.getDetailOrder);

module.exports = router;
