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

export class SettingsSepaDebitPayments {
    /**
    * SEPA creditor identifier that identifies the company making the payment.
    */
    'creditorId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creditorId",
            "baseName": "creditor_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SettingsSepaDebitPayments.attributeTypeMap;
    }
}

