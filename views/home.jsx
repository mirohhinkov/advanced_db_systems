const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const AllPosts = require('./layouts/Posts/posts.jsx');

const Home = ({ title, posts, logged, usr }) => {
  return (
    <Default title={title}>
      <Header showMe={true} logged={logged} usr={usr} />
      <AllPosts posts={posts} />
    </Default>
  );
};

module.exports = Home;
