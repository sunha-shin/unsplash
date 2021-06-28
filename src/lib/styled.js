import {css} from 'styled-components';
import styled from 'styled-components'

export const TextEllipsis = css`
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonOutlineEffect = css`
  transition: 0.3s;
  border: 1px solid #d1d1d1;

  &:hover {
    border-color: #111;
  }
`;

export const BarIcon = styled.div`
  border: 0.5px solid #d1d1d1;
  margin: 0 15px;
  height: 32px;
`;