const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controller/user');
//const securityController = require('../controller/security');

const router = express();

router.post('/api/v1/users', usersController.add);
router.get('/api/v1/users/profile', usersController.profile);

module.exports = router;
