import BalancesTable from './BalancesTable';
import OpenOrderTable from './OpenOrderTable';
import React from 'react';
import { Tabs, Typography } from 'antd';
import FillsTable from './FillsTable';
import FloatingElement from '../layout/FloatingElement';
import { useOpenOrders, useBalances } from '../../utils/markets';

const { Paragraph } = Typography;
const { TabPane } = Tabs;

export default function Index() {
  return (
    <FloatingElement style={{ flex: '1 1 auto', paddingTop: 20 }}>
      <Typography>
        <Paragraph class="userInfoTableParagraph">
          Make sure to go to Balances and click Settle to send out your funds.
        </Paragraph>
        <Paragraph class="userInfoTableParagraph">
          To fund your wallet, <a href="https://www.sollet.io">sollet.io</a>.
          You can get SOL from FTX, Binance, BitMax, and others. You can get
          other tokens from FTX.{' '}
        </Paragraph>
      </Typography>
      <Tabs defaultActiveKey="orders">
        <TabPane tab="Open Orders" key="orders">
          <OpenOrdersTab />
        </TabPane>
        <TabPane tab="Recent Trade" key="fills">
          <FillsTable />
        </TabPane>
        <TabPane tab="Balances" key="balances">
          <BalancesTab />
        </TabPane>
      </Tabs>
    </FloatingElement>
  );
}

const OpenOrdersTab = () => {
  const openOrders = useOpenOrders();

  return <OpenOrderTable openOrders={openOrders} />;
};

const BalancesTab = () => {
  const balances = useBalances();

  return <BalancesTable balances={balances} />;
};
