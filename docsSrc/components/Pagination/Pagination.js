import React from 'react';
import t from 'prop-types';
import { Pagination as Component } from 'remember-ui';

export const Pagination = ({ ...rest }) => <Component {...rest} />;

Pagination.propTypes = {
  activePage: t.number,
  totalItemCount: t.number,
  pageRangeDisplayed: t.number,
  itemCountPerPage: t.number,
  onChangePage: t.func,
};

Pagination.defaultProps = {
  activePage: 1,
  totalItemCount: 0,
  onChangePage: () => {},
};
