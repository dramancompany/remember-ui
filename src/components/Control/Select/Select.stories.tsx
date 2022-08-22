import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './index';
import { options } from './Select.constant';

const meta: ComponentMeta<typeof Select> = {
  title: 'Control/Select',
  component: Select,
};

export const Variants: ComponentStory<typeof Select> = () => {
  const [current, setCurrent] = React.useState(options[0].id);
  return (
    <>
      <Select
        className="pass-type"
        label="상품 종류"
        value={current}
        onChange={setCurrent}
        options={options}
      />
      <br />
      <Select
        className="pass-type2"
        label="상품 종류1"
        value={current}
        onChange={setCurrent}
        options={options}
        required
        isFixedSelect
      />
      <br />
      <Select
        className="pass-type2"
        label="상품 종류2"
        value={current}
        onChange={setCurrent}
        options={options}
        required
        maxHeight={100}
      />
      <br />
      <Select
        className="pass-type3"
        label="상품 종류3"
        value={current}
        onChange={setCurrent}
        options={options}
        maxHeight={100}
        error
      />
      <br />
      <Select
        className="pass-type4"
        label="상품 종류4"
        value={current}
        onChange={setCurrent}
        options={options}
        maxHeight={100}
        errorMessage="error meesage만 설정 할 수 있습니다."
      />
      <br />
      <Select
        className="pass-type5"
        label="상품 종류5"
        value={current}
        onChange={setCurrent}
        options={options}
        maxHeight={100}
        error
        errorMessage="border와 error message 둘 다 설정 할 수 있습니다."
      />
    </>
  );
};

export default meta;
