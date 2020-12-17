module.exports = mongoose => {
    const Product = require("./product.model.js")(mongoose);
    let schema = mongoose.Schema(
        {
            product: Product,
            quantity: Number
        },
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return schema
};