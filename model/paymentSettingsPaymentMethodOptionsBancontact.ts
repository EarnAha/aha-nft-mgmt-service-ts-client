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
import { BancontactPreferredLanguage } from './bancontactPreferredLanguage';

/**
* If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice\'s PaymentIntent.
*/
export class PaymentSettingsPaymentMethodOptionsBancontact {
    'preferredLanguage': BancontactPreferredLanguage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferredLanguage",
            "baseName": "preferred_language",
            "type": "BancontactPreferredLanguage"
        }    ];

    static getAttributeTypeMap() {
        return PaymentSettingsPaymentMethodOptionsBancontact.attributeTypeMap;
    }
}

