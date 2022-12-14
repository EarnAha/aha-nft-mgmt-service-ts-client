export * from './asyncApi';
import { AsyncApi } from './asyncApi';
export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './emojiApi';
import { EmojiApi } from './emojiApi';
export * from './promoCodeApi';
import { PromoCodeApi } from './promoCodeApi';
export * from './stripeApi';
import { StripeApi } from './stripeApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AsyncApi, DefaultApi, EmojiApi, PromoCodeApi, StripeApi, UserApi];
