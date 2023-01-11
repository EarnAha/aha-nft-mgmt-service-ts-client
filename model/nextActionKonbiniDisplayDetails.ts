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
import { KonbiniDisplayDetailsStores } from './konbiniDisplayDetailsStores';

export class NextActionKonbiniDisplayDetails {
    /**
    * The timestamp at which the pending Konbini payment expires.
    */
    'expiresAt': number;
    /**
    * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
    */
    'hostedVoucherUrl': string | null;
    'stores': KonbiniDisplayDetailsStores;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "hostedVoucherUrl",
            "baseName": "hosted_voucher_url",
            "type": "string"
        },
        {
            "name": "stores",
            "baseName": "stores",
            "type": "KonbiniDisplayDetailsStores"
        }    ];

    static getAttributeTypeMap() {
        return NextActionKonbiniDisplayDetails.attributeTypeMap;
    }
}

