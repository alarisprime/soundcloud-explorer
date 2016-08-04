import React from 'react';
import Radium from 'radium';
import Track from './Track';

const STYLE = {
  listStyle: 'none',
  margin: 0,
  padding: 0
};

const TrackList = ({ tracks, nowPlaying, togglePlay, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul style={STYLE}>
        {tracks.map((track, index) =>
          <Track track={track} isPlaying={index === nowPlaying} onClick={() => togglePlay(index)} key={index}/>
        )}
      </ul>
    );
  }
};

// eslint-disable-next-line new-cap
export default Radium(TrackList);
