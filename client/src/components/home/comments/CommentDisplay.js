import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'

const CommentDisplay = ({ comment, post, replyCm }) => {
  const [showRep, setShowRep] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    setShowRep(replyCm.slice(replyCm.length - next));
  }, [replyCm, next]);

  return (
    <div className="comment_display">
      <CommentCard post={post} comment={comment} commentId={comment._id}>
        <div className="ps-4">
          {showRep.map(
            (item, index) =>
              item.reply && (
                <CommentCard
                  comment={item}
                  key={index}
                  post={post}
                  commentId={comment._id}
                />
              )
          )}

          {replyCm.length - next > 0 ? (
            <div
              onClick={() => setNext(next + 10)}
              style={{ cursor: "pointer", color: "crimson" }}
            >
              Load more...
            </div>
          ) : (
            replyCm.length > 1 && (
              <div
                onClick={() => setNext(1)}
                style={{ cursor: "pointer", color: "crimson" }}
              >
                Hide...
              </div>
            )
          )}
        </div>
      </CommentCard>
    </div>
  );
};

export default CommentDisplay
