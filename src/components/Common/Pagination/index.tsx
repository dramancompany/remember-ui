import React from 'react';

import { range } from '../../../utils';
import {
  arrowBackActiveIcon,
  arrowBackInactiveIcon,
  arrowForwardActiveIcon,
  arrowForwardInactiveIcon,
} from '../../../assets';

import {
  Container,
  List,
  Button,
  Icon,
  Numbers,
  NumbersButton,
} from './Pagination.styles';

const getPaginationInfo = ({
  itemCountPerPage,
  pageRangeDisplayed,
  totalItemCount,
  activePage,
}: {
  itemCountPerPage: number;
  pageRangeDisplayed: number;
  totalItemCount: number;
  activePage: number;
}) => {
  const totalPages = Math.ceil(totalItemCount / itemCountPerPage);
  let firstPage = 0;
  if (activePage % pageRangeDisplayed === 0) {
    firstPage = Math.max(
      1,
      (Math.floor(activePage / pageRangeDisplayed) - 1) * pageRangeDisplayed + 1
    );
  } else {
    firstPage = Math.max(
      1,
      Math.floor(activePage / pageRangeDisplayed) * pageRangeDisplayed + 1
    );
  }
  const lastPage = Math.min(
    totalPages,
    Math.ceil(activePage / pageRangeDisplayed) * pageRangeDisplayed
  );

  return {
    firstPage,
    lastPage,
    totalPages,
  };
};

interface Props {
  itemCountPerPage: number;
  pageRangeDisplayed: number;
  totalItemCount?: number;
  activePage?: number;
  onChangePage: (page: number) => void;
  className?: string;
}

export const DcNewPagination = ({
  activePage = 1,
  totalItemCount = 0,
  pageRangeDisplayed,
  onChangePage,
  itemCountPerPage,
  className,
}: Props) => {
  const { firstPage, lastPage, totalPages } = getPaginationInfo({
    activePage,
    totalItemCount,
    pageRangeDisplayed,
    itemCountPerPage,
  });

  const prevPageSet = firstPage - 1;
  const nextPageSet = lastPage + 1;

  const leftDisabled = prevPageSet < 1;
  const rightDisabled = nextPageSet > totalPages;

  return (
    <Container className={className}>
      <List>
        <Button
          disabled={leftDisabled}
          marginRight={4}
          onClick={() => {
            if (leftDisabled) return;
            onChangePage(prevPageSet);
          }}
        >
          <Icon
            src={leftDisabled ? arrowBackInactiveIcon : arrowBackActiveIcon}
            alt="left"
          />
        </Button>
      </List>
      <Numbers>
        {range(firstPage, lastPage).map((_page) => (
          <NumbersButton key={_page}>
            <Button
              selected={_page === activePage}
              onClick={() => onChangePage(_page)}
            >
              {_page}
            </Button>
          </NumbersButton>
        ))}
      </Numbers>
      <List>
        <Button
          disabled={rightDisabled}
          marginLeft={4}
          onClick={() => {
            if (rightDisabled) return;
            onChangePage(nextPageSet);
          }}
        >
          <Icon
            src={
              rightDisabled ? arrowForwardInactiveIcon : arrowForwardActiveIcon
            }
            alt="right"
          />
        </Button>
      </List>
    </Container>
  );
};

export const Pagination = DcNewPagination;
