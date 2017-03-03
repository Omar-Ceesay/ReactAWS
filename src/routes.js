import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import CommentFeed from './components/commentFeed';
import OneComment from './components/oneComment';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CommentFeed} />
      <Route component={OneComment} path="/comment/:id" />
  </Route>
)
