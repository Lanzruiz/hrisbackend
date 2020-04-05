require('dotenv').config();

const express = require('express');

const authController = require('../controller/login');


const router = express();

router.post('/login', authController.getAuth);

module.exports = router;
