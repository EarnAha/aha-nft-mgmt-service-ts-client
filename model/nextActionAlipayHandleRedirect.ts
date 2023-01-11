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

export class NextActionAlipayHandleRedirect {
    /**
    * The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
    */
    'nativeData': string | null;
    /**
    * The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
    */
    'nativeUrl': string | null;
    /**
    * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
    */
    'returnUrl': string | null;
    /**
    * The URL you must redirect your customer to in order to authenticate the payment.
    */
    'url': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nativeData",
            "baseName": "native_data",
            "type": "string"
        },
        {
            "name": "nativeUrl",
            "baseName": "native_url",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "return_url",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NextActionAlipayHandleRedirect.attributeTypeMap;
    }
}

