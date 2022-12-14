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
* Owner\'s verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
*/
export class WalletMasterpassBillingAddress {
    /**
    * City/District/Suburb/Town/Village.
    */
    'city': string | null;
    /**
    * 2-letter country code.
    */
    'country': string | null;
    /**
    * Address line 1 (Street address/PO Box/Company name).
    */
    'line1': string | null;
    /**
    * Address line 2 (Apartment/Suite/Unit/Building).
    */
    'line2': string | null;
    /**
    * ZIP or postal code.
    */
    'postalCode': string | null;
    /**
    * State/County/Province/Region.
    */
    'state': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletMasterpassBillingAddress.attributeTypeMap;
    }
}

