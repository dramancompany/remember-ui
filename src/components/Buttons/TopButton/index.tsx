import React, { useCallback } from 'react';

import { useDetectScrollPositionTop } from '../../../hooks';

import { Container } from './TopButton.styles';
import { TopBtn } from '../../../assets';

interface TopButtonProps {
  className?: string;
  marginLeft?: number;
}

export const TopButton = ({ className, marginLeft = 562 }: TopButtonProps) => {
  const isScrollTop = useDetectScrollPositionTop();

  const handleClick = useCallback(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <Container
      className={className}
      role="button"
      alt="move top button"
      show={!isScrollTop}
      src={TopBtn}
      onClick={handleClick}
      marginLeft={marginLeft}
    />
  );
};
