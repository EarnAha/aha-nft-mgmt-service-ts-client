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
import { AutomaticTaxStatus } from './automaticTaxStatus';

export class QuoteAutomaticTax {
    /**
    * Automatically calculate taxes
    */
    'enabled': boolean;
    /**
    * The status of the most recent automated tax calculation for this quote.
    */
    'status': AutomaticTaxStatus | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AutomaticTaxStatus"
        }    ];

    static getAttributeTypeMap() {
        return QuoteAutomaticTax.attributeTypeMap;
    }
}

