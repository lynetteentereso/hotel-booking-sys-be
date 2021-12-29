const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    type: String,
    rate: Number,
    count: Number 
});

module.exports = mongoose.model('Room', RoomSchema);