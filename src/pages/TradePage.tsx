import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Popover, Row, Menu } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
import {
  getMarketInfos,
  getTradePageUrl,
  MarketProvider,
  useMarket,
  useMarketsList, useRecentVolumes,
} from '../utils/markets';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
//import { TVChartContainer } from '../components/TradingView';
import DeprecatedMarketsInstructions from '../components/DeprecatedMarketsInstructions';
import {
  InfoCircleOutlined,
} from '@ant-design/icons';
import CustomMarketDialog from '../components/CustomMarketDialog';
import { notify } from '../utils/notifications';
import { useHistory, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Avatar } from 'antd';
import {TVChartContainer} from "../components/TradingView";
import FloatingElement from "../components/layout/FloatingElement";

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
    document.title = marketName ? `${marketName} — Samoyed Lover DEX` : 'Samoyed Lover DEX';
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
            <Col span={width < 1000 ? 24 : 5}>
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
            <Col span={width < 1000 ? 24 : 19}>
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
  const { setMarketAddress } = useMarket();
  const [volumes, loaded] = useRecentVolumes();

  const onSetMarketAddress = (marketAddress) => {
    setHandleDeprecated(false);
    setMarketAddress(marketAddress);
  };

  const extractBase = (a) => a.split('/')[0];
  const extractQuote = (a) => a.split('/')[1];
  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
        <Menu style={{
              paddingRight: '5px',
              overflowY: 'scroll',
              marginTop: '5px',
              height: '85vh',
              border: '1px solid #E0E0FB',
              borderRadius: '15px'
            }} mode="inline"
            defaultSelectedKeys={['1']} >
          <Menu.Item disabled>
            <b>Click a pair below: </b>
          </Menu.Item>
          <Menu.Item disabled
                     style={{
                       // @ts-ignore
                       backgroundColor: null,
                       height: '80px'
                     }}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <div>Name</div>
              <div>%(24hr)</div>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <div>Vol(24hr)</div>
              <div>$</div>
            </div>
          </Menu.Item>
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
                  height: '80px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  margin: '0px'
                }}
                class="marketSelectorListItem"
                icon={
                  <Row>
                    <Col span={24}>
                      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', }}>
                        <div>
                          <Avatar  style={{ marginRight: "-7px", zIndex: 10}} size="small" src={encodeURI(baseUrl)}/>
                          <Avatar size="small" src={encodeURI(quoteUrl)}/>
                           {' ' + name}
                        </div>
                        <div>
                          {!!volumes && loaded ?
                            (Math.round(
                                (volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0] -
                                    volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0])
                                / volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0]
                                * 10000.0
                            ) / 100.0) >= 0 ?
                                <span style={{color: '#2abdd2'}}>
                                    +{(Math.round(
                                    (volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0] -
                                        volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0])
                                    / volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0]
                                    * 10000.0
                                ) / 100.0)} %
                                  </span>
                                :
                                <span style={{color: 'rgb(242, 59, 105)'}}>
                                    {(Math.round(
                                        (volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0] -
                                            volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0])
                                        / volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0]
                                        * 10000.0
                                    ) / 100.0)} %
                                  </span>
                             : <span></span>
                          }
                        </div>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                          {!!volumes && loaded ? (
                              <span style={{color: ''}}>
                                {addCommas(Number((volumes.filter(v => v.m === address.toBase58()).reduce(v => v).v[0] * volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0] )?.toPrecision(4))) + ' ' + extractQuote(name) }
                              </span>
                          ) : ''
                          }
                        </div>
                        <div>
                          {!!volumes && loaded ? (
                              (
                                  Math.round(
                                  (volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0] -
                                      volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0])
                                  / volumes.filter(v => v.m === address.toBase58()).reduce(v => v).o[0]
                                  * 10000.0) / 100.0
                              ) >= 0 ?
                                  <span style={{color: ''}}>
                                    $ {Number((volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0])?.toPrecision(3))}
                                  </span> :
                                  <span style={{color: ''}}>
                                    $ {Number((volumes.filter(v => v.m === address.toBase58()).reduce(v => v).c[0])?.toPrecision(3))}
                                  </span>
                            ) : ''
                          }
                        </div>
                      </div>
                    </Col>
                  </Row>
                }
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
          <Col span={18} style={{ height: '100%' }}>
            <Row>
              <Col span={24}>
                <FloatingElement style={{height: '400px'}}>
                  <TVChartContainer />
                </FloatingElement>
              </Col>
              <Col span={12}>
                <TradeForm setChangeOrderRef={onChangeOrderRef} />
              </Col>
              <Col span={12}>
                <StandaloneBalancesDisplay />
              </Col>
              <Col span={24}>
                <UserInfoTable />
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ height: '100%' }}>
            <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
            <TradesTable smallScreen={false} />
          </Col>
      </Row>
  );
};

const RenderSmall = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <FloatingElement style={{height: '400px'}}>
            <TVChartContainer />
          </FloatingElement>
        </Col>
        <Col span={12} style={{ height: '100%' }}>
          <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
          <TradesTable smallScreen={false} />
        </Col>
        <Col span={12} style={{ height: '100%'}}>
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <StandaloneBalancesDisplay />
        </Col>
        <Col span={24} style={{height: '100%'}}>
          <UserInfoTable />
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
    </>
  );
};
