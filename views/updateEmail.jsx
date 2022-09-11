const React = require('react');
const Default = require('./layouts/default');
const Header = require('./layouts/header');
const UpdateEmailForm = require('./layouts/user/updateEmailForm');

const UpdateEmail = ({ invalid, logged, usr }) => (
  <Default title="Change email">
    <Header showMe={false} logged={logged} usr={usr} />
    <UpdateEmailForm invalid={invalid} />
  </Default>
);

module.exports = UpdateEmail;
