const Model = require('./model');

function addQuote(author, quote, date) {
    const myQuote = new Model(author, quote, date);
    return myQuote.save();
}

function listQuotes(filterDate) {
    let filter = {}
    if (filterDate !== null) {
        filter = { date: filterDate };
    }
    const list = Model.find(filter);
    return list
}

module.exports = {
    add: addQuote,
    list: listQuotes,
}