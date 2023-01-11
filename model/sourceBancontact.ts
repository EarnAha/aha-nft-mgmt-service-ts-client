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

export class SourceBancontact {
    'bankCode'?: string | null;
    'bankName'?: string | null;
    'bic'?: string | null;
    'ibanLast4'?: string | null;
    'preferredLanguage'?: string | null;
    'statementDescriptor'?: string | null;

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
            "name": "ibanLast4",
            "baseName": "iban_last4",
            "type": "string"
        },
        {
            "name": "preferredLanguage",
            "baseName": "preferred_language",
            "type": "string"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceBancontact.attributeTypeMap;
    }
}

