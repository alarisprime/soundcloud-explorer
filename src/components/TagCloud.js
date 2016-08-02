import React from 'react';
import Radium from 'radium';
import Tag from './Tag';
import * as constants from '../constants';

const STYLE = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

const TAG_MARGIN = constants.FONT_SIZE_PX / (3 * constants.GOLDEN_RATIO);

const TAG_STYLE = {
  margin: TAG_MARGIN,
  lineHeight: constants.LINE_HEIGHT * constants.GOLDEN_RATIO
};

const TagCloud = ({ tags }) => (
  <div style={STYLE}>
    {tags.map(tag => <span style={TAG_STYLE}><Tag text={tag} id={tag} /></span>)}
  </div>
);

export default Radium(TagCloud);
