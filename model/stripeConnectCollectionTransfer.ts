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
import { StripeConnectCollectionTransferDestination } from './stripeConnectCollectionTransferDestination';

/**
* The ConnectCollectionTransfer object.
*/
export class StripeConnectCollectionTransfer {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeConnectCollectionTransfer.ObjectEnum;
    /**
    * Amount transferred, in %s.
    */
    'amount': number;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency': string;
    'destination': StripeConnectCollectionTransferDestination;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;

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
            "type": "StripeConnectCollectionTransfer.ObjectEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "StripeConnectCollectionTransferDestination"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return StripeConnectCollectionTransfer.attributeTypeMap;
    }
}

export namespace StripeConnectCollectionTransfer {
    export enum ObjectEnum {
        CONNECT_COLLECTION_TRANSFER = <any> 'connect_collection_transfer'
    }
}