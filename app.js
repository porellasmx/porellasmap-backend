const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Report = require('./models/report');
const app = express();

mongoose
  .connect(
    'mongodb+srv://<username>:<password>@porellasmap-cluster-tgcab.mongodb.net/porellasmap',
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(() => {
    console.log('Connection to DB Failed');
  });

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

//Creating a new Report
app.post('/api/reports', (req, res, next) => {
  const report = new Report({
    address: req.body.address,
    placeName: req.body.placeName,
    description: req.body.description,
    abuseType: req.body.abuseType,
    dateOfEvent: req.body.dateOfEvent,
    image: req.body.image,
    lat: req.body.lat,
    long: req.body.long
  });
  console.log(report);

  report.save();

  res.status(201).json({
    message: 'Report created successfully',
    report: report
  });
});

app.get('/api/reports', (req, res, next) => {
  res.status(200).json({
    message: 'Reports fetched successfully',
    reports: reports
  });
});

app.use((req, res, next) => {
  res.send('hello from nodejs');
});

module.exports = app;
