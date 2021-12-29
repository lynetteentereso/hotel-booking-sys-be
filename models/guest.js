const mongoose = require('mongoose');

const GuestSchema = mongoose.Schema({
    full_name: String,
    address: String,
    city: String,
    province: String,
    zip_code: String,
    company_name: String,
    email_address: String,
    mobile_number: String
});

module.exports = mongoose.model('Guest', GuestSchema);