import { MatchParticipantsIdentitiesPlayerDto } from './match-participants-identities-player.dto';

export class MatchParticipantsIdentitiesDto {
  /**
   * Player information
   */
  player: MatchParticipantsIdentitiesPlayerDto | undefined;
  /**
   * Participant id
   */
  participantId: number | undefined;
}
