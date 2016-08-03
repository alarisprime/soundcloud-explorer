import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import * as constants from '../constants';

const GLOBAL_STYLE = {
  fontFamily: constants.FONT_FAMILY,
  fontSize: constants.FONT_SIZE_PX + 'px',
  lineHeight: constants.LINE_HEIGHT,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  a: {
    textDecoration: 'none'
  }
};

class SoundCloudExplorerApp extends Component {
  render() {
    return (
      <div>
        <Style scopeSelector="body" rules={GLOBAL_STYLE}/>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(SoundCloudExplorerApp);
