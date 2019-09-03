const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Report = require('./models/report');
const app = express();

//DB Connection
getConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://porellas-generic:Policia92@porellasmap-cluster-tgcab.mongodb.net/porellasmap',
      { useCreateIndex: true, useNewUrlParser: true }
    );
    console.log('Connection to DB Successful');
  } catch (err) {
    console.log('Connection to DB Failed');
  }
};

getConnection();

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

//CRUD

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

  report
    .save()
    .then(createdReport => {
      res.status(201).json({
        message: 'Report added successfully',
        post: {
          ...createdReport._doc,
          id: createdReport._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Creating report failed!'
      });
    });
});

//Getting all reports
app.get('/api/reports', (req, res, next) => {
  Report.find()
    .then(docs => {
      res.status(200).json({
        message: 'Reports fetched successfully',
        reports: docs
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching post failed!'
      });
    });
});

//Deleting report by Id
app.delete('/api/reports/:id', (req, res, next) => {
  Report.deleteOne({ _id: req.params.id })
    .then(report => {
      if (report.n > 0) {
        res.status(200).json({ message: 'Deletion successful!' });
      } else {
        res.status(401).json({ message: 'Not authorized!' });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching post failed!'
      });
    });
});

module.exports = app;
