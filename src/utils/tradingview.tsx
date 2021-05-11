import {USE_MARKETS} from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  var marketName = 'SAMO/USDC';
  for (var i = 0; i < USE_MARKETS.length; i++) {
    var market = USE_MARKETS[i];
    if (market.address.toBase58().trim().localeCompare(marketAddressString) === 0) {
      console.log(market.name);
      marketName = market.name;
    }
  }
  return marketName;
};
