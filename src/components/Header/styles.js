import styled from 'styled-components';

export const HeaderTag = styled.header`
  align-items: center;
  background-color: lightblue;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px;

  h1 {
    font-size: 20px;
  }

  button {
    border: 0;
    padding: 5px 10px;
    border-radius: 10px;
  }
`;

export const InputBlock = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  padding: 10px 16px;
  border-radius: 10px;

  input {
    border: 0;
    margin-left: 12px;
    outline: 0;
  }

  svg {
    color: #555;
  }
`;
