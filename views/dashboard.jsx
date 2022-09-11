const React = require('react');
const Default = require('./layouts/default.jsx');
const Header = require('./layouts/header.jsx');

const Dashboard = ({ title, posts, logged }) => {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Default title={title}>
      <Header
        showMe={true}
        logged={logged}
        usr={{ userName: 'Me', photo: '' }}
      />
      <p>Owner Dashboard</p>
    </Default>
  );
};

module.exports = Dashboard;
