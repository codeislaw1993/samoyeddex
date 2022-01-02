import React, { Suspense } from 'react';
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { WalletProvider } from './utils/wallet';
import { AccountsProvider } from "./utils/accounts";
import { MarketProvider } from "./context/market";
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { PreferencesProvider } from './utils/preferences';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { BrowserRouter as Router } from 'react-router-dom';

const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

export default function App() {

  return (
    <Router> 
      <Suspense fallback={() => <Spin size="large" />}>
          <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
            <GlobalStyle />
            <ErrorBoundary>
              <ConnectionProvider>
                <WalletProvider>
                        <AccountsProvider>
                            <MarketProvider>
                                  <PreferencesProvider>
                                    <Suspense fallback={() => <Spin size="large" />}>
                                      <Routes />
                                    </Suspense>
                                  </PreferencesProvider>
                            </MarketProvider>
                        </AccountsProvider>
                </WalletProvider>
              </ConnectionProvider>
            </ErrorBoundary>
          </ThemeSwitcherProvider>
      </Suspense>
    </Router>
  );
}
