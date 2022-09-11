const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The message must have sender'],
  },

  email: {
    type: String,
    required: [true, 'The message must have email to connect with you'],
  },

  subject: {
    type: String,
    required: [true, 'The message must have subject'],
  },

  body: {
    type: String,
    required: [true, 'There must be a message'],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
