const React = require('react');
const Default = require('./layouts/default');
const Header = require('./layouts/header');
const UploadUserImageForm = require('./layouts/user/uploadUserImageForm');

const UploadUserImage = ({ logged, usr }) => (
  <Default title="Upload image">
    <Header showMe={false} logged={logged} usr={usr} />
    <UploadUserImageForm />
  </Default>
);

module.exports = UploadUserImage;
