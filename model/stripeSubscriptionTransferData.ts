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
import { DefaultSettingsTransferDataDestination } from './defaultSettingsTransferDataDestination';

/**
* The account (if any) the subscription\'s payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription\'s invoices.
*/
export class StripeSubscriptionTransferData {
    /**
    * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
    */
    'amountPercent': number | null;
    'destination': DefaultSettingsTransferDataDestination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountPercent",
            "baseName": "amount_percent",
            "type": "number"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "DefaultSettingsTransferDataDestination"
        }    ];

    static getAttributeTypeMap() {
        return StripeSubscriptionTransferData.attributeTypeMap;
    }
}

