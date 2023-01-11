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
import { ApiListStripeCustomerSource } from './apiListStripeCustomerSource';
import { ApiListStripeSubscription } from './apiListStripeSubscription';
import { ApiListStripeTaxId } from './apiListStripeTaxId';
import { CustomerInvoiceSettings } from './customerInvoiceSettings';
import { CustomerTax } from './customerTax';
import { CustomerTaxExempt } from './customerTaxExempt';
import { StripeCustomer } from './stripeCustomer';
import { StripeCustomerAddress } from './stripeCustomerAddress';
import { StripeCustomerCashBalance } from './stripeCustomerCashBalance';
import { StripeCustomerDefaultSource } from './stripeCustomerDefaultSource';
import { StripeCustomerDiscount } from './stripeCustomerDiscount';
import { StripeCustomerShipping } from './stripeCustomerShipping';
import { StripeCustomerTestClock } from './stripeCustomerTestClock';
import { StripeDeletedCustomer } from './stripeDeletedCustomer';

/**
* The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
*/
export class StripeSetupAttemptCustomer {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeSetupAttemptCustomer.ObjectEnum;
    'address'?: StripeCustomerAddress | null;
    /**
    * Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.
    */
    'balance': number;
    'cashBalance'?: StripeCustomerCashBalance | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
    */
    'currency'?: string | null;
    'defaultSource': StripeCustomerDefaultSource | null;
    /**
    * Always true for a deleted object
    */
    'deleted': StripeSetupAttemptCustomer.DeletedEnum;
    /**
    * When the customer\'s latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice\'s latest charge failed. When the customer\'s latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn\'t paid by its due date.  If an invoice is marked uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn\'t get reset to `false`.
    */
    'delinquent'?: boolean | null;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description': string | null;
    'discount'?: StripeCustomerDiscount | null;
    /**
    * The customer\'s email address.
    */
    'email': string | null;
    /**
    * The current multi-currency balances, if any, being stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that will be added to their next invoice denominated in that currency. These balances do not refer to any unpaid invoices. They solely track amounts that have yet to be successfully applied to any invoice. A balance in a particular currency is only applied to any invoice as an invoice in that currency is finalized.
    */
    'invoiceCreditBalance'?: { [key: string]: number; };
    /**
    * The prefix for the customer used to generate unique invoice numbers.
    */
    'invoicePrefix'?: string | null;
    'invoiceSettings': CustomerInvoiceSettings;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * The customer\'s full name or business name.
    */
    'name'?: string | null;
    /**
    * The suffix of the customer\'s next invoice number, e.g., 0001.
    */
    'nextInvoiceSequence'?: number;
    /**
    * The customer\'s phone number.
    */
    'phone'?: string | null;
    /**
    * The customer\'s preferred locales (languages), ordered by preference.
    */
    'preferredLocales'?: Array<string> | null;
    'shipping': StripeCustomerShipping | null;
    'sources'?: ApiListStripeCustomerSource;
    'subscriptions'?: ApiListStripeSubscription;
    'tax'?: CustomerTax;
    /**
    * Describes the customer\'s tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **\"Reverse charge\"**.
    */
    'taxExempt'?: CustomerTaxExempt | null;
    'taxIds'?: ApiListStripeTaxId;
    'testClock'?: StripeCustomerTestClock | null;

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
            "type": "StripeSetupAttemptCustomer.ObjectEnum"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "StripeCustomerAddress"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "cashBalance",
            "baseName": "cash_balance",
            "type": "StripeCustomerCashBalance"
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
            "name": "defaultSource",
            "baseName": "default_source",
            "type": "StripeCustomerDefaultSource"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "StripeSetupAttemptCustomer.DeletedEnum"
        },
        {
            "name": "delinquent",
            "baseName": "delinquent",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "StripeCustomerDiscount"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "invoiceCreditBalance",
            "baseName": "invoice_credit_balance",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "invoicePrefix",
            "baseName": "invoice_prefix",
            "type": "string"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "CustomerInvoiceSettings"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nextInvoiceSequence",
            "baseName": "next_invoice_sequence",
            "type": "number"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "preferredLocales",
            "baseName": "preferred_locales",
            "type": "Array<string>"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "StripeCustomerShipping"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "ApiListStripeCustomerSource"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "ApiListStripeSubscription"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "CustomerTax"
        },
        {
            "name": "taxExempt",
            "baseName": "tax_exempt",
            "type": "CustomerTaxExempt"
        },
        {
            "name": "taxIds",
            "baseName": "tax_ids",
            "type": "ApiListStripeTaxId"
        },
        {
            "name": "testClock",
            "baseName": "test_clock",
            "type": "StripeCustomerTestClock"
        }    ];

    static getAttributeTypeMap() {
        return StripeSetupAttemptCustomer.attributeTypeMap;
    }
}

export namespace StripeSetupAttemptCustomer {
    export enum ObjectEnum {
        CUSTOMER = <any> 'customer'
    }
    export enum DeletedEnum {
        TRUE = <any> true
    }
}
