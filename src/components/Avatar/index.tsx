import React from 'react';

import { Container } from './styles';

interface AvatarProps {
  url: string | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <Container
      src={
        url ||
        'https://img2.gratispng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg'
      }
    />
  );
};

export default Avatar;
