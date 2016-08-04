import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';

// eslint-disable-next-line new-cap
const StyledLink = Radium(Link);

const style = {
  backgroundColor: constants.COLORS.BRAND,
  color: constants.COLORS.TEXT,
  padding: constants.FONT_SIZE / constants.SIZING_RATIO,

  // ':hover': {
  //   backgroundColor: constants.COLORS.BRAND_SECONDARY
  // }
};

const Tag = ({ text }) => (
  <StyledLink to={`/play/${text}`} style={style}>{text}</StyledLink>
);

// eslint-disable-next-line new-cap
export default Radium(Tag);
