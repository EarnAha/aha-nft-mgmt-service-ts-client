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
import { ApiListStripeTransferReversal } from './apiListStripeTransferReversal';
import { StripeTransferBalanceTransaction } from './stripeTransferBalanceTransaction';
import { StripeTransferDestination } from './stripeTransferDestination';
import { StripeTransferDestinationPayment } from './stripeTransferDestinationPayment';
import { StripeTransferSourceTransaction } from './stripeTransferSourceTransaction';

/**
* A `Transfer` object is created when you move funds between Stripe accounts as part of Connect.  Before April 6, 2017, transfers also represented movement of funds from a Stripe account to a card or bank account. This behavior has since been split out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more information, read about the [transfer/payout split](https://stripe.com/docs/transfer-payout-split).  Related guide: [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers).
*/
export class StripeTransfer {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTransfer.ObjectEnum;
    /**
    * Amount in %s to be transferred.
    */
    'amount': number;
    /**
    * Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
    */
    'amountReversed': number;
    'balanceTransaction': StripeTransferBalanceTransaction | null;
    /**
    * Time that this record of the transfer was first created.
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
    'destination': StripeTransferDestination | null;
    'destinationPayment'?: StripeTransferDestinationPayment;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    'reversals': ApiListStripeTransferReversal;
    /**
    * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
    */
    'reversed': boolean;
    'sourceTransaction': StripeTransferSourceTransaction | null;
    /**
    * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
    */
    'sourceType'?: string;
    /**
    * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
    */
    'transferGroup': string | null;

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
            "type": "StripeTransfer.ObjectEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountReversed",
            "baseName": "amount_reversed",
            "type": "number"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "StripeTransferBalanceTransaction"
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
            "name": "destination",
            "baseName": "destination",
            "type": "StripeTransferDestination"
        },
        {
            "name": "destinationPayment",
            "baseName": "destination_payment",
            "type": "StripeTransferDestinationPayment"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "reversals",
            "baseName": "reversals",
            "type": "ApiListStripeTransferReversal"
        },
        {
            "name": "reversed",
            "baseName": "reversed",
            "type": "boolean"
        },
        {
            "name": "sourceTransaction",
            "baseName": "source_transaction",
            "type": "StripeTransferSourceTransaction"
        },
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "string"
        },
        {
            "name": "transferGroup",
            "baseName": "transfer_group",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeTransfer.attributeTypeMap;
    }
}

export namespace StripeTransfer {
    export enum ObjectEnum {
        TRANSFER = <any> 'transfer'
    }
}
