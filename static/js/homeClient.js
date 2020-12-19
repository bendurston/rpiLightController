const btnLightOn = document.getElementById("lights-on");
const btnLightOff = document.getElementById("lights-off");

const btnLightCustom = document.getElementById("lights-custom");
const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");

const colourPreviewC = document.getElementById("colour-preview");

btnLightOn.addEventListener('click', async function(e) {
    await fetch('/home/api/lights/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

btnLightOff.addEventListener('click', async function(e) {
    await fetch('/home/api/lights/0', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

redSlider.addEventListener("input", colourPreview(redSlider.value, greenSlider.value, blueSlider.value));

greenSlider.addEventListener("input", colourPreview(redSlider.value, greenSlider.value, blueSlider.value));

blueSlider.addEventListener("input", colourPreview(redSlider.value, greenSlider.value, blueSlider.value));

btnLightCustom.addEventListener('click', async function(e) {
    var red = redSlider.value
    var green = greenSlider.value
    var blue = blueSlider.value
    await fetch('/home/api/lights/custom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "red": red,
            "green": green,
            "blue": blue
        })
    });
});




async function colourPreview(red, green, blue){
    colourPreviewC.style=`background-color: rgb(${red}, ${green}, ${blue})`;
};