import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';
import back from '../icons/back.svg';

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

const ICON_STYLE = {
  filter: 'invert(100%)',
  height: constants.FONT_SIZE_PX * constants.GOLDEN_RATIO
};

const TopBar = ({ genre }) => (
  <div style={STYLE}>
    <StyledLink to="/" style={LINK_STYLE}>
      <img src={back} style={ICON_STYLE} alt="back" />
      <span>home</span>
    </StyledLink>
    <span style={GENRE_STYLE}>{genre}</span>
  </div>
);

export default Radium(TopBar);
