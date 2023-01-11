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

export class SourceMultibanco {
    'entity'?: string | null;
    'reference'?: string | null;
    'refundAccountHolderAddressCity'?: string | null;
    'refundAccountHolderAddressCountry'?: string | null;
    'refundAccountHolderAddressLine1'?: string | null;
    'refundAccountHolderAddressLine2'?: string | null;
    'refundAccountHolderAddressPostalCode'?: string | null;
    'refundAccountHolderAddressState'?: string | null;
    'refundAccountHolderName'?: string | null;
    'refundIban'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressCity",
            "baseName": "refund_account_holder_address_city",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressCountry",
            "baseName": "refund_account_holder_address_country",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressLine1",
            "baseName": "refund_account_holder_address_line1",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressLine2",
            "baseName": "refund_account_holder_address_line2",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressPostalCode",
            "baseName": "refund_account_holder_address_postal_code",
            "type": "string"
        },
        {
            "name": "refundAccountHolderAddressState",
            "baseName": "refund_account_holder_address_state",
            "type": "string"
        },
        {
            "name": "refundAccountHolderName",
            "baseName": "refund_account_holder_name",
            "type": "string"
        },
        {
            "name": "refundIban",
            "baseName": "refund_iban",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceMultibanco.attributeTypeMap;
    }
}

