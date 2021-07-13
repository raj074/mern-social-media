import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../../components/profile/Info';
import Posts from '../../components/profile/Posts';
import { useSelector, useDispatch } from "react-redux";
import LoadIcon  from "../../images/loading.gif";
import { getProfileUsers } from "../../redux/actions/profileAction";
import Saved from '../../components/profile/Saved';

const Profile = () => {
  const { profile, auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if(profile.ids.every(item => item !== id )){
      dispatch(getProfileUsers({ id, auth }));

    }
  }, [id, auth, dispatch, profile.ids]);

    return (
      <div className="profile">
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

        {auth.user._id === id && (
          <div className="profile_tab">
            <button
              className={saveTab ? "" : "active"}
              onClick={() => setSaveTab(false)}
            >
              posts
            </button>
            <button
              className={saveTab ? "active" : ""}
              onClick={() => setSaveTab(true)}
            >
              saved
            </button>
          </div>
        )}

        {profile.loading ? (
          <img className="d-block mx-auto my-4" src={LoadIcon} alt="Loading" />
        ) : (
          <>
            {
              saveTab
              ? <Saved auth={auth} dispatch={dispatch}  />
              : <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
            }
          </>
        )}
      </div>
    );
}

export default Profile;
