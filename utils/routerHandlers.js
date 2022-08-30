const asyncDecorator = require('./asyncDecorator');
const Post = require('../model/postModel');
const User = require('../model/userModel');
const { decrypt } = require('../utils/myCrypt');

exports.latestPosts = asyncDecorator(async (req, res, next) => {
  const posts = await Post.find().sort('-createdAt').skip(0).limit(3);
  res.render('home', {
    title: 'Blog Home Page',
    logged: req.loggedIn,
    posts,
  });
});

exports.posts = asyncDecorator(async (req, res, next) => {
  const posts = await Post.find().sort('-createdAt').skip(0).limit(6);
  res.render('allposts', {
    title: 'My Posts',
    logged: req.loggedIn,
    posts,
    page: 0,
  });
});

exports.pagedPosts = asyncDecorator(async (req, res, next) => {
  let { page, direction } = req.params;
  page = +page;
  let newPage = direction === 'up' ? page + 1 : page - 1;
  if (newPage < 0) {
    newPage = 0;
  }
  if (page === '0' && direction === 'down') {
    return res.redirect('back');
  }
  let posts = await Post.find()
    .sort('-createdAt')
    .skip(newPage * 6)
    .limit(6);
  if (!posts.length) {
    newPage = 0;
    posts = await Post.find().sort('-createdAt').skip(0).limit(6);
  }
  res.render('allposts', {
    title: 'My Posts',
    logged: req.loggedIn,
    posts,
    page: newPage,
  });
});

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
    res.redirect('/posts');
  }
  res.render('login', { invalid: true });
});

exports.addCurrentUser = asyncDecorator(async (req, res, next) => {
  if (req.loggedIn) {
    const id = req.cookies.logged;
    req.user = await User.findById(id);
    console.log(req.user);
  }
  next();
});
