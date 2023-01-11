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
import { ProcessingCard } from './processingCard';

export class PaymentIntentProcessing {
    'card'?: ProcessingCard;
    /**
    * Type of the payment method for which payment is in `processing` state, one of `card`.
    */
    'type': PaymentIntentProcessing.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "ProcessingCard"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentIntentProcessing.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntentProcessing.attributeTypeMap;
    }
}

export namespace PaymentIntentProcessing {
    export enum TypeEnum {
        CARD = <any> 'card'
    }
}
