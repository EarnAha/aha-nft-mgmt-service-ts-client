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
import { CardAvailablePayoutMethod } from './cardAvailablePayoutMethod';
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
import { StripeCardAccount } from './stripeCardAccount';
import { StripeCustomerSource } from './stripeCustomerSource';
import { StripeDeletedBankAccount } from './stripeDeletedBankAccount';
import { StripeDeletedCard } from './stripeDeletedCard';

/**
* This is a legacy field that will be removed in the future. It is the ID of the Source object that is associated with this PaymentIntent, if one was supplied.
*/
export class StripePaymentIntentSource {
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripePaymentIntentSource.ObjectEnum;
    /**
    * Unique identifier for the object.
    */
    'id': string;
    'account'?: StripeCardAccount | null;
    /**
    * The name of the person or business that owns the bank account.
    */
    'accountHolderName': string | null;
    /**
    * The type of entity that holds the account. This can be either `individual` or `company`.
    */
    'accountHolderType': string | null;
    /**
    * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
    */
    'accountType': string | null;
    /**
    * A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
    */
    'availablePayoutMethods'?: Array<CardAvailablePayoutMethod> | null;
    /**
    * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
    */
    'bankName': string | null;
    /**
    * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you\'ve collected.
    */
    'country': string | null;
    /**
    * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
    */
    'currency': string | null;
    /**
    * The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
    */
    'customer'?: string;
    /**
    * Whether this card is the default external account for its currency.
    */
    'defaultForCurrency'?: boolean | null;
    /**
    * Always true for a deleted object
    */
    'deleted': StripePaymentIntentSource.DeletedEnum;
    /**
    * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who\'ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.  *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
    */
    'fingerprint': string | null;
    /**
    * The last four digits of the card.
    */
    'last4': string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    /**
    * The routing transit number for the bank account.
    */
    'routingNumber': string | null;
    /**
    * The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
    */
    'status': string;
    /**
    * City/District/Suburb/Town/Village.
    */
    'addressCity': string | null;
    /**
    * Billing address country, if provided when creating card.
    */
    'addressCountry': string | null;
    /**
    * Address line 1 (Street address/PO Box/Company name).
    */
    'addressLine1': string | null;
    /**
    * If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressLine1Check': string | null;
    /**
    * Address line 2 (Apartment/Suite/Unit/Building).
    */
    'addressLine2': string | null;
    /**
    * State/County/Province/Region.
    */
    'addressState': string | null;
    /**
    * ZIP or postal code.
    */
    'addressZip': string | null;
    /**
    * If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
    */
    'addressZipCheck': string | null;
    /**
    * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
    */
    'brand': string;
    /**
    * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn\'t been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
    */
    'cvcCheck': string | null;
    /**
    * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
    */
    'description'?: string;
    /**
    * (For tokenized numbers only.) The last four digits of the device account number.
    */
    'dynamicLast4': string | null;
    /**
    * Two-digit number representing the card\'s expiration month.
    */
    'expMonth': number;
    /**
    * Four-digit number representing the card\'s expiration year.
    */
    'expYear': number;
    /**
    * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
    */
    'funding': string;
    /**
    * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
    */
    'iin'?: string;
    /**
    * The name of the card\'s issuing bank. (For internal use only and not typically available in standard API requests.)
    */
    'issuer'?: string;
    /**
    * Cardholder name.
    */
    'name': string | null;
    /**
    * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
    */
    'tokenizationMethod': string | null;
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
            "name": "object",
            "baseName": "object",
            "type": "StripePaymentIntentSource.ObjectEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "StripeCardAccount"
        },
        {
            "name": "accountHolderName",
            "baseName": "account_holder_name",
            "type": "string"
        },
        {
            "name": "accountHolderType",
            "baseName": "account_holder_type",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "string"
        },
        {
            "name": "availablePayoutMethods",
            "baseName": "available_payout_methods",
            "type": "Array<CardAvailablePayoutMethod>"
        },
        {
            "name": "bankName",
            "baseName": "bank_name",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
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
            "name": "defaultForCurrency",
            "baseName": "default_for_currency",
            "type": "boolean"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "StripePaymentIntentSource.DeletedEnum"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "addressCity",
            "baseName": "address_city",
            "type": "string"
        },
        {
            "name": "addressCountry",
            "baseName": "address_country",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "address_line1",
            "type": "string"
        },
        {
            "name": "addressLine1Check",
            "baseName": "address_line1_check",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "address_line2",
            "type": "string"
        },
        {
            "name": "addressState",
            "baseName": "address_state",
            "type": "string"
        },
        {
            "name": "addressZip",
            "baseName": "address_zip",
            "type": "string"
        },
        {
            "name": "addressZipCheck",
            "baseName": "address_zip_check",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dynamicLast4",
            "baseName": "dynamic_last4",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "number"
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "number"
        },
        {
            "name": "funding",
            "baseName": "funding",
            "type": "string"
        },
        {
            "name": "iin",
            "baseName": "iin",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "tokenizationMethod",
            "baseName": "tokenization_method",
            "type": "string"
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
        return StripePaymentIntentSource.attributeTypeMap;
    }
}

export namespace StripePaymentIntentSource {
    export enum ObjectEnum {
        CARD = <any> 'card'
    }
    export enum DeletedEnum {
        TRUE = <any> true
    }
}
