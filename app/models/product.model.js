module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            type: String,
            price: Number,
            description: String,
        },
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

   return schema;
};