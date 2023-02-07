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
import { PersonVerificationAdditionalDocument } from './personVerificationAdditionalDocument';
import { VerificationDocument } from './verificationDocument';

export class PersonVerification {
    'additionalDocument'?: PersonVerificationAdditionalDocument | null;
    /**
    * A user-displayable string describing the verification state for the person. For example, this may say \"Provided identity information could not be verified\".
    */
    'details'?: string | null;
    /**
    * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
    */
    'detailsCode'?: string | null;
    'document'?: VerificationDocument;
    /**
    * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.
    */
    'status': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalDocument",
            "baseName": "additional_document",
            "type": "PersonVerificationAdditionalDocument"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string"
        },
        {
            "name": "detailsCode",
            "baseName": "details_code",
            "type": "string"
        },
        {
            "name": "document",
            "baseName": "document",
            "type": "VerificationDocument"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PersonVerification.attributeTypeMap;
    }
}
