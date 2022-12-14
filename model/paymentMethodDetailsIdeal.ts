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
import { IdealBank } from './idealBank';
import { IdealBic } from './idealBic';
import { PaymentMethodDetailsBancontactGeneratedSepaDebit } from './paymentMethodDetailsBancontactGeneratedSepaDebit';
import { PaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';

export class PaymentMethodDetailsIdeal {
    /**
    * The customer\'s bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
    */
    'bank': IdealBank | null;
    /**
    * The Bank Identifier Code of the customer\'s bank.
    */
    'bic': IdealBic | null;
    'generatedSepaDebit': PaymentMethodDetailsBancontactGeneratedSepaDebit | null;
    'generatedSepaDebitMandate': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate | null;
    /**
    * Last four characters of the IBAN.
    */
    'ibanLast4': string | null;
    /**
    * Owner\'s verified full name. Values are verified or provided by iDEAL directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
    */
    'verifiedName': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "IdealBank"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "IdealBic"
        },
        {
            "name": "generatedSepaDebit",
            "baseName": "generated_sepa_debit",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebit"
        },
        {
            "name": "generatedSepaDebitMandate",
            "baseName": "generated_sepa_debit_mandate",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate"
        },
        {
            "name": "ibanLast4",
            "baseName": "iban_last4",
            "type": "string"
        },
        {
            "name": "verifiedName",
            "baseName": "verified_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsIdeal.attributeTypeMap;
    }
}

