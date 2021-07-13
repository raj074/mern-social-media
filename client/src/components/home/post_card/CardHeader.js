import React from "react";
import Avatar from "../../Avatar";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { BASE_URL } from '../../../utils/config'

import { GLOBALTYPES } from "../../../redux/actions/globalTypes";
import { deletePost, reportPost } from "../../../redux/actions/postAction";

const CardHeader = ({ post }) => {
  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditPost = () => {
    dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } });
  };

  const handleDeletePost = () => {
    if(window.confirm("Are you sure?")){
      dispatch(deletePost({ post, auth, socket }));
      return history.push("/");
    }
    
  };


  const handleReportPost = () => {
    dispatch(reportPost({post, auth}));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
  };

  return (
    <div className="card_header">
      <div className="d-flex">
        <div className="outer-shadow big-avatar-cover me-2">
          <Avatar src={post.user.avatar} size="big-avatar" />
        </div>
        <div className="card_name">
          <h6 className="m-0">
            <Link className="text-dark" to={`/profile/${post.user._id}`}>
              {post.user.username}
            </Link>
          </h6>
          <small className="text-muted">
            {moment(post.createdAt).fromNow()}
          </small>
        </div>
      </div>

      <div className="nav-item dropdown">
        <span
          className="material-icons"
          id="moreLink"
          data-bs-toggle="dropdown"
        >
          more_horiz
        </span>

        <div className="dropdown-menu">
          {auth.user._id === post.user._id && (
            <>
              <div className="dropdown-item" onClick={handleEditPost}>
                <span className="material-icons text-info"> create</span>Edit
                Post
              </div>
              <div className="dropdown-item" onClick={handleDeletePost}>
                <span className="material-icons text-red"> delete</span>Delete
                Post
              </div>
            </>
          )}

          <div className="dropdown-item" onClick={handleCopyLink}>
            <span className="material-icons text-primary">content_copy</span>
            Copy Link
          </div>
          <div className="dropdown-item" onClick={handleReportPost}>
            <span className="material-icons text-yellow">report_problem</span>
            Report this post
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
