const path = require('path');

const express = require('express');

const router = express.Router();

router.all('*', (request, response) => {
  response.sendFile('index.html', {
    'root': path.join(__dirname, './../public')
  });
});

module.exports = router;