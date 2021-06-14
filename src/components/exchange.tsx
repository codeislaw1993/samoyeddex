import React from "react";
import { Card } from "antd";
import { TradeEntry } from "./trade";
import { AddToLiquidity } from "./pool/add";
import { useHistory, useLocation } from "react-router-dom";

export const ExchangeView = (props: {}) => {
  const tabStyle: React.CSSProperties = { width: 120 };
  const tabList = [
    {
      key: "trade",
      tab: <div style={tabStyle}>Swap</div>,
      render: () => {
        return <TradeEntry />;
      },
    },
    {
      key: "pool",
      tab: <div style={tabStyle}>Add Liquidity</div>,
      render: () => {
        return <AddToLiquidity />;
      },
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const activeTab = location.pathname.indexOf("add") < 0 ? "trade" : "pool";

  const handleTabChange = (key: any) => {
    if (activeTab !== key) {
      if (key === "trade") {
        history.push("/trade");
      } else {
        history.push("/add");
      }
    }
  };

  return (
    <div style={{
      display: 'table',
      position: 'absolute',
      top: 50,
      left: 0,
      height: '100%',
      width: '100%'}}>
      <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
        <Card
          className="exchange-card"
          style={{marginLeft: 'auto', width: '500px', marginRight: 'auto'}}
          tabList={tabList}
          tabProps={{
            tabBarGutter: 0,
          }}
          activeTabKey={activeTab}
          onTabChange={(key) => {
            handleTabChange(key);
          }}
        >
          {tabList.find((t) => t.key === activeTab)?.render()}
        </Card>
      </div>
    </div>
  );
};
