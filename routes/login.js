const express = require('express');

const usersController = require('../controller/login');

const router = express();

router.post('/login', usersController.createUser);

module.exports = router;
