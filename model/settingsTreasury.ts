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
import { TreasuryTosAcceptance } from './treasuryTosAcceptance';

export class SettingsTreasury {
    'tosAcceptance'?: TreasuryTosAcceptance;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tosAcceptance",
            "baseName": "tos_acceptance",
            "type": "TreasuryTosAcceptance"
        }    ];

    static getAttributeTypeMap() {
        return SettingsTreasury.attributeTypeMap;
    }
}
