import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const style = {
  paddingRight: `${constants.LINE_HEIGHT / 2}px`,
  paddingLeft: `${constants.LINE_HEIGHT / 2}px`,
  width: `100%`,
  margin: '0 auto',
  maxWidth: constants.MAX_COLUMN_WIDTH
};

const Column = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(Column);
