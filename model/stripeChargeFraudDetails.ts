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

/**
* Information on fraud assessments for the charge.
*/
export class StripeChargeFraudDetails {
    /**
    * Assessments from Stripe. If set, the value is `fraudulent`.
    */
    'stripeReport'?: string;
    /**
    * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
    */
    'userReport'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stripeReport",
            "baseName": "stripe_report",
            "type": "string"
        },
        {
            "name": "userReport",
            "baseName": "user_report",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeChargeFraudDetails.attributeTypeMap;
    }
}

