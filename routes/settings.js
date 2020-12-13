const express = require('express');

const readWrite = require('../helpers/readWriteJson.js');

const router = express.Router();

router.get('/', function (request, response) {
    return response.render('settings');
});

router.post('/', function (request, response, next){
    var redPin = request.body.redPin
    var greenPin = request.body.greenPin
    var bluePin = request.body.bluePin
    readWrite.writePinsToData(redPin, greenPin, bluePin);
    response.render('home',{redPin: redPin, greenPin: greenPin, bluePin: bluePin}); 
    return next()   
});


module.exports = router;
