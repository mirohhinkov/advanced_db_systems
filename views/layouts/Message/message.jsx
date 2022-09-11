const React = require('react');
const MakeParagraphs = require('../Utils/MakeParagraphs');

const Message = ({ message }) => {
  return (
    <>
      <div className="comments">
        <div className="header_element">
          <h3>
            {message.name}, e-mail: {message.email}
          </h3>
          <span>
            created at: {message.createdAt.toLocaleDateString('en-US')}
          </span>
        </div>
        <div className="header_element right">
          <a href={`/deleteMessage/${message._id}`}>
            <img className="small_icon" src="/img/bin.png" />
          </a>
        </div>
      </div>

      <MakeParagraphs text={message.body} />
    </>
  );
};

module.exports = Message;
