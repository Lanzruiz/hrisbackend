const express = require('express');
const usersRoutes = require('./routes/users');

const app = express();


app.use(usersRoutes);
app.listen(8000);