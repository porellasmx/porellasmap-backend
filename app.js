const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

//Middleware
app.use('/api/reports', (req, res, next) => {
  res.status(200).json({
    message: 'Reports fetched successfully',
    reports: reports
  });
});

app.use((req, res, next) => {
  res.send('hello from nodejs');
});

module.exports = app;
