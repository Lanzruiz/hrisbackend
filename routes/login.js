require('dotenv').config();
const express = require('express');

const authController = require('../controller/login');


const router = express();

//router.post('/login', authController.getToken);

router.post('/login', ()=>{
    res.send(200).json({sessionToken: 'lsfjlskfjalsaekjdakjsdsjfasds'});
});

module.exports = router;
