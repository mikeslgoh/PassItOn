import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '.App';
import MainPage from './MainPage';
import SecondaryPage from './SecondaryPage';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="SecondPage" component={SecondaryPage} />
  </Route>
)
