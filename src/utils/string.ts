import { PRODUCT_PREFIX } from '../constant';

export const prefixConcat = (item: string) => {
  return `${PRODUCT_PREFIX}-${item}`;
};

export const handleInputLength = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  event: React.ChangeEvent<HTMLInputElement>,
  maxLength: number
) => {
  if (event.target.value.length > maxLength) return;
  handleChange(event);
};
