require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const authController = require('../controller/login');


const router = express();

//router.post('/login', authController.getToken);

router.post('/login', authController.getToken);

module.exports = router;
