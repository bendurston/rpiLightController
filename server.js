const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyPaser = require('body-parser');

const app = express();
const routes = require('./routes/home');

dotenv.config();

const staticPath = process.env.STATICPATH;
const port = process.env.PORT;

app.use(express.static(staticPath))

app.set('view engine', 'pug')

app.use(express.json(), bodyPaser.urlencoded({extended: false}))

app.use('/home', routes);

app.get('/', (request, response, next) => {
    response.redirect('/home')
    return next()
});

app.listen(port, () => {
    console.log(`Express server listening on port: ${port}.`)
});


