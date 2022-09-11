const React = require('react');
const MakeParagraphs = require('./../Utils/MakeParagraphs');

const Comment = ({ comment, logged, owner }) => {
  return (
    <>
      <div className="comments">
        <div className="header_element">
          <h3>
            {comment.user.photo && (
              <>
                <img
                  className="large_icon"
                  src={comment.user.photo}
                  alt={`${comment.user.userName} photo`}
                />

                <span>&nbsp; &nbsp;</span>
              </>
            )}
            {comment.user.userName}
          </h3>
          <p>created at: {comment.createdAt.toLocaleDateString('en-US')}</p>
        </div>
        <div className="header_element right">
          <a href={`/editReview/${comment._id}`}>
            {logged && comment.user._id.equals(logged) && (
              <img className="small_icon" src="/img/pencil.png" />
            )}
          </a>
          &nbsp;
          <a href={`/deleteReview/${comment._id}`}>
            {(logged || owner) &&
              (comment.user._id.equals(logged) || owner) && (
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
