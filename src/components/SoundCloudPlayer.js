import React from 'react';
import Radium from 'radium';
import TopBar from './TopBar';
import TrackList from './TrackList';
import ControlBar from './ControlBar';

const style = { };

const SoundCloudPlayer = ({ genre, loading, tracks, nowPlaying, togglePlay, next, previous }) => (
  <div>
    <TopBar genre={genre} />
    <h1>album art goes here</h1>
    <ControlBar togglePlay={() => togglePlay(nowPlaying)} next={next} previous={previous} />
    <TrackList tracks={tracks} nowPlaying={nowPlaying} togglePlay={togglePlay} />
  </div>
);

export default Radium(SoundCloudPlayer);
