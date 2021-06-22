const express = require('express');

const { getUsersId } = require('./../application/controllers/users.js');

const router = express.Router();

router
  .route('/users/:id')
    .get(getUsersId)

module.exports = router;