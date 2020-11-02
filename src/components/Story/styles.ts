import styled from 'styled-components';

export const Container = styled.div`
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

  > img {
    margin: 10px;
    border: 5px solid #2e81f4;
  }

  > h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
  }
`;
