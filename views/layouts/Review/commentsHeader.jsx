const React = require('react');

const CommentsHeader = ({ id, logged, owner }) => {
  return (
    <div className="comments">
      <div className="header_element">
        <h2>Comments:</h2>
      </div>
      <div className="header_element right">
        <a href={logged ? `/review/${id}` : '/login'}>
          {logged && <img className="large_icon" src="/img/pencil.png" />}
        </a>
      </div>
    </div>
  );
};

module.exports = CommentsHeader;
