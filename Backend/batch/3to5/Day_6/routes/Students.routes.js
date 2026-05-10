const express = require('express');

const studentRoutes = express.Router();

studentRoutes.get('/', (req, res) => {
  res.send('students home page');
});

studentRoutes.get('/all_student', (req, res) => {
  let weather = {
    bengaluru: 'summer',
    uae: 'summer',
    usa: 'spring',
  };
  let city = req.query.city;

  res.send(`city ${city} weather ${weather[city]}`);
});

studentRoutes.get('/only_boy/:id', (req, res) => {
  res.send(`student roll no: ${req.params.id}`);
});

module.exports = { studentRoutes };
