import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
  }

  > div > img {
    height: 150px;
    object-fit: contain;
  }

  button {
    width: 300px;
    height: 36px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-weight: 700;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #2e81f4;
    }
  }
`;
