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
import { ApiListStripeFeeRefund } from './apiListStripeFeeRefund';
import { StripeApplicationFee } from './stripeApplicationFee';
import { StripeApplicationFeeAccount } from './stripeApplicationFeeAccount';
import { StripeApplicationFeeApplication } from './stripeApplicationFeeApplication';
import { StripeApplicationFeeBalanceTransaction } from './stripeApplicationFeeBalanceTransaction';
import { StripeApplicationFeeCharge } from './stripeApplicationFeeCharge';
import { StripeApplicationFeeOriginatingTransaction } from './stripeApplicationFeeOriginatingTransaction';

/**
* The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
*/
export class StripeChargeApplicationFee {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeChargeApplicationFee.ObjectEnum;
    'account': StripeApplicationFeeAccount;
    /**
    * Amount earned, in %s.
    */
    'amount': number;
    /**
    * Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
    */
    'amountRefunded': number;
    'application': StripeApplicationFeeApplication;
    'balanceTransaction': StripeApplicationFeeBalanceTransaction | null;
    'charge': StripeApplicationFeeCharge;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'originatingTransaction': StripeApplicationFeeOriginatingTransaction | null;
    /**
    * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
    */
    'refunded': boolean;
    'refunds': ApiListStripeFeeRefund;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "StripeChargeApplicationFee.ObjectEnum"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "StripeApplicationFeeAccount"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountRefunded",
            "baseName": "amount_refunded",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "StripeApplicationFeeApplication"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "StripeApplicationFeeBalanceTransaction"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "StripeApplicationFeeCharge"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "originatingTransaction",
            "baseName": "originating_transaction",
            "type": "StripeApplicationFeeOriginatingTransaction"
        },
        {
            "name": "refunded",
            "baseName": "refunded",
            "type": "boolean"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "ApiListStripeFeeRefund"
        }    ];

    static getAttributeTypeMap() {
        return StripeChargeApplicationFee.attributeTypeMap;
    }
}

export namespace StripeChargeApplicationFee {
    export enum ObjectEnum {
        APPLICATION_FEE = <any> 'application_fee'
    }
}
