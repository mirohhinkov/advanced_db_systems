const React = require('react');

const Default = require('./layouts/default');
const Header = require('./layouts/header');
const AllPosts = require('./layouts/Posts/posts');
const Arrows = require('./layouts/Posts/Arrows');

const Posts = ({ title, posts, page, logged, usr }) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Default title={title}>
      <Header showMe={false} logged={logged} usr={usr} />
      <AllPosts posts={posts} showMe={false} />
      <Arrows page={page} />
    </Default>
  );
};

module.exports = Posts;
