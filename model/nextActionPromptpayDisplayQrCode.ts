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

export class NextActionPromptpayDisplayQrCode {
    /**
    * The raw data string used to generate QR code, it should be used together with QR code library.
    */
    'data': string;
    /**
    * The URL to the hosted PromptPay instructions page, which allows customers to view the PromptPay QR code.
    */
    'hostedInstructionsUrl': string;
    /**
    * The PNG path used to render the QR code, can be used as the source in an HTML img tag
    */
    'imageUrlPng': string;
    /**
    * The SVG path used to render the QR code, can be used as the source in an HTML img tag
    */
    'imageUrlSvg': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "hostedInstructionsUrl",
            "baseName": "hosted_instructions_url",
            "type": "string"
        },
        {
            "name": "imageUrlPng",
            "baseName": "image_url_png",
            "type": "string"
        },
        {
            "name": "imageUrlSvg",
            "baseName": "image_url_svg",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NextActionPromptpayDisplayQrCode.attributeTypeMap;
    }
}

