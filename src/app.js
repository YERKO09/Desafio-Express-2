const express = require('express');
const routes = require('./routes/index');
const app = express();

//MIDDLEWARE
app.use(express.json());

//routes
app.use('/api', routes);

module.exports = app;