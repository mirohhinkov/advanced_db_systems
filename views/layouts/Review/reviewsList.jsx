const React = require('react');

const Review = require('./review');

const ReviewsList = ({ comments, logged, owner }) =>
  comments.map((comment) => (
    <Review comment={comment} logged={logged} owner={owner} />
  ));

module.exports = ReviewsList;
