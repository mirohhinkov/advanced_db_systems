const React = require('react');

const Review = require('./review');

const ReviewsList = ({ comments, logged }) =>
  comments.map((comment) => <Review comment={comment} logged={logged} />);

module.exports = ReviewsList;
