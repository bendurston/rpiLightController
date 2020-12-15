const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const projectPath = String(process.env.PROJECTPATH);

module.exports = {
    writePinsToData: function (redPin, greenPin, bluePin) {
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
        fs.writeFileSync((path.join(projectPath), 'data/pins.json'), data)
        console.log('Updated pins.json');

    },
    readPinsFromData: async function (){
        var promise = new Promise(function(resolve, reject){
            var pinList = []
            fs.readFile('data/pins.json', (err, data) => {
                if (err) throw err;
                let pins = JSON.parse(data);
                for (var key in pins){
                    pinList.push(pins[key])
                }
                resolve(pinList);
            })
        });
        return promise;
    }
};
