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
import { PurchaseDetailsReceipt } from './purchaseDetailsReceipt';
import { TransactionPurchaseDetailsFlight } from './transactionPurchaseDetailsFlight';
import { TransactionPurchaseDetailsFuel } from './transactionPurchaseDetailsFuel';
import { TransactionPurchaseDetailsLodging } from './transactionPurchaseDetailsLodging';

/**
* Additional purchase information that is optionally provided by the merchant.
*/
export class StripeIssuingTransactionPurchaseDetails {
    'flight': TransactionPurchaseDetailsFlight | null;
    'fuel': TransactionPurchaseDetailsFuel | null;
    'lodging': TransactionPurchaseDetailsLodging | null;
    /**
    * The line items in the purchase.
    */
    'receipt': Array<PurchaseDetailsReceipt> | null;
    /**
    * A merchant-specific order number.
    */
    'reference': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flight",
            "baseName": "flight",
            "type": "TransactionPurchaseDetailsFlight"
        },
        {
            "name": "fuel",
            "baseName": "fuel",
            "type": "TransactionPurchaseDetailsFuel"
        },
        {
            "name": "lodging",
            "baseName": "lodging",
            "type": "TransactionPurchaseDetailsLodging"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "Array<PurchaseDetailsReceipt>"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeIssuingTransactionPurchaseDetails.attributeTypeMap;
    }
}

