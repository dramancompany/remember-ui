import React, { MouseEventHandler, ReactNode, RefObject } from 'react';
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
  export const gray350: string;
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

  export const primary01: string;
  export const primary02: string;
  export const secondary01: string;
  export const contents00: string;
  export const contents01: string;
  export const contents02: string;
  export const contents03: string;
  export const disable: string;
  export const accent01: string;
  export const accent02: string;
  export const background01: string;
  export const background02: string;
  export const background03: string;
  export const backgroundAccent01: string;

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
    mainAxis?: string | false,
    crossAxis?: string | false,
    direction?: string | false
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
    lineHeight?: string;
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

  export const placeholderColor: (
    color: string,
    center?: boolean
  ) => FlattenSimpleInterpolation;

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

  export const MoreButton: React.FC<MoreButtonProps>;

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
    testId?: string;
  }

  export const ConfirmModal: React.FC<ConfirmModalProps>;

  export interface DesignedModalProps {
    isOpen: boolean;
    onClose: Function;
    title: string;
    close: Function;
    subTitle?: string;
    submitText?: string;
    submit?: Function;
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
    name?: string;
    value?: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    outerRef?: RefObject<HTMLInputElement>;
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
    outerRef?: RefObject<HTMLTextAreaElement>;
    onChange: (value: string) => void;
    textareaOnClick?: Function;
    type?: string;
    placeholder?: string;
    label?: string;
    maxLength?: number;
    first?: boolean;
    required?: boolean;
    blankLabel?: boolean;
    countLength?: boolean;
    resize?: boolean;
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
    round?: boolean;
  }

  export const Checkbox: React.FC<CheckboxProps>;

  export interface SelectOption {
    id: string | number;
    label: string | number;
    value?: string | number;
  }

  export interface SelectProps {
    options: SelectOption[];
    value?: string | number;
    onChange: Function;
    className?: string;
    label?: string;
    changeInputMode?: Function;
    required?: boolean;
    isFixedSelect?: boolean;
    maxHeight?: number;
    placeholder?: string;
    marginBottom?: number;
    error?: boolean;
    errorMessage?: string;
  }

  export const Select: React.FC<SelectProps>;

  export interface InfoTooltipProps {
    children?: React.ReactChild | React.ReactChildren;
    content: ReactNode;
    visible: boolean;
    className?: string;
    onClick?: Function;
    customAnimation?: string;
  }

  export const InfoTooltip: React.FC<InfoTooltipProps>;

  export interface BaseTooltipProps {
    customComponent?: ReactNode;
    offset?: string;
    arrow?: boolean;
    onClick?: Function;
    content: ReactNode;
    iconStyle?: object;
    size?: string;
    type?: string;
    theme?: string;
    placement?: string;
    textAlign?: string;
    className?: string;
  }
  export const BaseTooltip: React.FC<BaseTooltipProps>;

  export interface PaginationProps {
    activePage?: number;
    totalItemCount?: number;
    pageRangeDisplayed: number;
    onChangePage: (page: number) => void;
    itemCountPerPage: number;
    className?: string;
  }

  export const Pagination: React.FC<PaginationProps>;
  export const DcNewPagination: typeof Pagination;

  export interface RadioProps {
    isChecked: boolean;
    onClick?: Function;
    className?: string;
  }

  export const Radio: React.FC<RadioProps>;

  export interface ChipProps {
    children: React.ReactChild | React.ReactChildren;
    className?: string;
    isOverflowed?: boolean;
    onClick: Function;
  }

  export const Chip: React.FC<ChipProps>;

  export interface MobileFullModalProps {
    topNavbarOffset?: string;
    isOpen: boolean;
    onClose: Function;
    onAfterOpen?: Function;
    title: string;
    headerButtonText?: string;
    onHeaderButtonClick?: Function;
    submit?: Function;
    submitText?: string;
    submitButtonDisabled?: boolean;
    isLoading?: boolean;
    bodyScrollLockTargetId: string;
    delegateCloseControl?: boolean;
    children: React.ReactChild | React.ReactChildren;
    className?: string;
  }

  export const MobileFullModal: React.FC<MobileFullModalProps>;

  export interface MessageModalProps {
    isOpen: boolean;
    children: ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose: () => void;
    confirmText?: string;
    cancelText?: string;
  }

  export const MessageModal: React.FC<MessageModalProps>;

  export interface SwitchProps {
    className?: string;
    checked?: boolean;
    onClick: MouseEventHandler;
    size?: 'small' | 'large';
  }

  export const Switch: React.FC<SwitchProps>;

  export interface ImageInputProps {
    id: string;
    label: ReactNode;
    onChange: (data: string) => void;
    className?: string;
  }

  export const ImageInput: React.FC<ImageInputProps>;

  export interface MaskingInputProps {
    type?: string;
    name: stirng;
    value: string | null | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    mask: (string | RegExp)[];
    label?: string;
    marginBottom?: number;
    footer?: string;
    className?: string;
    placeholder?: string;
    autoFocus?: boolean;
    required?: boolean;
    disabled?: boolean;
    useError?: boolean;
    errorMark?: boolean;
    blankLabe?: boolean;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onEnter?: () => void;
    validate?: (value: string | null | undefined) => string;
  }

  export const MaskingInput: React.FC<MaskingInputProps>;

  export interface AccordianMenu {
    title: string;
    list: { title: string; value: string; onClick?: (value: string) => void }[];
  }

  export interface AccordianProps {
    menus: AccordianMenu[];
    hasCheckBox?: boolean;
    onClickItem?: (value: string) => void;
    onCheckItem?: (title: string, value: string) => void;
    isCheckedItem?: (title: string, value: string) => boolean;
  }
  export const Accordian: React.FC<AccordianProps>;
}
