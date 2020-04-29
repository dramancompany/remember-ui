import { PRODUCT_PREFIX } from '../constant';

export const prefixConcat = (item) => {
  return `${PRODUCT_PREFIX}-${item}`;
};

export const handleInputLength = (handleChange, event, maxLength) => {
  if (event.target.value.length > maxLength) return;
  handleChange(event);
};
