import type { BaseButtonSizeType } from '../BaseButton/BaseButton.types';

export type NewBaseButtonTheme =
  | 'yellow'
  | 'red'
  | 'blue'
  | 'gray'
  | 'light'
  | 'primary'
  | 'secondary';

export interface NewBaseButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  theme?: NewBaseButtonTheme;
  outline?: boolean;
  size?: BaseButtonSizeType;
  isLoading?: boolean;
  block?: boolean;
  children: React.ReactNode;
  testId?: string;
}

export type NewBaseButtonStyleType = Required<
  Pick<
    NewBaseButtonProps,
    'block' | 'disabled' | 'outline' | 'size' | 'isLoading'
  >
> & { buttonTheme: NewBaseButtonTheme };
