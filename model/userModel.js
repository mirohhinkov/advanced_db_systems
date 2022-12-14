const mongoose = require('mongoose');
const { encrypt, decrypt } = require('../utils/myCrypt');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: [true, 'Username cannot be empty'] },
  email: {
    type: String,
    unique: true,
    required: [true, 'E-mail cannot be empty'],
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Password cannot be empty'],
  },
  photo: {
    type: String,
    default: '',
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', function (next) {
  // run this if the password is changed
  if (!this.isModified('password')) return next();
  // hash(encrypt) the password
  this.password = encrypt(this.password);
  //   delete passwordConfirm fron DB
  this.passwordConfirm = undefined; // this field will not persist in the DB
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ blocked: { $ne: true } });
  next();
});

userSchema.methods.isPasswordCorrect = function (password, userPassword) {
  return password === decrypt(userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
