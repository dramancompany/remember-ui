import React, { useState } from 'react';

import { createUUID } from '../../../utils/common';

import {
  Container,
  Menu,
  Item,
  ItemTitle,
  ItemChecker,
  ItemInner,
  ItemInnerTitle,
  ItemInnerCheckbox,
} from './Accordion.styles';

const ItemHeight = 48;

export type AccordionMenuList = {
  title: string;
  value: string;
  onClick?: (value: string) => void;
};
export interface AccordionMenu {
  title: string;
  list: AccordionMenuList[];
}

export interface AccordionMenuProps {
  menus: AccordionMenu[];
  hasCheckBox?: boolean;
  onClickItem?: (value: string) => void;
  onCheckItem?: (title: string, value: string) => void;
  isCheckedItem?: (title: string, value: string) => boolean;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const Accordion = ({
  menus = [],
  onClickItem = () => {},
  onCheckItem = () => {},
  isCheckedItem,
  hasCheckBox,
}: AccordionMenuProps) => {
  const [hasToggled, setHasToggled] = useState(false);
  const id = createUUID();

  return (
    <Container>
      <Menu>
        {menus &&
          menus.map(({ title, list }) => (
            <Item
              hasToggled={hasToggled}
              height={`${list.length * ItemHeight}px`}
            >
              <ItemTitle htmlFor={title}>{title}</ItemTitle>
              <ItemChecker
                type="radio"
                onClick={() => setHasToggled(true)}
                name={id}
                id={title}
                height={`${list.length * ItemHeight}px`}
              />
              <ItemInner className="inner">
                {list.map(({ title: listTitle, value, onClick }) => (
                  <ItemInnerTitle
                    onClick={() => {
                      if (hasCheckBox && onCheckItem) {
                        onCheckItem(title, value);
                      } else if (onClick) {
                        onClick(value);
                      } else {
                        onClickItem(value);
                      }
                    }}
                  >
                    {hasCheckBox && (
                      <ItemInnerCheckbox
                        state={isCheckedItem?.(title, value) ? 'on' : 'off'}
                      />
                    )}
                    {listTitle}
                  </ItemInnerTitle>
                ))}
              </ItemInner>
            </Item>
          ))}
      </Menu>
    </Container>
  );
};
