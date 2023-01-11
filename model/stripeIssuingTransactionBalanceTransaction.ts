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
import { BalanceTransactionFeeDetail } from './balanceTransactionFeeDetail';
import { BalanceTransactionType } from './balanceTransactionType';
import { StripeBalanceTransaction } from './stripeBalanceTransaction';
import { StripeBalanceTransactionSource } from './stripeBalanceTransactionSource';

/**
* ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
*/
export class StripeIssuingTransactionBalanceTransaction {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeIssuingTransactionBalanceTransaction.ObjectEnum;
    /**
    * Gross amount of the transaction, in %s.
    */
    'amount': number;
    /**
    * The date the transaction\'s net funds will become available in the Stripe balance.
    */
    'availableOn': number;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    /**
    * The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the `amount` in currency A, times `exchange_rate`, would be the `amount` in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent\'s `amount` would be `1000` and `currency` would be `eur`. Suppose this was converted into 12.34 USD in your Stripe account. Then the BalanceTransaction\'s `amount` would be `1234`, `currency` would be `usd`, and `exchange_rate` would be `1.234`.
    */
    'exchangeRate': number | null;
    /**
    * Fees (in %s) paid for this transaction.
    */
    'fee': number;
    /**
    * Detailed breakdown of fees (in %s) paid for this transaction.
    */
    'feeDetails': Array<BalanceTransactionFeeDetail>;
    /**
    * Net amount of the transaction, in %s.
    */
    'net': number;
    /**
    * [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective.
    */
    'reportingCategory': string;
    'source': StripeBalanceTransactionSource | null;
    /**
    * If the transaction\'s net funds are available in the Stripe balance yet. Either `available` or `pending`.
    */
    'status': string;
    'type': BalanceTransactionType;

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
            "type": "StripeIssuingTransactionBalanceTransaction.ObjectEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "availableOn",
            "baseName": "available_on",
            "type": "number"
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "exchangeRate",
            "baseName": "exchange_rate",
            "type": "number"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "feeDetails",
            "baseName": "fee_details",
            "type": "Array<BalanceTransactionFeeDetail>"
        },
        {
            "name": "net",
            "baseName": "net",
            "type": "number"
        },
        {
            "name": "reportingCategory",
            "baseName": "reporting_category",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "StripeBalanceTransactionSource"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BalanceTransactionType"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingTransactionBalanceTransaction.attributeTypeMap;
    }
}

export namespace StripeIssuingTransactionBalanceTransaction {
    export enum ObjectEnum {
        BALANCE_TRANSACTION = <any> 'balance_transaction'
    }
}
