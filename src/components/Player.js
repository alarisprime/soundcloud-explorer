import React from 'react';
import Radium from 'radium';
import ControlBar from './ControlBar';
import Track from './Track';
import * as constants from '../constants';

const STYLES = {
  backgroundColor: constants.COLORS.HIGHTLIGHT,
  marginBottom: `${constants.LINE_HEIGHT}px`,
  borderRadius: `${constants.BORDER_RADIUS}px`,
  boxShadow: constants.BASE_SHADOW
};

const Player = ({ track, togglePlay, previous, next, isPaused }) => {
  return (
    <div style={STYLES}>
        <Track
          track={track} />
      <ControlBar
        togglePlay={togglePlay}
        next={next}
        previous={previous}
        isPaused={isPaused} />
    </div>
  );
};

// eslint-disable-next-line new-cap
export default Radium(Player);
