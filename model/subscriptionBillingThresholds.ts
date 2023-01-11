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

export class SubscriptionBillingThresholds {
    /**
    * Monetary threshold that triggers the subscription to create an invoice
    */
    'amountGte': number | null;
    /**
    * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
    */
    'resetBillingCycleAnchor': boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountGte",
            "baseName": "amount_gte",
            "type": "number"
        },
        {
            "name": "resetBillingCycleAnchor",
            "baseName": "reset_billing_cycle_anchor",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionBillingThresholds.attributeTypeMap;
    }
}

