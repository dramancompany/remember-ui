import { RefObject } from 'react';
declare type UseHoverType<T extends HTMLElement> = {
    ref: RefObject<T>;
    value: boolean;
};
declare function useHover<T extends HTMLElement>(): UseHoverType<T>;
export default useHover;
