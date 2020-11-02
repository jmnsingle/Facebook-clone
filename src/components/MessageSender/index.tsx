import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaPhotoVideo, FaSmile, FaVideo } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import db from '../../config/firebase';

import { StoreState } from '../../store/createStore';

import Avatar from '../Avatar';

import { Container } from './styles';

const MessageSender: React.FC = () => {
  const { user } = useSelector((state: StoreState) => state.auth);

  const [inputMessage, setInputMessage] = useState('');
  const [inputImageUrl, setInputImageUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log('inputMessage: ', inputMessage);
    // console.log('timestamp: ', firebase.firestore.FieldValue.serverTimestamp());
    // console.log('profilePic: ', user?.profileImageUrl);
    // console.log('username: ', user?.username);
    // console.log('image: ', inputImageUrl);

    db.collection('posts').add({
      message: inputMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user?.profileImageUrl,
      username: user?.username,
      image: inputImageUrl,
    });

    setInputMessage('');
    setInputImageUrl('');
  };

  return (
    <Container>
      <div className="top">
        <Avatar url={user?.profileImageUrl} />

        <form onSubmit={handleSubmit}>
          <input
            value={inputMessage}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputMessage(e.target.value);
            }}
            placeholder={`Whats on in your mind ${user?.username} ?`}
          />

          <input
            value={inputImageUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputImageUrl(e.target.value);
            }}
            placeholder="image url (opcional)"
          />

          <button type="submit">Hidden submit</button>
        </form>
      </div>

      <div className="bottom">
        <div className="message-sender-option">
          <FaVideo color="red" />
          <h3>Video</h3>
        </div>
        <div className="message-sender-option">
          <FaPhotoVideo color="green" />
          <h3>Foto/Video</h3>
        </div>
        <div className="message-sender-option">
          <FaSmile color="orange" />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </Container>
  );
};

export default MessageSender;
