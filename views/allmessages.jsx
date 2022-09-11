const React = require('react');

const Default = require('./layouts/default');
const Header = require('./layouts/header');
const AllMessages = require('./layouts/Message/AllMessagesList');

const Messages = ({ messages }) => {
  return (
    <Default title="Messages - Dashboard">
      <Header showMe={false} logged={false} usr={{}} />
      <AllMessages messages={messages} showMe={false} />
    </Default>
  );
};

module.exports = Messages;
