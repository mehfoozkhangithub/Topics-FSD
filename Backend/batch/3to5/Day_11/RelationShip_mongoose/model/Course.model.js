const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    student_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
    course: [String],
  },
  {
    versionKey: false,
  },
);

const courseModel = mongoose.model('Course', courseSchema);

module.exports = { courseModel };
