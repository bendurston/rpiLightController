const express = require('express');

const readWrite = require('../helpers/readWriteJson.js');

const router = express.Router();

router.get('/', function (request, response, next) {
    readWrite.readPinsFromData().then(function(pinList){
        response.render('settings', {redPin: pinList[0], greenPin: pinList[1], bluePin: pinList[2]});
        return next();
    });
});

router.post('/', function(request, response, next){
    var redPin = request.body.redPin
    var greenPin = request.body.greenPin
    var bluePin = request.body.bluePin
    if (0<=redPin<=255 && 0<=greenPin<=255 && 0<=bluePin<=255) {
        console.log('here')
        readWrite.writePinsToData(redPin, greenPin, bluePin).then(()=>{})
    }
    response.render('settings')
    return next()
});


module.exports = router;
