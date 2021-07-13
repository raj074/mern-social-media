import React from 'react'
import Avatar from '../Avatar';
import { useSelector,useDispatch } from "react-redux";
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Status = () => {
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
      <div className="status my-3 d-flex">
        <div className="outer-shadow big-avatar-cover">
          <Avatar src={auth.user.avatar} size="big-avatar" className="" />
        </div>
        <button
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
          className="btn-1 outer-shadow hover-in-shadow statusBtn flex-fill "
          style={{ marginLeft: "7px" }}
        >
          <span style={{ textShadow: "var(--outer-shadow)" }}>
            {auth.user.username}, What's on your mind?
          </span>
        </button>
      </div>
    );
}

export default Status
