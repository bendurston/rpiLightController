const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

// landing route, to routes/index.js
app.use('/', routes());

app.listen(port, () => {
    console.log(`Express server listening on port: ${port}.`)
});

// TODO: Create function or module that initializes pub sub devices.
