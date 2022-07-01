import { enableBodyScroll } from 'body-scroll-lock';

export const range = (start: number, end: number) =>
  Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx);

export const safeGetWindow = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return window;
};

/*
https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
export const createUUID = () => {
  // http://www.ietf.org/rfc/rfc4122.txt
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((Number(s[19]) & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  return s.join('');
};

export const enableBodyScrollLock = (
  bodyScrollLockTarget?: string | null,
  delegateCloseControl = false
) => {
  if (!delegateCloseControl && bodyScrollLockTarget) {
    const targetNodes = document.querySelectorAll(bodyScrollLockTarget);
    targetNodes.forEach((el) => {
      if (el !== null) {
        enableBodyScroll(el);
      }
    });
  }
};
