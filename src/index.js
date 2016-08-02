import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import SoundCloudExplorerApp from './containers/SoundCloudExplorerApp';
import GenreSelector from './components/GenreSelector';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SoundCloudExplorerApp}>
      <IndexRoute component={GenreSelector} />
    </Route>
  </Router>,
  document.getElementById('root')
);
