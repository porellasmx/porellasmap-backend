const express = require('express');

const app = express();

//Middleware
app.use((req, res, next) => {
  console.log('my first middleware');
  next();
});

app.use((req, res, next) => {
  res.send('hello from nodejs');
});

module.exports = app;
