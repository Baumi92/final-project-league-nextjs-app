import METHOD_NAMES from 'Enums/method-names';
import { struct } from 'superstruct';

export const DEFAULT_KAYN_CONFIG = {
  region: 'EUROPE',
  locale: 'EUW1',
  apiURLPrefix: 'https://euw1.api.riotgames.com',
  debugOptions: {
    isEnabled: true,
    showKey: false,
    loggers: {},
  },
  requestOptions: {
    shouldRetry: true,
    numberOfRetriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
    burst: false,
    shouldExitOn403: false,
  },
  cacheOptions: {
    cache: null,
    timeToLives: {
      useDefault: false,
      byGroup: {},
      byMethod: {},
    },
    ttls: {} /* The final ttls object after processing the above config. It overwrites the rest of ttls for backwards-compatibility's sake. */,
  },
};

const ttlsValidator = {};
Object.keys(METHOD_NAMES).forEach((s) => {
  Object.keys(METHOD_NAMES[s]).forEach(
    (t) => (ttlsValidator[METHOD_NAMES[s][t]] = 'number?'),
  );
});

const byGroupValidator = {};
Object.keys(METHOD_NAMES).forEach((groupName) => {
  byGroupValidator[groupName] = 'number?';
});

export const KAYN_CONFIG_STRUCT = struct({
  region: 'string',
  locale: 'string',
  apiURLPrefix: 'string',
  debugOptions: {
    isEnabled: 'boolean',
    showKey: 'boolean',
    loggers: 'any',
  },
  requestOptions: {
    shouldRetry: 'boolean',
    numberOfRetriesBeforeAbort: 'number',
    delayBeforeRetry: 'number',
    burst: 'boolean',
    shouldExitOn403: 'boolean',
  },
  cacheOptions: {
    cache: 'any',
    ttls: ttlsValidator,
    timeToLives: {
      useDefault: 'boolean',
      byGroup: byGroupValidator,
      byMethod: ttlsValidator,
    },
  },
  key: 'string',
});
