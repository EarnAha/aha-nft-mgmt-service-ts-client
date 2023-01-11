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
import { CustomerBalanceBankTransfer } from './customerBalanceBankTransfer';

export class PaymentMethodOptionsCustomerBalance {
    'bankTransfer'?: CustomerBalanceBankTransfer;
    /**
    * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
    */
    'fundingType': PaymentMethodOptionsCustomerBalance.FundingTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankTransfer",
            "baseName": "bank_transfer",
            "type": "CustomerBalanceBankTransfer"
        },
        {
            "name": "fundingType",
            "baseName": "funding_type",
            "type": "PaymentMethodOptionsCustomerBalance.FundingTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsCustomerBalance.attributeTypeMap;
    }
}

export namespace PaymentMethodOptionsCustomerBalance {
    export enum FundingTypeEnum {
        BANK_TRANSFER = <any> 'bank_transfer'
    }
}
