import React from 'react';
import TagCloud from '../components/TagCloud';
import TopBar from './TopBar';

const GENRES = ['hip-hop', 'funk', 'grime', 'pop', 'indie', 'garage', 'punk', 'electronic', 'metal', 'emo', 'jazz', 'r&b'];


const GenreSelector = ({text}) => (
  <div>
    <TopBar title="SoundCloud Explorer" />
    <TagCloud
      title="What do you feel like today?"
      tags={GENRES}/>
  </div>
);

export default GenreSelector;
