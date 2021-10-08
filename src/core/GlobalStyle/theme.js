import {
  secondary100,
  accent100,
  contents100,
  contents300,
  accent200,
  primary100,
  disable,
} from './variable';

const THEME_COLOR = {
  yellow: {
    main: secondary100,
    sub: secondary100,
  },
  red: {
    main: accent100,
    sub: accent100,
  },
  gray: {
    main: contents100,
    sub: contents100,
  },
  light: {
    main: primary100,
    sub: contents300,
  },
  blue: {
    main: accent200,
    sub: accent200,
  },
  primary: {
    main: primary100,
    sub: primary100,
  },
  disable: {
    main: disable,
    sub: disable,
  },
};

export { THEME_COLOR };
