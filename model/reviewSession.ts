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

export class ReviewSession {
    /**
    * The browser used in this browser session (e.g., `Chrome`).
    */
    'browser': string | null;
    /**
    * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
    */
    'device': string | null;
    /**
    * The platform for the browser session (e.g., `Macintosh`).
    */
    'platform': string | null;
    /**
    * The version for the browser session (e.g., `61.0.3163.100`).
    */
    'version': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "browser",
            "baseName": "browser",
            "type": "string"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReviewSession.attributeTypeMap;
    }
}

