import { RefObject } from 'react';
export default function useCustomSetInput(inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>, value: string, onChange: (value: string) => {}, maxLength?: number): ({ target }: any) => void;
