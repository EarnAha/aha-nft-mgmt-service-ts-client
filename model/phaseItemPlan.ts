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
import { PlanAggregateUsage } from './planAggregateUsage';
import { PlanBillingScheme } from './planBillingScheme';
import { PlanInterval } from './planInterval';
import { PlanTier } from './planTier';
import { PlanTiersMode } from './planTiersMode';
import { PlanUsageType } from './planUsageType';
import { StripeDeletedPlan } from './stripeDeletedPlan';
import { StripePlan } from './stripePlan';
import { StripePlanProduct } from './stripePlanProduct';
import { StripePlanTransformUsage } from './stripePlanTransformUsage';

/**
* ID of the plan to which the customer should be subscribed.
*/
export class PhaseItemPlan {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PhaseItemPlan.ObjectEnum;
    /**
    * Whether the plan can be used for new purchases.
    */
    'active': boolean;
    /**
    * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
    */
    'aggregateUsage': PlanAggregateUsage | null;
    /**
    * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
    */
    'amount': number | null;
    /**
    * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
    */
    'amountDecimal': string | null;
    'billingScheme': PlanBillingScheme;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Always true for a deleted object
    */
    'deleted': PhaseItemPlan.DeletedEnum;
    'interval': PlanInterval;
    /**
    * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
    */
    'intervalCount': number;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    /**
    * A brief description of the plan, hidden from customers.
    */
    'nickname': string | null;
    'product': StripePlanProduct | null;
    /**
    * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    */
    'tiers'?: Array<PlanTier>;
    /**
    * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
    */
    'tiersMode': PlanTiersMode | null;
    'transformUsage': StripePlanTransformUsage | null;
    /**
    * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
    */
    'trialPeriodDays': number | null;
    'usageType': PlanUsageType;

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
            "type": "PhaseItemPlan.ObjectEnum"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "aggregateUsage",
            "baseName": "aggregate_usage",
            "type": "PlanAggregateUsage"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountDecimal",
            "baseName": "amount_decimal",
            "type": "string"
        },
        {
            "name": "billingScheme",
            "baseName": "billing_scheme",
            "type": "PlanBillingScheme"
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
            "name": "deleted",
            "baseName": "deleted",
            "type": "PhaseItemPlan.DeletedEnum"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "PlanInterval"
        },
        {
            "name": "intervalCount",
            "baseName": "interval_count",
            "type": "number"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "StripePlanProduct"
        },
        {
            "name": "tiers",
            "baseName": "tiers",
            "type": "Array<PlanTier>"
        },
        {
            "name": "tiersMode",
            "baseName": "tiers_mode",
            "type": "PlanTiersMode"
        },
        {
            "name": "transformUsage",
            "baseName": "transform_usage",
            "type": "StripePlanTransformUsage"
        },
        {
            "name": "trialPeriodDays",
            "baseName": "trial_period_days",
            "type": "number"
        },
        {
            "name": "usageType",
            "baseName": "usage_type",
            "type": "PlanUsageType"
        }    ];

    static getAttributeTypeMap() {
        return PhaseItemPlan.attributeTypeMap;
    }
}

export namespace PhaseItemPlan {
    export enum ObjectEnum {
        PLAN = <any> 'plan'
    }
    export enum DeletedEnum {
        TRUE = <any> true
    }
}