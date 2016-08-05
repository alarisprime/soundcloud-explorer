import React from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const ALBUM_ART_SIZE = constants.LINE_HEIGHT * 4;

const Track = ({ track, onClick, isPlaying, isLast }) => {
  const style = {
    padding: `${constants.LINE_HEIGHT / 2}px`,
    borderBottom: isLast ? undefined : constants.BASE_BORDER,
    cursor: onClick ? 'pointer' : undefined,
    overflow: 'hidden'
  };

  const imageHolderStyles = {
    float: 'left',
    width: `${ALBUM_ART_SIZE}px`,
    height: `${ALBUM_ART_SIZE}px`,
    backgroundColor: constants.COLORS.GREY_LIGHT,
    borderRadius: `${constants.BORDER_RADIUS}px`,
    overflow: 'hidden',

    '.cover': {
      maxWidth: '100%',
      borderRadius: `${constants.BORDER_RADIUS}px`,
    }
  };

  const infoHolderStyles = {
    marginLeft: `${ALBUM_ART_SIZE + constants.LINE_HEIGHT}px`,
  }

  const titleStyles = {
    margin: 0,
    fontSize: constants.FONT_SIZE,
    fontWeight: 'normal',
    color: isPlaying ? constants.COLORS.BRAND : constants.COLORS.TEXT,
  }

  const artistStyles = {
    margin: 0,
    fontSize: constants.FONT_SIZE / constants.SIZING_RATIO,
    fontWeight: 'normal',
    color: constants.COLORS.TEXT_LIGHT
  }

  return (
    <div style={style} onClick={onClick}>
      <div style={imageHolderStyles}>
        {track && track.artwork_url ?
          (<img className="cover" src={track.artwork_url} alt={track.description} />) : undefined}
      </div>
      <div style={infoHolderStyles}>
        {track && track.title ?
          (<h2 style={titleStyles}>{track.title}</h2>) : undefined }
        {track && track.user && track.user.username ?
          (<h3 style={artistStyles}>{track.user.username}</h3>) : undefined }
      </div>
    </div>
  );
};

// eslint-disable-next-line new-cap
export default Radium(Track);
