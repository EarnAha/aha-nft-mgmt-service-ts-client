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
import { RefundNextAction } from './refundNextAction';
import { RefundReason } from './refundReason';
import { StripeFeeRefundBalanceTransaction } from './stripeFeeRefundBalanceTransaction';
import { StripeRefund } from './stripeRefund';
import { StripeRefundCharge } from './stripeRefundCharge';
import { StripeRefundFailureBalanceTransaction } from './stripeRefundFailureBalanceTransaction';
import { StripeRefundPaymentIntent } from './stripeRefundPaymentIntent';
import { StripeRefundSourceTransferReversal } from './stripeRefundSourceTransferReversal';
import { StripeRefundTransferReversal } from './stripeRefundTransferReversal';

/**
* Linked payment refund for the transfer reversal.
*/
export class StripeTransferReversalDestinationPaymentRefund {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTransferReversalDestinationPaymentRefund.ObjectEnum;
    /**
    * Amount, in %s.
    */
    'amount': number;
    'balanceTransaction': StripeFeeRefundBalanceTransaction | null;
    'charge': StripeRefundCharge | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
    */
    'description'?: string;
    'failureBalanceTransaction'?: StripeRefundFailureBalanceTransaction;
    /**
    * If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
    */
    'failureReason'?: string;
    /**
    * Email to which refund instructions, if required, are sent to.
    */
    'instructionsEmail'?: string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    'nextAction'?: RefundNextAction;
    'paymentIntent': StripeRefundPaymentIntent | null;
    /**
    * Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
    */
    'reason': RefundReason | null;
    /**
    * This is the transaction number that appears on email receipts sent for this refund.
    */
    'receiptNumber': string | null;
    'sourceTransferReversal': StripeRefundSourceTransferReversal | null;
    /**
    * Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.
    */
    'status': string | null;
    'transferReversal': StripeRefundTransferReversal | null;

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
            "type": "StripeTransferReversalDestinationPaymentRefund.ObjectEnum"
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
            "name": "charge",
            "baseName": "charge",
            "type": "StripeRefundCharge"
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
            "name": "failureBalanceTransaction",
            "baseName": "failure_balance_transaction",
            "type": "StripeRefundFailureBalanceTransaction"
        },
        {
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "string"
        },
        {
            "name": "instructionsEmail",
            "baseName": "instructions_email",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "nextAction",
            "baseName": "next_action",
            "type": "RefundNextAction"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "StripeRefundPaymentIntent"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "RefundReason"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "sourceTransferReversal",
            "baseName": "source_transfer_reversal",
            "type": "StripeRefundSourceTransferReversal"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "transferReversal",
            "baseName": "transfer_reversal",
            "type": "StripeRefundTransferReversal"
        }    ];

    static getAttributeTypeMap() {
        return StripeTransferReversalDestinationPaymentRefund.attributeTypeMap;
    }
}

export namespace StripeTransferReversalDestinationPaymentRefund {
    export enum ObjectEnum {
        REFUND = <any> 'refund'
    }
}
