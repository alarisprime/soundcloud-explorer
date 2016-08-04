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

const TAG_CLOUD_STYLE = {
  margin: TAG_MARGIN,
  lineHeight: constants.LINE_HEIGHT * constants.GOLDEN_RATIO
};

const TagCloud = ({ tags }) => (
  <div style={STYLE}>
    {tags.map(tag =>
      <span style={TAG_CLOUD_STYLE} key={tag}>
        <Tag text={tag} id={tag} />
      </span>
    )}
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(TagCloud);
