import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// pages
import NotFound from './pages/NotFound';
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
