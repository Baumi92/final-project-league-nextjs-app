import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';
import MatchHistoryById from './MatchHistory';
import styles from './page.module.scss';

export default async function () {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/search');

  return (
    <>
      <h1 className={styles.p}>Please go to Search SummonerName</h1>
      <MatchHistoryById matchData={undefined} />
    </>
  );
}
