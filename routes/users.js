const express = require('express');

const usersController = require('../controller/person');

const router = express();

router.get('/users', usersController.getUsers);

module.exports = router;