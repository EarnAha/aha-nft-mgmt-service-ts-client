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
import { BoletoSetupFutureUsage } from './boletoSetupFutureUsage';

export class PaymentMethodOptionsBoleto {
    /**
    * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
    */
    'expiresAfterDays': number;
    'setupFutureUsage'?: BoletoSetupFutureUsage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAfterDays",
            "baseName": "expires_after_days",
            "type": "number"
        },
        {
            "name": "setupFutureUsage",
            "baseName": "setup_future_usage",
            "type": "BoletoSetupFutureUsage"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodOptionsBoleto.attributeTypeMap;
    }
}

export namespace PaymentMethodOptionsBoleto {
}
