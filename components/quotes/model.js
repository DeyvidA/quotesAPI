const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    author: String,
    quote: String,
    date: Date
});
    
const model = mongoose.model('quotes', mySchema);
module.exports = model;