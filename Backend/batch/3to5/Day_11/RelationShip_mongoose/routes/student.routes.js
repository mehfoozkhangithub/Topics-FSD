const express = require('express');

const studentRoutes = express.Router();
const { studentModel } = require('../model/student.model');
const { userModel } = require('../model/user.model');
const { courseModel } = require('../model/Course.model');

// path="/student/"
//read
studentRoutes.get('/', async (req, res) => {
  const studentData = await studentModel.find().populate('user_ID');
  res.send({ msg: 'data found', data: studentData });
});

studentRoutes.get('/:id', async (req, res) => {
  const studentData = await studentModel
    .findById({ _id: req.params.id })
    .populate('user_ID')
    .populate('course_ID');

  res.send({ msg: 'data found', data: studentData });
});

// path="/student/createstudent"
//create
studentRoutes.post('/createStudent', async (req, res) => {
  console.log(`🚀 ~ req.body:`, req.body);
  if (req.body) {
    const userData = await userModel.create(req.body);
    console.log(`🚀 ~ userData:`, userData);

    const courseData = await courseModel.create({
      ...req.body,
    });
    console.log(`🚀 ~ courseData:`, courseData);
    const studentData = await studentModel.create({
      batch: req.body.batch,
      achivements: req.body.achivements,
      user_ID: userData._id,
      course_ID: courseData._id,
    });

    res.send({
      msg: 'data created',
      data: {
        userValue: userData,
        studentValue: studentData,
        courseValue: courseData,
      },
    });
  }
});

// path="/student/updatestudent"
//update
studentRoutes.get('/updatestudent', (req, res) => {});

// path="/student/deletestudent"
//delete
studentRoutes.get('/deletestudent', (req, res) => {});

module.exports = { studentRoutes };
