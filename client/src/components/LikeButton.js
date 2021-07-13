import React from 'react'
import { useSelector } from "react-redux";

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
    const { theme } = useSelector(state => state);
  return (
    <div>
      {isLike ? (
        <i
          className="fas fa-thumbs-up text-info"
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          onClick={handleUnLike}
        />
      ) : (
        <i className="far fa-thumbs-up" onClick={handleLike} />
      )}
    </div>
  );
};

export default LikeButton
