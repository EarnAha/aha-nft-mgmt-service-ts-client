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
import { StripeFeeRefund } from './stripeFeeRefund';

/**
* A container for paginated lists of objects. The array of objects is on the `.data` property, and `.has_more` indicates whether there are additional objects beyond the end of this list.  Learn more in Stripe\'s [pagination docs](https://stripe.com/docs/api/pagination?lang=node) or, when iterating over many items, try [auto-pagination](https://github.com/stripe/stripe-node#auto-pagination) instead.
*/
export class ApiListStripeFeeRefund {
    'object': ApiListStripeFeeRefund.ObjectEnum;
    'data': Array<StripeFeeRefund>;
    /**
    * True if this list has another page of items after this one that can be fetched.
    */
    'hasMore': boolean;
    /**
    * The URL where this list can be accessed.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "ApiListStripeFeeRefund.ObjectEnum"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<StripeFeeRefund>"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApiListStripeFeeRefund.attributeTypeMap;
    }
}

export namespace ApiListStripeFeeRefund {
    export enum ObjectEnum {
        LIST = <any> 'list'
    }
}
