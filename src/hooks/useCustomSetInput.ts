import { useRef, useState, useEffect, useCallback, RefObject } from 'react';

export default function useCustomSetInput(
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  value: string,
  onChange: (value: string) => {},
  maxLength: number = 2000
) {
  const [notifier, setNotifier] = useState(false);
  const cursorPos = useRef(0);

  useEffect(() => {
    if (inputRef?.current) {
      if (cursorPos.current !== inputRef.current.selectionStart) {
        inputRef.current.setSelectionRange(
          cursorPos.current,
          cursorPos.current
        );
      }
      cursorPos.current = inputRef.current.selectionStart ?? 0;
    }
  }, [notifier, inputRef]);

  const changeInput = useCallback(
    ({ target }) => {
      /**
       * 한글 관련 maxLength 초과 에러 수정 대응
       */
      cursorPos.current = target.selectionStart;

      if (
        value &&
        value.length === maxLength &&
        target.value.length === maxLength + 1
      ) {
        setNotifier((prev) => !prev);
      } else {
        onChange(target.value);
      }
    },
    [value, maxLength, onChange]
  );

  return changeInput;
}
