const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addQuotes(req.body.author, req.body.quote, req.body.date)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res) {
    controller.listQuotes()
        .then(authors => {
            response.success(req, res, authors, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;