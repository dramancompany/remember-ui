import { PRODUCT_PREFIX } from '../constant';

export const prefixConcat = (item) => {
  return `${PRODUCT_PREFIX}-${item}`;
};
