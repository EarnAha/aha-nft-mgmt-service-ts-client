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

export class CardChecks {
    /**
    * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressLine1Check': string | null;
    /**
    * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressPostalCodeCheck': string | null;
    /**
    * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'cvcCheck': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLine1Check",
            "baseName": "address_line1_check",
            "type": "string"
        },
        {
            "name": "addressPostalCodeCheck",
            "baseName": "address_postal_code_check",
            "type": "string"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardChecks.attributeTypeMap;
    }
}

