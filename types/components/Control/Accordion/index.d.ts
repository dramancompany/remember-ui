/// <reference types="react" />
interface AccordionMenu {
    title: string;
    list: {
        title: string;
        value: string;
        onClick?: (value: string) => void;
    }[];
}
interface Props {
    menus: AccordionMenu[];
    hasCheckBox?: boolean;
    onClickItem?: (value: string) => void;
    onCheckItem?: (title: string, value: string) => void;
    isCheckedItem?: (title: string, value: string) => boolean;
}
export declare const Accordion: ({ menus, onClickItem, onCheckItem, isCheckedItem, hasCheckBox, }: Props) => JSX.Element;
export {};
