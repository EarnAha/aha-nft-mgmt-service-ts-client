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
import { StripeTestHelpersTestClock } from './stripeTestHelpersTestClock';
import { TestClockStatus } from './testClockStatus';

/**
* ID of the test clock this customer belongs to.
*/
export class StripeCustomerTestClock {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeCustomerTestClock.ObjectEnum;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'created': number;
    'deleted'?: any | null;
    /**
    * Time at which this clock is scheduled to auto delete.
    */
    'deletesAfter': number;
    /**
    * Time at which all objects belonging to this clock are frozen.
    */
    'frozenTime': number;
    /**
    * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
    */
    'livemode': boolean;
    /**
    * The custom name supplied at creation.
    */
    'name': string | null;
    'status': TestClockStatus;

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
            "type": "StripeCustomerTestClock.ObjectEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "any"
        },
        {
            "name": "deletesAfter",
            "baseName": "deletes_after",
            "type": "number"
        },
        {
            "name": "frozenTime",
            "baseName": "frozen_time",
            "type": "number"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TestClockStatus"
        }    ];

    static getAttributeTypeMap() {
        return StripeCustomerTestClock.attributeTypeMap;
    }
}

export namespace StripeCustomerTestClock {
    export enum ObjectEnum {
        TEST_HELPERS_TEST_CLOCK = <any> 'test_helpers.test_clock'
    }
}