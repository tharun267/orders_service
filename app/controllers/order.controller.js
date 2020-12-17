const { product } = require("../models");
const db = require("../models");
const Order = db.order;
const Item = db.item;
const Product = db.product;
const User = db.user;
const Address = db.address;

const listnerEvents = {
    NEW_ORDER: "NEW_ORDER"
};

// Create and Save a new Order
exports.create = async (req, res) => {

    // Create Items
    const items = req.body.items.map(item =>
        new Item({
            product: new Product({
                type: item.product.type,
                price: item.product.price,
                description: item.product.description,
            }),
            quantity: item.quantity
        })
    );

    const user = new User({
        address: new Address({
            state: req.body.user.address.state,
            number: req.body.user.address.number,
            street: req.body.user.address.street,
            city: req.body.user.address.city,
            zipCode: req.body.user.address.zipCode,
            country: req.body.user.address.country,
        }),
        fullName: req.body.user.fullName,
        email: req.body.user.email,
        phone: req.body.user.phone,
    })

    // Create a Order
    const order = new Order({
        total: req.body.total,
        status: req.body.status,
        items: items, // can use shorthand notation
        user: user
    });

    // Save Order in the database
    try {
        const data = await order.save(order);
        req.io.emit(listnerEvents.NEW_ORDER, true);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Order."
        });
    }

};

// Retrieve all Orders from the database.
exports.findAll = async (req, res) => {
    try {
        const data = await Order.find({});
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    }
};