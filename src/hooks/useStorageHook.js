import { useState } from 'react';

import { prefixConcat } from '../utils';

export function useStorageHook(name) {
  const itemKey = prefixConcat(name);
  const [item, setItem] = useState(window.localStorage.getItem(itemKey));

  const setStorage = (value) => {
    setItem(value);
    window.localStorage.setItem(itemKey, value);
  };

  return [item, setStorage];
}
