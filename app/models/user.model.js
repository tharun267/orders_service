module.exports = mongoose => {
    const Address = require("./address.model.js")(mongoose);

    let schema = mongoose.Schema(
        {
            fullName: String,
            phone: String,
            email: String,
            address: Address
        },
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

   return schema;
};