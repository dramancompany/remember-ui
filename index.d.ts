import React from 'react';
import {
  FlattenSimpleInterpolation,
  GlobalStyleComponent,
} from 'styled-components';

declare module 'remember-ui' {
  // variables
  export const gray10: string;
  export const gray50: string;
  export const gray70: string;
  export const gray80: string;
  export const gray100: string;
  export const gray120: string;
  export const gray150: string;
  export const gray200: string;
  export const gray300: string;
  export const gray400: string;
  export const gray450: string;
  export const gold50: string;
  export const gold100: string;
  export const gold150: string;
  export const gold200: string;
  export const yellow10: string;
  export const yellow50: string;
  export const yellow60: string;
  export const yellow70: string;
  export const yellow100: string;
  export const blue30: string;
  export const blue100: string;
  export const red50: string;
  export const red100: string;
  export const green50: string;
  export const green100: string;
  export const brown100: string;
  export const orange100: string;
  export const white: string;
  export const text: string;
  export const borderColor: string;
  export const gray: string;
  export const mobileSizeBreak: string;
  export const mobileSmallSizeBreak: string;
  export const landingMobileSizeBreak: string;

  // mixins

  export interface FlexParams {
    mainAxis?: string | false;
    crossAxis?: string | false;
    direction?: string | false;
  }

  export const flexContainer: (
    params: FlexParams
  ) => FlattenSimpleInterpolation;

  export const flexCenter: FlattenSimpleInterpolation;
  export const flexCenterX: FlattenSimpleInterpolation;
  export const flexCenterY: FlattenSimpleInterpolation;
  export const flexEndY: FlattenSimpleInterpolation;
  export const flexColumnCenter: FlattenSimpleInterpolation;
  export const flexColumnCenterX: FlattenSimpleInterpolation;
  export const flexColumnCenterY: FlattenSimpleInterpolation;
  export const flexColumnCenterAll: FlattenSimpleInterpolation;

  export interface FontParams {
    size?: string;
    weight?: string;
    color?: string;
    opacity?: number;
  }

  export const font: (params: FontParams) => FlattenSimpleInterpolation;

  export interface TypograhyParams {
    weight?: string;
    color?: string;
    opacity?: number;
    rest?: any;
  }

  export const textExtraSmall: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textSmall: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textMedium: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textLarge: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textExtraLarge: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textDoubleExtraLarge: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export const textTripleExtraLarge: (
    params: TypograhyParams
  ) => FlattenSimpleInterpolation;

  export type ScreenSizeFunction = (
    cssContent: FlattenSimpleInterpolation
  ) => FlattenSimpleInterpolation;

  export const mobileSmallOnly: ScreenSizeFunction;
  export const mobileOnly: ScreenSizeFunction;
  export const webOnly: ScreenSizeFunction;
  export const landingMobileOnly: ScreenSizeFunction;
  export const landingWebOnly: ScreenSizeFunction;

  export const minHeightFix: (direction?: string) => FlattenSimpleInterpolation;
  export const minHeightFixChild: FlattenSimpleInterpolation;
}

// components
export const GlobalTheme: GlobalStyleComponent;
export interface LinkButtonProps {
  address?: string;
  showAddress?: boolean;
  children: React.ReactChild | React.ReactChildren;
  className?: string;
}
export const LinkButton: React.FC<LinkButtonProps>;

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  rounded?: boolean;
  color?: string;
  fill?: boolean;
  borderless?: boolean;
  size?: string;
  width?: number;
  isLoading?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps>;
