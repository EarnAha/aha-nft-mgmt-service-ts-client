/**
 * aha-nft-mgmt-service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PaymentMethodOptionsPix {
    /**
    * The number of seconds (between 10 and 1209600) after which Pix payment will expire.
    */
    'expiresAfterSeconds': number | null;
    /**
    * The timestamp at which the Pix expires.
    */
    'expiresAt': number | null;
    /**
    * Indicates that you intend to make future payments with this PaymentIntent\'s payment method.  Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent\'s Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.  When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
    */
    'setupFutureUsage'?: PaymentMethodOptionsPix.SetupFutureUsageEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAfterSeconds",
            "baseName": "expires_after_seconds",
            "type": "number"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "PaymentMethodOptionsPix.SetupFutureUsageEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsPix.attributeTypeMap;
    }
}

export namespace PaymentMethodOptionsPix {
    export enum SetupFutureUsageEnum {
        NONE = <any> 'none'
    }
}