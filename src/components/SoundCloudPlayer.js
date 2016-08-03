import React from 'react';
import Radium from 'radium';
import TopBar from './TopBar';

const style = { };

const SoundCloudPlayer = ({ genre }) => (
  <div>
    <TopBar genre={genre} />
  </div>
);

export default Radium(SoundCloudPlayer);
