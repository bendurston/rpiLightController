const readWrite = require('./readWriteJson.js');
const { exec } = require('child_process');

module.exports = {

    getPinsFromData: function(){
        /*
        Purpose:
            
        Args:
        
        Returns:
        */
       readWrite.readPinsFromData().then(function(pinList){
        return pinList;
       });

    },
    setLightsOff: function() {
        /*
        Purpose:
            This function will be called when the server boots and
            when clicking the ligths off button; Setting the lights to black.
        Args:
            None
        Returns:
            error, stderr
        */
        var pinList = await this.getPinsFromData();
        console.log(pinList);
        var redPin = String(pinList[0]);
        var greenPin = String(pinList[1]);
        var bluePin = String(pinList[2]);
        let lightOff = 'pigs p ' + redPin + ' 0; pigs p ' + greenPin + ' 0; pigs p ' + bluePin + ' 0'
        console.log(lightOff);
        // Uncomment when in production.
        // exec(lightOff, (error, stdout, stderr)=> {
        //     if (error) {
        //         console.log(`Error: ${error.message}`);
        //         return;
        //     }
        //     if (stderr){
        //         console.log(`stderr: ${stderr}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        // });

    }, // setLightsOff End

    setLightsColour: function(red, green, blue){
        

    } // setLightsColour End

};
