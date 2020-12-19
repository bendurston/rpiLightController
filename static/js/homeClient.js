const btnLightOn = document.getElementById("lights-on");
const btnLightOff = document.getElementById("lights-off");
const btnLightCustom = document.getElementById("lights-custom");
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const colourPreview = document.getElementById("colour-preview");

onWindowLoad(); // calls function once when page is loaded/reloaded.

btnLightOn.addEventListener('click', async () => {
    /* 
        Sends PATCH to server on '/home/api/lights/1' route.
    */
    onDefaultColour(255, 255, 255);
    await fetch('/home/api/lights/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

btnLightOff.addEventListener('click', async () => {
    /* 
        Sends PATCH to server on '/home/api/lights/0' route.
    */
    onDefaultColour(0, 0, 0);
    await fetch('/home/api/lights/0', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

btnLightCustom.addEventListener('click', async () => {
    /* 
        Sends POST to server containing slider values on '/home/api/lights/custom' route.
    */
    await fetch('/home/api/lights/custom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "red": redSlider.value,
            "green": greenSlider.value,
            "blue": blueSlider.value
        })
    });
});

redSlider.addEventListener("input", async () => {
    /* 
        Sets the preview colour when the red slider recieves input.
    */
    colourPreview.style=`background-color: rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
});

greenSlider.addEventListener("input", async () => {
    /* 
        Sets the preview colour when the green slider recieves input.
    */
    colourPreview.style=`background-color: rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
});

blueSlider.addEventListener("input", async () => {
    /* 
        Sets the preview colour when the blue slider recieves input.
    */
    colourPreview.style=`background-color: rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
});

async function onWindowLoad(){
    /* 
        Sets the preview colour to the slider values are before they are moved.
    */
    colourPreview.style=`background-color: rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
};

async function onDefaultColour(red, green, blue){
    /*  
        This function is called when ever a default colour is selected. 
        It will set the sliders and preview to that default colour.
    */
    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;
    colourPreview.style=`background-color: rgb(${red}, ${green}, ${blue})`;
};
