const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    student_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    ID_Card: new mongoose.Types.ObjectId(),
    unique: true,
  },
  {
    versionKey: false,
  },
);

const courseModel = mongoose.model('ID_Card', courseSchema);

module.exports = { courseModel };
