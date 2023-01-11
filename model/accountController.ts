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
import { ControllerType } from './controllerType';

export class AccountController {
    /**
    * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
    */
    'isController'?: boolean;
    'type': ControllerType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isController",
            "baseName": "is_controller",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ControllerType"
        }    ];

    static getAttributeTypeMap() {
        return AccountController.attributeTypeMap;
    }
}

