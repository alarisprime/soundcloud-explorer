import React, { Component } from 'react';
import Radium from 'radium';
import * as constants from '../constants';

const style = {
  fontFamily: constants.FONT_FAMILY,
  fontSize: constants.FONT_SIZE_PX + 'px',
  lineHeight: constants.LINE_HEIGHT
};

class SoundCloudExplorerApp extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(SoundCloudExplorerApp);
