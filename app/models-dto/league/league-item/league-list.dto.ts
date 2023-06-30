import { LeagueItemDTO } from './league-item.dto';

export class LeagueListDTO {
  leagueId: string | undefined;
  tier: string | undefined;
  entries: LeagueItemDTO[] | undefined;
  queue: string | undefined;
  name: string | undefined;
}
