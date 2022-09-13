import React from 'react';

import { rememberLogoBlack, rememberLogoWhite } from 'assets';

export interface RememberLogoProps {
  className?: string;
  color?: 'white' | 'black';
  width?: number;
}

export const RememberLogo = ({
  className,
  color = 'white',
  width,
}: RememberLogoProps) => (
  <img
    className={className}
    style={{ width }}
    src={color === 'white' ? rememberLogoWhite : rememberLogoBlack}
    alt="rememberLogo"
  />
);
