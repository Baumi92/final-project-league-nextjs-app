import { BannedChampion } from './match-teams-bans.dto';

export class MatchTeamsDto {
  /**
   * Flag indicating whether or not the team scored the first Dragon kill.
   */
  firstDragon: boolean | undefined;
  /**
   * Flag indicating whether or not the team destroyed the first inhibitor.
   */
  firstInhibitor:
    | boolean
    /**
     * If match queueId has a draft, contains banned champion data, otherwise empty.
     */
    | undefined;
  /**
   * If match queueId has a draft, contains banned champion data, otherwise empty.
   */
  bans: BannedChampion[] | undefined;
  /**
   * Number of times the team killed Baron.
   */
  baronKills:
    | number
    /**
     * Flag indicating whether or not the team scored the first Rift Herald kill.
     */
    | undefined;
  /**
   * Flag indicating whether or not the team scored the first Rift Herald kill.
   */
  firstRiftHerald:
    | boolean
    /**
     * Flag indicating whether or not the team scored the first Baron kill.
     */
    | undefined;
  /**
   * Flag indicating whether or not the team scored the first Baron kill.
   */
  firstBaron:
    | boolean
    /**
     * Number of times the team killed Rift Herald
     */
    | undefined;
  /**
   * Number of times the team killed Rift Herald
   */
  riftHeraldKills:
    | number
    /**
     * Flag indicating whether or not the team scored the first blood.
     */
    | undefined;
  /**
   * Flag indicating whether or not the team scored the first blood.
   */
  firstBlood:
    | boolean
    /**
     * 100 for blue side. 200 for red side.
     */
    | undefined;
  /**
   * 100 for blue side. 200 for red side.
   */
  teamId: number | undefined;
  /**
   * Flag indicating whether or not the team destroyed the first tower.
   */
  firstTower: boolean | undefined;
  /**
   * Number of times the team killed Vilemaw.
   */
  vilemawKills!: number;
  /**
   * Number of inhibitors the team destroyed.
   */
  inhibitorKills: number | undefined;
  /**
   * Number of towers the team destroyed.
   */
  towerKills: number | undefined;
  /**
   * For Dominion matches, specifies the points the team had at game end.
   */
  dominionVictoryScore: number | undefined;
  /**
   * Boolean win
   */
  win: boolean | undefined;
  /**
   * Number of times the team killed Dragon.
   */
  dragonKills: number | undefined;
}
