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

export class CreateUserReq {
    /**
    * Stringified UUIDv4. See [RFC 4112](https://tools.ietf.org/html/rfc4122)
    */
    'userId': string;
    /**
    * Stringified Email.
    */
    'email': string;
    'username': string;
    'referrerUserId'?: string;
    /**
    * signed integer of number as timezone 0 = UTC+00:00 ; 480 = UTC+08:00 ; -180 = UTC-03:00 ... etc. global ranging from UTC-12:00 to UTC+14:00. (i.e. -720 ~ +840)
    */
    'timezone'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "referrerUserId",
            "baseName": "referrerUserId",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateUserReq.attributeTypeMap;
    }
}
