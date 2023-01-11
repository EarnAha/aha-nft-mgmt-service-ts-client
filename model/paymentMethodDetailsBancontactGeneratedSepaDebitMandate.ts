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
import { MandateCustomerAcceptance } from './mandateCustomerAcceptance';
import { MandatePaymentMethodDetails } from './mandatePaymentMethodDetails';
import { MandateSingleUse } from './mandateSingleUse';
import { MandateStatus } from './mandateStatus';
import { MandateType } from './mandateType';
import { StripeMandate } from './stripeMandate';
import { StripeMandatePaymentMethod } from './stripeMandatePaymentMethod';

/**
* The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
*/
export class PaymentMethodDetailsBancontactGeneratedSepaDebitMandate {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum;
    'customerAcceptance': MandateCustomerAcceptance;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    'multiUse'?: object;
    'paymentMethod': StripeMandatePaymentMethod;
    'paymentMethodDetails': MandatePaymentMethodDetails;
    'singleUse'?: MandateSingleUse;
    'status': MandateStatus;
    'type': MandateType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum"
        },
        {
            "name": "customerAcceptance",
            "baseName": "customer_acceptance",
            "type": "MandateCustomerAcceptance"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "multiUse",
            "baseName": "multi_use",
            "type": "object"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "StripeMandatePaymentMethod"
        },
        {
            "name": "paymentMethodDetails",
            "baseName": "payment_method_details",
            "type": "MandatePaymentMethodDetails"
        },
        {
            "name": "singleUse",
            "baseName": "single_use",
            "type": "MandateSingleUse"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MandateStatus"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MandateType"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.attributeTypeMap;
    }
}

export namespace PaymentMethodDetailsBancontactGeneratedSepaDebitMandate {
    export enum ObjectEnum {
        MANDATE = <any> 'mandate'
    }
}
