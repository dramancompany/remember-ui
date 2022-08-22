import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion, AccordionMenuList } from './index';
import { DoczContainer } from 'components/DoczContainer';
import { menus, menus2, menus3 } from './Accordion.constant';

const meta: ComponentMeta<typeof Accordion> = {
  title: 'Control/Accordion',
  component: Accordion,
};

export const Basic: ComponentStory<typeof Accordion> = (args) => {
  const [checkedList, setCheckedList] = React.useState<AccordionMenuList[]>([]);
  const isCheckedItem = (_title: string, _value: string) => {
    return checkedList.some(
      ({ title, value }) => title === _title && value === _value
    );
  };
  const onCheckItem = (title: string, value: string) => {
    const checkedIndex = checkedList.findIndex(
      (el) => el.title === title && el.value === value
    );
    if (checkedIndex < 0) {
      setCheckedList([
        ...checkedList,
        {
          title,
          value,
        },
      ]);
    } else {
      checkedList.splice(checkedIndex, 1);
      setCheckedList([...checkedList]);
    }
  };
  return (
    <>
      <DoczContainer direction="column">
        <h3>체크박스 있는 경우</h3>
        <Accordion
          menus={menus}
          onCheckItem={onCheckItem}
          isCheckedItem={isCheckedItem}
          hasCheckBox={true}
        />
        <>{checkedList.map((el) => ` (${el.title}/${el.value}) `)}</>
      </DoczContainer>
      <DoczContainer direction="column">
        <h3>
          각 menu 클릭할 경우 공통 로직 적용 되는 예제 / 현재는 console.log
        </h3>
        <Accordion menus={menus2} onClickItem={(value) => console.log(value)} />
      </DoczContainer>
      <DoczContainer direction="column">
        <h3>각 menu 클릭할 경우 각각의 event handling 할 경우</h3>
        <Accordion menus={menus3} />
      </DoczContainer>
    </>
  );
};
export default meta;
