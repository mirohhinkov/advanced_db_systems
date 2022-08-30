const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title cannot be empty'],
  },
  short: {
    type: String,
    required: [true, 'Short description cannot be empty'],
  },
  post: {
    type: String,
    required: [true, 'Post cannot be empty'],
  },
  imgUrl: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

postSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'post',
  localField: '_id',
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
