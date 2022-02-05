import {BonfidaTrade, Volume} from './types';

export default class BonfidaApi {
  static URL: string = 'http://152.70.129.188/';

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

export const BONFIDA_DATA_FEED = 'http://152.70.129.188/tv';
