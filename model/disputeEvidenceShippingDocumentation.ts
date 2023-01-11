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
import { FilePurpose } from './filePurpose';
import { StripeFile } from './stripeFile';
import { StripeFileLinks } from './stripeFileLinks';

/**
* (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer\'s full shipping address, if possible.
*/
export class DisputeEvidenceShippingDocumentation {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': DisputeEvidenceShippingDocumentation.ObjectEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * The time at which the file expires and is no longer available in epoch seconds.
    */
    'expiresAt': number | null;
    /**
    * A filename for the file, suitable for saving to a filesystem.
    */
    'filename': string | null;
    'links'?: StripeFileLinks | null;
    'purpose': FilePurpose;
    /**
    * The size in bytes of the file object.
    */
    'size': number;
    /**
    * A user friendly title for the document.
    */
    'title': string | null;
    /**
    * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
    */
    'type': string | null;
    /**
    * The URL from which the file can be downloaded using your live secret API key.
    */
    'url': string | null;

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
            "type": "DisputeEvidenceShippingDocumentation.ObjectEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "StripeFileLinks"
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "FilePurpose"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DisputeEvidenceShippingDocumentation.attributeTypeMap;
    }
}

export namespace DisputeEvidenceShippingDocumentation {
    export enum ObjectEnum {
        FILE = <any> 'file'
    }
}
