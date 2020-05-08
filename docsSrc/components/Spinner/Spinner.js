import React from 'react';
import t from 'prop-types';
import { Spinner as Component } from 'remember-ui';

export const Spinner = ({ ...rest }) => <Component {...rest} />;

Spinner.propTypes = {
  width: t.number,
  height: t.number,
  borderWeight: t.number,
};

Spinner.defaultProps = {
  width: 32,
  height: 32,
  borderWeight: 5,
};
