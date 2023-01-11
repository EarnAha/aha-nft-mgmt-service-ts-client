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
import { StripeAddress } from './stripeAddress';

export class CustomerShipping {
    'address'?: StripeAddress;
    /**
    * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
    */
    'carrier'?: string | null;
    /**
    * Recipient name.
    */
    'name'?: string;
    /**
    * Recipient phone (including extension).
    */
    'phone'?: string | null;
    /**
    * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
    */
    'trackingNumber'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "StripeAddress"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "trackingNumber",
            "baseName": "tracking_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomerShipping.attributeTypeMap;
    }
}

