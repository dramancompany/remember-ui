import React, { useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { useStorageHook } from '../../../hooks';

import { Tooltip } from './InfoTooltip.styles';

export const DcInfoTooltip = ({
  target,
  children,
  content,
  defaultDisabled,
}) => {
  const [isShown, setIsShown] = useStorageHook(`${target}-tooltip-shown`);

  const isDisabled = isShown === 'true' || defaultDisabled;
  const [visible, setVisible] = useState(true);

  const hideTooltip = () => {
    setVisible(false);
    setIsShown(true);
  };

  if (isDisabled) return <>{children}</>;

  /**
   * @description
   * @tippy.js/react 라이브러리의 작동 원리상
   * visible prop을 넘길 경우 trigger가 동작하지 않는다.
   * 별도로 children wrapper에 event를 감지하는 동작을 넣어주어야 한다.
   */
  return (
    <Tooltip
      content={<div onClick={hideTooltip}>{content}</div>}
      visible={visible}
      interactive
      arrow
      hideOnClick={false}
      duration={0}
      zIndex={200}
      theme="dcblue"
      placement="bottom-center"
    >
      <div onClick={hideTooltip}>{children}</div>
    </Tooltip>
  );
};
