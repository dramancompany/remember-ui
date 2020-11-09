import { createGlobalStyle, css } from 'styled-components';

import { blue100, white, gray100, gray400 } from './variable';
import { flexCenter } from './mixin';

const arrowMixin = (name, color) => css`
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

const TippyTheme = css`
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

  .tippy-touch {
    cursor: pointer !important;
  }
`;

const ModalTheme = css`
  .dc-modal-overlay {
    ${flexCenter}
    z-index: 500;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(33, 33, 33, 0);
    transition: background-color 200ms ease-in-out;

    &--open {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &--close {
      background-color: rgba(33, 33, 33, 0);
    }
  }

  .dc-modal {
    ${flexCenter}
    outline: 0;
  }
`;

export const GlobalTheme = createGlobalStyle`
  ${TippyTheme}
  ${ModalTheme}
`;
