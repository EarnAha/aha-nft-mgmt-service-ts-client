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
import { PaymentMethodAcssDebit } from './paymentMethodAcssDebit';
import { PaymentMethodAuBecsDebit } from './paymentMethodAuBecsDebit';
import { PaymentMethodBacsDebit } from './paymentMethodBacsDebit';
import { PaymentMethodBillingDetails } from './paymentMethodBillingDetails';
import { PaymentMethodBoleto } from './paymentMethodBoleto';
import { PaymentMethodCard } from './paymentMethodCard';
import { PaymentMethodEps } from './paymentMethodEps';
import { PaymentMethodFpx } from './paymentMethodFpx';
import { PaymentMethodIdeal } from './paymentMethodIdeal';
import { PaymentMethodKlarna } from './paymentMethodKlarna';
import { PaymentMethodLink } from './paymentMethodLink';
import { PaymentMethodP24 } from './paymentMethodP24';
import { PaymentMethodRadarOptions } from './paymentMethodRadarOptions';
import { PaymentMethodSepaDebit } from './paymentMethodSepaDebit';
import { PaymentMethodSofort } from './paymentMethodSofort';
import { PaymentMethodType } from './paymentMethodType';
import { PaymentMethodUsBankAccount } from './paymentMethodUsBankAccount';
import { StripePaymentMethod } from './stripePaymentMethod';
import { StripePaymentMethodCustomer } from './stripePaymentMethodCustomer';

/**
* ID of the payment method used with this SetupIntent.
*/
export class StripeSetupIntentPaymentMethod {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeSetupIntentPaymentMethod.ObjectEnum;
    'acssDebit'?: PaymentMethodAcssDebit;
    'affirm'?: object;
    'afterpayClearpay'?: object;
    'alipay'?: object;
    'auBecsDebit'?: PaymentMethodAuBecsDebit;
    'bacsDebit'?: PaymentMethodBacsDebit;
    'bancontact'?: object;
    'billingDetails': PaymentMethodBillingDetails;
    'blik'?: object;
    'boleto'?: PaymentMethodBoleto;
    'card'?: PaymentMethodCard;
    'cardPresent'?: object;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'customer': StripePaymentMethodCustomer | null;
    'customerBalance'?: object;
    'eps'?: PaymentMethodEps;
    'fpx'?: PaymentMethodFpx;
    'giropay'?: object;
    'grabpay'?: object;
    'ideal'?: PaymentMethodIdeal;
    'interacPresent'?: object;
    'klarna'?: PaymentMethodKlarna;
    'konbini'?: object;
    'link'?: PaymentMethodLink;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    'oxxo'?: object;
    'p24'?: PaymentMethodP24;
    'paynow'?: object;
    'pix'?: object;
    'promptpay'?: object;
    'radarOptions'?: PaymentMethodRadarOptions;
    'sepaDebit'?: PaymentMethodSepaDebit;
    'sofort'?: PaymentMethodSofort;
    'type': PaymentMethodType;
    'usBankAccount'?: PaymentMethodUsBankAccount;
    'wechatPay'?: object;

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
            "type": "StripeSetupIntentPaymentMethod.ObjectEnum"
        },
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "PaymentMethodAcssDebit"
        },
        {
            "name": "affirm",
            "baseName": "affirm",
            "type": "object"
        },
        {
            "name": "afterpayClearpay",
            "baseName": "afterpay_clearpay",
            "type": "object"
        },
        {
            "name": "alipay",
            "baseName": "alipay",
            "type": "object"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "PaymentMethodAuBecsDebit"
        },
        {
            "name": "bacsDebit",
            "baseName": "bacs_debit",
            "type": "PaymentMethodBacsDebit"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "object"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "PaymentMethodBillingDetails"
        },
        {
            "name": "blik",
            "baseName": "blik",
            "type": "object"
        },
        {
            "name": "boleto",
            "baseName": "boleto",
            "type": "PaymentMethodBoleto"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "PaymentMethodCard"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "object"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "StripePaymentMethodCustomer"
        },
        {
            "name": "customerBalance",
            "baseName": "customer_balance",
            "type": "object"
        },
        {
            "name": "eps",
            "baseName": "eps",
            "type": "PaymentMethodEps"
        },
        {
            "name": "fpx",
            "baseName": "fpx",
            "type": "PaymentMethodFpx"
        },
        {
            "name": "giropay",
            "baseName": "giropay",
            "type": "object"
        },
        {
            "name": "grabpay",
            "baseName": "grabpay",
            "type": "object"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "PaymentMethodIdeal"
        },
        {
            "name": "interacPresent",
            "baseName": "interac_present",
            "type": "object"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "PaymentMethodKlarna"
        },
        {
            "name": "konbini",
            "baseName": "konbini",
            "type": "object"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "PaymentMethodLink"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "oxxo",
            "baseName": "oxxo",
            "type": "object"
        },
        {
            "name": "p24",
            "baseName": "p24",
            "type": "PaymentMethodP24"
        },
        {
            "name": "paynow",
            "baseName": "paynow",
            "type": "object"
        },
        {
            "name": "pix",
            "baseName": "pix",
            "type": "object"
        },
        {
            "name": "promptpay",
            "baseName": "promptpay",
            "type": "object"
        },
        {
            "name": "radarOptions",
            "baseName": "radar_options",
            "type": "PaymentMethodRadarOptions"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "PaymentMethodSepaDebit"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "PaymentMethodSofort"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodType"
        },
        {
            "name": "usBankAccount",
            "baseName": "us_bank_account",
            "type": "PaymentMethodUsBankAccount"
        },
        {
            "name": "wechatPay",
            "baseName": "wechat_pay",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return StripeSetupIntentPaymentMethod.attributeTypeMap;
    }
}

export namespace StripeSetupIntentPaymentMethod {
    export enum ObjectEnum {
        PAYMENT_METHOD = <any> 'payment_method'
    }
}
