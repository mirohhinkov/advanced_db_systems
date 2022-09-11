const React = require('react');

const UpdatePasswordForm = ({ invalid }) => (
  <main className="main">
    <div className="login-form">
      {invalid && <h2 className="red">Passwords does not match</h2>}
      <form className="form" action="/updatePassword" method="POST">
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
        <div className="form__group.ma-bt-md">
          <label className="form__label" htmlFor="newPassword">
            New Password
          </label>
          <input
            id="newPassword"
            className="form__input"
            type="password"
            name="newPassword"
            placeholder="••••••••"
            required
            minLength="5"
            defaultValue=""
          />
        </div>
        <div className="form__group.ma-bt-md">
          <label className="form__label" htmlFor="newPasswordConf">
            Confirm New Password
          </label>
          <input
            id="newPasswordConf"
            className="form__input"
            type="password"
            name="newPasswordConf"
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

module.exports = UpdatePasswordForm;
