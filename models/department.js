const mongoose = require('mongoose');

const DepartmentSchema = mongoose.Schema({
    name: String,
    head: String 
});

module.exports = mongoose.model('Department', DepartmentSchema);