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
import { StripeIssuingTransaction } from './stripeIssuingTransaction';
import { StripeIssuingTransactionAmountDetails } from './stripeIssuingTransactionAmountDetails';
import { StripeIssuingTransactionAuthorization } from './stripeIssuingTransactionAuthorization';
import { StripeIssuingTransactionBalanceTransaction } from './stripeIssuingTransactionBalanceTransaction';
import { StripeIssuingTransactionCard } from './stripeIssuingTransactionCard';
import { StripeIssuingTransactionCardholder } from './stripeIssuingTransactionCardholder';
import { StripeIssuingTransactionDispute } from './stripeIssuingTransactionDispute';
import { StripeIssuingTransactionPurchaseDetails } from './stripeIssuingTransactionPurchaseDetails';
import { StripeIssuingTransactionTreasury } from './stripeIssuingTransactionTreasury';
import { TransactionMerchantData } from './transactionMerchantData';
import { TransactionType } from './transactionType';
import { TransactionWallet } from './transactionWallet';

/**
* The transaction being disputed.
*/
export class StripeIssuingDisputeTransaction {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeIssuingDisputeTransaction.ObjectEnum;
    /**
    * The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'amount': number;
    'amountDetails': StripeIssuingTransactionAmountDetails | null;
    'authorization': StripeIssuingTransactionAuthorization | null;
    'balanceTransaction': StripeIssuingTransactionBalanceTransaction | null;
    'card': StripeIssuingTransactionCard;
    'cardholder': StripeIssuingTransactionCardholder | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'dispute': StripeIssuingTransactionDispute | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
    */
    'merchantAmount': number;
    /**
    * The currency with which the merchant is taking payment.
    */
    'merchantCurrency': string;
    'merchantData': TransactionMerchantData;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    'purchaseDetails': StripeIssuingTransactionPurchaseDetails | null;
    'treasury'?: StripeIssuingTransactionTreasury | null;
    'type': TransactionType;
    /**
    * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
    */
    'wallet': TransactionWallet | null;

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
            "type": "StripeIssuingDisputeTransaction.ObjectEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountDetails",
            "baseName": "amount_details",
            "type": "StripeIssuingTransactionAmountDetails"
        },
        {
            "name": "authorization",
            "baseName": "authorization",
            "type": "StripeIssuingTransactionAuthorization"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "StripeIssuingTransactionBalanceTransaction"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "StripeIssuingTransactionCard"
        },
        {
            "name": "cardholder",
            "baseName": "cardholder",
            "type": "StripeIssuingTransactionCardholder"
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
            "name": "dispute",
            "baseName": "dispute",
            "type": "StripeIssuingTransactionDispute"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "merchantAmount",
            "baseName": "merchant_amount",
            "type": "number"
        },
        {
            "name": "merchantCurrency",
            "baseName": "merchant_currency",
            "type": "string"
        },
        {
            "name": "merchantData",
            "baseName": "merchant_data",
            "type": "TransactionMerchantData"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "purchaseDetails",
            "baseName": "purchase_details",
            "type": "StripeIssuingTransactionPurchaseDetails"
        },
        {
            "name": "treasury",
            "baseName": "treasury",
            "type": "StripeIssuingTransactionTreasury"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionType"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "TransactionWallet"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingDisputeTransaction.attributeTypeMap;
    }
}

export namespace StripeIssuingDisputeTransaction {
    export enum ObjectEnum {
        ISSUING_TRANSACTION = <any> 'issuing.transaction'
    }
}
