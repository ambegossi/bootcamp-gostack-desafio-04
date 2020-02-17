import React from 'react';

function Comments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="commentWrapper">
          <img
            src={comment.author.avatar}
            alt="Avatar"
            className="comment-avatar"
          />
          <div className="comment-box">
            <p className="comment-content">
              <b>{comment.author.name}</b> {comment.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comments;
