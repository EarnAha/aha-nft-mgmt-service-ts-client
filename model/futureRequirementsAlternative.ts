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

export class FutureRequirementsAlternative {
    /**
    * Fields that can be provided to satisfy all fields in `original_fields_due`.
    */
    'alternativeFieldsDue': Array<string>;
    /**
    * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
    */
    'originalFieldsDue': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternativeFieldsDue",
            "baseName": "alternative_fields_due",
            "type": "Array<string>"
        },
        {
            "name": "originalFieldsDue",
            "baseName": "original_fields_due",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return FutureRequirementsAlternative.attributeTypeMap;
    }
}

