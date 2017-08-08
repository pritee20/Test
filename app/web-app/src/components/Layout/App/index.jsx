import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from './../Dashboard';
import MyAccounts from './../MyAccounts';
import NotFound from './../NotFound';
import Menu from './../../MainApp';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  MyAccounts: `${ publicPath }MyAccounts`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <div className='container'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route path={ routeCodes.MyAccounts } component={ MyAccounts } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
