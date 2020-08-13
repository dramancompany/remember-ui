import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${width}px`};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;

export const Svg = styled.svg`
  width: 100%;
  height: auto;
`;
