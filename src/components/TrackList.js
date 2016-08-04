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
      <li style={{fontWeight: index === nowPlaying ? 'bold' : 'normal'}}
          onClick={() => togglePlay(index)}
          key={index}
      >
        {track.title}
      </li>
    )}
  </ul>
);

// eslint-disable-next-line new-cap
export default Radium(TrackList);
