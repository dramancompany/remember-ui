import type { ReactChild, CSSProperties, MouseEventHandler } from "react";
import type { Placement, Instance, Props as TippyProps } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
/**
 * @name Tooltip
 * @param { 'help' | 'plus' | 'more' } type
 * @param { 'small' | 'medium' } size
 * @param { 'dclight', 'dcdark', 'dcblue' } theme
 */
interface Props {
    customComponent?: JSX.Element;
    offset?: `${number},${number}`;
    arrow?: boolean;
    onClick?: MouseEventHandler<HTMLImageElement>;
    onShow?: (instance: Instance<TippyProps>) => false | void;
    content: ReactChild | ReactChild[];
    iconStyle?: CSSProperties;
    size?: 'small' | 'medium';
    type?: 'help' | 'plus' | 'more';
    theme?: 'dclight' | 'dcdark' | 'dcblue';
    placement?: Placement;
    textAlign?: CSSProperties['textAlign'];
    className?: string;
}
export declare const BaseTooltip: ({ customComponent, offset, arrow, onClick, onShow, content, iconStyle, size, type, theme, placement, textAlign, className, }: Props) => JSX.Element;
export {};
