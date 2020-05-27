const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controller/user');
const loginController = require('../controller/login');

const router = express();

router.post('/api/v1/users', usersController.add);

module.exports = router;
