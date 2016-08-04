import React from 'react';
import Radium from 'radium';
import TopBar from './TopBar';
import TrackList from './TrackList';
import ControlBar from './ControlBar';

const STYLE = {
  display: 'flex',
  flexDirection: 'column'
};

const SoundCloudPlayer = ({ genre, loading, tracks, nowPlaying, togglePlay, next, previous }) => (
  <div style={STYLE}>
    <TopBar genre={genre} />
    {nowPlaying === -1 ? <div>placeholder</div> : <img src={tracks[nowPlaying].artwork_url} alt={tracks[nowPlaying].description}/>}
    <ControlBar togglePlay={() => togglePlay(nowPlaying)} next={next} previous={previous} />
    <TrackList tracks={tracks} nowPlaying={nowPlaying} togglePlay={togglePlay} />
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(SoundCloudPlayer);
