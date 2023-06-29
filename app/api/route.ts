import { SummonerApi } from './lol/summoner/summoner';

export class LolApi extends BaseApiLol {


public readonly Summoner = new SummonerApi(this.getParam())
