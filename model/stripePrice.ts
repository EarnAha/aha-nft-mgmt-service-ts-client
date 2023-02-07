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
import { PriceBillingScheme } from './priceBillingScheme';
import { PriceCurrencyOptions } from './priceCurrencyOptions';
import { PriceTaxBehavior } from './priceTaxBehavior';
import { PriceTier } from './priceTier';
import { PriceTiersMode } from './priceTiersMode';
import { PriceType } from './priceType';
import { StripePriceCustomUnitAmount } from './stripePriceCustomUnitAmount';
import { StripePriceProduct } from './stripePriceProduct';
import { StripePriceRecurring } from './stripePriceRecurring';
import { StripePriceTransformQuantity } from './stripePriceTransformQuantity';

/**
* Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products. [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.  For example, you might have a single \"gold\" product that has prices for $10/month, $100/year, and €9 once.  Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
*/
export class StripePrice {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripePrice.ObjectEnum;
    /**
    * Whether the price can be used for new purchases.
    */
    'active': boolean;
    'billingScheme': PriceBillingScheme;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
    */
    'currencyOptions'?: { [key: string]: PriceCurrencyOptions; };
    'customUnitAmount': StripePriceCustomUnitAmount | null;
    'deleted'?: any | null;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
    */
    'lookupKey': string | null;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': { [key: string]: string; };
    /**
    * A brief description of the price, hidden from customers.
    */
    'nickname': string | null;
    'product': StripePriceProduct;
    'recurring': StripePriceRecurring | null;
    /**
    * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
    */
    'taxBehavior': PriceTaxBehavior | null;
    /**
    * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    */
    'tiers'?: Array<PriceTier>;
    /**
    * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
    */
    'tiersMode': PriceTiersMode | null;
    'transformQuantity': StripePriceTransformQuantity | null;
    'type': PriceType;
    /**
    * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
    */
    'unitAmount': number | null;
    /**
    * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
    */
    'unitAmountDecimal': string | null;

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
            "type": "StripePrice.ObjectEnum"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "billingScheme",
            "baseName": "billing_scheme",
            "type": "PriceBillingScheme"
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
            "name": "currencyOptions",
            "baseName": "currency_options",
            "type": "{ [key: string]: PriceCurrencyOptions; }"
        },
        {
            "name": "customUnitAmount",
            "baseName": "custom_unit_amount",
            "type": "StripePriceCustomUnitAmount"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "any"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "lookupKey",
            "baseName": "lookup_key",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "StripePriceProduct"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "StripePriceRecurring"
        },
        {
            "name": "taxBehavior",
            "baseName": "tax_behavior",
            "type": "PriceTaxBehavior"
        },
        {
            "name": "tiers",
            "baseName": "tiers",
            "type": "Array<PriceTier>"
        },
        {
            "name": "tiersMode",
            "baseName": "tiers_mode",
            "type": "PriceTiersMode"
        },
        {
            "name": "transformQuantity",
            "baseName": "transform_quantity",
            "type": "StripePriceTransformQuantity"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PriceType"
        },
        {
            "name": "unitAmount",
            "baseName": "unit_amount",
            "type": "number"
        },
        {
            "name": "unitAmountDecimal",
            "baseName": "unit_amount_decimal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripePrice.attributeTypeMap;
    }
}

export namespace StripePrice {
    export enum ObjectEnum {
        PRICE = <any> 'price'
    }
}