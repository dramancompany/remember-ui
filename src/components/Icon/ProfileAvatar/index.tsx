import React from 'react';
import type { CSSProperties } from 'react';

import { gray150 } from '../../../core/GlobalStyle';

import { Container, Svg } from './ProfileAvatar.styles';

interface Props {
  className?: string;
  color?: CSSProperties['color'];
  width?: number;
}

export const ProfileAvatar = ({
  className,
  color = gray150,
  width = 68,
}: Props) => (
  <Container className={className} width={width}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 68 68"
    >
      <defs>
        <circle id="prefix__a" cx="34" cy="34" r="34" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <path
          fill={color}
          fillOpacity=".1"
          d="M0 0H68V68H0z"
          mask="url(#prefix__b)"
        />
        <g fill={color} fillOpacity="1" mask="url(#prefix__b)">
          <g transform="translate(9.154 13.077)">
            <circle cx="24.846" cy="11.769" r="11.769" />
            <path d="M.146 54.927c-.685-9.043 1.042-15.799 5.183-20.267 4.057-4.377 10.43-6.558 19.117-6.545l.546.004c8.968-.107 15.522 2.073 19.663 6.541 4.14 4.468 5.869 11.224 5.183 20.267H.146z" />
          </g>
        </g>
      </g>
    </Svg>
  </Container>
);
