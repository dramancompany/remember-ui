import styled from 'styled-components';
import { textSmall, accent200 } from '../../../core/GlobalStyle';

export const Link = styled.a`
  ${textSmall({ color: accent200 })}

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
