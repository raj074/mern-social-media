import React, { useState, useEffect} from 'react';
import Avatar from '../Avatar';
import EditProfile from './EditProfile';
import FollowBtn from '../FollowBtn';
import Following from './Following';
import Followers from './Followers';
import ChangePassword from './ChangePassword';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const Info = ({id, auth, profile, dispatch}) => {
    const [userData, setUserData] = useState([]);
    const [onEdit, setOnEdit] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    useEffect(() => {
      if (id === auth.user._id) {
          setUserData([auth.user]);
      }else{
        const newData = profile.users.filter(user => user._id === id);
        setUserData(newData);
      }
    }, [id, auth, dispatch, profile.users]);

    useEffect(() => {
      if (showFollowers || showFollowing || onEdit) {
        dispatch({ type: GLOBALTYPES.MODAL, payload: true });
      } else {
        dispatch({ type: GLOBALTYPES.MODAL, payload: false });
      }
    }, [showFollowers, showFollowing, onEdit, dispatch]);

    return (
      <div className="info">
        {userData.map((user) => (
          <div key={user._id} className="info_container">
            <div
              className="outer-shadow d-flex justify-content-center align-items-center"
              style={{ borderRadius: "50%", height: "170px", width: "170px" }}
            >
              <Avatar src={user.avatar} size="supper-avatar" />
            </div>

            <div className="info_content">
              <div className="info_content_title">
                <h2>{user.username}</h2>
                {user._id === auth.user._id ? (
                  <button
                    className="btn-1 outer-shadow hover-in-shadow"
                    onClick={() => setOnEdit(true)}
                  >
                    Edit Profile
                  </button>
                ) : (
                  <FollowBtn user={user} />
                )}
                {user._id === auth.user._id ? (
                  <button
                    className="btn-1 outer-shadow hover-in-shadow"
                    onClick={() => setChangePassword(true)}
                  >
                    change password
                  </button>
                ) : (
                  <FollowBtn user={user} />
                )}
              </div>

              <div className="follow_btn">
                <span className="mr-4" onClick={() => setShowFollowers(true)}>
                  {user.followers.length} Followers
                </span>
                <span className="ml-4" onClick={() => setShowFollowing(true)}>
                  {user.following.length} Following
                </span>
              </div>

              <h6>
                {user.fullname}{" "}
                <span className="color-violet">{user.mobile}</span>
              </h6>
              <p className="m-0">{user.address}</p>
              <h6>{user.email}</h6>
              <a
                style={{ textDecoration: "none" }}
                href={user.website}
                target="_blank"
                rel="noreferrer"
              >
                {user.website}
              </a>
              <p>{user.story}</p>
            </div>

            {onEdit && <EditProfile setOnEdit={setOnEdit} />}
            {changePassword && <ChangePassword setChangePassword={setChangePassword} />}

            {showFollowers && (
              <Followers
                users={user.followers}
                setShowFollowers={setShowFollowers}
              />
            )}
            {showFollowing && (
              <Following
                users={user.following}
                setShowFollowing={setShowFollowing}
              />
            )}
          </div>
        ))}
      </div>
    );
}

export default Info
