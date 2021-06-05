import styled from 'styled-components';

export const DefaultButton = styled.button`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0
  }
`;