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
import { StripeCardAccount } from './stripeCardAccount';
import { StripeCardCustomer } from './stripeCardCustomer';

/**
* You can store multiple cards on a customer in order to charge the customer later. You can also store multiple debit cards on a recipient in order to transfer to those cards later.  Related guide: [Card Payments with Sources](https://stripe.com/docs/sources/cards).
*/
export class Card {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': Card.ObjectEnum;
    'account'?: StripeCardAccount | null;
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
    * A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
    */
    'availablePayoutMethods'?: Array<CardAvailablePayoutMethod> | null;
    /**
    * Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
    */
    'brand': string;
    /**
    * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you\'ve collected.
    */
    'country': string | null;
    /**
    * Three-letter [ISO code for currency](https://stripe.com/docs/payouts). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency.
    */
    'currency'?: string | null;
    'customer'?: StripeCardCustomer | null;
    /**
    * If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn\'t been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
    */
    'cvcCheck': string | null;
    /**
    * Whether this card is the default external account for its currency.
    */
    'defaultForCurrency'?: boolean | null;
    'deleted'?: any | null;
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
    * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who\'ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.  *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
    */
    'fingerprint'?: string | null;
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
    * The last four digits of the card.
    */
    'last4': string;
    /**
    * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata': any | null;
    /**
    * Cardholder name.
    */
    'name': string | null;
    /**
    * For external accounts, possible values are `new` and `errored`. If a transfer fails, the status is set to `errored` and transfers are stopped until account details are updated.
    */
    'status'?: string | null;
    /**
    * If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.
    */
    'tokenizationMethod': string | null;

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
            "type": "Card.ObjectEnum"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "StripeCardAccount"
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
            "name": "availablePayoutMethods",
            "baseName": "available_payout_methods",
            "type": "Array<CardAvailablePayoutMethod>"
        },
        {
            "name": "brand",
            "baseName": "brand",
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
            "type": "StripeCardCustomer"
        },
        {
            "name": "cvcCheck",
            "baseName": "cvc_check",
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
            "type": "any"
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
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "tokenizationMethod",
            "baseName": "tokenization_method",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

export namespace Card {
    export enum ObjectEnum {
        CARD = <any> 'card'
    }
}