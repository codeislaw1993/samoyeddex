import { Layout } from 'antd';
import React, { useState } from 'react';
import TopBar from './TopBar';
const { Header, Content, Footer, Sider } = Layout;

export default function BasicLayout({ children }) {
  const [collapsed, setCollapsed] = useState('');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <TopBar />
        </Sider>
        <Content style={{ flex: 1 }}>{children}</Content>
      </Layout>
    </React.Fragment>
  );
}
