import React, { ReactNode, useState } from 'react';

import { Popover, Content } from './Popover.styles';

type TippyPlaceMentType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

interface Props {
  content: ReactNode;
  onPopoverOpenChange?: (isChange: boolean) => void;
  className?: string;
  customElement?: ReactNode;
  size?: 'small' | 'large';
  onOpen?: () => void;
  distance?: number;
  trigger?: 'mouseenter' | 'click' | 'focus';
  placement?: TippyPlaceMentType;
  disabled?: boolean;
  children: ReactNode;
}

export const BasePopover = ({
  content,
  onPopoverOpenChange = () => {},
  className = 'DcPopover',
  customElement,
  size = 'small',
  onOpen = () => {},
  distance = 10,
  trigger = 'click',
  placement = 'bottom-end',
  disabled = false,
  children,
}: Props) => {
  const [instance, setInstance] = useState<any>(undefined);

  if (disabled) return <React.Fragment>{children}</React.Fragment>;

  return (
    <Popover
      className={className}
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      }}
      placement={placement}
      distance={distance}
      content={
        <div
          className={`${className}-popover-inner-wrapper`}
          onClick={(e) => {
            e.preventDefault();
            instance && instance.hide();
          }}
        >
          {customElement}
          <Content customElement={!!customElement}>{content}</Content>
        </div>
      }
      trigger={trigger}
      onTrigger={(inst, e) => {
        e.preventDefault();
      }}
      hideOnClick={!!trigger.includes('click')}
      onMount={(inst) => setInstance(inst)}
      arrow={false}
      $size={size}
      onShow={() => {
        onPopoverOpenChange(true);
        onOpen();
      }}
      onUntrigger={(inst, e) => {
        /**
         * tippy.js bug로 추정
         * mouseclick 후에 전체 trigger가 작동하지 않는 현상이 존재하여,
         * 해당 케이스를 별도로 처리하는 mousemove에 대한 event trigger가 필요
         */
        if (e.type === 'mousemove') {
          instance.hide();
        }
      }}
      onHide={() => onPopoverOpenChange(false)}
      interactive
    >
      <div className={`${className}-popover-button`}>{children}</div>
    </Popover>
  );
};
