import React from 'react';
import Radium from 'radium';
import TopBar from './TopBar';
import TrackList from './TrackList';
import ControlBar from './ControlBar';
import AlbumArt from './AlbumArt';

const STYLE = {
  display: 'flex',
  flexDirection: 'column'
};

const SoundCloudPlayer = ({ genre, loading, tracks, nowPlaying, togglePlay, next, previous, isPaused }) => (
  <div style={STYLE}>
    <TopBar genre={genre} />
    <AlbumArt track={tracks[nowPlaying]} />
    <ControlBar togglePlay={() => togglePlay(nowPlaying)} next={next} previous={previous} isPaused={isPaused} />
    <TrackList tracks={tracks} nowPlaying={nowPlaying} togglePlay={togglePlay} loading={loading} />
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(SoundCloudPlayer);
