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

export class PersonAddressKanji {
    /**
    * City/Ward.
    */
    'city': string | null;
    /**
    * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
    */
    'country': string | null;
    /**
    * Block/Building number.
    */
    'line1': string | null;
    /**
    * Building details.
    */
    'line2': string | null;
    /**
    * ZIP or postal code.
    */
    'postalCode': string | null;
    /**
    * Prefecture.
    */
    'state': string | null;
    /**
    * Town/cho-me.
    */
    'town': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "town",
            "baseName": "town",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PersonAddressKanji.attributeTypeMap;
    }
}

