import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import TradePage from './pages/TradePage';
import OpenOrdersPage from './pages/OpenOrdersPage';
import React from 'react';
import HomePage from './pages/HomePage';
import BalancesPage from './pages/BalancesPage';
import ConvertPage from './pages/ConvertPage';
import BasicLayout from './components/BasicLayout';
import ListNewMarketPage from './pages/ListNewMarketPage';
import NewPoolPage from './pages/pools/NewPoolPage';
import PoolPage from './pages/pools/PoolPage';
import PoolListPage from './pages/pools/PoolListPage';
import {CurrencyPairProvider} from "./utils/currencyPair";
import { ExchangeView } from "./components/exchange";
import { PoolOverview } from "./components/pool/view";
import { ChartsView } from "./components/charts";

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <BasicLayout>
          <Switch>
            <Route exact path="/">
              <Redirect to={'/convert'} />
            </Route>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/convert" component={ConvertPage} />
            <Route exact path="/market/:marketAddress">
              <TradePage />
            </Route>
            <Route exact path="/orders" component={OpenOrdersPage} />
            <Route exact path="/balances" component={BalancesPage} />
            <Route
              exact
              path="/list-new-market"
              component={ListNewMarketPage}
            />
            <Route exact path="/pools">
              <PoolListPage />
            </Route>
            <Route exact path="/pools/new">
              <NewPoolPage />
            </Route>
            <Route exact path="/pools/:poolAddress">
              <PoolPage />
            </Route>

            <CurrencyPairProvider>
              <Route exact path="/trade" component={ExchangeView} />
              <Route exact path="/add" component={ExchangeView} />
              <Route exact path="/info" component={() => <ChartsView />} />
              <Route
                  exact
                  path="/pool"
                  component={() => <PoolOverview />}
              />
            </CurrencyPairProvider>
          </Switch>
        </BasicLayout>
      </HashRouter>
    </>
  );
}
