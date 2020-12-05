const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const routes = require('./routes');


dotenv.config();
const port = process.env.PORT;
const projectPath = String(process.env.PROJECTPATH);


app.use(express.static(path.join(String(projectPath), './static')));

// landing route, to routes/index.js
app.use('/', routes);

app.listen(port, () => {
    console.log(`Express server listening on port: ${port}.`)
});

