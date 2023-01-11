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
import { StripeTaxRate } from './stripeTaxRate';

export class LineItemTax {
    /**
    * Amount of tax applied for this rate.
    */
    'amount': number;
    'rate': StripeTaxRate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "StripeTaxRate"
        }    ];

    static getAttributeTypeMap() {
        return LineItemTax.attributeTypeMap;
    }
}

