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
import { ProductType } from './productType';
import { StripeDeletedProduct } from './stripeDeletedProduct';
import { StripeProduct } from './stripeProduct';
import { StripeProductDefaultPrice } from './stripeProductDefaultPrice';
import { StripeProductPackageDimensions } from './stripeProductPackageDimensions';
import { StripeProductTaxCode } from './stripeProductTaxCode';

/**
* The ID of the product this price is associated with.
*/
export class StripePriceProduct {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripePriceProduct.ObjectEnum;
    /**
    * Whether the product is currently available for purchase.
    */
    'active': boolean;
    /**
    * A list of up to 5 attributes that each SKU can provide values for (e.g., `[\"color\", \"size\"]`).
    */
    'attributes': Array<string> | null;
    /**
    * A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
    */
    'caption'?: string | null;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.
    */
    'deactivateOn'?: Array<string>;
    'defaultPrice'?: StripeProductDefaultPrice | null;
    /**
    * Always true for a deleted object
    */
    'deleted': StripePriceProduct.DeletedEnum;
    /**
    * The product\'s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
    */
    'description': string | null;
    /**
    * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
    */
    'images': Array<string>;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * The product\'s name, meant to be displayable to the customer.
    */
    'name': string;
    'packageDimensions': StripeProductPackageDimensions | null;
    /**
    * Whether this product is shipped (i.e., physical goods).
    */
    'shippable': boolean | null;
    /**
    * Extra information about a product which will appear on your customer\'s credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
    */
    'statementDescriptor'?: string | null;
    'taxCode': StripeProductTaxCode | null;
    'type': ProductType;
    /**
    * A label that represents units of this product in Stripe and on customers\' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
    */
    'unitLabel'?: string | null;
    /**
    * Time at which the object was last updated. Measured in seconds since the Unix epoch.
    */
    'updated': number;
    /**
    * A URL of a publicly-accessible webpage for this product.
    */
    'url': string | null;

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
            "type": "StripePriceProduct.ObjectEnum"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<string>"
        },
        {
            "name": "caption",
            "baseName": "caption",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "deactivateOn",
            "baseName": "deactivate_on",
            "type": "Array<string>"
        },
        {
            "name": "defaultPrice",
            "baseName": "default_price",
            "type": "StripeProductDefaultPrice"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "StripePriceProduct.DeletedEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>"
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
            "name": "packageDimensions",
            "baseName": "package_dimensions",
            "type": "StripeProductPackageDimensions"
        },
        {
            "name": "shippable",
            "baseName": "shippable",
            "type": "boolean"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "tax_code",
            "type": "StripeProductTaxCode"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ProductType"
        },
        {
            "name": "unitLabel",
            "baseName": "unit_label",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripePriceProduct.attributeTypeMap;
    }
}

export namespace StripePriceProduct {
    export enum ObjectEnum {
        PRODUCT = <any> 'product'
    }
    export enum DeletedEnum {
        TRUE = <any> true
    }
}
