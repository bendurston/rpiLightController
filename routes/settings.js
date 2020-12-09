const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const bodyPaser = require('body-parser');

dotenv.config();

const router = express.Router();

const projectPath = String(process.env.PROJECTPATH);

router.use(bodyPaser.urlencoded({extended: false}), function (request, response, next){
    return next();
});

router.get('/', function (request, response) {
    return response.render('settings');
});

router.post('/', function (request, response){
    let redPin = request.body.redPin
    let greenPin = request.body.greenPin
    let bluePin = request.body.bluePin
    writePinsToData(redPin, greenPin, bluePin);
    return response.render('home');
});

function writePinsToData (redPin, greenPin, bluePin) {
    /*
    Purpose:
        Write the gpio pins to the .json file
    Args:
        GPIO pins accociated with Red, Green, and Blue data signals.
    */
    var pins = {
        red: redPin,
        green: greenPin,
        blue: bluePin
    }
    var data = JSON.stringify(pins);
    fs.writeFileSync((path.join(projectPath), 'data/pins.json'), data);
    console.log('Updated pins.json');
};

module.exports = router;
