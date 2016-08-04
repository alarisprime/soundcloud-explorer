import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';

// eslint-disable-next-line new-cap
const StyledLink = Radium(Link);

const style = {
  display: 'inline-block',
  backgroundColor: constants.COLORS.BRAND,
  color: constants.COLORS.TEXT_REVERSE,
  padding: `${(constants.LINE_HEIGHT / 8) - 1}px ${constants.LINE_HEIGHT / 2}px ${(constants.LINE_HEIGHT / 8) + 1}px`,
  marginBottom: `${constants.LINE_HEIGHT / 2}px`,
  marginRight: `${constants.LINE_HEIGHT / 8}px`,
  marginLeft: `${constants.LINE_HEIGHT / 8}px`,
  borderRadius: '2000px', // that's a magic number

  ':hover': {
    backgroundColor: constants.COLORS.BRAND_HOVER
  }
};

const Tag = ({ text }) => (
  <StyledLink to={`/play/${text}`} style={style}>{text}</StyledLink>
);

// eslint-disable-next-line new-cap
export default Radium(Tag);
