import { useState } from 'react';

import { prefixConcat, safeGetWindow } from '../utils';

export function useStorageHook(name) {
  const itemKey = prefixConcat(name);
  const [item, setItem] = useState(
    safeGetWindow()?.localStorage.getItem(itemKey)
  );

  const setStorage = value => {
    setItem(value);
    window.localStorage.setItem(itemKey, value);
  };

  return [item, setStorage];
}
