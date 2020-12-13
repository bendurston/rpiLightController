const express = require('express');

const readWrite = require('../helpers/readWriteJson.js');

const router = express.Router();

router.get('/', function (request, response, next) {
    response.render('settings');
    return next();
});

router.post('/', function(request, response, next){
    var redPin = request.body.redPin
    var greenPin = request.body.greenPin
    var bluePin = request.body.bluePin
    readWrite.writePinsToData(redPin, greenPin, bluePin)
    response.render('settings')
    return next();
});


module.exports = router;
