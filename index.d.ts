import React, { ReactNode } from 'react';
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

  export const textEllipsis: FlattenSimpleInterpolation;
  export const textBreak: FlattenSimpleInterpolation;
  export const textBreakPre: FlattenSimpleInterpolation;
  export const textLink: FlattenSimpleInterpolation;

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
    onClick?: Function;
    rounded?: boolean;
    color?: string;
    fill?: boolean;
    borderless?: boolean;
    size?: string;
    width?: number;
    isLoading?: boolean;
  }

  export const BaseButton: React.FC<BaseButtonProps>;

  export interface MoreButtonProps {
    className?: string;
    value?: boolean;
    size?: string;
    onClick?: Function;
  }

  export const MoreButton: React.Fc<MoreButtonProps>;

  export interface ProfileAvatarProps {
    className?: string;
    color?: string;
    width?: number;
  }

  export const ProfileAvatar: React.FC<ProfileAvatarProps>;

  export interface BaseModalProps {
    isOpen?: boolean;
    onClose?: Function;
    onAfterOpen?: Function;
    allowKeyExit?: boolean;
  }

  export const BaseModal: React.FC<BaseModalProps>;

  export interface ConfirmModalProps {
    title: string;
    message: string;
    okText: string;
    closeText: string;
    isOpen: boolean;
    onOk: Function;
    onAfterOpen?: Function;
    onCloseAction?: Function;
    icon?: 'warning' | 'success';
    type?: 'delete' | 'ok';
    showClose?: boolean;
    onClose?: Function;
  }

  export const ConfirmModal: React.FC<ConfirmModalProps>;

  export interface DesignedModalProps {
    isOpen: boolean;
    onClose: Function;
    title: string;
    subTitle: string;
    submitText: string;
    submit: Function;
    close: Function;
    customText?: React.ReactNode;
    submitButtonDisabled?: boolean;
    isLoading?: boolean;
    closeText?: string;
    onAfterOpen?: Function;
    headerButton?: React.ReactNode;
    className?: string;
  }

  export const DesignedModal: React.FC<DesignedModalProps>;

  export interface ProgressModalProps {
    icon: string;
    title: (currentCount: number, totalCount: number) => string;
    message: string;
    isOpen: boolean;
    currentCount?: number;
    totalCount?: number;
  }

  export const ProgressModal: React.FC<ProgressModalProps>;

  export interface NewBaseButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: Function;
    theme?: string;
    outline?: boolean;
    size?: string;
    isLoading?: boolean;
    block?: boolean;
    children: React.ReactChild | React.ReactChildren;
  }

  export const NewBaseButton: React.FC<NewBaseButtonProps>;

  export interface CustomButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: Function;
    outline?: boolean;
    size?: string;
    isLoading?: boolean;
    block?: boolean;
    children: React.ReactChild | React.ReactChildren;
    customStyle: {
      fontWeight: number | string;
      fontColor: string;
      borderColor: string;
      backgroundColor: string;
    };
  }

  export const CustomButton: React.FC<CustomButtonProps>;

  export interface SpinnerProps {
    width?: number;
    height?: number;
    borderWeight?: number;
    className?: string;
  }

  export const Spinner: React.FC<SpinnerProps>;

  export interface BaseInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    outerRef?: string;
    footer?: React.ReactNode;
    placeholder?: string;
    maxLength?: number;
    marginBottom?: number;
    type?: string;
    label?: string;
    className?: string;
    autoFocus?: boolean;
    required?: boolean;
    disabled?: boolean;
    useError?: boolean;
    errorMark?: boolean;
    onlyNumber?: boolean;
    blankLabel?: boolean;
    readOnly?: boolean;
    onClick?: Function;
    onEnter?: Function;
    validate?: Function;
  }

  export const BaseInput: React.FC<BaseInputProps>;

  export interface TextareaProps {
    name: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    label?: string;
    maxLength?: number;
    first?: boolean;
    required?: boolean;
    blankLabel?: boolean;
    countLenth?: boolean;
  }

  export const Textarea: React.FC<TextareaProps>;

  export interface PopoverProps {
    content: ReactNode;
    onPopoverOpenChange?: Function;
    className?: string;
    customElement?: ReactNode;
    size?: string;
    onOpen?: Function;
    distance?: number;
    trigger?: string;
    placement?: string;
    disabled?: boolean;
  }

  export const BasePopover: React.FC<PopoverProps>;

  export interface PopoverItemProps {
    selected?: boolean;
    warning?: boolean;
    bold?: boolean;
    onClick: React.MouseEventHandler;
  }

  export const PopoverItem: React.FC<PopoverItemProps>;

  export interface CheckboxProps {
    state?: 'on' | 'off';
    onClick?: Function;
    disabled?: boolean;
    className?: string;
  }

  export const Checkbox: React.FC<CheckboxProps>;

  export interface SelectOption {
    id: number;
    label: string;
    value: number;
  }

  export interface SelectProps {
    options: SelectOption[];
    onChange: Function;
    value?: number;
    className?: string;
    label?: string;
    changeInputMode?: Function;
    required?: boolean;
    isFixedSelect?: boolean;
    maxHeight?: number;
  }

  export const Select: React.FC<SelectProps>;
}
