import React from 'react';
import t from 'prop-types';
import { InfoTooltip as Component } from '../../../../../dist/index.esm';

export const InfoTooltip = ({ ...rest }) => {
  return <Component {...rest} />;
};

InfoTooltip.propTypes = {
  target: t.string,
  content: t.object,
  defaultDisabled: t.oneOf([false, true]),
};

InfoTooltip.defaultProps = {};
