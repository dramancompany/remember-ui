/// <reference types="react" />
interface Props {
    itemCountPerPage: number;
    pageRangeDisplayed: number;
    totalItemCount?: number;
    activePage?: number;
    onChangePage: (page: number) => void;
    className?: string;
}
export declare const DcNewPagination: ({ activePage, totalItemCount, pageRangeDisplayed, onChangePage, itemCountPerPage, className, }: Props) => JSX.Element;
export declare const Pagination: ({ activePage, totalItemCount, pageRangeDisplayed, onChangePage, itemCountPerPage, className, }: Props) => JSX.Element;
export {};
