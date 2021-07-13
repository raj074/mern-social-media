import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import moment from 'moment';
import { deleteAllNotifies, isReadNotify, NOTIFY_TYPES } from '../redux/actions/notifyAction';

const NotifyModal = () => {
    const { auth, notify } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleIsRead = (msg) => {
      dispatch(isReadNotify({msg, auth}));
    };

    const handleDeleteAll = () => {
      const newArr = notify.data.filter(item => item.isRead === false)
      if(newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

      if(window.confirm(`You have ${newArr.length} unread notifications.Do you want to delete all notifications?`)){
        return dispatch(deleteAllNotifies(auth.token))
      }
    };

    const handleSound = () => {
      dispatch({type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound });
    };

    return (
      <div
        className="mt-1"
        style={{
          minWidth: "280px",
          boxShadow: "5px 8px 8px var(--c2) ,-3px -3px 8px var(--c3)",
          background: "white",
          borderRadius: "10px",
          borderTopRightRadius: "0",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h3>Notifications</h3>
          {notify.sound ? (
            <i
              className="fas fa-bell text-danger"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={handleSound}
            />
          ) : (
            <i
              className="fas fa-bell-slash text-danger"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              onClick={handleSound}
            />
          )}
        </div>
        <hr className="mt-1" />
        {notify.data.length === 0 && (
          <span className="text-muted w-100 text-center">No Notifications</span>
        )}
        <div style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
          {notify.data.map((msg, index) => (
            <div className="px-2 mb-3" key={index}>
              <Link
                to={`${msg.url}`}
                style={{ textDecoration: "none" }}
                className="d-flex text-dark align-items-center"
                onClick={() => handleIsRead(msg)}
              >
                <Avatar src={msg.user.avatar} size="big-avatar" />

                <div className="flex-fill mx-1">
                  <div>
                    <strong className="mr-1">{msg.user.username}</strong>
                    <span>{msg.text}</span>
                  </div>
                  {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
                </div>
                <div style={{ width: "30px" }}>
                  {msg.image && <Avatar src={msg.image} size="medium-avatar" />}
                </div>
              </Link>
              <small className="text-muted d-flex justify-content-between px-2">
                {moment(msg.createdAt).fromNow()}
                {!msg.isRead && <i className="fas fa-circle color-c1" />}
              </small>
            </div>
          ))}
        </div>
        <hr className="my-1" />
        <div
          className="text-end my-auto me-2 color-c1"
          style={{ cursor: "pointer" }}
          onClick={handleDeleteAll}
        >
          Delete
        </div>
      </div>
    );
}

export default NotifyModal
