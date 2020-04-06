require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const authController = require('../controller/login');


const router = express();

//router.post('/login', authController.getToken);

router.post('/login', (req, res)=>{
    //res.status(200).json({sessionToken: 'lsfjlskfjalsaekjdakjsdsjfasds'});
    const user = {
        user: req.body.username
    }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken});
});

module.exports = router;
