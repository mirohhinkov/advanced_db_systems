const React = require('react');

const CommentsHeader = ({ id, logged }) => {
  return (
    <div className="comments">
      <div className="header_element">
        <h2>Comments:</h2>
      </div>
      <div className="header_element right">
        <a href={logged ? `/review/${id}` : '/login'}>
          <img id="pencil" src="/img/pencil.png" />
        </a>
      </div>
    </div>
  );
};

module.exports = CommentsHeader;
