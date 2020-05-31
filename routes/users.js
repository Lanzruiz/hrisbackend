const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controller/user');
//const securityController = require('../controller/security');

const router = express();

router.post('/api/v1/users', usersController.add);

module.exports = router;
