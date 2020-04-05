const express = require('express');
const usersRoutes = require('./routes/users');

const app = express();


app.get('/users', usersRoutes);
app.listen(8000);