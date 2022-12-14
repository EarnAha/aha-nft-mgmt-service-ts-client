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
import { TaxRateTaxType } from './taxRateTaxType';

/**
* Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.  Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
*/
export class StripeTaxRate {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTaxRate.ObjectEnum;
    /**
    * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
    */
    'active': boolean;
    /**
    * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
    */
    'country': string | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
    */
    'description': string | null;
    /**
    * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
    */
    'displayName': string;
    /**
    * This specifies if the tax rate is inclusive or exclusive.
    */
    'inclusive': boolean;
    /**
    * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer\'s invoice.
    */
    'jurisdiction': string | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    /**
    * This represents the tax rate percent out of 100.
    */
    'percentage': number;
    /**
    * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, \"NY\" for New York, United States.
    */
    'state': string | null;
    /**
    * The high-level tax type, such as `vat` or `sales_tax`.
    */
    'taxType': TaxRateTaxType | null;

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
            "type": "StripeTaxRate.ObjectEnum"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "inclusive",
            "baseName": "inclusive",
            "type": "boolean"
        },
        {
            "name": "jurisdiction",
            "baseName": "jurisdiction",
            "type": "string"
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
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "taxType",
            "baseName": "tax_type",
            "type": "TaxRateTaxType"
        }    ];

    static getAttributeTypeMap() {
        return StripeTaxRate.attributeTypeMap;
    }
}

export namespace StripeTaxRate {
    export enum ObjectEnum {
        TAX_RATE = <any> 'tax_rate'
    }
}
