const readWrite = require('./readWriteJson.js');
const { exec } = require('child_process');

module.exports = {

    getPinsFromData: function() {
        var promise = new Promise(function(resolve, reject){
            readWrite.readPinsFromData().then(function(pinList){
                resolve(pinList);
            });
        })
        return promise
    }, // getPinsFromData End

    setLightsOff: async function() {
        var pinList = await this.getPinsFromData()
        var lightOff = 'pigs p ' + pinList[0] + ' 0; pigs p ' + pinList[1] + ' 0; pigs p ' + pinList[2] + ' 0'
        await this.executeCommand(lightOff);
    }, // setLightsOff End

    setLightsOn: async function() {
        var pinList = await this.getPinsFromData()
        var lightOn = 'pigs p ' + pinList[0] + ' 255; pigs p ' + pinList[1] + ' 255; pigs p ' + pinList[2] + ' 255'
        await this.executeCommand(lightOn);
    }, // setLightsOn End

    setLightsColour: async function(red, green, blue){
        var pinList = await this.getPinsFromData()
        var lightCustom = 'pigs p ' + pinList[0] + ' ' + red +'; pigs p ' + pinList[1] + ' '+ green +'; pigs p ' + pinList[2] + ' ' + blue
        await this.executeCommand(lightCustom);
    }, // setLightsColour End

    executeCommand: async function(command){
        exec(command, (error, stdout, stderr)=> {
            if (error) {
                console.log(`Error: ${error.message}`);
                return;
            }
            if (stderr){
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } //executeCommand End
};
