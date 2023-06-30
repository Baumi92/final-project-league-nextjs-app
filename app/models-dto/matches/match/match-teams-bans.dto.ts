export class BannedChampion {
  /**
   * Turn during which the champion was banned.
   */
  pickTurn: number | undefined;
  /**
   * Banned championId.
   */
  championId:
    | number
    /**
     * The ID of the team that banned the champion
     */
    | undefined;
  /**
   * The ID of the team that banned the champion
   */
  teamId?: number;
}
