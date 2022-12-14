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

export enum PaymentMethodType {
    ACSS_DEBIT = <any> 'acss_debit',
    AFFIRM = <any> 'affirm',
    AFTERPAY_CLEARPAY = <any> 'afterpay_clearpay',
    ALIPAY = <any> 'alipay',
    AU_BECS_DEBIT = <any> 'au_becs_debit',
    BACS_DEBIT = <any> 'bacs_debit',
    BANCONTACT = <any> 'bancontact',
    BLIK = <any> 'blik',
    BOLETO = <any> 'boleto',
    CARD = <any> 'card',
    CARD_PRESENT = <any> 'card_present',
    CUSTOMER_BALANCE = <any> 'customer_balance',
    EPS = <any> 'eps',
    FPX = <any> 'fpx',
    GIROPAY = <any> 'giropay',
    GRABPAY = <any> 'grabpay',
    IDEAL = <any> 'ideal',
    INTERAC_PRESENT = <any> 'interac_present',
    KLARNA = <any> 'klarna',
    KONBINI = <any> 'konbini',
    LINK = <any> 'link',
    OXXO = <any> 'oxxo',
    P24 = <any> 'p24',
    PAYNOW = <any> 'paynow',
    PIX = <any> 'pix',
    PROMPTPAY = <any> 'promptpay',
    SEPA_DEBIT = <any> 'sepa_debit',
    SOFORT = <any> 'sofort',
    US_BANK_ACCOUNT = <any> 'us_bank_account',
    WECHAT_PAY = <any> 'wechat_pay'
}
