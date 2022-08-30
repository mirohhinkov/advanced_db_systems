const React = require('react');

const Default = require('./layouts/default');
const Header = require('./layouts/header');
const AllPosts = require('./layouts/Posts/posts');
const Arrows = require('./layouts/Posts/Arrows');

const Home = ({ title, posts, page, logged }) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Default title={title}>
      <Header showMe={false} logged={logged} />
      <AllPosts posts={posts} showMe={false} />
      <Arrows page={page} />
    </Default>
  );
};

module.exports = Home;
