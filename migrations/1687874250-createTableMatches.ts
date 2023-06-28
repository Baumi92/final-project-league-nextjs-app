import { Sql } from 'postgres';

export type Match = {
  match_id: number;
  date: string;
  champion: string;
  outcome: string;
  kills: string;
  deaths: string;
  assists: string;
  userId: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE matches (
    match_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date varchar (50) NOT NULL,
    champion varchar (50) NOT NULL,
    outcome varchar (50) NOT NULL,
    kills varchar (50) NOT NULL,
    deaths varchar (50) NOT NULL,
    assists varchar (50) NOT NULL,
    user_id integer UNIQUE REFERENCES users (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE matches
  `;
}
