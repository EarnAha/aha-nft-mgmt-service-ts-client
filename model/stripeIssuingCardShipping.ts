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
import { CardShippingCustoms } from './cardShippingCustoms';
import { ShippingCarrier } from './shippingCarrier';
import { ShippingService } from './shippingService';
import { ShippingStatus } from './shippingStatus';
import { ShippingType } from './shippingType';
import { StripeAddress } from './stripeAddress';

/**
* Where and how the card will be shipped.
*/
export class StripeIssuingCardShipping {
    'address': StripeAddress;
    /**
    * The delivery company that shipped a card.
    */
    'carrier': ShippingCarrier | null;
    'customs': CardShippingCustoms | null;
    /**
    * A unix timestamp representing a best estimate of when the card will be delivered.
    */
    'eta': number | null;
    /**
    * Recipient name.
    */
    'name': string;
    /**
    * The phone number of the receiver of the bulk shipment. This phone number will be provided to the shipping company, who might use it to contact the receiver in case of delivery issues.
    */
    'phoneNumber': string | null;
    /**
    * Whether a signature is required for card delivery. This feature is only supported for US users. Standard shipping service does not support signature on delivery. The default value for standard shipping service is false and for express and priority services is true.
    */
    'requireSignature': boolean | null;
    'service': ShippingService;
    /**
    * The delivery status of the card.
    */
    'status': ShippingStatus | null;
    /**
    * A tracking number for a card shipment.
    */
    'trackingNumber': string | null;
    /**
    * A link to the shipping carrier\'s site where you can view detailed information about a card shipment.
    */
    'trackingUrl': string | null;
    'type': ShippingType;

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
            "type": "ShippingCarrier"
        },
        {
            "name": "customs",
            "baseName": "customs",
            "type": "CardShippingCustoms"
        },
        {
            "name": "eta",
            "baseName": "eta",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "requireSignature",
            "baseName": "require_signature",
            "type": "boolean"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "ShippingService"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ShippingStatus"
        },
        {
            "name": "trackingNumber",
            "baseName": "tracking_number",
            "type": "string"
        },
        {
            "name": "trackingUrl",
            "baseName": "tracking_url",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ShippingType"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingCardShipping.attributeTypeMap;
    }
}

