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
import { PaymentMethodDetailsBlik } from './paymentMethodDetailsBlik';
import { PaymentMethodDetailsSepaDebit } from './paymentMethodDetailsSepaDebit';

export class MandatePaymentMethodDetails {
    'acssDebit'?: object;
    'auBecsDebit'?: object;
    'bacsDebit'?: object;
    'blik'?: PaymentMethodDetailsBlik;
    'card'?: object;
    'link'?: object;
    'sepaDebit'?: PaymentMethodDetailsSepaDebit;
    /**
    * The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.
    */
    'type': string;
    'usBankAccount'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "object"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "object"
        },
        {
            "name": "bacsDebit",
            "baseName": "bacs_debit",
            "type": "object"
        },
        {
            "name": "blik",
            "baseName": "blik",
            "type": "PaymentMethodDetailsBlik"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "object"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "object"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "PaymentMethodDetailsSepaDebit"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return MandatePaymentMethodDetails.attributeTypeMap;
    }
}

