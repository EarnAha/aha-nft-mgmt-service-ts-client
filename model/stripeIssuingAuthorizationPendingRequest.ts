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
import { AuthorizationPendingRequestAmountDetails } from './authorizationPendingRequestAmountDetails';

/**
* The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
*/
export class StripeIssuingAuthorizationPendingRequest {
    /**
    * The additional amount Stripe will hold if the authorization is approved, in the card\'s [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'amount': number;
    'amountDetails': AuthorizationPendingRequestAmountDetails | null;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    /**
    * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
    */
    'isAmountControllable': boolean;
    /**
    * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'merchantAmount': number;
    /**
    * The local currency the merchant is requesting to authorize.
    */
    'merchantCurrency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountDetails",
            "baseName": "amount_details",
            "type": "AuthorizationPendingRequestAmountDetails"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "isAmountControllable",
            "baseName": "is_amount_controllable",
            "type": "boolean"
        },
        {
            "name": "merchantAmount",
            "baseName": "merchant_amount",
            "type": "number"
        },
        {
            "name": "merchantCurrency",
            "baseName": "merchant_currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingAuthorizationPendingRequest.attributeTypeMap;
    }
}
