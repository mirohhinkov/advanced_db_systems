const asyncDecorator = require('./../utils/asyncDecorator');
const User = require('./../model/userModel');
const Message = require('../model/messageModel');
const { encrypt, decrypt } = require('../utils/myCrypt');

exports.updateEmail = (req, res) => {
  res.render('updateEmail', {
    logged: req.loggedIn,
    invalid: false,
    usr: req.user,
  });
};

exports.doUpdateEmail = asyncDecorator(async (req, res, next) => {
  if (req.loggedIn) {
    const id = req.cookies.logged;
    const { password, email } = req.body;
    const user = await User.findById(id).select('+password');
    if (password.trim() === decrypt(user.password)) {
      req.user = await User.findByIdAndUpdate(id, { email });
      sendCookie(res, 'Email updated successful.');
      return res.redirect('/posts');
    } else {
      res.render('updateEmail', {
        logged: req.loggedIn,
        invalid: true,
        usr: req.user,
      });
    }
  } else {
    res.redirect('/');
  }
});

exports.updatePassword = (req, res) => {
  res.render('updatePassword', {
    logged: req.loggedIn,
    invalid: false,
    usr: req.user,
  });
};

exports.doUpdatePassword = asyncDecorator(async (req, res, next) => {
  if (req.loggedIn) {
    const id = req.cookies.logged;
    const { password, newPassword, newPasswordConf } = req.body;
    const user = await User.findById(id).select('+password');
    if (
      password.trim() === decrypt(user.password) &&
      newPassword.trim() === newPasswordConf.trim()
    ) {
      req.user = await User.findByIdAndUpdate(id, {
        password: encrypt(newPassword.trim()),
      });

      sendCookie(res, 'Password updated successful.');
      return res.redirect('/posts');
    } else {
      res.render('updatePassword', {
        logged: req.loggedIn,
        invalid: true,
        usr: req.user,
      });
    }
  } else {
    res.redirect('/');
  }
});

exports.uploadUserImage = (req, res) => {
  res.render('uploadUserImage', {
    logged: req.loggedIn,
    invalid: false,
    usr: req.user,
  });
};

exports.sendMessage = (req, res) => {
  res.render('contact', {
    logged: req.loggedIn,
    usr: req.user,
  });
};

exports.saveMessage = (req, res) => {
  const message = new Message(req.body);
  message.save();
  sendCookie(res, 'Message sent');
  res.redirect('/posts');
};

const sendCookie = (res, msg) => {
  const options = {
    expires: new Date(Date.now() + 5000),
    httpOnly: false,
    SameSite: 'none',
  };
  res.cookie('msg', msg, options);
};
