import React from 'react';

import { rememberLogoBlack, rememberLogoWhite } from 'assets';

export interface RememberLogoProps {
  className?: string;
  color?: 'white' | 'black';
  width?: number;
  height?: number;
}

export const RememberLogo = ({
  className,
  color = 'white',
  width,
  height = 18,
}: RememberLogoProps) => (
  <img
    className={className}
    style={{ width, height }}
    src={color === 'white' ? rememberLogoWhite : rememberLogoBlack}
    alt="rememberLogo"
  />
);
