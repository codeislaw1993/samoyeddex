import { HashRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import TradePage from './pages/TradePage';
import React from 'react';
import ConvertPage from './pages/ConvertPage';
import BasicLayout from './components/BasicLayout';
import { useEffect, useState } from "react";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    ReactGA.initialize("UA-216167677-1");
    
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [initialized, location]);
};


export function Routes() {
  usePageTracking();

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
