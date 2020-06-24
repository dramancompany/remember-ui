import React from 'react';
import t from 'prop-types';
import { ProfileAvatar as Component } from 'remember-ui';

export const ProfileAvatar = ({ ...rest }) => <Component {...rest} />;

ProfileAvatar.propTypes = {
  color: t.string,
  width: t.number,
};

ProfileAvatar.defaultProps = {
  color: '#333333',
  width: 68,
};
