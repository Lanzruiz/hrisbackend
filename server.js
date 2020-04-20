const express = require('express');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/login');
const bodyParse = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 8001;


const app = express();

app.use(cors());
app.use(bodyParse.urlencoded());


app.use(usersRoutes);
app.use(authRoutes);
app.listen(PORT);