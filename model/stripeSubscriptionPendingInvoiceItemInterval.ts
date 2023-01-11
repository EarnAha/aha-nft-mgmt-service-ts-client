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
import { PendingInvoiceItemIntervalInterval } from './pendingInvoiceItemIntervalInterval';

/**
* Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
*/
export class StripeSubscriptionPendingInvoiceItemInterval {
    'interval': PendingInvoiceItemIntervalInterval;
    /**
    * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
    */
    'intervalCount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "interval",
            "baseName": "interval",
            "type": "PendingInvoiceItemIntervalInterval"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return StripeSubscriptionPendingInvoiceItemInterval.attributeTypeMap;
    }
}

