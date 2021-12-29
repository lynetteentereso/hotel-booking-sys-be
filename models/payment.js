const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    invoice: {type: mongoose.SchemaTypes.ObjectId, ref: 'Invoice'},
    payment: Number,
    payment_date: Date
});

module.exports = mongoose.model('Payment', PaymentSchema);