import React from 'react'
import Avatar from '../Avatar';
import { deleteSpamPost } from '../../redux/actions/adminAction'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const ContentList = ({content}) => {
      const { auth, socket } = useSelector((state) => state);
        const dispatch = useDispatch();

     const handleDeletePost = (post) => {
       
        dispatch(deleteSpamPost({ post, auth, socket }));
       
     };
    return (
      <div>
        {content.length > 0 ? (
          content.map((post) => (
            <div className="admin_content_display">
              <span className="spam_report">
                Reports: {post.reports.length}
              </span>

              <div className="d-flex">
                <Avatar size="big-avatar" src={post.user.avatar} />
                <div className="d-flex flex-column ms-3">
                  <span className="spam_username">{post.user.username}</span>
                  <span className="spam_email">{post.user.email}</span>
                </div>
                <span className="spam_time text-muted">
                  ~{moment(post.createdAt).fromNow()}
                </span>
              </div>
              <div
                className="ms-auto d-flex flex-column "
                style={{ cursor: "pointer" }}
                onClick={() => handleDeletePost(post)}
              >
                <span className="material-icons">delete</span>Remove
              </div>
            </div>
          ))
        ) : (
          <h1>Nothing to display</h1>
        )}
      </div>
    );
}

export default ContentList
