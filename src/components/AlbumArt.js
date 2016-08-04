import React from 'react';
import Radium from 'radium';

const STYLE = { };

const AlbumArt = ({ track }) => (
  <img style={STYLE} src={track ? track.artwork_url : ''} alt={track ? track.description : 'Album art'} />
);

// eslint-disable-next-line new-cap
export default Radium(AlbumArt);
