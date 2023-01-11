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

export class CouponAppliesTo {
    /**
    * A list of product IDs this coupon applies to
    */
    'products': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CouponAppliesTo.attributeTypeMap;
    }
}

