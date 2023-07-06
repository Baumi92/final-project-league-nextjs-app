import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';
import SearchforPlayer from './MatchHistory';

export default async function () {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session

  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/matches');

  return (
    <>
      <h1>MatchHistoryPage</h1>
      <SearchforPlayer />
    </>
  );
}
