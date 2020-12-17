const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.order = mongoose.model("order",
    require("./order.model.js")(mongoose));
db.address = mongoose.model("address", require("./address.model.js")(mongoose));
db.item = mongoose.model("items", require("./item.model.js")(mongoose));
db.product = mongoose.model("product", require("./product.model.js")(mongoose));
db.user = mongoose.model("user", require("./user.model.js")(mongoose));

module.exports = db;