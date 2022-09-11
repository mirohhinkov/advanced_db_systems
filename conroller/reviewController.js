const asyncDecorator = require('./../utils/asyncDecorator');
const Review = require('./../model/reviewModel');

exports.addReview = asyncDecorator(async (req, res, next) => {
  const review = new Review({
    user: req.user._id,
    post: req.params.id,
    review: req.body.review,
  });
  review.save();
  res.redirect(`/posts/${req.params.id}`);
});

exports.addReviewForm = (req, res) => {
  res.render('addReview', {
    id: req.params.id,
    logged: req.loggedIn,
    text: '',
    usr: req.user,
  });
};

exports.editForm = asyncDecorator(async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  res.render('addReview', {
    id,
    logged: req.loggedIn,
    text: review.review,
    usr: req.user,
  });
});

exports.editReview = asyncDecorator(async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(id, {
    review: req.body.review,
  });
  res.redirect(`/posts/${review.post._id}`);
});

exports.delete = asyncDecorator(async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findByIdAndDelete(id);
  res.redirect(`/posts/${review.post._id}`);
});
