const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const CommentsHeader = require('./layouts/Review/commentsHeader');
const ReviewsList = require('./layouts/Review/reviewsList');
const PostText = require('./layouts/Utils/MakeParagraphs')

const { useState } = require('react');
const MakeParagraphs = require('./layouts/Utils/MakeParagraphs');

const SinglePost = ({ title, post, logged, id }) => {
  const [show, setShow] = useState(false);
  return (
    <Default title={title}>
      <Header showMe={false} logged={logged} />
      <main className="main">
        <h2>{post.title}</h2>
        <h3>{post.short}</h3>
        <MakeParagraphs text={post.post} />
        {/* <p>{post.post}</p> */}
      </main>
      <main>
        <CommentsHeader id={id} logged={logged} />
        <ReviewsList comments={post.reviews} logged={logged} />
      </main>
    </Default>
  );
};

module.exports = SinglePost;