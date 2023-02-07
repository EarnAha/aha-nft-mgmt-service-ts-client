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

export class SourceAchCreditTransfer {
    'accountNumber'?: string | null;
    'bankName'?: string | null;
    'fingerprint'?: string | null;
    'refundAccountHolderName'?: string | null;
    'refundAccountHolderType'?: string | null;
    'refundRoutingNumber'?: string | null;
    'routingNumber'?: string | null;
    'swiftCode'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "refundAccountHolderName",
            "baseName": "refund_account_holder_name",
            "type": "string"
        },
        {
            "name": "refundAccountHolderType",
            "baseName": "refund_account_holder_type",
            "type": "string"
        },
        {
            "name": "refundRoutingNumber",
            "baseName": "refund_routing_number",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        },
        {
            "name": "swiftCode",
            "baseName": "swift_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceAchCreditTransfer.attributeTypeMap;
    }
}
