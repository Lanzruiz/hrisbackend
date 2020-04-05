const express = require('express');

const usersController = require('../controller/person');

const router = express();



router.get('/users/list', usersController.getUsers);
router.post('/users/create', usersController.createUser);

module.exports = router;