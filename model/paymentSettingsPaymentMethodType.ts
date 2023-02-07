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

export enum PaymentSettingsPaymentMethodType {
    ACH_CREDIT_TRANSFER = <any> 'ach_credit_transfer',
    ACH_DEBIT = <any> 'ach_debit',
    ACSS_DEBIT = <any> 'acss_debit',
    AU_BECS_DEBIT = <any> 'au_becs_debit',
    BACS_DEBIT = <any> 'bacs_debit',
    BANCONTACT = <any> 'bancontact',
    BOLETO = <any> 'boleto',
    CARD = <any> 'card',
    CUSTOMER_BALANCE = <any> 'customer_balance',
    FPX = <any> 'fpx',
    GIROPAY = <any> 'giropay',
    GRABPAY = <any> 'grabpay',
    IDEAL = <any> 'ideal',
    KONBINI = <any> 'konbini',
    LINK = <any> 'link',
    PAYNOW = <any> 'paynow',
    PROMPTPAY = <any> 'promptpay',
    SEPA_CREDIT_TRANSFER = <any> 'sepa_credit_transfer',
    SEPA_DEBIT = <any> 'sepa_debit',
    SOFORT = <any> 'sofort',
    US_BANK_ACCOUNT = <any> 'us_bank_account',
    WECHAT_PAY = <any> 'wechat_pay'
}