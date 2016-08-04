import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import * as constants from '../constants';

// eslint-disable-next-line new-cap
const StyledLink = Radium(Link);

const STYLE = {
  marginBottom: `${constants.LINE_HEIGHT}px`,
  backgroundColor: constants.COLORS.BRAND,
  color: constants.COLORS.TEXT_REVERSE,
  boxShadow: constants.BASE_SHADOW
};

const TITLE_STYLE = {
  textAlign: 'center',
  width: '100%',
  padding: `0 ${ 3 * constants.LINE_HEIGHT}px`,
  position: 'relative',
  fontWeight: 'bold',
  lineHeight: `${2 * constants.LINE_HEIGHT}px`
};

const LINK_BASE_STYLE = {
  position: 'absolute',
  top: 0,
  display: 'block',
  color: constants.COLORS.TEXT_REVERSE,
  lineHeight: `${2 * constants.LINE_HEIGHT}px`,
  padding: `0 ${constants.LINE_HEIGHT / 2}px`
};

const LEFT_LINK_BASE_STYLE = {
  left: 0
}

const TopBar = ({ title, leftButton, leftButtonTo }) => (
  <div style={STYLE}>
    <div style={TITLE_STYLE}>{title ? title : ' '}</div>
    {leftButton ? (
      <StyledLink to={leftButtonTo} style={[LINK_BASE_STYLE, LEFT_LINK_BASE_STYLE]}>
        {leftButton}
      </StyledLink>
    ) : undefined }
  </div>
);

// eslint-disable-next-line new-cap
export default Radium(TopBar);
