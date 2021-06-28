import styled from 'styled-components';
import {ButtonOutlineEffect} from "../../../lib/styled";

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

export const IconButton = styled(DefaultButton)`
  background: #fff;
  border-radius: 3px;
  padding: 0 11px;
  height: 32px;

  ${ButtonOutlineEffect}
  &:hover {
    border-color: #111;

    svg {
      fill: #111;
    }
  }

  svg {
    width: ${(props) => props.iconWidth || 15}px;
    height: ${(props) => props.iconWidth || 15}px;
    fill: #797979;
    transition: 0.3s;
  }
  
  p {
    margin-left: 6px;
    color: #767676;
  }
`;