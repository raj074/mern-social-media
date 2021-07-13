import React from 'react';
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const UserCard = ({
  children,
  user,
  border,
  handleClose,
  setShowFollowers,
  setShowFollowing,
  msg
}) => {

  // const { theme } = useSelector(state => state);

  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };
  return (
    <div
      className={`d-flex justify-content-between p-2 w-100 align-items-center ${border}`}
    >
      <div>
        <Link
          to={`/profile/${user._id}`}
          onClick={handleCloseAll}
          className="d-flex align-items-center"
          style={{ textDecoration: "none" }}
        >
          <div className="outer-shadow big-avatar-cover ">
            <Avatar src={user.avatar} size="big-avatar" />
          </div>
          <div className="ms-2" style={{ transform: "translateY(-2px)" }}>
            <span className="d-block color-c2">{user.username}</span>

            <small className="d-flex text-muted" style={{ flexWrap: "wrap" }}>
              {msg ? (
                <>
                  <div>{user.text}</div>
                  {user.media.length > 0 && <div>{user.media.length} <i className="fas fa-image" /></div>}
                </>
              ) : (
                user.fullname
              )}
            </small>
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default UserCard
