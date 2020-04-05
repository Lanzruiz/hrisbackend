require('dotenv').config();

const express = require('express');

const authController = require('../controller/login');


const router = express();

router.post('/login', authController.getToken);

module.exports = router;
