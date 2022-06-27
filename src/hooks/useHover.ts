import { useEffect, useRef, useState, RefObject } from 'react';

type UseHoverType<T extends HTMLElement> = {
  ref: RefObject<T>;
  value: boolean;
};

function useHover<T extends HTMLElement>(): UseHoverType<T> {
  const [value, setValue] = useState(false);

  const ref = useRef<T>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return { ref, value };
}

export default useHover;
