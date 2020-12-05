const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const router = express.Router();

const projectPath = String(process.env.PROJECTPATH);
const staticPath = String(process.env.STATICPATH);

router.use(function (request, response, next){
    next()
});

router.get('/', function (request, response) {
    response.sendFile(path.join(String(staticPath), '/settings.html'));
});

router.use(express.urlencoded({
    extended: true
}));

router.post('/', (request, response)=>{
    const red = request.body.redPin;
    const green = request.body.greenPin;
    const blue = request.body.bluePin;
    writePinsToData(red, green, blue);
    response.sendFile(path.join(staticPath, '/settings.html'));
})

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
};

module.exports = router;
