import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Home from '../pages/Home';
import Login from '../pages/Login';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/home" component={Home} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
