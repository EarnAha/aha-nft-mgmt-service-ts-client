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

export enum DisputeStatus {
    CHARGE_REFUNDED = <any> 'charge_refunded',
    LOST = <any> 'lost',
    NEEDS_RESPONSE = <any> 'needs_response',
    UNDER_REVIEW = <any> 'under_review',
    WARNING_CLOSED = <any> 'warning_closed',
    WARNING_NEEDS_RESPONSE = <any> 'warning_needs_response',
    WARNING_UNDER_REVIEW = <any> 'warning_under_review',
    WON = <any> 'won'
}
