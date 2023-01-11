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
import { ComputedUpfront } from './computedUpfront';
import { QuoteComputedRecurring } from './quoteComputedRecurring';

export class QuoteComputed {
    'recurring': QuoteComputedRecurring | null;
    'upfront': ComputedUpfront;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "QuoteComputedRecurring"
        },
        {
            "name": "upfront",
            "baseName": "upfront",
            "type": "ComputedUpfront"
        }    ];

    static getAttributeTypeMap() {
        return QuoteComputed.attributeTypeMap;
    }
}

