const React = require('react');

const UpdateEmailForm = () => (
  <main className="main">
    <div className="login-form">
      {invalid && <h2 className="red">Invalid Password</h2>}
      <form
        className="form"
        action="/uploadUserImage"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="form__group">
          <label className="form__label" htmlFor="photo">
            Upload new user image
          </label>
          <input
            className="form__upload"
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
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
