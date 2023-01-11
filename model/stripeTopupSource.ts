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
import { SourceAchCreditTransfer } from './sourceAchCreditTransfer';
import { SourceAchDebit } from './sourceAchDebit';
import { SourceAcssDebit } from './sourceAcssDebit';
import { SourceAlipay } from './sourceAlipay';
import { SourceAuBecsDebit } from './sourceAuBecsDebit';
import { SourceBancontact } from './sourceBancontact';
import { SourceCard } from './sourceCard';
import { SourceCardPresent } from './sourceCardPresent';
import { SourceCodeVerification } from './sourceCodeVerification';
import { SourceEps } from './sourceEps';
import { SourceGiropay } from './sourceGiropay';
import { SourceIdeal } from './sourceIdeal';
import { SourceKlarna } from './sourceKlarna';
import { SourceMultibanco } from './sourceMultibanco';
import { SourceOwner } from './sourceOwner';
import { SourceP24 } from './sourceP24';
import { SourceReceiver } from './sourceReceiver';
import { SourceRedirect } from './sourceRedirect';
import { SourceSepaCreditTransfer } from './sourceSepaCreditTransfer';
import { SourceSepaDebit } from './sourceSepaDebit';
import { SourceSofort } from './sourceSofort';
import { SourceSourceOrder } from './sourceSourceOrder';
import { SourceThreeDSecure } from './sourceThreeDSecure';
import { SourceType } from './sourceType';
import { SourceWechat } from './sourceWechat';

/**
* For most Stripe users, the source of every top-up is a bank account. This hash is then the [source object](https://stripe.com/docs/api#source_object) describing that bank account.
*/
export class StripeTopupSource {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTopupSource.ObjectEnum;
    'achCreditTransfer'?: SourceAchCreditTransfer;
    'achDebit'?: SourceAchDebit;
    'acssDebit'?: SourceAcssDebit;
    'alipay'?: SourceAlipay;
    /**
    * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
    */
    'amount': number | null;
    'auBecsDebit'?: SourceAuBecsDebit;
    'bancontact'?: SourceBancontact;
    'card'?: SourceCard;
    'cardPresent'?: SourceCardPresent;
    /**
    * The client secret of the source. Used for client-side retrieval using a publishable key.
    */
    'clientSecret': string;
    'codeVerification'?: SourceCodeVerification;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
    */
    'currency': string | null;
    /**
    * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
    */
    'customer'?: string;
    'eps'?: SourceEps;
    /**
    * The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
    */
    'flow': string;
    'giropay'?: SourceGiropay;
    'ideal'?: SourceIdeal;
    'klarna'?: SourceKlarna;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    'multibanco'?: SourceMultibanco;
    'owner': SourceOwner | null;
    'p24'?: SourceP24;
    'receiver'?: SourceReceiver;
    'redirect'?: SourceRedirect;
    'sepaCreditTransfer'?: SourceSepaCreditTransfer;
    'sepaDebit'?: SourceSepaDebit;
    'sofort'?: SourceSofort;
    'sourceOrder'?: SourceSourceOrder;
    /**
    * Extra information about a source. This will appear on your customer\'s statement every time you charge the source.
    */
    'statementDescriptor': string | null;
    /**
    * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
    */
    'status': string;
    'threeDSecure'?: SourceThreeDSecure;
    'type': SourceType;
    /**
    * Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
    */
    'usage': string | null;
    'wechat'?: SourceWechat;

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
            "type": "StripeTopupSource.ObjectEnum"
        },
        {
            "name": "achCreditTransfer",
            "baseName": "ach_credit_transfer",
            "type": "SourceAchCreditTransfer"
        },
        {
            "name": "achDebit",
            "baseName": "ach_debit",
            "type": "SourceAchDebit"
        },
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "SourceAcssDebit"
        },
        {
            "name": "alipay",
            "baseName": "alipay",
            "type": "SourceAlipay"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "SourceAuBecsDebit"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "SourceBancontact"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "SourceCard"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "SourceCardPresent"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "codeVerification",
            "baseName": "code_verification",
            "type": "SourceCodeVerification"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "eps",
            "baseName": "eps",
            "type": "SourceEps"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "string"
        },
        {
            "name": "giropay",
            "baseName": "giropay",
            "type": "SourceGiropay"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "SourceIdeal"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
            "type": "SourceKlarna"
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
            "name": "multibanco",
            "baseName": "multibanco",
            "type": "SourceMultibanco"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "SourceOwner"
        },
        {
            "name": "p24",
            "baseName": "p24",
            "type": "SourceP24"
        },
        {
            "name": "receiver",
            "baseName": "receiver",
            "type": "SourceReceiver"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "SourceRedirect"
        },
        {
            "name": "sepaCreditTransfer",
            "baseName": "sepa_credit_transfer",
            "type": "SourceSepaCreditTransfer"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "SourceSepaDebit"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "SourceSofort"
        },
        {
            "name": "sourceOrder",
            "baseName": "source_order",
            "type": "SourceSourceOrder"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "threeDSecure",
            "baseName": "three_d_secure",
            "type": "SourceThreeDSecure"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SourceType"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "string"
        },
        {
            "name": "wechat",
            "baseName": "wechat",
            "type": "SourceWechat"
        }    ];

    static getAttributeTypeMap() {
        return StripeTopupSource.attributeTypeMap;
    }
}

export namespace StripeTopupSource {
    export enum ObjectEnum {
        SOURCE = <any> 'source'
    }
}
