const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const pug = require('pug');
const readWrite = require('../helpers/readWriteJson.js');

dotenv.config();

const router = express.Router();
const settings = require('./settings');
const { read } = require('fs');
const staticPath = String(process.env.STATICPATH);

router.use(function (request, response, next){
    return next();
});

router.get('/', function (request, response) {
    readWrite.readPinsFromData().then(function(pinList){
        let redPin = pinList[0];
        let greenPin = pinList[1];
        let bluePin = pinList[2];
        return response.render('home', {redPin: redPin, greenPin: greenPin, bluePin: bluePin});
    });
});

router.use('/settings', settings);

module.exports = router;

