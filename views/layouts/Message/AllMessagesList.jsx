const React = require('react');
const MessageSmallComponent = require('./message');

const MessagesList = require('../../Lists/ComponentsList');

const AllMessagesList = ({ messages, showMe }) => {
  if (typeof showMe === 'undefined') {
    showMe = true;
  }
  return (
    <section id="latest-posts">
      {showMe && <h2>My latest posts</h2>}
      <ul>
        <MessagesList
          items={messages}
          resourceName="message"
          itemComponent={MessageSmallComponent}
        />
      </ul>
    </section>
  );
};

module.exports = AllMessagesList;
