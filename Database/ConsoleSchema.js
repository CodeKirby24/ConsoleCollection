const mongoose = require('mongoose');

const console = new mongoose.Schema({
    company: String,
    console: String,
    year: Number,
    Price: Number
})

const newConsole = new mongoose.model('console', console);
module.exports = newConsole;