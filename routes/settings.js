const express = require('express');

const readWrite = require('../helpers/readWriteJson.js');

const router = express.Router();

router.get('/', function (request, response, next) {
    readWrite.readPinsFromData().then(function(pinList){
        response.render('settings', {redPin: pinList[0], greenPin: pinList[1], bluePin: pinList[2]})
        return next();
    });
});

router.post('/', function(request, response, next){
    var redPin = request.body.redPin;
    var greenPin = request.body.greenPin;
    var bluePin = request.body.bluePin;
    //TODO: Implement input validation.
    response.render('settings', {redPin: redPin, greenPin: greenPin, bluePin: bluePin})
    readWrite.writePinsToData(redPin, greenPin, bluePin)
    return next();
});


module.exports = router;
