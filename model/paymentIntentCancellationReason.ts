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

export enum PaymentIntentCancellationReason {
    ABANDONED = <any> 'abandoned',
    AUTOMATIC = <any> 'automatic',
    DUPLICATE = <any> 'duplicate',
    FAILED_INVOICE = <any> 'failed_invoice',
    FRAUDULENT = <any> 'fraudulent',
    REQUESTED_BY_CUSTOMER = <any> 'requested_by_customer',
    VOID_INVOICE = <any> 'void_invoice'
}
