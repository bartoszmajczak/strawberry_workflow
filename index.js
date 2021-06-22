const express = require('express');

const api = require('./routes/api.js');
const page = require('./routes/page.js');

const application = new express;

application.use(
  express.static(__dirname + '/public')
);

application
  .use('/api', api)
  .use('/', page);

application.listen(process.env.EXPRESS_PORT);