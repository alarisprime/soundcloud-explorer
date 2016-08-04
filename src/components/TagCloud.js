import React from 'react';
import Radium from 'radium';
import Tag from './Tag';
import * as constants from '../constants';

const STYLE = {
  backgroundColor: constants.COLORS.HIGHTLIGHT,
  padding: `${constants.LINE_HEIGHT / 2}px`,
  margin: `${constants.LINE_HEIGHT}px`,
  textAlign: 'center',
  borderRadius: `${constants.BOX_RADIUS}px`,
  boxShadow: constants.BASE_SHADOW
};

const TITLE_STYLE = {
  display: 'block',
  fontSize: constants.FONT_SIZE,
  fontWeight: 'bold',
  margin: `0 0 ${constants.LINE_HEIGHT / 2}px 0`
}

const TagCloud = ({ title, tags }) => (
  <div style={STYLE}>
    {title ? (<h2 style={TITLE_STYLE}>{title}</h2>) : undefined}
    {tags.map((tag, i) =>
      <Tag text={tag} key={tag} />
    )}
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(TagCloud);
