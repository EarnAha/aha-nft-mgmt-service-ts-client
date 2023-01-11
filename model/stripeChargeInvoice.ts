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
import { ApiListStripeInvoiceLineItem } from './apiListStripeInvoiceLineItem';
import { InvoiceAutomaticTax } from './invoiceAutomaticTax';
import { InvoiceBillingReason } from './invoiceBillingReason';
import { InvoiceCollectionMethod } from './invoiceCollectionMethod';
import { InvoiceCustomField } from './invoiceCustomField';
import { InvoiceCustomerTaxExempt } from './invoiceCustomerTaxExempt';
import { InvoiceCustomerTaxId } from './invoiceCustomerTaxId';
import { InvoicePaymentSettings } from './invoicePaymentSettings';
import { InvoiceStatus } from './invoiceStatus';
import { InvoiceStatusTransitions } from './invoiceStatusTransitions';
import { InvoiceThresholdReason } from './invoiceThresholdReason';
import { InvoiceTotalDiscountAmount } from './invoiceTotalDiscountAmount';
import { InvoiceTotalTaxAmount } from './invoiceTotalTaxAmount';
import { StripeInvoice } from './stripeInvoice';
import { StripeInvoiceAccountTaxIdsInner } from './stripeInvoiceAccountTaxIdsInner';
import { StripeInvoiceApplication } from './stripeInvoiceApplication';
import { StripeInvoiceCharge } from './stripeInvoiceCharge';
import { StripeInvoiceCustomer } from './stripeInvoiceCustomer';
import { StripeInvoiceCustomerAddress } from './stripeInvoiceCustomerAddress';
import { StripeInvoiceCustomerShipping } from './stripeInvoiceCustomerShipping';
import { StripeInvoiceDefaultPaymentMethod } from './stripeInvoiceDefaultPaymentMethod';
import { StripeInvoiceDefaultSource } from './stripeInvoiceDefaultSource';
import { StripeInvoiceDiscount } from './stripeInvoiceDiscount';
import { StripeInvoiceDiscountsInner } from './stripeInvoiceDiscountsInner';
import { StripeInvoiceFromInvoice } from './stripeInvoiceFromInvoice';
import { StripeInvoiceLastFinalizationError } from './stripeInvoiceLastFinalizationError';
import { StripeInvoiceLatestRevision } from './stripeInvoiceLatestRevision';
import { StripeInvoiceOnBehalfOf } from './stripeInvoiceOnBehalfOf';
import { StripeInvoicePaymentIntent } from './stripeInvoicePaymentIntent';
import { StripeInvoiceQuote } from './stripeInvoiceQuote';
import { StripeInvoiceRenderingOptions } from './stripeInvoiceRenderingOptions';
import { StripeInvoiceSubscription } from './stripeInvoiceSubscription';
import { StripeInvoiceTestClock } from './stripeInvoiceTestClock';
import { StripeInvoiceTransferData } from './stripeInvoiceTransferData';
import { StripeTaxRate } from './stripeTaxRate';

