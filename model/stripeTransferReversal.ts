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
import { StripeFeeRefundBalanceTransaction } from './stripeFeeRefundBalanceTransaction';
import { StripeTransferReversalDestinationPaymentRefund } from './stripeTransferReversalDestinationPaymentRefund';
import { StripeTransferReversalSourceRefund } from './stripeTransferReversalSourceRefund';
import { StripeTransferReversalTransfer } from './stripeTransferReversalTransfer';

/**
* [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a connected account, either entirely or partially, and can also specify whether to refund any related application fees. Transfer reversals add to the platform\'s balance and subtract from the destination account\'s balance.  Reversing a transfer that was made for a [destination charge](https://stripe.com/docs/connect/destination-charges) is allowed only up to the amount of the charge. It is possible to reverse a [transfer_group](https://stripe.com/docs/connect/charges-transfers#transfer-options) transfer only if the destination account has enough balance to cover the reversal.  Related guide: [Reversing Transfers](https://stripe.com/docs/connect/charges-transfers#reversing-transfers).
*/
export class StripeTransferReversal {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTransferReversal.ObjectEnum;
    /**
    * Amount, in %s.
    */
    'amount': number;
    'balanceTransaction': StripeFeeRefundBalanceTransaction | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'destinationPaymentRefund': StripeTransferReversalDestinationPaymentRefund | null;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    'sourceRefund': StripeTransferReversalSourceRefund | null;
    'transfer': StripeTransferReversalTransfer;

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
            "type": "StripeTransferReversal.ObjectEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "StripeFeeRefundBalanceTransaction"
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
            "name": "destinationPaymentRefund",
            "baseName": "destination_payment_refund",
            "type": "StripeTransferReversalDestinationPaymentRefund"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "sourceRefund",
            "baseName": "source_refund",
            "type": "StripeTransferReversalSourceRefund"
        },
        {
            "name": "transfer",
            "baseName": "transfer",
            "type": "StripeTransferReversalTransfer"
        }    ];

    static getAttributeTypeMap() {
        return StripeTransferReversal.attributeTypeMap;
    }
}

export namespace StripeTransferReversal {
    export enum ObjectEnum {
        TRANSFER_REVERSAL = <any> 'transfer_reversal'
    }
}