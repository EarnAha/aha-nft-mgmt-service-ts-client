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
import { LastSetupErrorType } from './lastSetupErrorType';
import { StripeCustomerSource } from './stripeCustomerSource';
import { StripePaymentIntent } from './stripePaymentIntent';
import { StripePaymentMethod } from './stripePaymentMethod';
import { StripeSetupIntent } from './stripeSetupIntent';

/**
* The error encountered in the previous SetupIntent confirmation.
*/
export class StripeSetupIntentLastSetupError {
    /**
    * For card errors, the ID of the failed charge.
    */
    'charge'?: string;
    /**
    * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
    */
    'code'?: string;
    /**
    * For card errors resulting from a card issuer decline, a short string indicating the [card issuer\'s reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
    */
    'declineCode'?: string;
    /**
    * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
    */
    'docUrl'?: string;
    /**
    * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
    */
    'message'?: string;
    /**
    * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
    */
    'param'?: string;
    'paymentIntent'?: StripePaymentIntent;
    'paymentMethod'?: StripePaymentMethod;
    /**
    * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
    */
    'paymentMethodType'?: string;
    /**
    * A URL to the request log entry in your dashboard.
    */
    'requestLogUrl'?: string;
    'setupIntent'?: StripeSetupIntent;
    'source'?: StripeCustomerSource;
    'type': LastSetupErrorType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "charge",
            "baseName": "charge",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "declineCode",
            "baseName": "decline_code",
            "type": "string"
        },
        {
            "name": "docUrl",
            "baseName": "doc_url",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "param",
            "baseName": "param",
            "type": "string"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "StripePaymentIntent"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "StripePaymentMethod"
        },
        {
            "name": "paymentMethodType",
            "baseName": "payment_method_type",
            "type": "string"
        },
        {
            "name": "requestLogUrl",
            "baseName": "request_log_url",
            "type": "string"
        },
        {
            "name": "setupIntent",
            "baseName": "setup_intent",
            "type": "StripeSetupIntent"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "StripeCustomerSource"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LastSetupErrorType"
        }    ];

    static getAttributeTypeMap() {
        return StripeSetupIntentLastSetupError.attributeTypeMap;
    }
}

export namespace StripeSetupIntentLastSetupError {
}
