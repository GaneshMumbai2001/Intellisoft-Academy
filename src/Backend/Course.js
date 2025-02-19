const mongoose = require('mongoose');

const courseCartSchema = new mongoose.Schema({
  username: { type: String, required: true },
  courseName: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true } // Changed from String to ObjectId
});

const CourseCart = mongoose.model('CourseCart', courseCartSchema);

module.exports = CourseCart;
