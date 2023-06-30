import { MatchParticipantDTO } from './match-participant.dto';
import { MatchParticipantsIdentitiesDto } from './match-participantsIdentities.dto';
import { MatchTeamsDto } from './match-teams.dto';

/**
 * Match dto
 */
export class MatchDto {
  /**
   * Please refer to the Game Constants documentation.
   */
  seasonId: number | undefined;
  /**
   * Please refer to the Game Constants documentation.
   */
  queueId: number | undefined;
  /**
   * Game id
   */
  gameId:
    | number
    /**
     * Participant identity information.
     */
    | undefined;
  /**
   * Participant identity information.
   */
  participantIdentities: MatchParticipantsIdentitiesDto[] | undefined;
  /**
   * The major.minor version typically indicates the patch the match was played on.
   */
  gameVersion:
    | string
    /**
     * Platform where the match was played.
     */
    | undefined;
  /**
   * Platform where the match was played.
   */
  platformId:
    | string
    /**
     * Please refer to the Game Constants documentation.
     */
    | undefined;
  /**
   * Please refer to the Game Constants documentation.
   */
  gameMode:
    | string
    /**
     * Please refer to the Game Constants documentation.
     */
    | undefined;
  /**
   * Please refer to the Game Constants documentation.
   */
  mapId: number | undefined;
  /**
   * Please refer to the Game Constants documentation.
   */
  gameType: string | undefined;
  /**
   * Team information.
   */
  teams: MatchTeamsDto[] | undefined;
  /**
   * Participant information.
   */
  participants: MatchParticipantDTO[] | undefined;
  /**
   * Match duration in seconds.
   */
  gameDuration: number | undefined;
  /**
   * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.
   */
  gameCreation: number | undefined;
  /**
   * Remake
   */
  remake: boolean | undefined;
}
