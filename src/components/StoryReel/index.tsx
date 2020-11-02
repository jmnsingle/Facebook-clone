import React from 'react';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { StoreState } from '../../store/createStore';
import Story from '../Story';

import { Container, NewStory } from './styles';

const StoryReel: React.FC = () => {
  const { user } = useSelector((state: StoreState) => state.auth);

  return (
    <Container>
      <NewStory style={{ backgroundImage: `url(${user?.profileImageUrl})` }}>
        <button type="button">
          <FaPlus color="#fff" />
        </button>
        <div>
          <p>Create a</p>
          <p>Story</p>
        </div>
      </NewStory>

      <Story
        imageUrl="https://i.pinimg.com/564x/44/af/46/44af4627a571dbb48a9066350de56560.jpg"
        imageProfileUrl="https://vignette.wikia.nocookie.net/narutofans/images/3/3c/1286476684333.jpg/revision/latest/scale-to-width-down/340?cb=20111226150537&path-prefix=pt"
        title="kakashi hatake"
      />
      <Story
        imageUrl="https://pm1.narvii.com/6346/ee5b154b016754f27f5ff134d998ca924b4d74bd_00.jpg"
        imageProfileUrl="https://vignette.wikia.nocookie.net/naruto/images/8/81/Acrobat.PNG/revision/latest?cb=20150124180516"
        title="killer bee"
      />
      <Story
        imageUrl="https://static.wikia.nocookie.net/82366757-f10d-46cb-bc9e-1bf0c979bc3d"
        imageProfileUrl="https://criticalhits.com.br/wp-content/uploads/2019/01/art-naruto-jiraiya-sannin.jpg"
        title="Jiraya"
      />
      <Story
        imageUrl="https://thumbs.gfycat.com/CrazyHotGrosbeak-small.gif"
        imageProfileUrl="https://i.pinimg.com/736x/a3/28/24/a32824a047d5e1595ee10fde8c0056e7.jpg"
        title="Minato Namikaze"
      />
      <Story
        imageUrl="https://pm1.narvii.com/6506/9cbb4e95bf65b895f5b7db312ddfbd558b538363_00.jpg"
        imageProfileUrl="https://img.quizur.com/f/img5c2052a6bbcc80.97676320.jpeg?lastEdited=1545622203"
        title="Obito Uchiha"
      />
    </Container>
  );
};

export default StoryReel;
