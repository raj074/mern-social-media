import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";

const Followers = ({ users, setShowFollowers }) => {
  const { auth } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_box">
        <h5 className="text-center follow_box-heading">Followers</h5>
        <hr />
        {users.map((user) => (
          <UserCard
            key={user._id}
            setShowFollowers={setShowFollowers}
            user={user}
          >
            {auth.user._id !== user._id && <FollowBtn user={user} />}
          </UserCard>
        ))}

        <div className="close" onClick={() => setShowFollowers(false)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Followers;
