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
* Details about the authorization, such as identifiers, set by the card network.
*/
export class StripeIssuingAuthorizationNetworkData {
    /**
    * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
    */
    'acquiringInstitutionId': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquiringInstitutionId",
            "baseName": "acquiring_institution_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingAuthorizationNetworkData.attributeTypeMap;
    }
}

