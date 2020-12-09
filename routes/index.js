const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const pug = require('pug');
const fs = require('fs');

dotenv.config();

const router = express.Router();
const settings = require('./settings');
const staticPath = String(process.env.STATICPATH);

router.use(function (request, response, next){
    return next();
});

router.get('/', function (request, response) {
    let pins = readPins();
    console.log(`${pins}`);
    return response.render('home');

});

router.use('/settings', settings);

function readPins(){
    let pinList = []
    fs.readFile('data/pins.json', (err, data) => {
        if (err) throw err;
        let pins = JSON.parse(data);
        for (var key in pins){
            pinList.push(pins[key])
        }
        return pinList;
    })
};

module.exports = router;

