import { Layout, Popover, Button, Col, Row, Image } from 'antd';
import React, { useState } from 'react';
import TopBar from './TopBar';
import WalletConnect from './WalletConnect';
import { SettingOutlined } from '@ant-design/icons';
import Settings from './Settings';
import { useWallet } from '../utils/wallet';
import logo from '../assets/logo.png';
const { Header, Content, Sider } = Layout;

export default function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState('');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const { connected, wallet } = useWallet();

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header" mode="inline">
          <Row justify="center">
            <Col span={20}>
              <span>
                <Image width={14} src={logo}></Image> Samoyed Lover DEX
              </span>
            </Col>
            <Col span={2}>
              {connected && (
                <div>
                  <Popover
                    content={<Settings autoApprove={wallet?.autoApprove} />}
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
            </Col>
            <Col span={2}>
              <WalletConnect />
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <TopBar />
          </Sider>
          <Content style={{ flex: 1 }}>{children}</Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
