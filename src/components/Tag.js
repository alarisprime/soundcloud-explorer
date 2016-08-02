import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';

const StyledLink = Radium(Link);

const style = {
  backgroundColor: constants.COLORS.BRAND,
  color: constants.COLORS.TEXT_INVERTED,
  padding: constants.FONT_SIZE_PX / constants.GOLDEN_RATIO,
  textDecoration: 'none',

  ':hover': {
    backgroundColor: constants.COLORS.BRAND_SECONDARY
  }
};

const Tag = ({ text }) => (
  <StyledLink to={`/play/${text}`} style={style}>{text}</StyledLink>
);

export default Radium(Tag);
