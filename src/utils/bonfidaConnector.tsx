import {BonfidaTrade, Volume} from './types';

export default class BonfidaApi {
  static URL: string = 'https://samoyedlovers.herokuapp.com/';

  static async get(path: string) {
    try {
      const response = await fetch(this.URL + path);
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.success ? responseJson.data : null;
      }
    } catch (err) {
      console.log(`Error fetching from Bonfida API ${path}: ${err}`);
    }
    return null;
  }

  static async getRecentTrades(
      marketAddress: string,
  ): Promise<BonfidaTrade[] | null> {
    return BonfidaApi.get(`trades/address/${marketAddress}`);
  }

  static async getRecentVolumes(
      marketAddress: string,
  ): Promise<Volume[] | null> {
    return BonfidaApi.get(`pools/volumes`);
  }
}

export const BONFIDA_DATA_FEED = 'https://samoyedlovers.herokuapp.com/tv';
