import React from 'react';
import t from 'prop-types';
import { ImageInput as Component } from 'remember-ui';

export const ImageInput = ({ ...rest }) => {
  return <Component {...rest} />;
};

ImageInput.propTypes = {
  id: t.string,
  label: t.string,
  onChange: t.func,
};

ImageInput.defaultProps = {
  onChange: () => {},
};
