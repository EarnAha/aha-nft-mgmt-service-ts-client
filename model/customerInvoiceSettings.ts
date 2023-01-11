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
import { CustomerInvoiceSettingsDefaultPaymentMethod } from './customerInvoiceSettingsDefaultPaymentMethod';
import { CustomerInvoiceSettingsRenderingOptions } from './customerInvoiceSettingsRenderingOptions';
import { InvoiceSettingsCustomField } from './invoiceSettingsCustomField';

export class CustomerInvoiceSettings {
    /**
    * Default custom fields to be displayed on invoices for this customer.
    */
    'customFields': Array<InvoiceSettingsCustomField> | null;
    'defaultPaymentMethod': CustomerInvoiceSettingsDefaultPaymentMethod | null;
    /**
    * Default footer to be displayed on invoices for this customer.
    */
    'footer': string | null;
    'renderingOptions': CustomerInvoiceSettingsRenderingOptions | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<InvoiceSettingsCustomField>"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "CustomerInvoiceSettingsDefaultPaymentMethod"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "renderingOptions",
            "baseName": "rendering_options",
            "type": "CustomerInvoiceSettingsRenderingOptions"
        }    ];

    static getAttributeTypeMap() {
        return CustomerInvoiceSettings.attributeTypeMap;
    }
}

