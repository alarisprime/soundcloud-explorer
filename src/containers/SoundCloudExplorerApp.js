import React, { Component } from 'react';
import Radium from 'radium';
import TagCloud from '../components/TagCloud';
import * as constants from '../constants';

const style = {
  fontFamily: constants.FONT_FAMILY,
  fontSize: constants.FONT_SIZE_PX + 'px',
  lineHeight: constants.LINE_HEIGHT
};

class SoundCloudExplorerApp extends Component {
  render() {
    const tags = ['hip-hop', 'punk', 'funk', 'r&b', 'metal', 'hardcore'];
    return (
      <div style={style}>
        <TagCloud tags={tags} />
      </div>
    );
  }
}

export default Radium(SoundCloudExplorerApp);
