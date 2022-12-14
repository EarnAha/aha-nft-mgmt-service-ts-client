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

export class PaymentMethodOptionsCardPresent {
    /**
    * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
    */
    'requestExtendedAuthorization': boolean | null;
    /**
    * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
    */
    'requestIncrementalAuthorizationSupport': boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestExtendedAuthorization",
            "baseName": "request_extended_authorization",
            "type": "boolean"
        },
        {
            "name": "requestIncrementalAuthorizationSupport",
            "baseName": "request_incremental_authorization_support",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsCardPresent.attributeTypeMap;
    }
}

