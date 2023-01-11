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
import { UsBankAccountFinancialConnections } from './usBankAccountFinancialConnections';
import { UsBankAccountVerificationMethod } from './usBankAccountVerificationMethod';

export class PaymentMethodOptionsUsBankAccount {
    'financialConnections'?: UsBankAccountFinancialConnections;
    'verificationMethod'?: UsBankAccountVerificationMethod;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "financialConnections",
            "baseName": "financial_connections",
            "type": "UsBankAccountFinancialConnections"
        },
        {
            "name": "verificationMethod",
            "baseName": "verification_method",
            "type": "UsBankAccountVerificationMethod"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsUsBankAccount.attributeTypeMap;
    }
}

