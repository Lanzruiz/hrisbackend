require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const authController = require('../controller/security');


const router = express();

//router.post('/login', authController.getToken);

router.post('/api/v1/login', authController.getToken);

module.exports = router;
