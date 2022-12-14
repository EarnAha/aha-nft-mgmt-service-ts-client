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

export class PaymentMethodBacsDebit {
    /**
    * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
    */
    'fingerprint': string | null;
    /**
    * Last four digits of the bank account number.
    */
    'last4': string | null;
    /**
    * Sort code of the bank account. (e.g., `10-20-30`)
    */
    'sortCode': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sort_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodBacsDebit.attributeTypeMap;
    }
}

