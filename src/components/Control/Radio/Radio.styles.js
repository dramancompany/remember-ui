import styled from 'styled-components';

export const RadioButton = styled.img`
  height: ${({ theme }) => (theme === 'yellow' ? '18px' : '24px')};
  width: ${({ theme }) => (theme === 'yellow' ? '18px' : '24px')};
  cursor: pointer;
`;
