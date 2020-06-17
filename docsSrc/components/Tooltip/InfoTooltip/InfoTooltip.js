import React from 'react';
import t from 'prop-types';
import { InfoTooltip as Component, GlobalTheme } from 'remember-ui';

export const InfoTooltip = ({ ...rest }) => {
  return (
    <>
      <GlobalTheme />
      <Component {...rest} />
    </>
  );
};

InfoTooltip.propTypes = {
  content: t.object,
  visible: t.oneOf([false, true]),
  onClick: t.func,
};

InfoTooltip.defaultProps = {};
