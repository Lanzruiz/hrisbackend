const express = require('express');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/login');
const bodyParse = require('body-parser');


const app = express();

app.use(bodyParse.urlencoded());


app.use(usersRoutes);
app.use(authRoutes);
app.listen(8000);