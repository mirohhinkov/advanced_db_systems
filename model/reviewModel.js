const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'The review cannot be empty'],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'The review must be attached to a post'],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'The review must have an author'],
  },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
  });
  this.populate({
    path: 'post',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
