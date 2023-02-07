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
import { GooglePayIneligibleReason } from './googlePayIneligibleReason';

export class WalletsGooglePay {
    /**
    * Google Pay Eligibility
    */
    'eligible': boolean;
    /**
    * Reason the card is ineligible for Google Pay
    */
    'ineligibleReason': GooglePayIneligibleReason | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eligible",
            "baseName": "eligible",
            "type": "boolean"
        },
        {
            "name": "ineligibleReason",
            "baseName": "ineligible_reason",
            "type": "GooglePayIneligibleReason"
        }    ];

    static getAttributeTypeMap() {
        return WalletsGooglePay.attributeTypeMap;
    }
}
