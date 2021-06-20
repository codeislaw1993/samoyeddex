import {
  TwitterOutlined,
  GithubOutlined,
  SendOutlined,
  SwapOutlined,
  AppstoreFilled,
  UnorderedListOutlined, HomeFilled,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import { getTradePageUrl } from '../utils/markets';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch } from "antd";

const EXTERNAL_LINKS = {
  '/learn': 'https://serum-academy.com/en/serum-dex/',
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/dex-list': 'https://serum-academy.com/en/dex-list/',
  '/developer-resources': 'https://serum-academy.com/en/developer-resources/',
  '/explorer': 'https://explorer.solana.com',
  '/srm-faq': 'https://projectserum.com/srm-faq',
  '/discord': 'https://discord.gg/mD38zFCdYH',
  '/telegram': 'https://t.me/samoyedlovers',
  '/github': 'https://github.com/project-serum/serum-dex-ui',
  '/twitter': 'https://twitter.com/lover_samoyed',
};

export default function TopBar() {
  const {
    endpointInfo,
    setEndpoint,
  } = useConnectionConfig();
  const location = useLocation();
  const history = useHistory();
  const [searchFocussed] = useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, themes } = useThemeSwitcher();

  const handleClick = useCallback(
    (e) => {
      if (!(e.key in EXTERNAL_LINKS)) {
        history.push(e.key);
      }
    },
    [history],
  );

  const endpointInfoCustom = endpointInfo && endpointInfo.custom;
  useEffect(() => {
    const handler = () => {
      if (endpointInfoCustom) {
        setEndpoint(ENDPOINTS[0].endpoint);
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [endpointInfoCustom, setEndpoint]);

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({
      theme: isChecked ? themes.dark : themes.light
    });
  };

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <>
        <Menu
          mode="inline"
          style={{height: "100%"}}
          theme={isDarkMode? 'dark':'light'}
          onClick={handleClick}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key={"/home"}>
            <HomeFilled /> Home
          </Menu.Item>
          <Menu.SubMenu icon={<SwapOutlined />} title="Trade" >
            <Menu.Item key={tradePageUrl}>
                Order book
            </Menu.Item>
            {(!searchFocussed || location.pathname === '/convert') && (
              <Menu.Item key="/convert">
                Swap using trades
              </Menu.Item>
            )}
            {(!searchFocussed || location.pathname === '/trade') && (
                <Menu.Item key="/trade">
                  Swap
                </Menu.Item>
            )}
            {(!searchFocussed || location.pathname === '/add') && (
                <Menu.Item key="/add">
                  Add Liquidity
                </Menu.Item>
            )}
            {(!searchFocussed || location.pathname === '/pool') && (
                <Menu.Item key="/pool">
                  Your Liquidity
                </Menu.Item>
            )}
          </Menu.SubMenu>
          <Menu.Item key="/farm" disabled={true}>
            <AppstoreFilled />  Farms
          </Menu.Item>
          {(!searchFocussed || location.pathname === '/info') && (
              <Menu.Item key="/info">
                <UnorderedListOutlined /> Pools
              </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/twitter') && (
              <Menu.Item key="/twitter">
                <a
                    href={EXTERNAL_LINKS['/twitter']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <TwitterOutlined className="" /> Twitter
                </a>
              </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/telegram') && (
              <Menu.Item key="/telegram">
                <a
                    href={EXTERNAL_LINKS['/telegram']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <SendOutlined className="" /> Telegram
                </a>
              </Menu.Item>
          )}
          {(!searchFocussed || location.pathname === '/github') && (
              <Menu.Item key="/github">
                <a
                    href={EXTERNAL_LINKS['/github']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <GithubOutlined className="" /> Github
                </a>
              </Menu.Item>
          )}
          {!searchFocussed && (
            <Menu.SubMenu
              title="Learn"
            >
              <Menu.Item key="/add-market">
                <a
                  href={EXTERNAL_LINKS['/add-market']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adding a market
                </a>
              </Menu.Item>
              <Menu.Item key="/wallet-support">
                <a
                  href={EXTERNAL_LINKS['/wallet-support']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supported wallets
                </a>
              </Menu.Item>
              <Menu.Item key="/dex-list">
                <a
                  href={EXTERNAL_LINKS['/dex-list']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEX list
                </a>
              </Menu.Item>
              <Menu.Item key="/developer-resources">
                <a
                  href={EXTERNAL_LINKS['/developer-resources']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer resources
                </a>
              </Menu.Item>
              <Menu.Item key="/explorer">
                <a
                  href={EXTERNAL_LINKS['/explorer']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solana block explorer
                </a>
              </Menu.Item>
              <Menu.Item key="/srm-faq">
                <a
                  href={EXTERNAL_LINKS['/srm-faq']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SRM FAQ
                </a>
              </Menu.Item>
            </Menu.SubMenu>
          )}
          <Menu.Item key="/switch" disabled={true} >
            Light / Dark {'\u00A0'}<Switch checked={isDarkMode} onChange={toggleTheme} />
          </Menu.Item>
        </Menu>
    </>
  );
}
