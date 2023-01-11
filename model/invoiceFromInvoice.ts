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
import { InvoiceFromInvoiceInvoice } from './invoiceFromInvoiceInvoice';

export class InvoiceFromInvoice {
    /**
    * The relation between this invoice and the cloned invoice
    */
    'action': string;
    'invoice': InvoiceFromInvoiceInvoice;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "InvoiceFromInvoiceInvoice"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceFromInvoice.attributeTypeMap;
    }
}

