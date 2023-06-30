import { BaseApiLol } from './base/base.api.lol';
import { DataDragonService } from './dataDragon/DataDragonService';
import { LeagueApi } from './league/league';
import { MatchApi } from './match/match';
import { MatchV5Api } from './match/match-v5';
import { SeedApi } from './seed/seed';
import { SummonerApi } from './summoner/summoner';
import { ThirdPartyCode } from './thirdPartyCode/thirdPartyCode';

/**
 * Classic league of legends api
 */
export class LolApi extends BaseApiLol {
  /**
   * Match methods
   * @deprecated use v5 instead
   */
  public readonly Match = new MatchApi(this.getParam());
  /**
   * MatchV5 methods
   */
  public readonly MatchV5 = new MatchV5Api(this.getParam());
  /**
   * League methods
   */
  public readonly League = new LeagueApi(this.getParam());
  /**
   * Summoner methods
   */
  public readonly Summoner = new SummonerApi(this.getParam());
  /**
   * Third Party methods
   */
  public readonly ThirdPartyCode = new ThirdPartyCode(this.getParam());
  /**
   * Champion mastery

  /**
   * Data dragon
   */
  public readonly DataDragon = new DataDragonService();
  /**
   * Seed methods
   */
  public readonly Seed = new SeedApi();
}
