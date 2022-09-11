const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const CommentsHeader = require('./layouts/Review/commentsHeader');
const ReviewsList = require('./layouts/Review/reviewsList');

const MakeParagraphs = require('./layouts/Utils/MakeParagraphs');

const SinglePost = ({ title, post, logged, id, usr, owner }) => {
  return (
    <Default title={title}>
      <Header showMe={false} logged={logged} usr={usr} />
      <main className="main">
        <h2>{post.title}</h2>
        <h3>{post.short}</h3>
        <MakeParagraphs text={post.post} />
      </main>
      <main>
        <CommentsHeader id={id} logged={logged} owner={owner} />
        <ReviewsList comments={post.reviews} logged={logged} owner={owner} />
      </main>
    </Default>
  );
};

module.exports = SinglePost;
