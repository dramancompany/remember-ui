import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  border: ${({ borderWeight }) => `${borderWeight}px solid rgba(0, 0, 0, 0.1)`};
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
