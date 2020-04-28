import styled, { css } from 'styled-components';

export const Container = styled.img`
  position: fixed;
  left: 50%;
  width: 56px;
  height: 56px;
  padding: 20px;
  cursor: pointer;
  margin-left: 562px;

  ${({ show }) =>
    show
      ? css`
          bottom: 0;
          transition: 0.35s;
        `
      : css`
          bottom: -76px;
          transition: 0.35s;
        `}
`;
