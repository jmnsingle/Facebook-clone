import styled from 'styled-components';

interface HeaderProps {
  active?: boolean;
}

export const Container = styled.div`
  padding: 0px 20px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);

  position: sticky;
  z-index: 100;
  top: 0;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 10px;
  }

  .left > img {
    height: 40px;
  }

  .input {
    background-color: #eff2f5;
    padding: 12px;
    margin-left: 10px;
    border-radius: 999px;

    display: flex;
    align-items: center;

    > svg {
      margin-right: 10px;
    }
  }

  .input > input {
    border: none;
    background-color: transparent;
    width: 240px;
  }

  .center {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .info > h4 {
    margin-left: 5px;
    margin-right: 10px;
  }

  .right {
    display: flex;
    height: 100%;
  }
`;

export const Option = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  padding: 0 60px;
  cursor: pointer;
  border-bottom: ${props => (props.active ? '4px solid #2e81f4' : 'none')};

  &:hover {
    background-color: #eff2f5;
    border-radius: 10px;
    align-items: center;
    padding: 0 65px;
    border-bottom: none;
  }

  svg {
    color: ${props => (props.active ? '#2e81f4' : 'grey')};
    transition: color 0.2s;

    &:hover {
      color: #2e81f4;
    }
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  height: 40px;
  width: 40px;
  margin: 0 5px;
  background-color: #eee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ddd;
  }

  > svg {
    padding: 8px;
  }
`;
