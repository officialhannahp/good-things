const mongoose = require('mongoose');

    const JewelrySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    desc: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    count: {
        type: Number,
    }

    }, { timestamps: true });

    const Jewelry = mongoose.model("Jewelry", JewelrySchema);

    module.exports = Jewelry;