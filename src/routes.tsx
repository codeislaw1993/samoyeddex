import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import TradePage from './pages/TradePage';
import React from 'react';
import ConvertPage from './pages/ConvertPage';
import BasicLayout from './components/BasicLayout';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <BasicLayout>
          <Switch>
            <Route exact path="/">
              <Redirect to={'/convert'} />
            </Route>
            <Route exact path="/convert" component={ConvertPage} />
            <Route exact path="/market/:marketAddress">
              <TradePage />
            </Route>
          </Switch>
        </BasicLayout>
      </HashRouter>
    </>
  );
}
