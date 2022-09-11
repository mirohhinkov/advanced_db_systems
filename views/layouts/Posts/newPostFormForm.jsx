const React = require('react');

const NewPostFormForm = ({ id, text }) => (
  <main className="main">
    <div className="login-form">
      <form className="form" action="/createPost" method="POST">
        <div className="form__group">
          <label className="form__label" htmlFor="title">
            Post Title:
          </label>
          <input
            id="title"
            className="form__input"
            type="text"
            name="title"
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="short">
            Short Description:
          </label>
          <input
            id="short"
            className="form__input"
            type="text"
            name="short"
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="post">
            Post:
          </label>
          <textarea
            id="post"
            className="form__input"
            placeholder="type your message here"
            name="post"
            minLength="20"
            required
            rows="10"
            cols="50"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="imgUrl">
            Image URL:
          </label>
          <input
            id="imgUrl"
            className="form__input"
            type="text"
            name="imgUrl"
            required
          />
        </div>

        <div className="form__group">
          <input type="submit" className="btn btn--blue" value="Send" />
        </div>
      </form>
    </div>
  </main>
);

module.exports = NewPostFormForm;
