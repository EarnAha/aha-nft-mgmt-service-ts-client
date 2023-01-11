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

export class ReviewIpAddressLocation {
    /**
    * The city where the payment originated.
    */
    'city': string | null;
    /**
    * Two-letter ISO code representing the country where the payment originated.
    */
    'country': string | null;
    /**
    * The geographic latitude where the payment originated.
    */
    'latitude': number | null;
    /**
    * The geographic longitude where the payment originated.
    */
    'longitude': number | null;
    /**
    * The state/county/province/region where the payment originated.
    */
    'region': string | null;

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
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReviewIpAddressLocation.attributeTypeMap;
    }
}

