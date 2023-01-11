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
import { BankTransferEuBankTransfer } from './bankTransferEuBankTransfer';

export class CustomerBalanceBankTransfer {
    'euBankTransfer'?: BankTransferEuBankTransfer;
    /**
    * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
    */
    'type': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "euBankTransfer",
            "baseName": "eu_bank_transfer",
            "type": "BankTransferEuBankTransfer"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomerBalanceBankTransfer.attributeTypeMap;
    }
}

