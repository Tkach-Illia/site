const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accSchema = new Schema({
    name: { type: String, required: true, unique: true,},
    password: { type: String, required: true },
    status: { type: Boolean, required: true }
    });

const Account = mongoose.model('Account', accSchema);

module.exports = Account;