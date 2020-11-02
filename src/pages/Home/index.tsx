import React from 'react';

import Feed from '../../components/Feed';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Widgets from '../../components/Widgets';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <div className="body">
        <SideBar />

        <Feed />

        <Widgets />
      </div>
    </Container>
  );
};

export default Home;
