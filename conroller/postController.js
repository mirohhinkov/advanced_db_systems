const asyncDecorator = require('./../utils/asyncDecorator');
const Post = require('../model/postModel');

exports.latestPosts = asyncDecorator(async (req, res, next) => {
  const posts = await Post.find().sort('-createdAt').skip(0).limit(3);
  res.render('home', {
    title: 'Blog Home Page',
    logged: req.loggedIn,
    posts,
    usr: req.user,
  });
});

exports.posts = asyncDecorator(async (req, res, next) => {
  const posts = await Post.find().sort('-createdAt').skip(0).limit(6);
  res.render('allposts', {
    title: 'My Posts',
    logged: req.loggedIn,
    posts,
    page: 0,
    usr: req.user,
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
    usr: req.user,
  });
});

// exports.getPost = asyncDecorator(async (req, res) => {
//   console.log('in get post');
//   const { id } = req.params;
//   const post = await Post.findOneById(id).populate({
//     path: 'review',
//     fields: 'review user',
//   });
//   res.status(200).json({
//     post,
//   });
// });

exports.singlePost = asyncDecorator(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate({
    path: 'reviews',
  });
  req.loggedIn = req.loggedIn ? req.user._id : req.loggedIn;
  res.render('singlePost', {
    title: post.title,
    logged: req.loggedIn,
    post,
    id,
    usr: req.user,
  });
});
