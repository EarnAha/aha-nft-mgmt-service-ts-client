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
import { MandateOptionsDefaultFor } from './mandateOptionsDefaultFor';
import { MandateOptionsPaymentSchedule } from './mandateOptionsPaymentSchedule';
import { MandateOptionsTransactionType } from './mandateOptionsTransactionType';

export class AcssDebitMandateOptions {
    /**
    * A URL for custom mandate text
    */
    'customMandateUrl'?: string;
    /**
    * List of Stripe products where this mandate can be selected automatically.
    */
    'defaultFor'?: Array<MandateOptionsDefaultFor>;
    /**
    * Description of the interval. Only required if the \'payment_schedule\' parameter is \'interval\' or \'combined\'.
    */
    'intervalDescription': string | null;
    /**
    * Payment schedule for the mandate.
    */
    'paymentSchedule': MandateOptionsPaymentSchedule | null;
    /**
    * Transaction type of the mandate.
    */
    'transactionType': MandateOptionsTransactionType | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customMandateUrl",
            "baseName": "custom_mandate_url",
            "type": "string"
        },
        {
            "name": "defaultFor",
            "baseName": "default_for",
            "type": "Array<MandateOptionsDefaultFor>"
        },
        {
            "name": "intervalDescription",
            "baseName": "interval_description",
            "type": "string"
        },
        {
            "name": "paymentSchedule",
            "baseName": "payment_schedule",
            "type": "MandateOptionsPaymentSchedule"
        },
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "MandateOptionsTransactionType"
        }    ];

    static getAttributeTypeMap() {
        return AcssDebitMandateOptions.attributeTypeMap;
    }
}
