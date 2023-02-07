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
* The DeletedCard object.
*/
export class StripeDeletedCard {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeDeletedCard.ObjectEnum;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
    */
    'currency'?: string | null;
    /**
    * Always true for a deleted object
    */
    'deleted': StripeDeletedCard.DeletedEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "StripeDeletedCard.ObjectEnum"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "StripeDeletedCard.DeletedEnum"
        }    ];

    static getAttributeTypeMap() {
        return StripeDeletedCard.attributeTypeMap;
    }
}

export namespace StripeDeletedCard {
    export enum ObjectEnum {
        CARD = <any> 'card'
    }
    export enum DeletedEnum {
        TRUE = <any> true
    }
}