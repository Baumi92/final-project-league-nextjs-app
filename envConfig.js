import { config } from 'dotenv';

config();

export const env = {
  RIOT_API_KEY: process.env.RIOT_API_KEY,
};
