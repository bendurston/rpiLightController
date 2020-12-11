const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const routes = require('./routes');
const colourChanger = require('./helpers/colourChanger.js');

dotenv.config();

const port = process.env.PORT;

app.set('view engine', 'pug')

app.use('/', routes);

app.listen(port, () => {
    console.log(`Express server listening on port: ${port}.`)
});

colourChanger.setLightsOff();

