const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const ReviewForm = require('./layouts/Review/reviewForm');

const AddReview = ({ id, logged, text, usr }) => {
  console.log(text);
  return (
    <Default title="Posts">
      <Header showMe={false} logged={logged} usr={usr} />
      <ReviewForm id={id} text={text} />
    </Default>
  );
};

module.exports = AddReview;
