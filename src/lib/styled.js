import {css} from 'styled-components';

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