const express = require('express');
const bodyPaser = require('body-parser');

const readWrite = require('../helpers/readWriteJson.js');
const colourChanger = require('../helpers/colourChanger.js');
const settings = require('./settings');
const { request } = require('express');

const router = express.Router();

router.get('/', function (request, response) {
    readWrite.readPinsFromData().then(function(pinList){
        return response.render('home', {redPin: pinList[0], greenPin: pinList[1], bluePin: pinList[2]});
    });
});

router.post('/api/lightsOff', (request, response, next) => {
    colourChanger.setLightsOff()
    response.sendStatus(200);
    return next()
});

router.post('/api/lightsOn', (request, response, next) => {
    colourChanger.setLightsOn()
    response.sendStatus(200);
    return next()    
});

router.post('/api/lightsCustom', (request, response, next) => {
    const red = String(request.body.red);
    const green = String(request.body.green);
    const blue = String(request.body.blue);
    colourChanger.setLightsColour(red, green, blue);
    response.sendStatus(200);
    return next()
});


router.use('/settings', settings);

module.exports = router;
