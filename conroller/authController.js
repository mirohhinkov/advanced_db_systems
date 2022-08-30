const asyncDecorator = require('./../utils/asyncDecorator');
const User = require('../model/userModel');
const { decrypt } = require('../utils/myCrypt');

exports.userLogin = (req, res) => {
  if (req.loggedIn) {
    res.clearCookie('logged');
    res.redirect('/');
  }
  res.render('login', { logged: req.loggedIn, invalid: false });
};

exports.userLoging = asyncDecorator(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (password === decrypt(user.password)) {
    const options = {
      expires: new Date(
        Date.now() + (+process.env.COOKIE_EXPIRES_IN || 1) * 24 * 60 * 60 * 1000 // 1 day by default
      ),
      httpOnly: false,
    };
    res.cookie('logged', user._id, options);
    res.redirect('back');
  }
  res.render('login', { invalid: true });
});
