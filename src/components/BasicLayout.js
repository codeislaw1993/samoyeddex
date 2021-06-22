import { Layout, Popover, Button, Col, Row, Image } from 'antd';
import React, { useState } from 'react';
import TopBar from './TopBar';
import WalletConnect from './WalletConnect';
import { SettingOutlined } from '@ant-design/icons';
import Settings from './Settings';
import { useWallet } from '../utils/wallet';
import logo from '../assets/logo.png';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

export default function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState('');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const { connected, wallet } = useWallet();

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
                <div style={{ width: '20vw' }}>
                  <span
                    style={{ height: '10px', padding: '2px', margin: '0px' }}
                  >
                    <Image preview={false} width={14} src={logo}></Image>{' '}
                    Samoyed Lover DEX
                  </span>
                </div>
                <div
                  style={{
                    width: '80vw',
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
            <TopBar />
          </Sider>
          <Content style={{ flex: 1 }}>{children}</Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
