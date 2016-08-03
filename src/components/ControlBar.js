import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const STYLE = {
  backgroundColor: constants.COLORS.BRAND,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap'
};

const ControlBar = ({ togglePlay, previous, next }) => (
  <div style={STYLE}>
    <button onClick={previous}>previous</button>
    <button onClick={togglePlay}>play/pause</button>
    <button onClick={next}>next</button>
  </div>
);

export default Radium(ControlBar);
