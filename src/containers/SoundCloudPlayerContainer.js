import React, { Component } from 'react';
import SoundCloudPlayer from '../components/SoundCloudPlayer';

class SoundCloudPlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: {
        loading: false,
        tracks: []
      }
    };

    SC.initialize({
      client_id: '59c5cebbfecc10e5c872b3fd0d370eb1'
    });
  }

  render() {
    return <SoundCloudPlayer genre={this.props.params.genre} />;
  }
}

export default SoundCloudPlayerContainer;
