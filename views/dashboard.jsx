const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');

const Card = ({ cardHead, href }) => (
  <a href={href} className="field_link">
    <div className="field">
      <h3>{cardHead}</h3>
    </div>
  </a>
);

const Dashboard = () => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Default title="My dashboard">
      <Header showMe={true} logged={false} />
      <main className="main flex-container">
        <Card cardHead="Create Post" href="/createPost" />
        <Card cardHead="View Messages" href="/viewMessages" />
      </main>
    </Default>
  );
};

module.exports = Dashboard;
