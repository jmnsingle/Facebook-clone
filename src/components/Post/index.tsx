import React from 'react';
import {
  FaArrowDown,
  FaFacebookMessenger,
  FaShare,
  FaThumbsUp,
  FaUser,
} from 'react-icons/fa';
import firebase from 'firebase';

import Avatar from '../Avatar';

import { Container } from './styles';

interface PostProps {
  imageProfileUrl?: string;
  postImage?: string;
  username?: string;
  postDate?: firebase.firestore.Timestamp;
  message?: string;
}

const Post: React.FC<PostProps> = ({
  imageProfileUrl = '',
  postImage,
  postDate,
  username,
  message,
}) => {
  const dateFormatted = postDate
    ? new Date(postDate.toDate()).toUTCString().split('GMT')[0]
    : '';

  return (
    <Container>
      <div className="top">
        <Avatar url={imageProfileUrl} />

        <div className="top-info">
          <h3>{username}</h3>
          <p>{dateFormatted}</p>
        </div>
      </div>

      <div className="bottom">
        <p>{message}</p>
      </div>

      <div className="post-image">
        <img src={postImage} alt={username} />
      </div>

      <div className="options">
        <div className="option">
          <FaThumbsUp />
          <p>Like</p>
        </div>
        <div className="option">
          <FaFacebookMessenger />
          <p>Comment</p>
        </div>
        <div className="option">
          <FaShare />
          <p>Share</p>
        </div>
        <div className="option">
          <FaUser />
          <FaArrowDown />
        </div>
      </div>
    </Container>
  );
};

export default Post;
