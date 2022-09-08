import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Colors from 'core/GlobalStyle/variable';

import { Container, TitleWrap, ColorWrap, ColorItem } from './index';

const meta: ComponentMeta<typeof ColorItem> = {
  title: 'RDS/Color',
  component: ColorItem,
};

const C = { ...Colors };

const renderDeprecatedColorItem = (colors: string[]) =>
  colors.map((color) => {
    const colorValue = C[color];

    return (
      <ColorItem colorName={color} backgroundColor={colorValue} deprecated />
    );
  });

export const Variants: ComponentStory<typeof ColorItem> = () => (
  <>
    컬러칩을 클릭하면 hex code가 복사됩니다.
    <br />
    <br />
    <Container>
      <TitleWrap>Contents</TitleWrap>
      <ColorWrap>
        <ColorItem colorName="contents000" backgroundColor={C.contents000} />
        {renderDeprecatedColorItem(['primary100', 'gray400', 'blue450'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem colorName="contents100" backgroundColor={C.contents100} />
        {renderDeprecatedColorItem(['gray', 'gray200', 'gray300', 'gray350'])}
      </ColorWrap>
      <div />
      <ColorItem colorName="contents150" backgroundColor={C.contents150} />
      <div />
      <ColorWrap>
        <ColorItem colorName="contents200" backgroundColor={C.contents200} />
        {renderDeprecatedColorItem(['gray150'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem colorName="contents300" backgroundColor={C.contents300} />
        {renderDeprecatedColorItem([
          'gray120',
          'gray100',
          'borderColor',
          'disable',
        ])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem colorName="contents999" backgroundColor={C.contents999} />
        {renderDeprecatedColorItem(['primary200', 'white'])}
      </ColorWrap>
      <TitleWrap>Disable</TitleWrap>
      <ColorWrap>
        <ColorItem
          colorName="disableAccent100"
          backgroundColor={C.disableAccent100}
        />
        {renderDeprecatedColorItem(['red50'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="disableAccent200"
          backgroundColor={C.disableAccent200}
        />
        {renderDeprecatedColorItem(['blue30'])}
      </ColorWrap>
      <TitleWrap>Accent</TitleWrap>
      <ColorWrap>
        <ColorItem colorName="accent100" backgroundColor={C.accent100} />
        {renderDeprecatedColorItem(['red100', 'orange100'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem colorName="accent200" backgroundColor={C.accent200} />
        {renderDeprecatedColorItem([
          'blue100',
          'gold100',
          'yellow100',
          'green70',
          'green100',
        ])}
      </ColorWrap>
      <TitleWrap>Background</TitleWrap>
      <ColorWrap>
        <ColorItem
          colorName="background100"
          backgroundColor={C.background100}
        />
        {renderDeprecatedColorItem(['primary200', 'white'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="background200"
          backgroundColor={C.background200}
        />
        {renderDeprecatedColorItem(['gray50', 'gray70', 'yellow10'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="background300"
          backgroundColor={C.background300}
        />
        {renderDeprecatedColorItem(['gray80'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="backgroundAccent100"
          backgroundColor={C.backgroundAccent100}
        />
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="backgroundAccent200"
          backgroundColor={C.backgroundAccent200}
        />
        {renderDeprecatedColorItem(['green50'])}
      </ColorWrap>
      <div />
      <ColorWrap>
        <ColorItem
          colorName="backgroundNew100"
          backgroundColor={C.backgroundNew100}
        />
      </ColorWrap>
    </Container>
  </>
);

export default meta;
