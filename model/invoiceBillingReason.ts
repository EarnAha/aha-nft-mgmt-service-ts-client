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

export enum InvoiceBillingReason {
    AUTOMATIC_PENDING_INVOICE_ITEM_INVOICE = <any> 'automatic_pending_invoice_item_invoice',
    MANUAL = <any> 'manual',
    QUOTE_ACCEPT = <any> 'quote_accept',
    SUBSCRIPTION = <any> 'subscription',
    SUBSCRIPTION_CREATE = <any> 'subscription_create',
    SUBSCRIPTION_CYCLE = <any> 'subscription_cycle',
    SUBSCRIPTION_THRESHOLD = <any> 'subscription_threshold',
    SUBSCRIPTION_UPDATE = <any> 'subscription_update',
    UPCOMING = <any> 'upcoming'
}