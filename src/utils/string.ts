import { PRODUCT_PREFIX } from '../constant';

/** @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요. */
export const prefixConcat = (item: string) => `${PRODUCT_PREFIX}-${item}`;

/** @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요. */
export const handleInputLength = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  event: React.ChangeEvent<HTMLInputElement>,
  maxLength: number
) => {
  if (event.target.value.length > maxLength) return;
  handleChange(event);
};
