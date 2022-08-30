const React = require('react');

const Comment = ({ comment, logged }) => {
  return (
    <>
      <div className="comments">
        <h3 className="header_element">by: {comment.user.userName}</h3>
        <div className="header_element right">
          <a href={`/editReview/${comment._id}`}>
            {logged && comment.user._id.equals(logged) && (
              <img id="pencil_small" src="/img/pencil.png" />
            )}
          </a>
        </div>
      </div>
      <p>{comment.review}</p>
    </>
  );
};

module.exports = Comment;
