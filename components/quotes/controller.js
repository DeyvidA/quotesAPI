const store = require('./store');

function addQuotes(author, quote, date) {
    if (!author) {
        return Promise.reject('Invalid author');
    }
    if (!quote) {
        return Promise.reject('Invilid Quote');
    }

    const quotes = {
        author,
        quote,
        date: new Date()
    };
    return store.add(quotes);
}

function listQuotes() {
    return store.list();
}

module.exports = {
    addQuotes,
    listQuotes,
}