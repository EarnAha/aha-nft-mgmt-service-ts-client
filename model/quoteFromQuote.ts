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
import { QuoteFromQuoteQuote } from './quoteFromQuoteQuote';

export class QuoteFromQuote {
    /**
    * Whether this quote is a revision of a different quote.
    */
    'isRevision': boolean;
    'quote': QuoteFromQuoteQuote;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isRevision",
            "baseName": "is_revision",
            "type": "boolean"
        },
        {
            "name": "quote",
            "baseName": "quote",
            "type": "QuoteFromQuoteQuote"
        }    ];

    static getAttributeTypeMap() {
        return QuoteFromQuote.attributeTypeMap;
    }
}

