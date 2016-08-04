import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const style = {
  margin: '0 auto',
  paddingRight: `${constants.LINE_HEIGHT / 2}px`,
  paddingLeft: `${constants.LINE_HEIGHT / 2}px`,
  maxWidth: constants.MAX_COLUMN_WIDTH
};

const Column = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(Column);
