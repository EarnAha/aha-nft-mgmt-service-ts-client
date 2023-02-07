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

export class PaymentMethodDetailsGiropay {
    /**
    * Bank code of bank associated with the bank account.
    */
    'bankCode': string | null;
    /**
    * Name of the bank associated with the bank account.
    */
    'bankName': string | null;
    /**
    * Bank Identifier Code of the bank associated with the bank account.
    */
    'bic': string | null;
    /**
    * Owner\'s verified full name. Values are verified or provided by Giropay directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. Giropay rarely provides this information so the attribute is usually empty.
    */
    'verifiedName': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankCode",
            "baseName": "bank_code",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "verifiedName",
            "baseName": "verified_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsGiropay.attributeTypeMap;
    }
}
