const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const LoginForm = require('./layouts/Login/loginForm');

const Login = ({ invalid, logged, usr }) => (
  <Default title="User login">
    <Header showMe={false} logged={logged} usr={usr} />
    <LoginForm invalid={invalid} />
  </Default>
);

module.exports = Login;
