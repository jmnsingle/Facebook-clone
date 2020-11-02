import React from 'react';
import { useSelector } from 'react-redux';

import {
  FaArrowDown,
  FaBell,
  FaFacebookMessenger,
  FaFlag,
  FaHome,
  FaPlus,
  FaSearch,
  FaShoppingBag,
  FaSquare,
  FaUsers,
  FaVideo,
} from 'react-icons/fa';
import { StoreState } from '../../store/createStore';

import Avatar from '../Avatar';

import { Container, Option, IconButton } from './styles';

const Header: React.FC = () => {
  const { user } = useSelector((state: StoreState) => state.auth);

  return (
    <Container>
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="Facebook"
        />

        <div className="input">
          <FaSearch size={20} color="grey" />
          <input placeholder="Search on Facebook" />
        </div>
      </div>

      <div className="center">
        <Option active>
          <FaHome size={30} />
        </Option>

        <Option>
          <FaVideo size={30} />
        </Option>

        <Option>
          <FaShoppingBag size={30} />
        </Option>

        <Option>
          <FaUsers size={30} />
        </Option>

        <Option>
          <FaFlag size={30} />
        </Option>
      </div>

      <div className="right">
        <div className="info">
          <Avatar url={user?.profileImageUrl} />
          <h4>{user?.username}</h4>
        </div>

        <IconButton>
          <FaPlus size={18} />
        </IconButton>

        <IconButton>
          <FaFacebookMessenger size={18} />
        </IconButton>

        <IconButton>
          <FaBell size={18} />
        </IconButton>

        <IconButton>
          <FaArrowDown size={18} />
        </IconButton>
      </div>
    </Container>
  );
};

export default Header;
