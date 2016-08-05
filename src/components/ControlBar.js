import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const STYLE = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignContent: 'stretch'
};

const BUTTON_STYLE = {
  display: 'block',
  flexGrow: 1,
  padding: (constants.LINE_HEIGHT / 2) + 'px',
  fontWeight: 'bold',
  color: constants.COLORS.BRAND,
  textTransform: 'uppercase',
  outline: 'none', // To remove blue outline on Webkit
  borderRight: constants.BASE_BORDER,
  width: `${100 / 3}%`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  cursor: 'pointer',

  ':hover': {
    color: constants.COLORS.BRAND_HOVER
  },
  ':active': {
    color: constants.COLORS.BRAND_HOVER
  },
  ':focus': {
    color: constants.COLORS.BRAND_HOVER
  }
};

const LAST_BUTTON_STYLE = {
  borderRightWidth: 0
};

const ControlBar = ({ togglePlay, previous, next, isPaused }) => (
  <div style={STYLE}>
    <button
      style={BUTTON_STYLE}
      key="control-bar-prev"
      onClick={previous}>Previous</button>
    <button
      style={BUTTON_STYLE}
      key="control-bar-toggle-play"
      onClick={togglePlay}>{isPaused ? 'Play' : 'Pause'}</button>
    <button
      key="control-bar-next"
      style={[BUTTON_STYLE, LAST_BUTTON_STYLE]}
      onClick={next}>Next</button>
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(ControlBar);
