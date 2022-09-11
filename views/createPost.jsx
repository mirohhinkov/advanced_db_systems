const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const NewPostForm = require('./layouts/Posts/newPostFormForm');

const CreatePost = ({ logged, usr }) => {
  return (
    <Default title="Contact">
      <Header showMe={false} logged={logged} usr={usr} />
      <NewPostForm />
    </Default>
  );
};

module.exports = CreatePost;
