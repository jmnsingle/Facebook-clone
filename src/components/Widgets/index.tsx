import React from 'react';
import {
  FaGift,
  FaGripHorizontal,
  FaHamburger,
  FaSearch,
  FaVideo,
} from 'react-icons/fa';
import Avatar from '../Avatar';

import { Container, Title, Separator } from './styles';

const Widgets: React.FC = () => {
  return (
    <Container>
      <Title>
        <span>Sponsored</span>
      </Title>
      <iframe
        title="naruto-page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarutoofficialsns%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="350"
        height="250px"
        style={{
          border: 'none',
          overflow: 'hidden',
          marginBottom: 10,
        }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      />
      <Separator />
      <Title>
        <span>Friend Requests</span>
        <p>See All</p>
      </Title>
      <div className="content">
        <Avatar url="https://s.aficionados.com.br/imagens/giphy-4-0.gif" />
        <div>
          <div className="title">
            <div>
              <strong>Itachi Uchiha</strong>
              <p>5 mutual friends</p>
            </div>
            <p>18h</p>
          </div>
          <div className="buttons">
            <button type="button" className="button-confirm">
              Confirm
            </button>
            <button type="button">Delete</button>
          </div>
        </div>
      </div>

      <Separator />

      <Title>
        <span>Birthdays</span>
      </Title>
      <div className="birthdays">
        <FaGift size={30} color="gray" />
        <p>
          <strong>Juliano Nogueira </strong>
          and
          <strong> 3 others </strong>
          <br />
          have birthdays today.
        </p>
      </div>

      <Separator />

      <Title>
        <span>Contacts</span>
        <div className="contacts">
          <FaVideo />
          <FaSearch />
          <FaGripHorizontal />
        </div>
      </Title>

      <div className="birthdays">
        <Avatar url="https://vignette.wikia.nocookie.net/narutofans/images/3/3c/1286476684333.jpg/revision/latest/scale-to-width-down/340?cb=20111226150537&path-prefix=pt" />
        <span>Kakashi Hatake</span>
      </div>

      <div className="birthdays">
        <Avatar url="https://vignette.wikia.nocookie.net/naruto/images/8/81/Acrobat.PNG/revision/latest?cb=20150124180516" />
        <span>Killer B</span>
      </div>

      <div className="birthdays">
        <Avatar url="https://criticalhits.com.br/wp-content/uploads/2019/01/art-naruto-jiraiya-sannin.jpg" />
        <span>Jiraiya</span>
      </div>

      <div className="birthdays">
        <Avatar url="https://i.pinimg.com/736x/a3/28/24/a32824a047d5e1595ee10fde8c0056e7.jpg" />
        <span>Minato Namikaze</span>
      </div>

      <div className="birthdays">
        <Avatar url="https://img.quizur.com/f/img5c2052a6bbcc80.97676320.jpeg?lastEdited=1545622203" />
        <span>Obito Uchiha</span>
      </div>
    </Container>
  );
};

export default Widgets;
