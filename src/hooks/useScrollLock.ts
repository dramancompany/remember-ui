import { useState, useEffect } from 'react';

import { createUUID } from '../utils/common';

const useScrollLock = (
  bodyScrollLockTargetId?: string | null,
  modalType = 'modal'
) => {
  const [modalId, setModalId] = useState<string | null>(null);
  const [bodyScrollLockTarget, setBodyScrollLockTarget] = useState<
    string | null
  >();

  useEffect(() => {
    const id = createUUID();
    setModalId(id);
    const target = bodyScrollLockTargetId
      ? `#${bodyScrollLockTargetId}`
      : `#${modalType}${id}`;
    setBodyScrollLockTarget(target);
  }, [bodyScrollLockTargetId, modalType]);

  return {
    modalId,
    bodyScrollLockTarget,
  };
};

export default useScrollLock;
