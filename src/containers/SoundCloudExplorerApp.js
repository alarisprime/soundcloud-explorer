import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import * as constants from '../constants';

const DOCUMENT_STYLE = {
  fontFamily: constants.FONT_FAMILY,
  fontSize: (constants.FONT_SIZE / 16) * 100 + '%',
  lineHeight: constants.LINE_HEIGHT / constants.FONT_SIZE,
  margin: 0,
  padding: 0,
  height: '100%',
  boxSizing: 'border-box',
  a: {
    textDecoration: 'none'
  }
};

const BODY_STYLE = {
  margin: 0,
  padding: 0,
  height: '100%'
}

class SoundCloudExplorerApp extends Component {
  render() {
    return (
      <div>
        <Style scopeSelector="html" rules={DOCUMENT_STYLE}/>
        <Style scopeSelector="body" rules={BODY_STYLE}/>
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line new-cap
export default Radium(SoundCloudExplorerApp);
