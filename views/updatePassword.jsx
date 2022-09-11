const React = require('react');
const Default = require('./layouts/default');
const Header = require('./layouts/header');
const UpdatePasswordForm = require('./layouts/user/updatePasswordForm');

const UpdatePassword = ({ invalid, logged, usr }) => (
  <Default title="Change password">
    <Header showMe={false} logged={logged} usr={usr} />
    <UpdatePasswordForm invalid={invalid} />
  </Default>
);

module.exports = UpdatePassword;
