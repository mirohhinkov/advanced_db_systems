const React = require('react');

const UpdateEmailForm = ({ invalid }) => (
  <main className="main">
    <div className="login-form">
      {invalid && <h2 className="red">Invalid Password</h2>}
      <form className="form" action="/updateEmail" method="POST">
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            New Email address
          </label>
          <input
            id="email"
            className="form__input"
            placeholder="you@example.com"
            type="email"
            name="email"
            defaultValue=""
            required
          />
        </div>
        <div className="form__group.ma-bt-md">
          <label className="form__label" htmlFor="password">
            Current Password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            minLength="5"
            defaultValue=""
          />
        </div>
        <div className="form__group">
          <input type="submit" className="btn btn--blue" value="Change" />
        </div>
      </form>
    </div>
  </main>
);

module.exports = UpdateEmailForm;
