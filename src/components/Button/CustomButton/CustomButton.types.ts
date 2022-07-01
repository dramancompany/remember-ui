import { BaseButtonSizeType } from '../BaseButton/Button.types';

export interface CustomButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  outline?: boolean;
  size?: BaseButtonSizeType;
  isLoading?: boolean;
  block?: boolean;
  children: React.ReactNode;
  customStyle: {
    fontWeight: number | string;
    fontColor: string;
    borderColor: string;
    backgroundColor: string;
  };
  testId: string;
}

export type CustomButtonStyleProps = Required<
  Pick<
    CustomButtonProps,
    'isLoading' | 'disabled' | 'block' | 'size' | 'outline' | 'customStyle'
  >
>;
