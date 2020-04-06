const express = require('express');

const usersController = require('../controller/person');
const loginController = require('../controller/login');

const router = express();



router.get('/users/list', loginController.getAuth, usersController.getUsers);
router.post('/users/create', loginController.getAuth, usersController.createUser);

module.exports = router;
