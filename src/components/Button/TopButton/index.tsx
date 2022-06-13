import React, { useCallback } from 'react';

import { useDetectScrollPositionTop } from '../../../hooks';

import { Container } from './TopButton.styles';
import { TopBtn } from '../../../assets';

interface TopButtonProps {
  className?: string;
  afterScroll?: () => void;
}

export const TopButton = ({ className, afterScroll }: TopButtonProps) => {
  const isScrollTop = useDetectScrollPositionTop();

  const handleClick = useCallback(() => {
    document.documentElement.scrollTop = 0;
    afterScroll?.();
  }, []);

  return (
    <Container
      className={className}
      role="button"
      alt="move top button"
      show={!isScrollTop}
      src={TopBtn}
      onClick={handleClick}
    />
  );
};
