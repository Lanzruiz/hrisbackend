const express = require('express');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/login');
const bodyParser = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 8000;


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(usersRoutes);
app.use(authRoutes);
app.listen(PORT);