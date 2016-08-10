import React, { Component } from 'react';

import { Redirect, Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Accounts from '../../Accounts';
import Account from '../../Account';

const routerHistory = useRouterHistory(createHashHistory)({});

export default class Routes extends Component {
  routes = (
    <Router history={ routerHistory }>
      <Route path='/accounts' component={ Accounts } />
      <Route path='/account/:address' component={ Account } />
      <Redirect from='/' to='/accounts' />
    </Router>
  );

  render () {
    return this.routes;
  }
}
