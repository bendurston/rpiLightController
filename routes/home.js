const express = require('express');

const colourChanger = require('../helpers/colourChanger.js');
const settings = require('./settings');

const router = express.Router();

router.get('/', function (request, response, next) {
    response.render('home')
    return next()
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
