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

/**
* The subscription schedule\'s default invoice settings.
*/
export class SubscriptionScheduleDefaultSettingsInvoiceSettings {
    /**
    * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
    */
    'daysUntilDue': number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "daysUntilDue",
            "baseName": "days_until_due",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleDefaultSettingsInvoiceSettings.attributeTypeMap;
    }
}

