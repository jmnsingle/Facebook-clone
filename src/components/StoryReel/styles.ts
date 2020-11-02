import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const NewStory = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 120px;
  height: 200px;
  transition: transform 100ms ease-in;
  cursor: pointer;

  position: relative;

  &:hover {
    transform: scale(1.07);
  }

  > h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
  }

  button {
    position: absolute;
    left: 40px;
    bottom: 50px;
    z-index: 99;

    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 5px solid #fff;
    background-color: #2e81f4;

    display: flex;
    align-items: center;
    justify-content: center;

    /* > svg {
    } */
  }

  > div {
    background-color: #fff;
    width: 100%;
    height: 70px;
    bottom: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: absolute;
  }
`;
