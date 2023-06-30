export class MatchParticipantsIdentitiesPlayerDto {
  /**
   * Platform id
   */
  currentPlatformId: string | undefined;
  /**
   * Summoner name
   */
  summonerName:
    | string
    /**
     * Match history url
     */
    | undefined;
  /**
   * Match history url
   */
  matchHistoryUri: string | undefined;
  /**
   * Original platform id
   */
  platformId:
    | string
    /**
     * Player's current accountId (Encrypted)
     */
    | undefined;
  /**
   * Player's current accountId (Encrypted)
   */
  currentAccountId: string | undefined;
  /**
   * Profile icon
   */
  profileIcon: number | undefined;
  /**
   * Player's summonerId (Encrypted)
   */
  summonerId: string | undefined;
  /**
   * Player's original accountId (Encrypted)
   */
  accountId: string | undefined;
}
