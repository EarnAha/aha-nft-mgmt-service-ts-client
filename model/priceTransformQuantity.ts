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
import { TransformQuantityRound } from './transformQuantityRound';

export class PriceTransformQuantity {
    /**
    * Divide usage by this number.
    */
    'divideBy': number;
    'round': TransformQuantityRound;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "divideBy",
            "baseName": "divide_by",
            "type": "number"
        },
        {
            "name": "round",
            "baseName": "round",
            "type": "TransformQuantityRound"
        }    ];

    static getAttributeTypeMap() {
        return PriceTransformQuantity.attributeTypeMap;
    }
}

export namespace PriceTransformQuantity {
}
