const mongoose = require('mongoose');
const { Schema } = mongoose;

const Employee = new Schema({
    firstname: String,
    lastname: String,
    emp_id: String,
    phone: String
});

module.exports = mongoose.model("Emloyee", Employee);




