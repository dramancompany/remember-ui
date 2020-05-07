export const range = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);

export const safeGetWindow = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  return window;
};
