import React from 'react';

import Avatar from '../Avatar';

import { Container } from './styles';

interface StoryProps {
  imageUrl: string;
  imageProfileUrl: string;
  title: string;
}

const Story: React.FC<StoryProps> = ({ imageUrl, imageProfileUrl, title }) => {
  return (
    <Container style={{ backgroundImage: `url(${imageUrl})` }}>
      <Avatar url={imageProfileUrl} />
      <h4>{title}</h4>
    </Container>
  );
};

export default Story;
