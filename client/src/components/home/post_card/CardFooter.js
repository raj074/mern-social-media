import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import LikeButton from '../../LikeButton';
import { useSelector, useDispatch } from "react-redux";
import { likePost, savePost, unLikePost, unSavePost } from "../../../redux/actions/postAction";
import ShareModal from '../../ShareModal';
// import { BASE_URL } from '../../../utils/config';


const CardFooter = ({post}) => {
  const [isLike, setIsLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loadLike, setLoadLike] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const dispatch = useDispatch();
  const { auth, theme, socket } = useSelector((state) => state);

  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    }else{
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if(loadLike) return;
    setLoadLike(true);
    await dispatch( likePost({post, auth, socket}) );
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if(loadLike) return;
    setLoadLike(true);
    await dispatch( unLikePost({post, auth, socket}) );
    setLoadLike(false);
  };

    const handleSavePost = async () => {
      if (saveLoad) return;
      setSaveLoad(true);
      await dispatch(savePost({ post, auth }));
      setSaveLoad(false);
    };

    const handleUnSavePost = async () => {
      if (saveLoad) return;
      setSaveLoad(true);
      await dispatch(unSavePost({ post, auth }));
      setSaveLoad(false);
    };

    useEffect(() => {
      if (auth.user.saved.find(id => id === post._id)) {
        setSaved(true);
      } else {
        setSaved(false);
      }
    }, [post._id, auth.user.saved]);

    return (
      <div className="card_footer">
        <div className="card_icon_menu">
          <div className="d-flex">
            <LikeButton
              isLike={isLike}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
            />
            <Link to={`/post/${post._id}`} className="text-dark">
              <i className="far fa-comments" />
            </Link>
            <i
              className="fa fa-share"
              alt="Send"
              onClick={() => setIsShare(!isShare)}
            />
          </div>
          {saved ? (
            <i
              className="fas text-info fa-bookmark"
              onClick={handleUnSavePost}
            />
          ) : (
            <i
              className="far fa-bookmark"
              onClick={handleSavePost}
            />
          )}
        </div>
        <div className="d-flex justify-content-start">
          <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
            {post.likes.length} likes
          </h6>
          <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
            {post.comments.length} comments
          </h6>
        </div>

        {isShare && (
          <ShareModal
            // url={`${BASE_URL}/post/${post._id}`}
            url="http://google.com"
            theme={theme}
            setIsShare={setIsShare}
          />
        )}
      </div>
    );
}

export default CardFooter
