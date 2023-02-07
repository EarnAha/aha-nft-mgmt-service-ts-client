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
* Contains details on how this Card maybe be used for 3D Secure authentication.
*/
export class PaymentMethodCardThreeDSecureUsage {
    /**
    * Whether 3D Secure is supported on this card.
    */
    'supported': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "supported",
            "baseName": "supported",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodCardThreeDSecureUsage.attributeTypeMap;
    }
}
