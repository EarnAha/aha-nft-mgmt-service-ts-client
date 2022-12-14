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
import { SettingsBacsDebitPayments } from './settingsBacsDebitPayments';
import { SettingsBranding } from './settingsBranding';
import { SettingsCardIssuing } from './settingsCardIssuing';
import { SettingsCardPayments } from './settingsCardPayments';
import { SettingsDashboard } from './settingsDashboard';
import { SettingsPayments } from './settingsPayments';
import { SettingsPayouts } from './settingsPayouts';
import { SettingsSepaDebitPayments } from './settingsSepaDebitPayments';
import { SettingsTreasury } from './settingsTreasury';

export class AccountSettings {
    'bacsDebitPayments'?: SettingsBacsDebitPayments;
    'branding': SettingsBranding;
    'cardIssuing'?: SettingsCardIssuing;
    'cardPayments': SettingsCardPayments;
    'dashboard': SettingsDashboard;
    'payments': SettingsPayments;
    'payouts'?: SettingsPayouts;
    'sepaDebitPayments'?: SettingsSepaDebitPayments;
    'treasury'?: SettingsTreasury;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bacsDebitPayments",
            "baseName": "bacs_debit_payments",
            "type": "SettingsBacsDebitPayments"
        },
        {
            "name": "branding",
            "baseName": "branding",
            "type": "SettingsBranding"
        },
        {
            "name": "cardIssuing",
            "baseName": "card_issuing",
            "type": "SettingsCardIssuing"
        },
        {
            "name": "cardPayments",
            "baseName": "card_payments",
            "type": "SettingsCardPayments"
        },
        {
            "name": "dashboard",
            "baseName": "dashboard",
            "type": "SettingsDashboard"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "SettingsPayments"
        },
        {
            "name": "payouts",
            "baseName": "payouts",
            "type": "SettingsPayouts"
        },
        {
            "name": "sepaDebitPayments",
            "baseName": "sepa_debit_payments",
            "type": "SettingsSepaDebitPayments"
        },
        {
            "name": "treasury",
            "baseName": "treasury",
            "type": "SettingsTreasury"
        }    ];

    static getAttributeTypeMap() {
        return AccountSettings.attributeTypeMap;
    }
}

