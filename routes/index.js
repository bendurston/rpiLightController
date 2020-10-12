const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, './static/index.html'));
    });
    return router;

};