import React from 'react';
import Radium from 'radium';

const STYLE = {
  listStyle: 'none',
  margin: 0,
  padding: 0
};

const TrackList = ({ tracks, nowPlaying, togglePlay }) => (
  <ul style={STYLE}>
    {tracks.map((track, index) =>
      <li style={{fontWeight: index === nowPlaying ? 'bold' : 'normal'}} onClick={() => togglePlay(index)}>
        {track.title}
      </li>
    )}
  </ul>
);

export default Radium(TrackList);
