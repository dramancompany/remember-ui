import {
  accent100,
  accent200,
  contents000,
  contents100,
  contents200,
  contents300,
  disable,
} from './variable';

/** @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요. */
const THEME_COLOR = {
  yellow: {
    main: '#E0A526',
    sub: '#E0A526',
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
    main: contents000,
    sub: contents300,
  },
  blue: {
    main: accent200,
    sub: accent200,
  },
  primary: {
    main: contents000,
    sub: contents000,
  },
  secondary: {
    main: contents200,
    sub: contents200,
  },
  disable: {
    main: disable,
    sub: disable,
  },
} as const;

export { THEME_COLOR };
