import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const Track = ({ track, togglePlay, isPlaying }) => {
  const style = {
    padding: (constants.FONT_SIZE / constants.SIZING_RATIO) + 'px',
    fontWeight: isPlaying ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={togglePlay}>
      <img src={track.artwork_url} alt={track.description} />
      <div>{track.title}</div>
      <div>{track.user.username}</div>
    </li>
  );
};

// eslint-disable-next-line new-cap
export default Radium(Track);
