const express = require('express');
const router = express.Router();
const path = require('path');
const settings = require('./settings');

router.use(function (request, response, next){
    next()
});

router.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, './static/index.html'));
});

router.use('/settings', settings);


module.exports = router;

