const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const routes = require('./routes');

dotenv.config();

const port = process.env.PORT;
const staticPath = String(process.env.STATICPATH);

app.use(express.static(staticPath));

// landing route, to routes/index.js
app.use('/', routes);

app.set('views', './views');

app.listen(port, () => {
    console.log(`Express server listening on port: ${port}.`)
});

