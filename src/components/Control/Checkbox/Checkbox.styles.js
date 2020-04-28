import styled from 'styled-components';

export const Container = styled.div`
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  height: 24px;
  width: 24px;
  align-items: center;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 4px;
`;
