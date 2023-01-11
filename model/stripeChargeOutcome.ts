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
import { ChargeOutcomeRule } from './chargeOutcomeRule';

/**
* Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
*/
export class StripeChargeOutcome {
    /**
    * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as \"pending\" on a cardholder\'s statement.
    */
    'networkStatus': string | null;
    /**
    * An enumerated value providing a more detailed explanation of the outcome\'s `type`. Charges blocked by Radar\'s default block rule have the value `highest_risk_level`. Charges placed in review by Radar\'s default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
    */
    'reason': string | null;
    /**
    * Stripe Radar\'s evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
    */
    'riskLevel'?: string;
    /**
    * Stripe Radar\'s evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
    */
    'riskScore'?: number;
    'rule'?: ChargeOutcomeRule;
    /**
    * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
    */
    'sellerMessage': string | null;
    /**
    * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "networkStatus",
            "baseName": "network_status",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "riskLevel",
            "baseName": "risk_level",
            "type": "string"
        },
        {
            "name": "riskScore",
            "baseName": "risk_score",
            "type": "number"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "ChargeOutcomeRule"
        },
        {
            "name": "sellerMessage",
            "baseName": "seller_message",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeChargeOutcome.attributeTypeMap;
    }
}

