const Model = require('./model');

function addQuote(author, quote, date) {
    const myQuote = new Model(author, quote, date);
    return myQuote.save();
}

function listQuotes() {
    return Model.find();
}

module.exports = {
    add: addQuote,
    list: listQuotes,
}