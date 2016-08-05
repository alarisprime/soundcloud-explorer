import React from 'react';
import Radium from 'radium';
import Track from './Track';

import * as constants from '../constants';

const STYLE = {
  backgroundColor: constants.COLORS.HIGHTLIGHT,
  marginBottom: `${constants.LINE_HEIGHT}px`,
  borderRadius: `${constants.BORDER_RADIUS}px`,
  boxShadow: constants.BASE_SHADOW
};

const TrackList = ({ tracks, nowPlaying, togglePlay, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div style={STYLE}>
        {tracks.map((track, index, arr) =>
          <Track
            track={track}
            isPlaying={index === nowPlaying}
            isLast={index === arr.length - 1}
            onClick={() => togglePlay(index)} key={index}/>
        )}
      </div>
    );
  }
};

// eslint-disable-next-line new-cap
export default Radium(TrackList);
