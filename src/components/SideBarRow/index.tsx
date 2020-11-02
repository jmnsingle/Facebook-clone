import React from 'react';
import { IconType } from 'react-icons/lib';
import Avatar from '../Avatar';

import { Container } from './styles';

interface SideBarRowProps {
  title?: string;
  Icon?: IconType;
  imageUrl?: string;
  notification?: string;
}

const SideBarRow: React.FC<SideBarRowProps> = ({
  Icon,
  title,
  imageUrl,
  notification,
}) => {
  return (
    <Container>
      {imageUrl && <Avatar url={imageUrl} />}
      {Icon && <Icon />}
      <div>
        <h4>{title}</h4>
        {notification && (
          <div className="dot-container">
            <div className="dot"> </div>
            <p>{notification}</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SideBarRow;
