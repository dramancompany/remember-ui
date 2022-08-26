import styled from 'styled-components';

export const Container = styled.div<{ isRound: boolean; disabled: boolean }>`
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  width: ${({ isRound }) => (isRound ? '20px' : '24px')};
  height: ${({ isRound }) => (isRound ? '20px' : '24px')};
  border-radius: ${({ isRound }) => (isRound ? '50%' : '0')};
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const Icon = styled.img<{ isRound: boolean }>`
  width: ${({ isRound }) => (isRound ? '20px' : '16px')};
  height: ${({ isRound }) => (isRound ? '20px' : '16px')};
  margin: ${({ isRound }) => (isRound ? '0' : '4px')};
`;
