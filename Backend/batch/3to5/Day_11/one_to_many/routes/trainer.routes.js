const express = require('express');

const trainerRoutes = express.Router();
const { trainerModel } = require('../model/trainer.model');

// path="/trainer/"
//read
trainerRoutes.get('/', async (req, res) => {
  const trainerData = await trainerModel.find();
  res.send({ msg: 'data found', data: trainerData });
});

// path="/trainer/createtrainer"
//create
trainerRoutes.post('/createTrainer', async (req, res) => {
  if (req.body) {
    const trainerData = await trainerModel.create(req.body);
    res.send({ msg: 'data created', data: trainerData });
  }
});

// path="/trainer/updatetrainer"
//update
trainerRoutes.get('/updatetrainer', (req, res) => {});

// path="/trainer/deletetrainer"
//delete
trainerRoutes.get('/deletetrainer', (req, res) => {});

module.exports = { trainerRoutes };
