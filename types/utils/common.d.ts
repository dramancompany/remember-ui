export declare const range: (start: number, end: number) => number[];
export declare const safeGetWindow: () => (Window & typeof globalThis) | null;
export declare const createUUID: () => string;
export declare const enableBodyScrollLock: (bodyScrollLockTarget?: string | null | undefined, delegateCloseControl?: boolean) => void;
