const ORDER_STATUS_TYPES = ["DELIVERED", "CANCELLED", "WAITING"];

module.exports = mongoose => {
    const Item = require("./item.model.js")(mongoose);
    const User = require("./user.model.js")(mongoose);

    let schema = mongoose.Schema(
        {
            total: Number,
            status: { type: String, enum: ORDER_STATUS_TYPES },
            items: [Item],
            user: User
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return schema;
};