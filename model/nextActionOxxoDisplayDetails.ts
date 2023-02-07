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

export class NextActionOxxoDisplayDetails {
    /**
    * The timestamp after which the OXXO voucher expires.
    */
    'expiresAfter': number | null;
    /**
    * The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
    */
    'hostedVoucherUrl': string | null;
    /**
    * OXXO reference number.
    */
    'number': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAfter",
            "baseName": "expires_after",
            "type": "number"
        },
        {
            "name": "hostedVoucherUrl",
            "baseName": "hosted_voucher_url",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NextActionOxxoDisplayDetails.attributeTypeMap;
    }
}
