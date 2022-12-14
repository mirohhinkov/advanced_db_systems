/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

const LoginForm = ({ invalid }) => (
  <main className="main">
    <div className="login-form">
      {invalid && <h2 className="red">Invalid Login</h2>}
      <form className="form" action="/login" method="POST">
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            placeholder="you@example.com"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="form__group.ma-bt-md">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            minLength="5"
          />
        </div>
        <p>To register an account please send a message via contact form.</p>
        <div className="form__group">
          <input type="submit" className="btn btn--blue" value="Login" />
        </div>
      </form>
    </div>
  </main>
);

module.exports = LoginForm;
