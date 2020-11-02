import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

import db from '../../config/firebase';

import MessageSender from '../MessageSender';
import Post from '../Post';
import StoryReel from '../StoryReel';

import { Container } from './styles';

interface Posts {
  id: string;
  data: {
    image?: string;
    message?: string;
    profilePic?: string;
    timestamp?: firebase.firestore.Timestamp;
    username?: string;
  };
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>();

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        console.log('aqui');
        setPosts(
          snapshot.docs.map(
            (doc): Posts => ({
              id: doc.id,
              data: doc.data(),
              // dateFormatted: new Date(
              //   doc.data().timestamp?.toDateString(),
              // ).toUTCString(),
            }),
          ),
        );
      });
  }, []);

  console.log(posts);

  return (
    <Container>
      <StoryReel />

      <MessageSender />

      {posts?.map(post => (
        <Post
          key={post.id}
          postImage={post.data.image}
          imageProfileUrl={post.data.profilePic}
          postDate={post.data.timestamp}
          username={post.data.username}
          message={post.data.message}
        />
      ))}
    </Container>
  );
};

export default Feed;
