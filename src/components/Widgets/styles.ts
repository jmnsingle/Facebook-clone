import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin-right: 10px;

  .content {
    display: flex;
    width: 100%;
    padding: 10px 5px 0 5px;
    border-radius: 2px;

    &:hover {
      background-color: #ddd;
      cursor: pointer;
    }

    > div {
      width: 100%;
    }

    .title {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-left: 10px;

      p {
        color: gray;
        font-size: small;
      }

      > p {
        color: #2e81f4;
      }
    }

    .buttons {
      display: flex;
      padding-left: 10px;
      margin-top: 15px;
      margin-bottom: 5px;

      button {
        flex: 1;
        margin: 0 2px;
        height: 40px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        background-color: #e4e6eb;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          cursor: pointer;
          background-color: #eee;
        }
      }

      .button-confirm {
        background-color: #2e81f4;
        color: #fff;

        &:hover {
          background-color: #2e81f4;
        }
      }
    }
  }

  .contacts svg {
    padding: 2px 10px;
    font-size: 16px;
    color: gray;
  }

  .birthdays {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-radius: 2px;

    &:hover {
      background-color: #ddd;
      cursor: pointer;
    }

    > p,
    span {
      margin-left: 15px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 15px 0;
  padding: 0 5px;
  width: 100%;

  &:first-child {
    padding-top: 10px;
  }

  > p {
    color: #2e81f4;
  }

  span {
    font-weight: bold;
    color: #656768;
    font-size: 20px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 15px 0;
`;
