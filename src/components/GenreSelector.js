import React from 'react';
import TagCloud from '../components/TagCloud';

const GENRES = ['hip-hop', 'funk', 'grime', 'pop', 'indie', 'garage', 'punk', 'electronic', 'metal', 'emo', 'jazz', 'r&b'];

const GenreSelector = ({text}) => (
  <div>
    <h1>Hello :)</h1>
    <p>What do you feel like today?</p>
    <TagCloud tags={GENRES}/>
  </div>
);

export default GenreSelector;
