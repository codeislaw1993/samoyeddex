import { Layout, Popover, Button, Col, Row, Image, Menu, Switch } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import WalletConnect from './WalletConnect';
import {
  GithubOutlined,
  HomeFilled,
  HeartOutlined,
  SendOutlined,
  SettingOutlined,
  SwapOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import Settings from './Settings';
import { useWallet } from '../utils/wallet';
import logo from '../assets/logo.png';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { getTradePageUrl } from '../utils/markets';

const { Header, Content, Sider } = Layout;

const EXTERNAL_LINKS = {
  '/nft': 'https://samoyedlovers.holaplex.com/',
  '/learn': 'https://serum-academy.com/en/serum-dex/',
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/dex-list': 'https://serum-academy.com/en/dex-list/',
  '/developer-resources': 'https://serum-academy.com/en/developer-resources/',
  '/explorer': 'https://explorer.solana.com',
  '/srm-faq': 'https://projectserum.com/srm-faq',
  '/discord': 'https://discord.gg/sxQcDBJr',
  '/telegram': 'https://t.me/samoyedlovers',
  '/github': 'https://github.com/codeislaw1993/samoyeddex',
  '/twitter': 'https://twitter.com/lover_samoyed',
};

export default function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState('');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const { connected, wallet } = useWallet();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = dimensions?.width;

  const { endpointInfo, setEndpoint } = useConnectionConfig();
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

      if (dimensions.width < 600) {
        setCollapsed(true);
      }
    },
    [history, dimensions],
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
      theme: isChecked ? themes.dark : themes.light,
    });
  };

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header" mode="inline">
          <Row justify="center">
            <Col span={1}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: toggle,
                },
              )}
            </Col>
            <Col span={23}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ width: '40vw' }}>
                  <span
                    style={{ height: '10px', padding: '2px', margin: '0px' }}
                  >
                    <Image preview={false} width={14} src={logo}></Image>{' '}
                    {width >= 600 ? 'Samoyed Lover DEX' : ''}
                  </span>
                </div>
                <div
                  style={{
                    width: '60vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div>
                    {connected && (
                      <div>
                        <Popover
                          content={
                            <Settings autoApprove={wallet?.autoApprove} />
                          }
                          placement="bottomRight"
                          title="Settings"
                          trigger="click"
                        >
                          <Button style={{ marginRight: 8 }}>
                            <SettingOutlined />
                            Settings
                          </Button>
                        </Popover>
                      </div>
                    )}
                  </div>
                  <div>
                    <WalletConnect />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            breakpoint="sm"
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            onCollapse={onCollapse}
          >
            <Menu
              mode="inline"
              style={{ height: '100%' }}
              theme={isDarkMode ? 'dark' : 'light'}
              onClick={handleClick}
              selectedKeys={[location.pathname]}
            >
              <Menu.Item icon={<HomeFilled />} key={tradePageUrl}>
                Order book
              </Menu.Item>
              {(!searchFocussed || location.pathname === '/convert') && (
                <Menu.Item icon={<SwapOutlined />} key="/convert">
                  Swap using trades
                </Menu.Item>
              )}
              {(!searchFocussed || location.pathname === '/nft') && (
                <Menu.Item key="/nft">
                  <a
                    href={EXTERNAL_LINKS['/nft']}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HeartOutlined className="" />
                    NFT Marketplace
                  </a>
                </Menu.Item>
              )}
              {(!searchFocussed || location.pathname === '/twitter') && (
                <Menu.Item key="/twitter">
                  <a
                    href={EXTERNAL_LINKS['/twitter']}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterOutlined className="" />
                    Twitter
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
                    <SendOutlined className="" />
                    Telegram
                  </a>
                </Menu.Item>
              )}
              {(!searchFocussed || location.pathname === '/discord') && (
                <Menu.Item key="/discord">
                  <a
                    href={EXTERNAL_LINKS['/discord']}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SendOutlined className="" />
                    Discord
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
                    <GithubOutlined className="" />
                    Github
                  </a>
                </Menu.Item>
              )}
              <Menu.Item key="/switch" disabled={true}>
                Light / Dark {'\u00A0'}
                <Switch checked={isDarkMode} onChange={toggleTheme} />
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ flex: 1 }}>{children}</Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
