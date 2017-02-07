import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from '/imports/ui/containers/AppContainer.jsx';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.jsx';
import OverviewPage from '/imports/ui/pages/OverviewPage.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/overview" component={OverviewPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
