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
import { VerificationDocument } from './verificationDocument';

/**
* Information on the verification state of the company.
*/
export class AccountCompanyVerification {
    'document': VerificationDocument;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "VerificationDocument"
        }    ];

    static getAttributeTypeMap() {
        return AccountCompanyVerification.attributeTypeMap;
    }
}

