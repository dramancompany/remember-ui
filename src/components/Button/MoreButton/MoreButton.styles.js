import styled, { css } from 'styled-components';

export const Icon = styled.img.attrs({
  width: 12,
  height: 12,
  alt: 'more',
})`
  ${({ src }) =>
    src &&
    css`
      src: ${src};
    `}

  width: ${({ size }) => size === 'large' && '16px'};
  height: ${({ size }) => size === 'large' && '16px'};
  margin-top: ${({ size }) => size === 'large' && '2px'};
    
  display: inline-block;
  cursor: pointer;

  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`;
