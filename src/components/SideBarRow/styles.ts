import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 10px;
  cursor: pointer;
  /* background-color: blue; */
  &:last-child {
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    background-color: lightgray;
    border-radius: 10px;
  }

  > div {
    margin-left: 20px;
    width: 100%;
  }

  > h4 {
    font-weight: 700;
  }

  .dot-container {
    display: flex;
    align-items: center;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: blue;
    margin-right: 5px;
  }

  p {
    font-size: small;
    color: #2e81f4;
  }

  svg {
    font-size: 36px;
    color: #2e81f4;
  }
`;
