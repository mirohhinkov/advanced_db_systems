const React = require('react');

const ContactForm = ({ usr }) => (
  <main className="main">
    <div className="login-form">
      <form className="form" action="/contact" method="POST">
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            name="name"
            defaultValue={usr && usr.userName}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Your Email address
          </label>
          <input
            id="email"
            className="form__input"
            placeholder="you@example.com"
            type="email"
            name="email"
            defaultValue={usr && usr.email}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            className="form__input"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="body">
            Your Message
          </label>
          <textarea
            id="body"
            className="form__input"
            placeholder="type your message here"
            name="body"
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

module.exports = ContactForm;
