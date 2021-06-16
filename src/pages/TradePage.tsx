import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Popover, Row, List, Menu } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import {
  getMarketInfos,
  getTradePageUrl,
  MarketProvider,
  useMarket,
  useMarketsList,
} from '../utils/markets';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
//import { TVChartContainer } from '../components/TradingView';
import DeprecatedMarketsInstructions from '../components/DeprecatedMarketsInstructions';
import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import CustomMarketDialog from '../components/CustomMarketDialog';
import { notify } from '../utils/notifications';
import { useHistory, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import FloatingElement from "../components/layout/FloatingElement";
import { Avatar } from 'antd';
import {TVChartContainer} from "../components/TradingView";
import Sider from "antd/lib/layout/Sider";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function TradePage() {
  const { marketAddress } = useParams();
  useEffect(() => {
    if (marketAddress) {
      localStorage.setItem('marketAddress', JSON.stringify(marketAddress));
    }
  }, [marketAddress]);
  const history = useHistory();
  function setMarketAddress(address) {
    history.push(getTradePageUrl(address));
  }

  return (
    <MarketProvider
      marketAddress={marketAddress}
      setMarketAddress={setMarketAddress}
    >
      <TradePageInner />
    </MarketProvider>
  );
}

function TradePageInner() {
  const {
    market,
    marketName,
    customMarkets,
    setCustomMarkets,
    setMarketAddress,
  } = useMarket();
  const markets = useMarketsList();
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  const [addMarketVisible, setAddMarketVisible] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    document.title = marketName ? `${marketName} — SAMO DEX` : 'SAMO DEX';
  }, [marketName]);

  const changeOrderRef = useRef<
    ({ size, price }: { size?: number; price?: number }) => void
  >();

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
  const componentProps = {
    onChangeOrderRef: (ref) => (changeOrderRef.current = ref),
    onPrice: useCallback(
      (price) => changeOrderRef.current && changeOrderRef.current({ price }),
      [],
    ),
    onSize: useCallback(
      (size) => changeOrderRef.current && changeOrderRef.current({ size }),
      [],
    ),
  };
  const component = (() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    } else if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else if (width < 1400) {
      return <RenderSmall {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  })();

  const onAddCustomMarket = (customMarket) => {
    const marketInfo = getMarketInfos(customMarkets).some(
      (m) => m.address.toBase58() === customMarket.address,
    );
    if (marketInfo) {
      notify({
        message: `A market with the given ID already exists`,
        type: 'error',
      });
      return;
    }
    const newCustomMarkets = [...customMarkets, customMarket];
    setCustomMarkets(newCustomMarkets);
    setMarketAddress(customMarket.address);
  };

  const onDeleteCustomMarket = (address) => {
    const newCustomMarkets = customMarkets.filter((m) => m.address !== address);
    setCustomMarkets(newCustomMarkets);
  };

  return (
    <>
      <CustomMarketDialog
        visible={addMarketVisible}
        onClose={() => setAddMarketVisible(false)}
        onAddCustomMarket={onAddCustomMarket}
      />
      <Wrapper>
          <Row>
            <Col span={width < 1000 ? 24 : 4}>
              <h4 style={{paddingLeft: '10px'}}>Click a pair below: </h4>
              <MarketSelector
                markets={markets}
                setHandleDeprecated={setHandleDeprecated}
                placeholder={'Select market'}
                customMarkets={customMarkets}
                onDeleteCustomMarket={onDeleteCustomMarket}
              />
            {market ? (
              <Popover
                  content={<LinkAddress address={market.publicKey.toBase58()} />}
                  placement="bottomRight"
                  title="Market address"
                  trigger="click"
              >
                <InfoCircleOutlined style={{ color: '#2abdd2',  marginLeft: '5px' }} />
              </Popover>
            ) : null}
          </Col>
            <Col span={width < 1000 ? 24 : 20}>
              {component}
            </Col>
        </Row>
      </Wrapper>
    </>
  );
}

function MarketSelector({
  markets,
  placeholder,
  setHandleDeprecated,
  customMarkets,
  onDeleteCustomMarket,
}) {
  const { market, setMarketAddress } = useMarket();

  const onSetMarketAddress = (marketAddress) => {
    setHandleDeprecated(false);
    setMarketAddress(marketAddress);
  };

  const extractBase = (a) => a.split('/')[0];
  const extractQuote = (a) => a.split('/')[1];

  return (
        <Menu style={{
              marginRight: '-20px',
              paddingRight: '5px',
              overflowY: 'scroll',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              maxHeight: '90%',
            }} mode="inline"
            defaultSelectedKeys={['1']} >
          {markets
            .sort((a, b) =>
              extractQuote(a.name) === 'USDT' && extractQuote(b.name) !== 'USDT'
                ? -1
                : extractQuote(a.name) !== 'USDT' &&
                  extractQuote(b.name) === 'USDT'
                ? 1
                : 0,
            )
            .sort((a, b) =>
              extractBase(a.name) < extractBase(b.name)
                ? -1
                : extractBase(a.name) > extractBase(b.name)
                ? 1
                : 0,
            )
            .map(({ address, name, deprecated, quoteUrl, baseUrl }, i) => (
              <Menu.Item
                value={address.toBase58()}
                key={nanoid()}
                name={name}
                style={{
                  // @ts-ignore
                  backgroundColor: null,
                }}
                class="marketSelectorListItem"
                icon={
                  <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                    {name}
                    <div>
                      <Avatar size="small" src={encodeURI(baseUrl)}/>
                      <Avatar size="small" src={encodeURI(quoteUrl)}/>
                    </div>
                  </div>}
                onClick={() => { onSetMarketAddress(address.toBase58()) }}
              >
              </Menu.Item>
            ))}
        </Menu>
  );
}

const DeprecatedMarketsPage = ({ switchToLiveMarkets }) => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <DeprecatedMarketsInstructions
            switchToLiveMarkets={switchToLiveMarkets}
          />
        </Col>
      </Row>
    </>
  );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
      <Row>
          <Col span={12}>
            <TVChartContainer />
            <UserInfoTable />
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
            <TradesTable smallScreen={false} />
          </Col>
          <Col span={6} style={{ height: '100%'}}>
            <TradeForm setChangeOrderRef={onChangeOrderRef} />
            <StandaloneBalancesDisplay />
          </Col>
      </Row>
  );
};

const RenderSmall = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <TVChartContainer />
        </Col>
      </Row>
      <Row>
        <UserInfoTable />
      </Row>
      <Row>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <Orderbook
            smallScreen={true}
            depth={13}
            onPrice={onPrice}
            onSize={onSize}
          />
        </Col>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <TradesTable smallScreen={true} />
        </Col>
        <Col
          flex="400px"
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
    </>
  );
};

const RenderSmaller = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <TVChartContainer />
        </Col>
      </Row>
      <Row>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <Orderbook smallScreen={true} onPrice={onPrice} onSize={onSize} />
        </Col>
      </Row>
      <Row>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <TradeForm style={{ flex: 1 }} setChangeOrderRef={onChangeOrderRef} />
        </Col>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
      <Row>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <UserInfoTable />
        </Col>
      </Row>
    </>
  );
};
