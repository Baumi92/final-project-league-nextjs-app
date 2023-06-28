import { Sql } from 'postgres';

export type Account = {
  id: number;
  summoner_name: string;
  userId: number;
  puuid_id: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE accounts (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      summoner_name varchar(50) NOT NULL ,
      user_id integer UNIQUE REFERENCES users (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE accounts
  `;
}
