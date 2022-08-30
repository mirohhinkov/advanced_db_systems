const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const AllPosts = require('./layouts/Posts/posts.jsx');
// const Footer = require('./layouts/footer.jsx');

const Home = ({ title, posts, logged }) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Default title={title}>
      <Header showMe={true} logged={logged} />
      <AllPosts posts={posts} />
    </Default>
  );
};

module.exports = Home;
