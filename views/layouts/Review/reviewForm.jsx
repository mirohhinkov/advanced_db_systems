const React = require('react');

const ReviewForm = ({ id, text }) => (
  <main className="main">
    <div className="login-form">
      <form
        className="form"
        action={text ? `/editReview/${id}` : `/review/${id}`}
        method="POST"
      >
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            {text ? 'Edit your comment' : 'Write here your comment'}
          </label>
          <textarea
            id="review"
            className="form__input"
            placeholder="type your review here"
            defaultValue={text}
            name="review"
            minLength="20"
            required
            rows="10"
            cols="50"
          />
        </div>

        <div className="form__group">
          <input type="submit" className="btn btn--blue" value="Send" />
        </div>
      </form>
    </div>
  </main>
);

module.exports = ReviewForm;
