import React, { useCallback } from 'react';

import { useDetectScrollPositionTop } from '../../../hooks';
import { TopBtn } from '../../../assets';

import { Container } from './TopButton.styles';

export interface TopButtonProps {
  className?: string;
  marginLeft?: number;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
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
