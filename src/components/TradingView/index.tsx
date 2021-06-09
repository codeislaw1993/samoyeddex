import * as React from 'react';
import './index.css';
import {
  widget,
  ChartingLibraryWidgetOptions,
  IChartingLibraryWidget,
  ResolutionString,
} from '../../charting_library'; // Make sure to follow step 1 of the README
import {DEFAULT_MARKET, useMarket} from '../../utils/markets';
import { BONFIDA_DATA_FEED } from '../../utils/bonfidaConnector';
import { findTVMarketFromAddress } from '../../utils/tradingview';
import {useLocalStorageState} from "../../utils/utils";
import {useState} from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

// This is a basic example of how to create a TV widget
// You can add more feature such as storing charts in localStorage

export interface ChartContainerProps {
  symbol: ChartingLibraryWidgetOptions['symbol'];
  interval: ChartingLibraryWidgetOptions['interval'];
  datafeedUrl: string;
  libraryPath: ChartingLibraryWidgetOptions['library_path'];
  chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'];
  chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'];
  clientId: ChartingLibraryWidgetOptions['client_id'];
  userId: ChartingLibraryWidgetOptions['user_id'];
  fullscreen: ChartingLibraryWidgetOptions['fullscreen'];
  autosize: ChartingLibraryWidgetOptions['autosize'];
  height: ChartingLibraryWidgetOptions['height'];
  studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides'];
  containerId: ChartingLibraryWidgetOptions['container_id'];
  theme: string;
}

export interface ChartContainerState {}

export const TVChartContainer = () => {
  // @ts-ignore
  const defaultProps: ChartContainerProps = {
    symbol: 'BTC/USDC',
    interval: '1' as ResolutionString,
    theme: 'Dark',
    containerId: 'tv_chart_container',
    datafeedUrl: BONFIDA_DATA_FEED,
    libraryPath: '/charting_library/',
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
  };

  const tvWidgetRef = React.useRef<IChartingLibraryWidget | null>(null);
  const { market } = useMarket();
  const [ oldMarket, setOldMarket ] = useState<String>("");
  const [ oldTheme, setOldTheme ] = useState<string | undefined>("");
  const { currentTheme } = useThemeSwitcher();

  const [marketAddress] = useLocalStorageState(
      'marketAddress',
      DEFAULT_MARKET?.address.toBase58(),
  );

  React.useEffect(() => {
    const marketName = findTVMarketFromAddress(marketAddress || '');

    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: marketName as string,
      // BEWARE: no trailing slash is expected in feed URL
      // tslint:disable-next-line:no-any
      datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
        defaultProps.datafeedUrl,
      ),
      interval: defaultProps.interval as ChartingLibraryWidgetOptions['interval'],
      container_id: defaultProps.containerId as ChartingLibraryWidgetOptions['container_id'],
      library_path: defaultProps.libraryPath as string,
      locale: 'en',
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      load_last_chart: true,
      client_id: defaultProps.clientId,
      user_id: defaultProps.userId,
      fullscreen: defaultProps.fullscreen,
      autosize: defaultProps.autosize,
      height: defaultProps.height,
      studies_overrides: defaultProps.studiesOverrides,
      theme: currentTheme === 'dark' ? 'Dark' : 'Light'
    };

    if (oldMarket !== marketName || oldTheme !== currentTheme) {
      const tvWidget = new widget(widgetOptions);
      tvWidgetRef.current = tvWidget;
    }

    setOldMarket(marketName);
    setOldTheme(currentTheme);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market, currentTheme]);

  return <div id={defaultProps.containerId} className="tradingview-chart" />;
};
