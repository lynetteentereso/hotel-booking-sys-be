const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    invoice_date: Date,
    booking: {type: mongoose.SchemaTypes.ObjectId, ref: 'Booking'},
    housekeeping_charge: Number,
    resto_charge: Number,
    room_charge: Number,
    payment: {type: mongoose.SchemaTypes.ObjectId, ref: 'Payment'},

});

module.exports = mongoose.model('Invoice', InvoiceSchema);