const React = require('react');
const MakeParagraphs = require('./../Utils/MakeParagraphs');

const Comment = ({ comment, logged }) => {
  return (
    <>
      <div className="comments">
        <h3 className="header_element">by: {comment.user.userName}</h3>
        <div className="header_element right">
          <a href={`/editReview/${comment._id}`}>
            {logged && comment.user._id.equals(logged) && (
              <img className="small_icon" src="/img/pencil.png" />
            )}
          </a>
          &nbsp;
          <a href={`/deleteReview/${comment._id}`}>
            {logged && comment.user._id.equals(logged) && (
              <img className="small_icon" src="/img/bin.png" />
            )}
          </a>
        </div>
      </div>
      <MakeParagraphs text={comment.review} />
    </>
  );
};

module.exports = Comment;
