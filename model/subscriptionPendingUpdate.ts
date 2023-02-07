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
import { StripeSubscriptionItem } from './stripeSubscriptionItem';

export class SubscriptionPendingUpdate {
    /**
    * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
    */
    'billingCycleAnchor': number | null;
    /**
    * The point after which the changes reflected by this update will be discarded and no longer applied.
    */
    'expiresAt': number;
    /**
    * List of subscription items, each with an attached plan, that will be set if the update is applied.
    */
    'subscriptionItems': Array<StripeSubscriptionItem> | null;
    /**
    * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
    */
    'trialEnd': number | null;
    /**
    * Indicates if a plan\'s `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
    */
    'trialFromPlan': boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingCycleAnchor",
            "baseName": "billing_cycle_anchor",
            "type": "number"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "subscriptionItems",
            "baseName": "subscription_items",
            "type": "Array<StripeSubscriptionItem>"
        },
        {
            "name": "trialEnd",
            "baseName": "trial_end",
            "type": "number"
        },
        {
            "name": "trialFromPlan",
            "baseName": "trial_from_plan",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPendingUpdate.attributeTypeMap;
    }
}
