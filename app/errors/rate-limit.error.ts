import { TOO_MANY_REQUESTS } from 'http-status-codes';
import * as _ from 'lodash';
import { RateLimitDto } from '../models-dto/rate-limit/rate-limit.dto';
import { IErrors } from './';

const message = 'Rate limit error';

/**
 * Rate limit error
 */
export class RateLimitError extends Error implements IErrors {
  readonly status: number = TOO_MANY_REQUESTS;
  readonly rateLimits: RateLimitDto;

  constructor(rateLimits: RateLimitDto) {
    super(message);
    this.rateLimits = rateLimits;
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}
