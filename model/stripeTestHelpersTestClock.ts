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
import { TestClockStatus } from './testClockStatus';

/**
* A test clock enables deterministic control over objects in testmode. With a test clock, you can create objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances, you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
*/
export class StripeTestHelpersTestClock {
    /**
    * Unique identifier for the object.
    */
    'id': string;
    /**
    * String representing the object\'s type. Objects of the same type share the same value.
    */
    'object': StripeTestHelpersTestClock.ObjectEnum;
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
            "type": "StripeTestHelpersTestClock.ObjectEnum"
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
        return StripeTestHelpersTestClock.attributeTypeMap;
    }
}

export namespace StripeTestHelpersTestClock {
    export enum ObjectEnum {
        TEST_HELPERS_TEST_CLOCK = <any> 'test_helpers.test_clock'
    }
}
