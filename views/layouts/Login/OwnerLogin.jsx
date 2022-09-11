/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

const LoginForm = () => (
  <main className="main">
    <div className="login-form">
      <form className="form" action="/owner" method="POST">
        <div className="form__group.ma-bt-md">
          <label className="form__label" htmlFor="password">
            Owner Password
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
        <div className="form__group">
          <input type="submit" className="btn btn--blue" value="Login" />
        </div>
      </form>
    </div>
  </main>
);

module.exports = LoginForm;
