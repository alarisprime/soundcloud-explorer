import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

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
  <a href="#" style={style}>{text}</a>
);

export default Radium(Tag);
