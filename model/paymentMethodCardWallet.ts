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
import { WalletMasterpass } from './walletMasterpass';
import { WalletType } from './walletType';
import { WalletVisaCheckout } from './walletVisaCheckout';

/**
* If this Card is part of a card wallet, this contains the details of the card wallet.
*/
export class PaymentMethodCardWallet {
    'amexExpressCheckout'?: object;
    'applePay'?: object;
    /**
    * (For tokenized numbers only.) The last four digits of the device account number.
    */
    'dynamicLast4': string | null;
    'googlePay'?: object;
    'masterpass'?: WalletMasterpass;
    'samsungPay'?: object;
    'type': WalletType;
    'visaCheckout'?: WalletVisaCheckout;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amexExpressCheckout",
            "baseName": "amex_express_checkout",
            "type": "object"
        },
        {
            "name": "applePay",
            "baseName": "apple_pay",
            "type": "object"
        },
        {
            "name": "dynamicLast4",
            "baseName": "dynamic_last4",
            "type": "string"
        },
        {
            "name": "googlePay",
            "baseName": "google_pay",
            "type": "object"
        },
        {
            "name": "masterpass",
            "baseName": "masterpass",
            "type": "WalletMasterpass"
        },
        {
            "name": "samsungPay",
            "baseName": "samsung_pay",
            "type": "object"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WalletType"
        },
        {
            "name": "visaCheckout",
            "baseName": "visa_checkout",
            "type": "WalletVisaCheckout"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodCardWallet.attributeTypeMap;
    }
}

export namespace PaymentMethodCardWallet {
}
