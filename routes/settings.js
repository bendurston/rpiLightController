const express = require('express');
//const dotenv = require('dotenv');
//const path = require('path');
const bodyPaser = require('body-parser');
const readWrite = require('../helpers/readWriteJson.js');


//dotenv.config();

const router = express.Router();

//const projectPath = String(process.env.PROJECTPATH);

router.use(bodyPaser.urlencoded({extended: false}), function (request, response, next){
    return next();
});

router.get('/', function (request, response) {
    return response.render('settings');
});

router.post('/', function (request, response){
    var redPin = request.body.redPin
    var greenPin = request.body.greenPin
    var bluePin = request.body.bluePin
    readWrite.writePinsToData(redPin, greenPin, bluePin);
    return response.render('home',{redPin: redPin, greenPin: greenPin, bluePin: bluePin});
});


module.exports = router;
