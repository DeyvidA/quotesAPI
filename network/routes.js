const express = require('express');
const quotes = require('../components/quotes/network');

const routes = function (server) {
    server.use('/quotes', quotes);
};

module.exports = routes;