/**
* ID of the invoice this charge is for if one exists.
*/
export class StripeChargeInvoice {
    /**
    * Unique identifier for the object. This property is always present unless the invoice is an upcoming invoice. See [Retrieve an upcoming invoice](https://stripe.com/docs/api/invoices/upcoming) for more details.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeChargeInvoice.ObjectEnum;
    /**
    * The country of the business associated with this invoice, most often the business creating the invoice.
    */
    'accountCountry': string | null;
    /**
    * The public name of the business associated with this invoice, most often the business creating the invoice.
    */
    'accountName': string | null;
    /**
    * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
    */
    'accountTaxIds': Array<StripeInvoiceAccountTaxIdsInner> | null;
    /**
    * Final amount due at this time for this invoice. If the invoice\'s total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
    */
    'amountDue': number;
    /**
    * The amount, in %s, that was paid.
    */
    'amountPaid': number;
    /**
    * The difference between amount_due and amount_paid, in %s.
    */
    'amountRemaining': number;
    'application': StripeInvoiceApplication | null;
    /**
    * The fee in %s that will be applied to the invoice and transferred to the application owner\'s Stripe account when the invoice is paid.
    */
    'applicationFeeAmount': number | null;
    /**
    * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
    */
    'attemptCount': number;
    /**
    * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
    */
    'attempted': boolean;
    /**
    * Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice\'s state will not automatically advance without an explicit action.
    */
    'autoAdvance'?: boolean;
    'automaticTax': InvoiceAutomaticTax;
    /**
    * Indicates the reason why the invoice was created. `subscription_cycle` indicates an invoice created by a subscription advancing into a new period. `subscription_create` indicates an invoice created due to creating a subscription. `subscription_update` indicates an invoice created due to updating a subscription. `subscription` is set for all old invoices to indicate either a change to a subscription or a period advancement. `manual` is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The `upcoming` value is reserved for simulated invoices per the upcoming invoice endpoint. `subscription_threshold` indicates an invoice created due to a billing threshold being reached.
    */
    'billingReason': InvoiceBillingReason | null;
    'charge': StripeInvoiceCharge | null;
    'collectionMethod': InvoiceCollectionMethod;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Custom fields displayed on the invoice.
    */
    'customFields': Array<InvoiceCustomField> | null;
    'customer': StripeInvoiceCustomer | null;
    'customerAddress': StripeInvoiceCustomerAddress | null;
    /**
    * The customer\'s email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
    */
    'customerEmail': string | null;
    /**
    * The customer\'s name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
    */
    'customerName': string | null;
    /**
    * The customer\'s phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
    */
    'customerPhone': string | null;
    'customerShipping': StripeInvoiceCustomerShipping | null;
    /**
    * The customer\'s tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
    */
    'customerTaxExempt': InvoiceCustomerTaxExempt | null;
    /**
    * The customer\'s tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
    */
    'customerTaxIds'?: Array<InvoiceCustomerTaxId> | null;
    'defaultPaymentMethod': StripeInvoiceDefaultPaymentMethod | null;
    'defaultSource': StripeInvoiceDefaultSource | null;
    /**
    * The tax rates applied to this invoice, if any.
    */
    'defaultTaxRates': Array<StripeTaxRate>;
    'deleted'?: any | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as \'memo\' in the Dashboard.
    */
    'description': string | null;
    'discount': StripeInvoiceDiscount | null;
    /**
    * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
    */
    'discounts': Array<StripeInvoiceDiscountsInner> | null;
    /**
    * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
    */
    'dueDate': number | null;
    /**
    * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
    */
    'endingBalance': number | null;
    /**
    * Footer displayed on the invoice.
    */
    'footer': string | null;
    'fromInvoice': StripeInvoiceFromInvoice | null;
    /**
    * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
    */
    'hostedInvoiceUrl'?: string | null;
    /**
    * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
    */
    'invoicePdf'?: string | null;
    'lastFinalizationError': StripeInvoiceLastFinalizationError | null;
    'latestRevision': StripeInvoiceLatestRevision | null;
    'lines': ApiListStripeInvoiceLineItem;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    /**
    * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
    */
    'nextPaymentAttempt': number | null;
    /**
    * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer\'s unique invoice_prefix if it is specified.
    */
    'number': string | null;
    'onBehalfOf': StripeInvoiceOnBehalfOf | null;
    /**
    * Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer\'s account balance.
    */
    'paid': boolean;
    /**
    * Returns true if the invoice was manually marked paid, returns false if the invoice hasn\'t been paid yet or was paid on Stripe.
    */
    'paidOutOfBand': boolean;
    'paymentIntent': StripeInvoicePaymentIntent | null;
    'paymentSettings': InvoicePaymentSettings;
    /**
    * End of the usage period during which invoice items were added to this invoice.
    */
    'periodEnd': number;
    /**
    * Start of the usage period during which invoice items were added to this invoice.
    */
    'periodStart': number;
    /**
    * Total amount of all post-payment credit notes issued for this invoice.
    */
    'postPaymentCreditNotesAmount': number;
    /**
    * Total amount of all pre-payment credit notes issued for this invoice.
    */
    'prePaymentCreditNotesAmount': number;
    'quote': StripeInvoiceQuote | null;
    /**
    * This is the transaction number that appears on email receipts sent for this invoice.
    */
    'receiptNumber': string | null;
    'renderingOptions': StripeInvoiceRenderingOptions | null;
    /**
    * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. For revision invoices, this also includes any customer balance that was applied to the original invoice.
    */
    'startingBalance': number;
    /**
    * Extra information about an invoice for the customer\'s credit card statement.
    */
    'statementDescriptor': string | null;
    /**
    * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
    */
    'status': InvoiceStatus | null;
    'statusTransitions': InvoiceStatusTransitions;
    'subscription': StripeInvoiceSubscription | null;
    /**
    * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
    */
    'subscriptionProrationDate'?: number;
    /**
    * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. Item discounts are already incorporated
    */
    'subtotal': number;
    /**
    * The integer amount in %s representing the subtotal of the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
    */
    'subtotalExcludingTax': number | null;
    /**
    * The amount of tax on this invoice. This is the sum of all the tax amounts on this invoice.
    */
    'tax': number | null;
    'testClock': StripeInvoiceTestClock | null;
    'thresholdReason'?: InvoiceThresholdReason;
    /**
    * Total after discounts and taxes.
    */
    'total': number;
    /**
    * The aggregate amounts calculated per discount across all line items.
    */
    'totalDiscountAmounts': Array<InvoiceTotalDiscountAmount> | null;
    /**
    * The integer amount in %s representing the total amount of the invoice including all discounts but excluding all tax.
    */
    'totalExcludingTax': number | null;
    /**
    * The aggregate amounts calculated per tax rate for all line items.
    */
    'totalTaxAmounts': Array<InvoiceTotalTaxAmount>;
    'transferData': StripeInvoiceTransferData | null;
    /**
    * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
    */
    'webhooksDeliveredAt': number | null;

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
            "type": "StripeChargeInvoice.ObjectEnum"
        },
        {
            "name": "accountCountry",
            "baseName": "account_country",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "account_name",
            "type": "string"
        },
        {
            "name": "accountTaxIds",
            "baseName": "account_tax_ids",
            "type": "Array<StripeInvoiceAccountTaxIdsInner>"
        },
        {
            "name": "amountDue",
            "baseName": "amount_due",
            "type": "number"
        },
        {
            "name": "amountPaid",
            "baseName": "amount_paid",
            "type": "number"
        },
        {
            "name": "amountRemaining",
            "baseName": "amount_remaining",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "StripeInvoiceApplication"
        },
        {
            "name": "applicationFeeAmount",
            "baseName": "application_fee_amount",
            "type": "number"
        },
        {
            "name": "attemptCount",
            "baseName": "attempt_count",
            "type": "number"
        },
        {
            "name": "attempted",
            "baseName": "attempted",
            "type": "boolean"
        },
        {
            "name": "autoAdvance",
            "baseName": "auto_advance",
            "type": "boolean"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "InvoiceAutomaticTax"
        },
        {
            "name": "billingReason",
            "baseName": "billing_reason",
            "type": "InvoiceBillingReason"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "StripeInvoiceCharge"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "InvoiceCollectionMethod"
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
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<InvoiceCustomField>"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "StripeInvoiceCustomer"
        },
        {
            "name": "customerAddress",
            "baseName": "customer_address",
            "type": "StripeInvoiceCustomerAddress"
        },
        {
            "name": "customerEmail",
            "baseName": "customer_email",
            "type": "string"
        },
        {
            "name": "customerName",
            "baseName": "customer_name",
            "type": "string"
        },
        {
            "name": "customerPhone",
            "baseName": "customer_phone",
            "type": "string"
        },
        {
            "name": "customerShipping",
            "baseName": "customer_shipping",
            "type": "StripeInvoiceCustomerShipping"
        },
        {
            "name": "customerTaxExempt",
            "baseName": "customer_tax_exempt",
            "type": "InvoiceCustomerTaxExempt"
        },
        {
            "name": "customerTaxIds",
            "baseName": "customer_tax_ids",
            "type": "Array<InvoiceCustomerTaxId>"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "StripeInvoiceDefaultPaymentMethod"
        },
        {
            "name": "defaultSource",
            "baseName": "default_source",
            "type": "StripeInvoiceDefaultSource"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "Array<StripeTaxRate>"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "any"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "StripeInvoiceDiscount"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<StripeInvoiceDiscountsInner>"
        },
        {
            "name": "dueDate",
            "baseName": "due_date",
            "type": "number"
        },
        {
            "name": "endingBalance",
            "baseName": "ending_balance",
            "type": "number"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "fromInvoice",
            "baseName": "from_invoice",
            "type": "StripeInvoiceFromInvoice"
        },
        {
            "name": "hostedInvoiceUrl",
            "baseName": "hosted_invoice_url",
            "type": "string"
        },
        {
            "name": "invoicePdf",
            "baseName": "invoice_pdf",
            "type": "string"
        },
        {
            "name": "lastFinalizationError",
            "baseName": "last_finalization_error",
            "type": "StripeInvoiceLastFinalizationError"
        },
        {
            "name": "latestRevision",
            "baseName": "latest_revision",
            "type": "StripeInvoiceLatestRevision"
        },
        {
            "name": "lines",
            "baseName": "lines",
            "type": "ApiListStripeInvoiceLineItem"
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
            "name": "nextPaymentAttempt",
            "baseName": "next_payment_attempt",
            "type": "number"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "StripeInvoiceOnBehalfOf"
        },
        {
            "name": "paid",
            "baseName": "paid",
            "type": "boolean"
        },
        {
            "name": "paidOutOfBand",
            "baseName": "paid_out_of_band",
            "type": "boolean"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "StripeInvoicePaymentIntent"
        },
        {
            "name": "paymentSettings",
            "baseName": "payment_settings",
            "type": "InvoicePaymentSettings"
        },
        {
            "name": "periodEnd",
            "baseName": "period_end",
            "type": "number"
        },
        {
            "name": "periodStart",
            "baseName": "period_start",
            "type": "number"
        },
        {
            "name": "postPaymentCreditNotesAmount",
            "baseName": "post_payment_credit_notes_amount",
            "type": "number"
        },
        {
            "name": "prePaymentCreditNotesAmount",
            "baseName": "pre_payment_credit_notes_amount",
            "type": "number"
        },
        {
            "name": "quote",
            "baseName": "quote",
            "type": "StripeInvoiceQuote"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "renderingOptions",
            "baseName": "rendering_options",
            "type": "StripeInvoiceRenderingOptions"
        },
        {
            "name": "startingBalance",
            "baseName": "starting_balance",
            "type": "number"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatus"
        },
        {
            "name": "statusTransitions",
            "baseName": "status_transitions",
            "type": "InvoiceStatusTransitions"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "StripeInvoiceSubscription"
        },
        {
            "name": "subscriptionProrationDate",
            "baseName": "subscription_proration_date",
            "type": "number"
        },
        {
            "name": "subtotal",
            "baseName": "subtotal",
            "type": "number"
        },
        {
            "name": "subtotalExcludingTax",
            "baseName": "subtotal_excluding_tax",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "StripeInvoiceTestClock"
        },
        {
            "name": "thresholdReason",
            "baseName": "threshold_reason",
            "type": "InvoiceThresholdReason"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "totalDiscountAmounts",
            "baseName": "total_discount_amounts",
            "type": "Array<InvoiceTotalDiscountAmount>"
        },
        {
            "name": "totalExcludingTax",
            "baseName": "total_excluding_tax",
            "type": "number"
        },
        {
            "name": "totalTaxAmounts",
            "baseName": "total_tax_amounts",
            "type": "Array<InvoiceTotalTaxAmount>"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "StripeInvoiceTransferData"
        },
        {
            "name": "webhooksDeliveredAt",
            "baseName": "webhooks_delivered_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return StripeChargeInvoice.attributeTypeMap;
    }
}

export namespace StripeChargeInvoice {
    export enum ObjectEnum {
        INVOICE = <any> 'invoice'
    }
}
