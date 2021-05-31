import styled, { keyframes, css } from 'styled-components';
import Tippy from '@tippyjs/react';

const headShake = keyframes`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;

export const Tooltip = styled(Tippy)`
  .tippy-content {
    font-size: 13px;
    padding: 13px 33px !important;
    opacity: 1 !important;
    text-align: center;
  }

  ${({ customAnimation }) =>
    customAnimation === 'headShake' &&
    css`
      animation: ${headShake} 1s 3 ease-in-out;
    `}
`;
