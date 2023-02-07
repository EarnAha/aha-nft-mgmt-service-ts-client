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

export enum RequestHistoryReason {
    ACCOUNT_DISABLED = <any> 'account_disabled',
    CARD_ACTIVE = <any> 'card_active',
    CARD_INACTIVE = <any> 'card_inactive',
    CARDHOLDER_INACTIVE = <any> 'cardholder_inactive',
    CARDHOLDER_VERIFICATION_REQUIRED = <any> 'cardholder_verification_required',
    INSUFFICIENT_FUNDS = <any> 'insufficient_funds',
    NOT_ALLOWED = <any> 'not_allowed',
    SPENDING_CONTROLS = <any> 'spending_controls',
    SUSPECTED_FRAUD = <any> 'suspected_fraud',
    VERIFICATION_FAILED = <any> 'verification_failed',
    WEBHOOK_APPROVED = <any> 'webhook_approved',
    WEBHOOK_DECLINED = <any> 'webhook_declined',
    WEBHOOK_ERROR = <any> 'webhook_error',
    WEBHOOK_TIMEOUT = <any> 'webhook_timeout'
}