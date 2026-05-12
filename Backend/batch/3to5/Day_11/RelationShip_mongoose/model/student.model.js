const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    user_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    trainer_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer',
    },
    course: {
      type: [String],
      ref: 'Course',
    },
    batch: String,
    achivements: [String],
  },
  {
    versionKey: false,
  },
);

const studentModel = mongoose.model('Student', studentSchema);

module.exports = { studentModel };
