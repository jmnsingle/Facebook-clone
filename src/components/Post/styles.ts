import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);

  .top {
    display: flex;
    align-items: center;
    padding: 15px;

    position: relative;

    > img {
      margin-right: 10px;
    }
  }

  .info {
    > h3 {
      font-size: medium;
    }

    > p {
      font-size: small;
      color: gray;
    }
  }

  .bottom {
    margin: 10px 0;
    padding: 15px 25px;
  }

  .post-image > img {
    width: 100%;
  }

  .options {
    padding-top: 10px;
    border-top: 1px solid lightGray;
    font-size: medium;
    color: gray;
    cursor: pointer;
    padding: 15px;

    display: flex;
    justify-content: space-evenly;
  }

  .option {
    padding: 5px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    > p {
      margin-left: 10px;
    }

    &:hover {
      background-color: #eff3f5;
      border-radius: 10px;
    }
  }
`;
