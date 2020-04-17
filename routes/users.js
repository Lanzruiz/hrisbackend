const express = require('express');

const usersController = require('../controller/person');
const loginController = require('../controller/login');

const router = express();

router.post('/users/create', loginController.getAuth, usersController.create);

module.exports = router;
