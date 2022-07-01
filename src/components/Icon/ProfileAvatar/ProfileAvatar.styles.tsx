import styled from 'styled-components';

export const Container = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${width}px`};
`;

export const Svg = styled.svg`
  width: 100%;
  height: auto;
`;
