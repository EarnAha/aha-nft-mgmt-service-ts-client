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
import { CardPaymentsDeclineOn } from './cardPaymentsDeclineOn';

export class SettingsCardPayments {
    'declineOn'?: CardPaymentsDeclineOn;
    /**
    * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
    */
    'statementDescriptorPrefix': string | null;
    /**
    * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
    */
    'statementDescriptorPrefixKana': string | null;
    /**
    * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
    */
    'statementDescriptorPrefixKanji': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "declineOn",
            "baseName": "decline_on",
            "type": "CardPaymentsDeclineOn"
        },
        {
            "name": "statementDescriptorPrefix",
            "baseName": "statement_descriptor_prefix",
            "type": "string"
        },
        {
            "name": "statementDescriptorPrefixKana",
            "baseName": "statement_descriptor_prefix_kana",
            "type": "string"
        },
        {
            "name": "statementDescriptorPrefixKanji",
            "baseName": "statement_descriptor_prefix_kanji",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SettingsCardPayments.attributeTypeMap;
    }
}

