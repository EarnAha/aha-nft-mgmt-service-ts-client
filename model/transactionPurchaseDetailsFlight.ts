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
import { FlightSegment } from './flightSegment';

/**
* Information about the flight that was purchased with this transaction.
*/
export class TransactionPurchaseDetailsFlight {
    /**
    * The time that the flight departed.
    */
    'departureAt': number | null;
    /**
    * The name of the passenger.
    */
    'passengerName': string | null;
    /**
    * Whether the ticket is refundable.
    */
    'refundable': boolean | null;
    /**
    * The legs of the trip.
    */
    'segments': Array<FlightSegment> | null;
    /**
    * The travel agency that issued the ticket.
    */
    'travelAgency': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "departureAt",
            "baseName": "departure_at",
            "type": "number"
        },
        {
            "name": "passengerName",
            "baseName": "passenger_name",
            "type": "string"
        },
        {
            "name": "refundable",
            "baseName": "refundable",
            "type": "boolean"
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "Array<FlightSegment>"
        },
        {
            "name": "travelAgency",
            "baseName": "travel_agency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionPurchaseDetailsFlight.attributeTypeMap;
    }
}

