import React from 'react';

import useDetectScrollPositionTop from '../../../hooks/useDetectScrollPositionTop';

import { Container } from './TopButton.styles';
import { TopBtn } from '../../../assets';

export const TopButton = () => {
  const isScrollTop = useDetectScrollPositionTop();

  return (
    <Container
      show={!isScrollTop}
      alt="TopButton"
      src={TopBtn}
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
    />
  );
};
