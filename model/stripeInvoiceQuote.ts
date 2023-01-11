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
import { ApiListStripeLineItem } from './apiListStripeLineItem';
import { QuoteAutomaticTax } from './quoteAutomaticTax';
import { QuoteCollectionMethod } from './quoteCollectionMethod';
import { QuoteComputed } from './quoteComputed';
import { QuoteStatus } from './quoteStatus';
import { QuoteStatusTransitions } from './quoteStatusTransitions';
import { QuoteSubscriptionData } from './quoteSubscriptionData';
import { QuoteTotalDetails } from './quoteTotalDetails';
import { StripeInvoiceLineItemDiscountsInner } from './stripeInvoiceLineItemDiscountsInner';
import { StripeQuote } from './stripeQuote';
import { StripeQuoteApplication } from './stripeQuoteApplication';
import { StripeQuoteCustomer } from './stripeQuoteCustomer';
import { StripeQuoteDefaultTaxRatesInner } from './stripeQuoteDefaultTaxRatesInner';
import { StripeQuoteFromQuote } from './stripeQuoteFromQuote';
import { StripeQuoteInvoice } from './stripeQuoteInvoice';
import { StripeQuoteInvoiceSettings } from './stripeQuoteInvoiceSettings';
import { StripeQuoteOnBehalfOf } from './stripeQuoteOnBehalfOf';
import { StripeQuoteSubscription } from './stripeQuoteSubscription';
import { StripeQuoteSubscriptionSchedule } from './stripeQuoteSubscriptionSchedule';
import { StripeQuoteTestClock } from './stripeQuoteTestClock';
import { StripeQuoteTransferData } from './stripeQuoteTransferData';

/**
* The quote this invoice was generated from.
*/
export class StripeInvoiceQuote {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeInvoiceQuote.ObjectEnum;
    /**
    * Total before any discounts or taxes are applied.
    */
    'amountSubtotal': number;
    /**
    * Total after discounts and taxes are applied.
    */
    'amountTotal': number;
    'application': StripeQuoteApplication | null;
    /**
    * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner\'s Stripe account. Only applicable if there are no line items with recurring prices on the quote.
    */
    'applicationFeeAmount': number | null;
    /**
    * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner\'s Stripe account. Only applicable if there are line items with recurring prices on the quote.
    */
    'applicationFeePercent': number | null;
    'automaticTax': QuoteAutomaticTax;
    'collectionMethod': QuoteCollectionMethod;
    'computed': QuoteComputed;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string | null;
    'customer': StripeQuoteCustomer | null;
    /**
    * The tax rates applied to this quote.
    */
    'defaultTaxRates'?: Array<StripeQuoteDefaultTaxRatesInner>;
    /**
    * A description that will be displayed on the quote PDF.
    */
    'description': string | null;
    /**
    * The discounts applied to this quote.
    */
    'discounts': Array<StripeInvoiceLineItemDiscountsInner>;
    /**
    * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
    */
    'expiresAt': number;
    /**
    * A footer that will be displayed on the quote PDF.
    */
    'footer': string | null;
    'fromQuote': StripeQuoteFromQuote | null;
    /**
    * A header that will be displayed on the quote PDF.
    */
    'header': string | null;
    'invoice': StripeQuoteInvoice | null;
    'invoiceSettings': StripeQuoteInvoiceSettings | null;
    'lineItems'?: ApiListStripeLineItem;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
    */
    'number': string | null;
    'onBehalfOf': StripeQuoteOnBehalfOf | null;
    'status': QuoteStatus;
    'statusTransitions': QuoteStatusTransitions;
    'subscription': StripeQuoteSubscription | null;
    'subscriptionData': QuoteSubscriptionData;
    'subscriptionSchedule': StripeQuoteSubscriptionSchedule | null;
    'testClock': StripeQuoteTestClock | null;
    'totalDetails': QuoteTotalDetails;
    'transferData': StripeQuoteTransferData | null;

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
            "type": "StripeInvoiceQuote.ObjectEnum"
        },
        {
            "name": "amountSubtotal",
            "baseName": "amount_subtotal",
            "type": "number"
        },
        {
            "name": "amountTotal",
            "baseName": "amount_total",
            "type": "number"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "StripeQuoteApplication"
        },
        {
            "name": "applicationFeeAmount",
            "baseName": "application_fee_amount",
            "type": "number"
        },
        {
            "name": "applicationFeePercent",
            "baseName": "application_fee_percent",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "QuoteAutomaticTax"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "QuoteCollectionMethod"
        },
        {
            "name": "computed",
            "baseName": "computed",
            "type": "QuoteComputed"
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
            "name": "customer",
            "baseName": "customer",
            "type": "StripeQuoteCustomer"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "Array<StripeQuoteDefaultTaxRatesInner>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<StripeInvoiceLineItemDiscountsInner>"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "fromQuote",
            "baseName": "from_quote",
            "type": "StripeQuoteFromQuote"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "StripeQuoteInvoice"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "StripeQuoteInvoiceSettings"
        },
        {
            "name": "lineItems",
            "baseName": "line_items",
            "type": "ApiListStripeLineItem"
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
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "onBehalfOf",
            "baseName": "on_behalf_of",
            "type": "StripeQuoteOnBehalfOf"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "QuoteStatus"
        },
        {
            "name": "statusTransitions",
            "baseName": "status_transitions",
            "type": "QuoteStatusTransitions"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "StripeQuoteSubscription"
        },
        {
            "name": "subscriptionData",
            "baseName": "subscription_data",
            "type": "QuoteSubscriptionData"
        },
        {
            "name": "subscriptionSchedule",
            "baseName": "subscription_schedule",
            "type": "StripeQuoteSubscriptionSchedule"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "StripeQuoteTestClock"
        },
        {
            "name": "totalDetails",
            "baseName": "total_details",
            "type": "QuoteTotalDetails"
        },
        {
            "name": "transferData",
            "baseName": "transfer_data",
            "type": "StripeQuoteTransferData"
        }    ];

    static getAttributeTypeMap() {
        return StripeInvoiceQuote.attributeTypeMap;
    }
}

export namespace StripeInvoiceQuote {
    export enum ObjectEnum {
        QUOTE = <any> 'quote'
    }
}
