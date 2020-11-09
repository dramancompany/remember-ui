import React from 'react';

import { Link } from './LinkButton.styles';

export const LinkButton = ({
  address = '',
  showAddress = true,
  children,
  className,
  target = '_blank',
}) => {
  let link = address;
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = `http://${link}`;
  }

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
