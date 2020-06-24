import React from 'react';
import t from 'prop-types';
import { ProfileAvatar as Component, gray150 } from 'remember-ui';

export const ProfileAvatar = ({ ...rest }) => <Component {...rest} />;

ProfileAvatar.propTypes = {
  color: t.string,
  width: t.number,
};

ProfileAvatar.defaultProps = {
  color: gray150,
  width: 68,
};
