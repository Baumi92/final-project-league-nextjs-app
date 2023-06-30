import { MiniSeriesDTO } from '../summoner-league/miniseries.dto';

export class LeagueEntryDTO {
  queueType: string | undefined;
  summonerName: string | undefined;
  hotStreak: boolean | undefined;
  miniSeries: MiniSeriesDTO | undefined;
  /**
   * Winning team on Summoners Rift. First placement in Teamfight Tactics.
   */
  wins: number | undefined;
  veteran:
    | boolean
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    | undefined;
  /**
   * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
   */
  losses: number | undefined;
  rank: string | undefined;
  leagueId: string | undefined;
  inactive: boolean | undefined;
  freshBlood: boolean | undefined;
  tier: string | undefined;
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId: string | undefined;
  leaguePoints: number | undefined;
}
