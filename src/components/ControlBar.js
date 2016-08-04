import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const STYLE = {
  backgroundColor: constants.COLORS.BRAND,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  '.button': {
    fontSize: '100px'
  }
};

const BUTTON_STYLE = {
  color: constants.COLORS.TEXT,
  fontSize: constants.FONT_SIZE,
  padding: (constants.FONT_SIZE / constants.SIZING_RATIO) + 'px'
};

const ControlBar = ({ togglePlay, previous, next, isPaused }) => (
  <div style={STYLE}>
    <button style={BUTTON_STYLE} onClick={previous}>&lt;&lt; prev</button>
    <button style={BUTTON_STYLE} onClick={togglePlay}>{isPaused ? 'play' : 'pause'}</button>
    <button style={BUTTON_STYLE} onClick={next}>next &gt;&gt;</button>
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(ControlBar);
