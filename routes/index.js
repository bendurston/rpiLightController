const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();
const settings = require('./settings');
const staticPath = String(process.env.STATICPATH);

router.use(function (request, response, next){
    next()
});

router.get('/', function (request, response) {
    response.sendFile(path.join(staticPath, 'index.html'));
});

router.use('/settings', settings);


module.exports = router;

