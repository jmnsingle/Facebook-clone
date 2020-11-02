import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  width: 100%;

  display: flex;
  flex-direction: column;

  .top {
    border-bottom: 1px;
    padding: 15px;

    display: flex;

    > form {
      display: flex;
      flex: 1;

      > input {
        border: none;
        padding: 5px 20px;
        margin: 0 10px;
        border-radius: 999px;
        background-color: #eff2f5;

        &:first-child {
          flex: 1;
        }
      }

      > button {
        display: none;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-evenly;
  }

  .message-sender-option {
    padding: 20px;
    color: gray;
    margin: 5px;

    display: flex;
    align-items: center;

    &:hover {
      background-color: #eff2f5;
      border-radius: 20px;
    }

    > h3 {
      font-size: medium;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
