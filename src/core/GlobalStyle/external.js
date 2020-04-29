import { createGlobalStyle, css } from 'styled-components';

import { blue100, white, gray100, gray400 } from './variable';

export const arrowMixin = (name, color) => css`
  ${name === 'dclight' &&
  css`
    &[data-placement^='bottom'] .tippy-arrow {
      transform: translateX(-1px);
      border-bottom-color: ${color};

      &::after {
        border-bottom: 7px solid ${color};
        bottom: -7px;
      }
      &::before {
        border-bottom: 7px solid ${gray100};
        bottom: -6px;
      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        z-index: -1;

        left: -7px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
      }
    }
  `}

  &[data-placement^='top'] .tippy-arrow {
    border-top-color: ${color};
  }
  &[data-placement^='bottom'] .tippy-arrow {
    border-bottom-color: ${color};
  }
  &[data-placement^='left'] .tippy-arrow {
    border-left-color: ${color};
  }
  &[data-placement^='right'] .tippy-arrow {
    border-right-color: ${color};
  }
`;

export const TippyTheme = createGlobalStyle`
  .tippy-content {
    cursor: pointer;
  }

  .tippy-tooltip.dcdark-theme {
    background-color: #4d4d4d;
    color: ${white};

    ${arrowMixin('dcdark', '#4d4d4d')}
  }

  .tippy-tooltip.dclight-theme {
    max-width: 500px !important;
    background-color: ${white};
    color: ${gray400};
    border: 1px solid ${gray100};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);

    ${arrowMixin('dclight', white)}
  }

  .tippy-tooltip.dcblue-theme {
    background-color: ${blue100};
    color: ${white};

    ${arrowMixin('dcblue', blue100)}
  }

`;
