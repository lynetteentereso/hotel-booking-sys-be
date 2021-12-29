const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: Number,
    manager: String,
    tin: Number  
});

module.exports = mongoose.model('Hotel', HotelSchema);