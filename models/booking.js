const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    guest: {type: mongoose.SchemaTypes.ObjectId, ref: 'Guest'},
    room: {type: mongoose.SchemaTypes.ObjectId, ref: 'Room'},
    room_num: Number,
    checkin_date: Date,
    checkout_date: Date,
    status: String

});

module.exports = mongoose.model('Booking', BookingSchema);