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

export class CardCustomerNotification {
    /**
    * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
    */
    'approvalRequested': boolean | null;
    /**
    * If customer approval is required, they need to provide approval before this time.
    */
    'completesAt': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "approvalRequested",
            "baseName": "approval_requested",
            "type": "boolean"
        },
        {
            "name": "completesAt",
            "baseName": "completes_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CardCustomerNotification.attributeTypeMap;
    }
}

