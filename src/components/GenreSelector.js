import React from 'react';
import TagCloud from '../components/TagCloud';
import TopBar from './TopBar';
import Column from './Column';

const GENRES = ['hip-hop', 'funk', 'grime', 'pop', 'indie', 'garage', 'punk', 'electronic', 'metal', 'emo', 'jazz', 'r&b'];


const GenreSelector = ({text}) => (
  <div>
    <TopBar title="SoundCloud Explorer" />
    <Column>
      <TagCloud
        title="What do you feel like today?"
        tags={GENRES}/>
    </Column>
  </div>
);

export default GenreSelector;
