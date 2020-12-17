module.exports = app => {
    const orders = require("../controllers/order.controller.js");

    let router = require("express").Router();

    // Create a new Order
    router.post("/", orders.create);

    // List all Orders
    router.get("/", orders.findAll);

    app.use('/api/orders', router);
};