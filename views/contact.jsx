const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');
const ContactForm = require('./layouts/Contact/contactForm');

const AddReview = ({ logged, usr }) => {
  return (
    <Default title="Contact">
      <Header showMe={false} logged={logged} usr={usr} />
      <ContactForm usr={usr} />
    </Default>
  );
};

module.exports = AddReview;
