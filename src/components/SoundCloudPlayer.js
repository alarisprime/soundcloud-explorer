import React from 'react';
import Radium from 'radium';
import TopBar from './TopBar';
import TrackList from './TrackList';
import ControlBar from './ControlBar';
import AlbumArt from './AlbumArt';
import Column from './Column';

const STYLE = {
  display: 'flex',
  flexDirection: 'column'
};

const SoundCloudPlayer = ({ genre, loading, tracks, nowPlaying, togglePlay, next, previous, isPaused }) => (
  <div style={STYLE}>
    <TopBar
      title={genre}
      leftButton="Back"
      leftButtonTo="/"
      />
    <Column>
      <AlbumArt track={tracks[nowPlaying]} />
      <ControlBar togglePlay={() => togglePlay(nowPlaying)} next={next} previous={previous} isPaused={isPaused} />
      <TrackList tracks={tracks} nowPlaying={nowPlaying} togglePlay={togglePlay} loading={loading} />
    </Column>
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(SoundCloudPlayer);
