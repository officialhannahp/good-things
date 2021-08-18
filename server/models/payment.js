// const Schema = mongoose.Schema;
const mongoose = require('mongoose');


const paymentSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    jewelry: {
        type: Array,
        default: []
    }


}, { timestamps: true })


const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }