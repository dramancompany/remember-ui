import styled from 'styled-components';
import type { SpinnerProps } from './index';

export const Container = styled.div<SpinnerProps>`
  margin: 0 auto;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  border: 5px solid
    ${({ theme }) => {
      switch (theme) {
        case 'white':
          return 'rgba(255, 255, 255, 0.2)';
        case 'gray':
        default:
          return 'rgba(0, 0, 0, 0.1)';
      }
    }};
  border-radius: 100%;
  border: ${({ borderWeight, theme }) => {
    switch (theme) {
      case 'white':
        return `${borderWeight}px solid rgba(255, 255, 255, 0.2)`;
      case 'gray':
      default:
        return `${borderWeight}px solid rgba(0, 0, 0, 0.1)`;
    }
  }};

  border-top-color: transparent !important;

  animation: spin 800ms infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
