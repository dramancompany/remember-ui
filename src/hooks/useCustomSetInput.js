import { useRef, useState, useEffect, useCallback } from 'react';

// TODO: Ref 타입
export default function useCustomSetInput(
  inputRef,
  value,
  onChange = () => {},
  maxLength = 2000
) {
  // const callback = useRef(onChange);
  const [notifier, setNotifier] = useState(false);
  const cursorPos = useRef(0);

  useEffect(() => {
    if (inputRef) {
      if (cursorPos.current !== inputRef.current.selectionStart) {
        inputRef.current.setSelectionRange(
          cursorPos.current,
          cursorPos.current
        );
      }
      cursorPos.current = inputRef.current.selectionStart;
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
