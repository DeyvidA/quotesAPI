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
        date,
    };
    return store.add(quotes);
}

function listQuotes(filterDate) {
    return new Promise(async (resolve, reject) => {
        resolve(store.list(filterDate));
    })
}

module.exports = {
    addQuotes,
    listQuotes,
}