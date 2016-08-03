import React from 'react';
import Radium from 'radium';

const STYLE = { };

const ControlBar = ({ togglePlay, previous, next }) => (
  <div>
    <button onClick={previous}>previous</button>
    <button onClick={togglePlay}>play/pause</button>
    <button onClick={next}>next</button>
  </div>
);

export default Radium(ControlBar);
