import React from 'react';
import t from 'prop-types';
import { CustomButton as Component } from 'remember-ui';
import { yellow100 } from '../../../../src/core/GlobalStyle';

export const CustomButton = ({ children, ...rest }) => {
  return <Component {...rest}>{children}</Component>;
};

CustomButton.propTypes = {
  outline: t.bool,
  disabled: t.bool,
  isLoading: t.bool,
  size: t.oneOf(['small', 'medium', 'large', 'xlarge']),
  customStyle: t.shape({
    fontColor: t.string,
    fontWeight: t.oneOfType([t.string, t.number]),
    borderColor: t.string,
    backgroundColor: t.string,
  }),
  className: t.string,
  onClick: t.func,
};

CustomButton.defaultProps = {
  outline: false,
  disabled: false,
  isLoading: false,
  customStyle: {
    fontColor: 'white',
    fontWeight: 400,
    borderColor: yellow100,
    backgroundColor: yellow100,
  },
  size: 'small',
  className: '',
  onClick: () => {},
};
