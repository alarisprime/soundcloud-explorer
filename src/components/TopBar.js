import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import SvgIcon from './SvgIcon';
import * as constants from '../constants';
import back from '../icons/back.svg';

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

const ICON_STYLE = {
  filter: 'invert(100%)',
  height: constants.FONT_SIZE_PX * constants.GOLDEN_RATIO
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
