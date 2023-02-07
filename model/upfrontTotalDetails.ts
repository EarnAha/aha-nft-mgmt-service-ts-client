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
import { TotalDetailsBreakdown } from './totalDetailsBreakdown';

export class UpfrontTotalDetails {
    /**
    * This is the sum of all the discounts.
    */
    'amountDiscount': number;
    /**
    * This is the sum of all the shipping amounts.
    */
    'amountShipping': number | null;
    /**
    * This is the sum of all the tax amounts.
    */
    'amountTax': number;
    'breakdown'?: TotalDetailsBreakdown;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountDiscount",
            "baseName": "amount_discount",
            "type": "number"
        },
        {
            "name": "amountShipping",
            "baseName": "amount_shipping",
            "type": "number"
        },
        {
            "name": "amountTax",
            "baseName": "amount_tax",
            "type": "number"
        },
        {
            "name": "breakdown",
            "baseName": "breakdown",
            "type": "TotalDetailsBreakdown"
        }    ];

    static getAttributeTypeMap() {
        return UpfrontTotalDetails.attributeTypeMap;
    }
}
