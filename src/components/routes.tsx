import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helpers } from '../domain';
import Home from './pages/home';

export default class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path={Helpers.Routes.home} component={Home} />
      </Switch>
    );
  }
}
