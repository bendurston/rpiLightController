const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const router = express.Router();
const path = require('path');
const projectPath = String(process.env.PROJECTPATH);

router.use(function (request, response, next){
    next()
});

router.get('/', function (request, response) {
    console.log(__dirname);
    response.sendFile(path.join(String(projectPath), './static/settings.html'));
});
 





module.exports = router;
