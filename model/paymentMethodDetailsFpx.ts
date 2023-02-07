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
import { FpxAccountHolderType } from './fpxAccountHolderType';
import { FpxBank } from './fpxBank';

export class PaymentMethodDetailsFpx {
    /**
    * Account holder type, if provided. Can be one of `individual` or `company`.
    */
    'accountHolderType': FpxAccountHolderType | null;
    'bank': FpxBank;
    /**
    * Unique transaction id generated by FPX for every request from the merchant
    */
    'transactionId': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "FpxAccountHolderType"
        },
        {
            "name": "bank",
            "baseName": "bank",
            "type": "FpxBank"
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsFpx.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsFpx {
}