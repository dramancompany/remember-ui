import styled, { css } from 'styled-components';

export const Container = styled.img<{ show: boolean }>`
  position: fixed;
  left: 50%;
  width: 56px;
  height: 56px;
  padding: 20px;
  cursor: pointer;
  margin-left: 562px;
  transition: bottom 0.35s;

  ${({ show }) => css`
    bottom: ${show ? 0 : '-76px'};
  `}
`;
