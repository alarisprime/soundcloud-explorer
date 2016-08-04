import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';

// eslint-disable-next-line new-cap
const StyledLink = Radium(Link);

const STYLE = {
  backgroundColor: constants.COLORS.BRAND,
  color: constants.COLORS.TEXT_INVERTED,
  padding: constants.FONT_SIZE_PX / constants.GOLDEN_RATIO,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
};

const GENRE_STYLE = {
  textAlign: 'center'
};

const LINK_STYLE = {
  textAlign: 'left',
  color: constants.COLORS.TEXT_INVERTED,
  display: 'flex'
};

const TopBar = ({ genre }) => (
  <div style={STYLE}>
    <StyledLink to="/" style={LINK_STYLE}>
      <span>home</span>
    </StyledLink>
    <span style={GENRE_STYLE}>{genre}</span>
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(TopBar);
