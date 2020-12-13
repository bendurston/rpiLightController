const btnLightOn = document.getElementById("lights-on");
const btnLightOff = document.getElementById("lights-off");
const btnLightCustom = document.getElementById("lights-custom");


btnLightOn.addEventListener('click', async function(e) {
    await fetch('/home/api/lightsOn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

btnLightOff.addEventListener('click', async function(e) {
    await fetch('/home/api/lightsOff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
});

// change to sliders for custom
btnLightCustom.addEventListener('click', async function(e) {
    await fetch('/home/api/lightsCustom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "red": 100,
            "green": 0,
            "blue": 255
        })
    });
});
