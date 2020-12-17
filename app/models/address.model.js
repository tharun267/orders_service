module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            state: String,
            number: String,
            street: String,
            city: String,
            country: String,
            zipCode: String
        },
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

   return schema;
};