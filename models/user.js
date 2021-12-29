const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
    department: {type: mongoose.SchemaTypes.ObjectId, ref: 'Department'}
});

module.exports = mongoose.model('User', UserSchema);