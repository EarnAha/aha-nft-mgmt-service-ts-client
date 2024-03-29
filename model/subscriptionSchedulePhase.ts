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
import { PhaseAddInvoiceItem } from './phaseAddInvoiceItem';
import { PhaseAutomaticTax } from './phaseAutomaticTax';
import { PhaseBillingCycleAnchor } from './phaseBillingCycleAnchor';
import { PhaseCollectionMethod } from './phaseCollectionMethod';
import { PhaseItem } from './phaseItem';
import { PhaseProrationBehavior } from './phaseProrationBehavior';
import { StripeTaxRate } from './stripeTaxRate';
import { SubscriptionScheduleDefaultSettingsOnBehalfOf } from './subscriptionScheduleDefaultSettingsOnBehalfOf';
import { SubscriptionSchedulePhaseBillingThresholds } from './subscriptionSchedulePhaseBillingThresholds';
import { SubscriptionSchedulePhaseCoupon } from './subscriptionSchedulePhaseCoupon';
import { SubscriptionSchedulePhaseDefaultPaymentMethod } from './subscriptionSchedulePhaseDefaultPaymentMethod';
import { SubscriptionSchedulePhaseInvoiceSettings } from './subscriptionSchedulePhaseInvoiceSettings';
import { SubscriptionSchedulePhaseTransferData } from './subscriptionSchedulePhaseTransferData';

export class SubscriptionSchedulePhase {
    /**
    * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
    */
    'addInvoiceItems': Array<PhaseAddInvoiceItem>;
    /**
    * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner\'s Stripe account during this phase of the schedule.
    */
    'applicationFeePercent': number | null;
    'automaticTax'?: PhaseAutomaticTax;
    /**
    * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
    */
    'billingCycleAnchor': PhaseBillingCycleAnchor | null;
    'billingThresholds': SubscriptionSchedulePhaseBillingThresholds | null;
    /**
    * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
    */
    'collectionMethod': PhaseCollectionMethod | null;
    'coupon': SubscriptionSchedulePhaseCoupon | null;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'defaultPaymentMethod': SubscriptionSchedulePhaseDefaultPaymentMethod | null;
    /**
    * The default tax rates to apply to the subscription during this phase of the subscription schedule.
    */
    'defaultTaxRates'?: Array<StripeTaxRate> | null;
    /**
    * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription.
    */
    'description': string | null;
    /**
    * The end of this phase of the subscription schedule.
    */
    'endDate': number;
    'invoiceSettings': SubscriptionSchedulePhaseInvoiceSettings | null;
    /**
    * Subscription items to configure the subscription to during this phase of the subscription schedule.
    */
    'items': Array<PhaseItem>;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule\'s phase will update the underlying subscription\'s `metadata` when the phase is entered. Updating the underlying subscription\'s `metadata` directly will not affect the current phase\'s `metadata`.
    */
    'metadata': any | null;
    'onBehalfOf': SubscriptionScheduleDefaultSettingsOnBehalfOf | null;
    'prorationBehavior': PhaseProrationBehavior;
    /**
    * The start of this phase of the subscription schedule.
    */
    'startDate': number;
    'transferData': SubscriptionSchedulePhaseTransferData | null;
    /**
    * When the trial ends within the phase.
    */
    'trialEnd': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addInvoiceItems",
            "baseName": "add_invoice_items",
            "type": "Array<PhaseAddInvoiceItem>"
        },
        {
            "name": "applicationFeePercent",
            "baseName": "application_fee_percent",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "PhaseAutomaticTax"
        },
        {
            "name": "billingCycleAnchor",
            "baseName": "billing_cycle_anchor",
            "type": "PhaseBillingCycleAnchor"
        },
        {
            "name": "billingThresholds",
            "baseName": "billing_thresholds",
            "type": "SubscriptionSchedulePhaseBillingThresholds"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "PhaseCollectionMethod"
        },
        {
            "name": "coupon",
            "baseName": "coupon",
            "type": "SubscriptionSchedulePhaseCoupon"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "SubscriptionSchedulePhaseDefaultPaymentMethod"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "Array<StripeTaxRate>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "number"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "SubscriptionSchedulePhaseInvoiceSettings"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<PhaseItem>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "SubscriptionScheduleDefaultSettingsOnBehalfOf"
        },
        {
            "name": "prorationBehavior",
            "baseName": "proration_behavior",
            "type": "PhaseProrationBehavior"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "SubscriptionSchedulePhaseTransferData"
        },
        {
            "name": "trialEnd",
            "baseName": "trial_end",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionSchedulePhase.attributeTypeMap;
    }
}

export namespace SubscriptionSchedulePhase {
}
