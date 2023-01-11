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
import { CashBalanceSettings } from './cashBalanceSettings';

/**
* The current funds being held by Stripe on behalf of the customer. These funds can be applied towards payment intents with source \"cash_balance\". The settings[reconciliation_mode] field describes whether these funds are applied to such payment intents manually or automatically.
*/
export class StripeCustomerCashBalance {
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeCustomerCashBalance.ObjectEnum;
    /**
    * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'available': { [key: string]: number; } | null;
    /**
    * The ID of the customer whose cash balance this object represents.
    */
    'customer': string;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'settings': CashBalanceSettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "StripeCustomerCashBalance.ObjectEnum"
        },
        {
            "name": "available",
            "baseName": "available",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "CashBalanceSettings"
        }    ];

    static getAttributeTypeMap() {
        return StripeCustomerCashBalance.attributeTypeMap;
    }
}

export namespace StripeCustomerCashBalance {
    export enum ObjectEnum {
        CASH_BALANCE = <any> 'cash_balance'
    }
}
