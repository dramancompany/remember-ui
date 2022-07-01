import React from 'react';

import { Link } from './LinkButton.styles';

export interface LinkButtonProps {
  address?: string;
  showAddress?: boolean;
  target?: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkButton = ({
  address = '',
  showAddress = true,
  children,
  className,
  target = '_blank',
}: LinkButtonProps) => {
  const link = address.match(/^https?:\/\//) ? address : `http://${address}`;

  if (showAddress) {
    return (
      <Link className={className} href={link} target={target}>
        {address}
      </Link>
    );
  } else {
    return (
      <Link
        className={className}
        href={address}
        target={target}
        rel="noreferrer noopener"
      >
        {children}
      </Link>
    );
  }
};
