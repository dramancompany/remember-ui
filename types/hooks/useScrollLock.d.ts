declare const useScrollLock: (bodyScrollLockTargetId?: string | null | undefined, modalType?: string) => {
    modalId: string | null;
    bodyScrollLockTarget: string | null | undefined;
};
export default useScrollLock;
