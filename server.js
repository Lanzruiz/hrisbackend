const express = require('express');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/login');
const bodyParse = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 8001;


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://hriscloud.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });
  
app.use(bodyParse.urlencoded());


app.use(usersRoutes);
app.use(authRoutes);
app.listen(PORT);