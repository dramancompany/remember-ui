import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  TableContainer,
  Table,
  Title,
  TypeItem,
  Th,
  Td,
  DeprecatedTypeItem,
} from './index';

const meta: ComponentMeta<typeof TypeItem> = {
  title: 'RDS/TypeItem',
  component: TypeItem,
};

export const Variants: ComponentStory<typeof TypeItem> = () => (
  <TableContainer>
    <script>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
      />
    </script>
    <Title>RDS Web Fonts (Pretendard)</Title>
    <Table>
      <thead>
        <tr>
          <Th>Type style</Th>
          <Th>Weight</Th>
          <Th>Size</Th>
          <Th>Line height</Th>
          <Th>deprecated</Th>
        </tr>
      </thead>
      <tr>
        <Td>
          <TypeItem typography="Headline2_B">Headline2_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Headline2_B">Semibold</TypeItem>
        </Td>
        <Td>24px</Td>
        <Td>34px</Td>
        <Td>
          <DeprecatedTypeItem typo="textTripleExtraLarge" />
          <DeprecatedTypeItem typo="textDoubleExtraLarge" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Headline3_B">Headline3_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Headline3_B">Semibold</TypeItem>
        </Td>
        <Td>20px</Td>
        <Td>26px</Td>
        <Td>
          <DeprecatedTypeItem typo="textExtraLarge" />
          <DeprecatedTypeItem typo="textLarge" />
          <DeprecatedTypeItem typo="mobileTitle" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Headline4_B">Headline4_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Headline4_B">Semibold</TypeItem>
        </Td>
        <Td>16px</Td>
        <Td>26px</Td>
        <Td>
          <DeprecatedTypeItem typo="mobileSubTitle16" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Headline4_M">Headline4_M</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Headline4_M">Regular</TypeItem>
        </Td>
        <Td>16px</Td>
        <Td>26px</Td>
        <Td>
          <DeprecatedTypeItem typo="textMedium" />
          <DeprecatedTypeItem typo="mobileBody15" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Body1_B">Body1_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Body1_B">Semibold</TypeItem>
        </Td>
        <Td>14px</Td>
        <Td>24px</Td>
        <Td>
          <DeprecatedTypeItem typo="mobileSubTitle13" />
          <DeprecatedTypeItem typo="mobileSubTitle14" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Body1_M">Body1_M</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Body1_M">Regular</TypeItem>
        </Td>
        <Td>14px</Td>
        <Td>24px</Td>
        <Td>
          <DeprecatedTypeItem typo="textSmall" />
          <DeprecatedTypeItem typo="mobileBody15" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Body2_B">Body2_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Body2_B">Semibold</TypeItem>
        </Td>
        <Td>12px</Td>
        <Td>19px</Td>
        <Td>
          <DeprecatedTypeItem typo="mobileSubTitle12" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Body2_M">Body2_M</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Body2_M">Regular</TypeItem>
        </Td>
        <Td>12px</Td>
        <Td>19px</Td>
        <Td>
          <DeprecatedTypeItem typo="font" />
          <DeprecatedTypeItem typo="textExtraSmall" />
          <DeprecatedTypeItem typo="mobileBody12" />
        </Td>
      </tr>
      <tr>
        <Td>
          <TypeItem typography="Caption_B">Caption_B</TypeItem>
        </Td>
        <Td>
          <TypeItem typography="Caption_B">Semibold</TypeItem>
        </Td>
        <Td>10px</Td>
        <Td>14px</Td>
        <Td>
          <DeprecatedTypeItem typo="mobileSubCaption" />
        </Td>
      </tr>
    </Table>
  </TableContainer>
);

export default meta;
