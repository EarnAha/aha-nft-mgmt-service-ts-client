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
import { AccountBusinessType } from './accountBusinessType';
import { AccountCapabilities } from './accountCapabilities';
import { AccountCompany } from './accountCompany';
import { AccountController } from './accountController';
import { AccountFutureRequirements } from './accountFutureRequirements';
import { AccountRequirements } from './accountRequirements';
import { AccountTosAcceptance } from './accountTosAcceptance';
import { AccountType } from './accountType';
import { ApiListStripeBankAccountOrStripeCard } from './apiListStripeBankAccountOrStripeCard';
import { StripeAccount } from './stripeAccount';
import { StripeAccountBusinessProfile } from './stripeAccountBusinessProfile';
import { StripeAccountSettings } from './stripeAccountSettings';
import { StripePerson } from './stripePerson';

/**
* The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
*/
export class StripeSetupAttemptOnBehalfOf {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeSetupAttemptOnBehalfOf.ObjectEnum;
    'businessProfile'?: StripeAccountBusinessProfile | null;
    /**
    * The business type.
    */
    'businessType'?: AccountBusinessType | null;
    'capabilities'?: AccountCapabilities;
    /**
    * Whether the account can create live charges.
    */
    'chargesEnabled': boolean;
    'company'?: AccountCompany;
    'controller'?: AccountController;
    /**
    * The account\'s country.
    */
    'country'?: string;
    /**
    * Time at which the account was connected. Measured in seconds since the Unix epoch.
    */
    'created'?: number;
    /**
    * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account\'s country](https://stripe.com/docs/payouts).
    */
    'defaultCurrency'?: string;
    'deleted'?: any | null;
    /**
    * Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
    */
    'detailsSubmitted': boolean;
    /**
    * An email address associated with the account. You can treat this as metadata: it is not used for authentication or messaging account holders.
    */
    'email': string | null;
    'externalAccounts'?: ApiListStripeBankAccountOrStripeCard;
    'futureRequirements'?: AccountFutureRequirements;
    'individual'?: StripePerson;
    /**
    * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Whether Stripe can send payouts to this account.
    */
    'payoutsEnabled': boolean;
    'requirements'?: AccountRequirements;
    'settings'?: StripeAccountSettings | null;
    'tosAcceptance'?: AccountTosAcceptance;
    'type': AccountType;

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
            "type": "StripeSetupAttemptOnBehalfOf.ObjectEnum"
        },
        {
            "name": "businessProfile",
            "baseName": "business_profile",
            "type": "StripeAccountBusinessProfile"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "AccountBusinessType"
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "AccountCapabilities"
        },
        {
            "name": "chargesEnabled",
            "baseName": "charges_enabled",
            "type": "boolean"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "AccountCompany"
        },
        {
            "name": "controller",
            "baseName": "controller",
            "type": "AccountController"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "defaultCurrency",
            "baseName": "default_currency",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "any"
        },
        {
            "name": "detailsSubmitted",
            "baseName": "details_submitted",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "externalAccounts",
            "baseName": "external_accounts",
            "type": "ApiListStripeBankAccountOrStripeCard"
        },
        {
            "name": "futureRequirements",
            "baseName": "future_requirements",
            "type": "AccountFutureRequirements"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "StripePerson"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "payoutsEnabled",
            "baseName": "payouts_enabled",
            "type": "boolean"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "AccountRequirements"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "StripeAccountSettings"
        },
        {
            "name": "tosAcceptance",
            "baseName": "tos_acceptance",
            "type": "AccountTosAcceptance"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountType"
        }    ];

    static getAttributeTypeMap() {
        return StripeSetupAttemptOnBehalfOf.attributeTypeMap;
    }
}

export namespace StripeSetupAttemptOnBehalfOf {
    export enum ObjectEnum {
        ACCOUNT = <any> 'account'
    }
}
