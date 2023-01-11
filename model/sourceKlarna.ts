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

export class SourceKlarna {
    'backgroundImageUrl'?: string;
    'clientToken'?: string | null;
    'firstName'?: string;
    'lastName'?: string;
    'locale'?: string;
    'logoUrl'?: string;
    'pageTitle'?: string;
    'payLaterAssetUrlsDescriptive'?: string;
    'payLaterAssetUrlsStandard'?: string;
    'payLaterName'?: string;
    'payLaterRedirectUrl'?: string;
    'payNowAssetUrlsDescriptive'?: string;
    'payNowAssetUrlsStandard'?: string;
    'payNowName'?: string;
    'payNowRedirectUrl'?: string;
    'payOverTimeAssetUrlsDescriptive'?: string;
    'payOverTimeAssetUrlsStandard'?: string;
    'payOverTimeName'?: string;
    'payOverTimeRedirectUrl'?: string;
    'paymentMethodCategories'?: string;
    'purchaseCountry'?: string;
    'purchaseType'?: string;
    'redirectUrl'?: string;
    'shippingDelay'?: number;
    'shippingFirstName'?: string;
    'shippingLastName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backgroundImageUrl",
            "baseName": "background_image_url",
            "type": "string"
        },
        {
            "name": "clientToken",
            "baseName": "client_token",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "logo_url",
            "type": "string"
        },
        {
            "name": "pageTitle",
            "baseName": "page_title",
            "type": "string"
        },
        {
            "name": "payLaterAssetUrlsDescriptive",
            "baseName": "pay_later_asset_urls_descriptive",
            "type": "string"
        },
        {
            "name": "payLaterAssetUrlsStandard",
            "baseName": "pay_later_asset_urls_standard",
            "type": "string"
        },
        {
            "name": "payLaterName",
            "baseName": "pay_later_name",
            "type": "string"
        },
        {
            "name": "payLaterRedirectUrl",
            "baseName": "pay_later_redirect_url",
            "type": "string"
        },
        {
            "name": "payNowAssetUrlsDescriptive",
            "baseName": "pay_now_asset_urls_descriptive",
            "type": "string"
        },
        {
            "name": "payNowAssetUrlsStandard",
            "baseName": "pay_now_asset_urls_standard",
            "type": "string"
        },
        {
            "name": "payNowName",
            "baseName": "pay_now_name",
            "type": "string"
        },
        {
            "name": "payNowRedirectUrl",
            "baseName": "pay_now_redirect_url",
            "type": "string"
        },
        {
            "name": "payOverTimeAssetUrlsDescriptive",
            "baseName": "pay_over_time_asset_urls_descriptive",
            "type": "string"
        },
        {
            "name": "payOverTimeAssetUrlsStandard",
            "baseName": "pay_over_time_asset_urls_standard",
            "type": "string"
        },
        {
            "name": "payOverTimeName",
            "baseName": "pay_over_time_name",
            "type": "string"
        },
        {
            "name": "payOverTimeRedirectUrl",
            "baseName": "pay_over_time_redirect_url",
            "type": "string"
        },
        {
            "name": "paymentMethodCategories",
            "baseName": "payment_method_categories",
            "type": "string"
        },
        {
            "name": "purchaseCountry",
            "baseName": "purchase_country",
            "type": "string"
        },
        {
            "name": "purchaseType",
            "baseName": "purchase_type",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "shippingDelay",
            "baseName": "shipping_delay",
            "type": "number"
        },
        {
            "name": "shippingFirstName",
            "baseName": "shipping_first_name",
            "type": "string"
        },
        {
            "name": "shippingLastName",
            "baseName": "shipping_last_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceKlarna.attributeTypeMap;
    }
}

