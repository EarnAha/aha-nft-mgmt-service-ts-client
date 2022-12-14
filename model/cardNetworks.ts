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

export class CardNetworks {
    /**
    * All available networks for the card.
    */
    'available': Array<string>;
    /**
    * The preferred network for the card.
    */
    'preferred': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<string>"
        },
        {
            "name": "preferred",
            "baseName": "preferred",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CardNetworks.attributeTypeMap;
    }
}

