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
import { InteracPresentReadMethod } from './interacPresentReadMethod';
import { PaymentMethodDetailsInteracPresentReceipt } from './paymentMethodDetailsInteracPresentReceipt';

export class PaymentMethodDetailsInteracPresent {
    /**
    * Card brand. Can be `interac`, `mastercard` or `visa`.
    */
    'brand': string | null;
    /**
    * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
    */
    'cardholderName': string | null;
    /**
    * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you\'ve collected.
    */
    'country': string | null;
    /**
    * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
    */
    'description'?: string | null;
    /**
    * Authorization response cryptogram.
    */
    'emvAuthData': string | null;
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
    'fingerprint': string | null;
    /**
    * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
    */
    'funding': string | null;
    /**
    * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
    */
    'generatedCard': string | null;
    /**
    * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
    */
    'iin'?: string | null;
    /**
    * The name of the card\'s issuing bank. (For internal use only and not typically available in standard API requests.)
    */
    'issuer'?: string | null;
    /**
    * The last four digits of the card.
    */
    'last4': string | null;
    /**
    * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
    */
    'network': string | null;
    /**
    * EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
    */
    'preferredLocales': Array<string> | null;
    /**
    * How card details were read in this transaction.
    */
    'readMethod': InteracPresentReadMethod | null;
    'receipt': PaymentMethodDetailsInteracPresentReceipt | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cardholderName",
            "baseName": "cardholder_name",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "emvAuthData",
            "baseName": "emv_auth_data",
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
            "name": "generatedCard",
            "baseName": "generated_card",
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
            "name": "network",
            "baseName": "network",
            "type": "string"
        },
        {
            "name": "preferredLocales",
            "baseName": "preferred_locales",
            "type": "Array<string>"
        },
        {
            "name": "readMethod",
            "baseName": "read_method",
            "type": "InteracPresentReadMethod"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "PaymentMethodDetailsInteracPresentReceipt"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetailsInteracPresent.attributeTypeMap;
    }
}

