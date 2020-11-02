import React from 'react';
import { useSelector } from 'react-redux';

import {
  FaArrowDown,
  FaCalendarCheck,
  FaClock,
  FaFacebookMessenger,
  FaFlag,
  FaLayerGroup,
  FaPlusSquare,
  FaShoppingBag,
  FaUsers,
  FaVideo,
} from 'react-icons/fa';

import { StoreState } from '../../store/createStore';

import SideBarRow from '../SideBarRow';

import { Container } from './styles';

const SideBar: React.FC = () => {
  const { user } = useSelector((state: StoreState) => state.auth);

  return (
    <Container>
      <SideBarRow title={user?.username} imageUrl={user?.profileImageUrl} />

      <SideBarRow title="Pages" Icon={FaFlag} notification="2 new" />

      <SideBarRow title="COVID-19 Information Center" Icon={FaPlusSquare} />

      <SideBarRow title="Friends" Icon={FaUsers} notification="3 requests" />

      <SideBarRow title="Groups" Icon={FaLayerGroup} />

      <SideBarRow title="MarketPlace" Icon={FaShoppingBag} />

      <SideBarRow title="Videos" Icon={FaVideo} notification="9+ new videos" />

      <SideBarRow title="Events" Icon={FaCalendarCheck} />

      <SideBarRow title="Memories" Icon={FaClock} />

      <SideBarRow Icon={FaArrowDown} title="See more" />
    </Container>
  );
};

export default SideBar;
