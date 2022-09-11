const asyncDecorator = require('./../utils/asyncDecorator');
const User = require('./../model/userModel');
const { encrypt, decrypt } = require('../utils/myCrypt');
const { signedCookie } = require('cookie-parser');

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
      const options = {
        expires: new Date(Date.now() + 5000),
        httpOnly: false,
        SameSite: 'none',
      };
      res.cookie('msg', 'Email updated successful.', options);
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

      signedCookie('Password updated successful.');
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

const signedCookie = (msg) => {
  const options = {
    expires: new Date(Date.now() + 5000),
    httpOnly: false,
    SameSite: 'none',
  };
  res.cookie('msg', msg, options);
};
