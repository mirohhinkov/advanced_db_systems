const asyncDecorator = require('./../utils/asyncDecorator');
const User = require('../model/userModel');
const { decrypt } = require('../utils/myCrypt');

exports.userLogin = (req, res) => {
  res.clearCookie('owner');
  if (req.loggedIn) {
    res.clearCookie('logged');
    return res.redirect('/');
  }
  res.render('login', { logged: req.loggedIn, invalid: false });
};

exports.userLoging = asyncDecorator(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (user && password === decrypt(user.password)) {
    const options = {
      expires: new Date(
        Date.now() + (+process.env.COOKIE_EXPIRES_IN || 1) * 24 * 60 * 60 * 1000 // 1 day by default
      ),
      httpOnly: false,
    };
    res.cookie('logged', user._id, options);
    return res.redirect('/posts');
  }
  res.render('login', { invalid: true });
});

exports.ownerLogin = (req, res) => {
  res.clearCookie('logged');
  if (password === process.env.PASSWORD) {
    res.cookie('owner', 'logged');
    return res.redirect('/dashboard');
  } else {
    res.redirect('/');
  }
};

exports.isOwnerLogged = (req, res, next) => {
  if (req.ownerLogged) {
    return next();
  } else {
    res.redirect('/');
  }
};

exports.isLogged = (req, res, next) => {
  if (req.loggedIn || req.ownerLogged) return next();
  res.redirect('/');
};

exports.addCurrentUser = asyncDecorator(async (req, res, next) => {
  if (req.loggedIn) {
    const id = req.cookies.logged;
    req.user = await User.findById(id);
  }
  next();
});
