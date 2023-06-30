import { MiniSeriesDTO } from '../summoner-league/miniseries.dto';

export class LeagueItemDTO {
  summonerName: string | undefined;
  hotStreak: boolean | undefined;
  miniSeries: MiniSeriesDTO | undefined;
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins: number | undefined;
  veteran: boolean | undefined;
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses: number | undefined;
  freshBlood: boolean | undefined;
  inactive: boolean | undefined;
  rank: string | undefined;
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId: string | undefined;
  leaguePoints: number | undefined;
}
