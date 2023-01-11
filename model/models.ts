import localVarRequest from 'request';

export * from './accessDeniedError';
export * from './accountBusinessProfile';
export * from './accountBusinessProfileSupportAddress';
export * from './accountBusinessType';
export * from './accountCapabilities';
export * from './accountCompany';
export * from './accountCompanyAddressKana';
export * from './accountCompanyAddressKanji';
export * from './accountCompanyOwnershipDeclaration';
export * from './accountCompanyVerification';
export * from './accountController';
export * from './accountDebitSource';
export * from './accountFutureRequirements';
export * from './accountRequirements';
export * from './accountSettings';
export * from './accountTosAcceptance';
export * from './accountType';
export * from './achDebitAccountHolderType';
export * from './acssDebitCurrency';
export * from './acssDebitMandateOptions';
export * from './acssDebitVerificationMethod';
export * from './addPromoCodeRequest';
export * from './alipaySetupFutureUsage';
export * from './amountDetailsTip';
export * from './apiListStripeBankAccountOrStripeCard';
export * from './apiListStripeBankAccountOrStripeCardDataInner';
export * from './apiListStripeCustomerSource';
export * from './apiListStripeFeeRefund';
export * from './apiListStripeFileLink';
export * from './apiListStripeInvoiceLineItem';
export * from './apiListStripeLineItem';
export * from './apiListStripeRefund';
export * from './apiListStripeSubscription';
export * from './apiListStripeSubscriptionItem';
export * from './apiListStripeTaxId';
export * from './apiListStripeTransferReversal';
export * from './applePayIneligibleReason';
export * from './auBecsDebitSetupFutureUsage';
export * from './authorizationAmountDetails';
export * from './authorizationAuthorizationMethod';
export * from './authorizationMerchantData';
export * from './authorizationNetworkData';
export * from './authorizationPendingRequest';
export * from './authorizationPendingRequestAmountDetails';
export * from './authorizationRequestHistory';
export * from './authorizationRequestHistoryAmountDetails';
export * from './authorizationStatus';
export * from './authorizationTreasury';
export * from './authorizationVerificationData';
export * from './automaticTaxStatus';
export * from './bacsDebitSetupFutureUsage';
export * from './balanceTransactionFeeDetail';
export * from './balanceTransactionType';
export * from './bancontactPreferredLanguage';
export * from './bankAccount';
export * from './bankAccountAvailablePayoutMethod';
export * from './bankTransferEuBankTransfer';
export * from './blikMandateOptions';
export * from './blikOffSession';
export * from './blikType';
export * from './boletoSetupFutureUsage';
export * from './breakdownDiscount';
export * from './breakdownTax';
export * from './capabilitiesAcssDebitPayments';
export * from './capabilitiesAffirmPayments';
export * from './capabilitiesAfterpayClearpayPayments';
export * from './capabilitiesAuBecsDebitPayments';
export * from './capabilitiesBacsDebitPayments';
export * from './capabilitiesBancontactPayments';
export * from './capabilitiesBankTransferPayments';
export * from './capabilitiesBlikPayments';
export * from './capabilitiesBoletoPayments';
export * from './capabilitiesCardIssuing';
export * from './capabilitiesCardPayments';
export * from './capabilitiesCartesBancairesPayments';
export * from './capabilitiesEpsPayments';
export * from './capabilitiesFpxPayments';
export * from './capabilitiesGiropayPayments';
export * from './capabilitiesGrabpayPayments';
export * from './capabilitiesIdealPayments';
export * from './capabilitiesIndiaInternationalPayments';
export * from './capabilitiesJcbPayments';
export * from './capabilitiesKlarnaPayments';
export * from './capabilitiesKonbiniPayments';
export * from './capabilitiesLegacyPayments';
export * from './capabilitiesLinkPayments';
export * from './capabilitiesOxxoPayments';
export * from './capabilitiesP24Payments';
export * from './capabilitiesPaynowPayments';
export * from './capabilitiesPromptpayPayments';
export * from './capabilitiesSepaDebitPayments';
export * from './capabilitiesSofortPayments';
export * from './capabilitiesTaxReportingUs1099K';
export * from './capabilitiesTaxReportingUs1099Misc';
export * from './capabilitiesTransfers';
export * from './capabilitiesTreasury';
export * from './capabilitiesUsBankAccountAchPayments';
export * from './card';
export * from './cardAvailablePayoutMethod';
export * from './cardCancellationReason';
export * from './cardChecks';
export * from './cardCustomerNotification';
export * from './cardIssuingTosAcceptance';
export * from './cardMandateOptions';
export * from './cardNetwork';
export * from './cardNetworks';
export * from './cardPaymentsDeclineOn';
export * from './cardReplacementReason';
export * from './cardRequestThreeDSecure';
export * from './cardShipping';
export * from './cardShippingCustoms';
export * from './cardSpendingControls';
export * from './cardStatus';
export * from './cardThreeDSecureUsage';
export * from './cardType';
export * from './cardWallet';
export * from './cardWallets';
export * from './cardholderBilling';
export * from './cardholderCompany';
export * from './cardholderIndividual';
export * from './cardholderIndividualDob';
export * from './cardholderIndividualVerification';
export * from './cardholderRequirements';
export * from './cardholderSpendingControls';
export * from './cardholderStatus';
export * from './cardholderType';
export * from './cashBalanceSettings';
export * from './chargeAlternateStatementDescriptors';
export * from './chargeBillingDetails';
export * from './chargeFraudDetails';
export * from './chargeLevel3';
export * from './chargeOutcome';
export * from './chargeOutcomeRule';
export * from './chargePaymentMethodDetails';
export * from './chargeRadarOptions';
export * from './chargeShipping';
export * from './chargeStatus';
export * from './chargeTransferData';
export * from './chargeTransferDataDestination';
export * from './codeShareSummary';
export * from './companyAddressKana';
export * from './companyAddressKanji';
export * from './companyOwnershipDeclaration';
export * from './companyStructure';
export * from './companyVerification';
export * from './computedRecurring';
export * from './computedUpfront';
export * from './concurrencyError';
export * from './controllerType';
export * from './couponAppliesTo';
export * from './couponCurrencyOptions';
export * from './couponDuration';
export * from './createCheckoutRequest';
export * from './createCheckoutResponse';
export * from './createCustomerPortalSessionRequest';
export * from './createUserRequest';
export * from './currencyOptionsCustomUnitAmount';
export * from './currencyOptionsTaxBehavior';
export * from './currencyOptionsTier';
export * from './customerAcceptanceOnline';
export * from './customerAcceptanceType';
export * from './customerBalanceBankTransfer';
export * from './customerInvoiceSettings';
export * from './customerInvoiceSettingsDefaultPaymentMethod';
export * from './customerInvoiceSettingsRenderingOptions';
export * from './customerShipping';
export * from './customerTax';
export * from './customerTaxExempt';
export * from './customerTaxIdType';
export * from './customerTaxLocation';
export * from './defaultSettingsAutomaticTax';
export * from './defaultSettingsBillingCycleAnchor';
export * from './defaultSettingsBillingThresholds';
export * from './defaultSettingsCollectionMethod';
export * from './defaultSettingsInvoiceSettings';
export * from './defaultSettingsTransferData';
export * from './defaultSettingsTransferDataDestination';
export * from './displayBankTransferInstructionsFinancialAddress';
export * from './displayBankTransferInstructionsType';
export * from './displayDetailsEmailSent';
export * from './disputeEvidence';
export * from './disputeEvidenceCancellationPolicy';
export * from './disputeEvidenceCustomerCommunication';
export * from './disputeEvidenceCustomerSignature';
export * from './disputeEvidenceDetails';
export * from './disputeEvidenceDuplicateChargeDocumentation';
export * from './disputeEvidenceReceipt';
export * from './disputeEvidenceRefundPolicy';
export * from './disputeEvidenceServiceDocumentation';
export * from './disputeEvidenceShippingDocumentation';
export * from './disputeEvidenceUncategorizedFile';
export * from './disputeStatus';
export * from './disputeTreasury';
export * from './emoji';
export * from './epsBank';
export * from './errorCode';
export * from './euBankTransferCountry';
export * from './filePurpose';
export * from './financialAddressIban';
export * from './financialAddressSortCode';
export * from './financialAddressSpei';
export * from './financialAddressSupportedNetwork';
export * from './financialAddressType';
export * from './financialAddressZengin';
export * from './financialConnectionsPermission';
export * from './flightSegment';
export * from './fpxAccountHolderType';
export * from './fpxBank';
export * from './futureRequirementsAlternative';
export * from './futureRequirementsError';
export * from './getEmojiRequest';
export * from './getProductRequest';
export * from './getProductResponse';
export * from './getUserRequest';
export * from './googlePayIneligibleReason';
export * from './idealBank';
export * from './idealBic';
export * from './idealSetupFutureUsage';
export * from './individualDob';
export * from './individualVerification';
export * from './individualVerificationDocument';
export * from './interacPresentReadMethod';
export * from './interacPresentReceipt';
export * from './internalServerError';
export * from './invoiceAutomaticTax';
export * from './invoiceBillingReason';
export * from './invoiceCollectionMethod';
export * from './invoiceCustomField';
export * from './invoiceCustomerShipping';
export * from './invoiceCustomerTaxExempt';
export * from './invoiceCustomerTaxId';
export * from './invoiceFromInvoice';
export * from './invoiceFromInvoiceInvoice';
export * from './invoiceLastFinalizationError';
export * from './invoiceLineItemDiscountAmount';
export * from './invoiceLineItemDiscountAmountDiscount';
export * from './invoiceLineItemPeriod';
export * from './invoiceLineItemProrationDetails';
export * from './invoiceLineItemProrationDetailsCreditedItems';
export * from './invoiceLineItemTaxAmount';
export * from './invoiceLineItemTaxAmountTaxRate';
export * from './invoiceLineItemType';
export * from './invoicePaymentSettings';
export * from './invoicePaymentSettingsPaymentMethodOptions';
export * from './invoiceRenderingOptions';
export * from './invoiceSettingsCustomField';
export * from './invoiceSettingsRenderingOptions';
export * from './invoiceStatus';
export * from './invoiceStatusTransitions';
export * from './invoiceThresholdReason';
export * from './invoiceTotalDiscountAmount';
export * from './invoiceTotalTaxAmount';
export * from './invoiceTransferData';
export * from './itemBillingThresholds';
export * from './klarnaDob';
export * from './konbiniDisplayDetailsStores';
export * from './konbiniDisplayDetailsStoresFamilymart';
export * from './konbiniDisplayDetailsStoresLawson';
export * from './konbiniDisplayDetailsStoresMinistop';
export * from './konbiniDisplayDetailsStoresSeicomart';
export * from './konbiniStore';
export * from './lastFinalizationErrorType';
export * from './lastPaymentErrorType';
export * from './lastSetupErrorType';
export * from './level3LineItem';
export * from './lineItemDiscount';
export * from './lineItemTax';
export * from './listPromoCodesRequest';
export * from './locationSource';
export * from './mandateCustomerAcceptance';
export * from './mandateOptionsAmountType';
export * from './mandateOptionsDefaultFor';
export * from './mandateOptionsInterval';
export * from './mandateOptionsOffSession';
export * from './mandateOptionsPaymentSchedule';
export * from './mandateOptionsTransactionType';
export * from './mandateOptionsType';
export * from './mandatePaymentMethodDetails';
export * from './mandateSingleUse';
export * from './mandateStatus';
export * from './mandateType';
export * from './networksSupported';
export * from './nextActionAlipayHandleRedirect';
export * from './nextActionBoletoDisplayDetails';
export * from './nextActionCardAwaitNotification';
export * from './nextActionDisplayBankTransferInstructions';
export * from './nextActionDisplayDetails';
export * from './nextActionKonbiniDisplayDetails';
export * from './nextActionOxxoDisplayDetails';
export * from './nextActionPaynowDisplayQrCode';
export * from './nextActionPixDisplayQrCode';
export * from './nextActionPromptpayDisplayQrCode';
export * from './nextActionRedirectToUrl';
export * from './nextActionVerifyWithMicrodeposits';
export * from './nextActionWechatPayDisplayQrCode';
export * from './nextActionWechatPayRedirectToAndroidApp';
export * from './nextActionWechatPayRedirectToIosApp';
export * from './offSessionInterval';
export * from './outcomeRule';
export * from './p24Bank';
export * from './pauseCollectionBehavior';
export * from './paymentIntentAmountDetails';
export * from './paymentIntentAutomaticPaymentMethods';
export * from './paymentIntentCancellationReason';
export * from './paymentIntentCaptureMethod';
export * from './paymentIntentConfirmationMethod';
export * from './paymentIntentLastPaymentError';
export * from './paymentIntentNextAction';
export * from './paymentIntentPaymentMethodOptions';
export * from './paymentIntentProcessing';
export * from './paymentIntentSetupFutureUsage';
export * from './paymentIntentShipping';
export * from './paymentIntentStatus';
export * from './paymentIntentTransferData';
export * from './paymentIntentTransferDataDestination';
export * from './paymentMethodAcssDebit';
export * from './paymentMethodAuBecsDebit';
export * from './paymentMethodBacsDebit';
export * from './paymentMethodBillingDetails';
export * from './paymentMethodBillingDetailsAddress';
export * from './paymentMethodBoleto';
export * from './paymentMethodCard';
export * from './paymentMethodCardChecks';
export * from './paymentMethodCardNetworks';
export * from './paymentMethodCardThreeDSecureUsage';
export * from './paymentMethodCardWallet';
export * from './paymentMethodDetailsAchCreditTransfer';
export * from './paymentMethodDetailsAchDebit';
export * from './paymentMethodDetailsAfterpayClearpay';
export * from './paymentMethodDetailsAlipay';
export * from './paymentMethodDetailsBancontact';
export * from './paymentMethodDetailsBancontactGeneratedSepaDebit';
export * from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';
export * from './paymentMethodDetailsBlik';
export * from './paymentMethodDetailsCardPresent';
export * from './paymentMethodDetailsCardPresentGeneratedCard';
export * from './paymentMethodDetailsEps';
export * from './paymentMethodDetailsFpx';
export * from './paymentMethodDetailsGiropay';
export * from './paymentMethodDetailsGrabpay';
export * from './paymentMethodDetailsIdeal';
export * from './paymentMethodDetailsInteracPresent';
export * from './paymentMethodDetailsInteracPresentReceipt';
export * from './paymentMethodDetailsKonbini';
export * from './paymentMethodDetailsKonbiniStore';
export * from './paymentMethodDetailsMultibanco';
export * from './paymentMethodDetailsOxxo';
export * from './paymentMethodDetailsP24';
export * from './paymentMethodDetailsPaynow';
export * from './paymentMethodDetailsPix';
export * from './paymentMethodDetailsPromptpay';
export * from './paymentMethodDetailsSepaCreditTransfer';
export * from './paymentMethodDetailsSepaDebit';
export * from './paymentMethodDetailsSofort';
export * from './paymentMethodDetailsWechatPay';
export * from './paymentMethodEps';
export * from './paymentMethodFpx';
export * from './paymentMethodIdeal';
export * from './paymentMethodKlarna';
export * from './paymentMethodKlarnaDob';
export * from './paymentMethodLink';
export * from './paymentMethodOptionsAcssDebit';
export * from './paymentMethodOptionsAffirm';
export * from './paymentMethodOptionsAfterpayClearpay';
export * from './paymentMethodOptionsAlipay';
export * from './paymentMethodOptionsAuBecsDebit';
export * from './paymentMethodOptionsBacsDebit';
export * from './paymentMethodOptionsBancontact';
export * from './paymentMethodOptionsBlik';
export * from './paymentMethodOptionsBoleto';
export * from './paymentMethodOptionsCard';
export * from './paymentMethodOptionsCardMandateOptions';
export * from './paymentMethodOptionsCardPresent';
export * from './paymentMethodOptionsCustomerBalance';
export * from './paymentMethodOptionsEps';
export * from './paymentMethodOptionsFpx';
export * from './paymentMethodOptionsGiropay';
export * from './paymentMethodOptionsGrabpay';
export * from './paymentMethodOptionsIdeal';
export * from './paymentMethodOptionsKlarna';
export * from './paymentMethodOptionsLink';
export * from './paymentMethodOptionsOxxo';
export * from './paymentMethodOptionsP24';
export * from './paymentMethodOptionsPaynow';
export * from './paymentMethodOptionsPix';
export * from './paymentMethodOptionsPromptpay';
export * from './paymentMethodOptionsSepaDebit';
export * from './paymentMethodOptionsSofort';
export * from './paymentMethodOptionsUsBankAccount';
export * from './paymentMethodOptionsWechatPay';
export * from './paymentMethodP24';
export * from './paymentMethodRadarOptions';
export * from './paymentMethodSepaDebit';
export * from './paymentMethodSepaDebitGeneratedFrom';
export * from './paymentMethodSofort';
export * from './paymentMethodType';
export * from './paymentMethodUsBankAccount';
export * from './paymentMethodUsBankAccountNetworks';
export * from './paymentSettingsPaymentMethodOptions';
export * from './paymentSettingsPaymentMethodOptionsAcssDebit';
export * from './paymentSettingsPaymentMethodOptionsBancontact';
export * from './paymentSettingsPaymentMethodOptionsCard';
export * from './paymentSettingsPaymentMethodOptionsCustomerBalance';
export * from './paymentSettingsPaymentMethodOptionsUsBankAccount';
export * from './paymentSettingsPaymentMethodType';
export * from './paymentSettingsSaveDefaultPaymentMethod';
export * from './payoutType';
export * from './payoutsSchedule';
export * from './pendingInvoiceItemIntervalInterval';
export * from './pendingRequestAmountDetails';
export * from './personAddressKana';
export * from './personAddressKanji';
export * from './personDob';
export * from './personFutureRequirements';
export * from './personPoliticalExposure';
export * from './personRelationship';
export * from './personRequirements';
export * from './personVerification';
export * from './personVerificationAdditionalDocument';
export * from './phaseAddInvoiceItem';
export * from './phaseAddInvoiceItemPrice';
export * from './phaseAutomaticTax';
export * from './phaseBillingCycleAnchor';
export * from './phaseBillingThresholds';
export * from './phaseCollectionMethod';
export * from './phaseInvoiceSettings';
export * from './phaseItem';
export * from './phaseItemBillingThresholds';
export * from './phaseItemPlan';
export * from './phaseItemPrice';
export * from './phaseProrationBehavior';
export * from './phaseTransferData';
export * from './planAggregateUsage';
export * from './planBillingScheme';
export * from './planInterval';
export * from './planTier';
export * from './planTiersMode';
export * from './planTransformUsage';
export * from './planUsageType';
export * from './priceBillingScheme';
export * from './priceCurrencyOptions';
export * from './priceCurrencyOptionsCustomUnitAmount';
export * from './priceCustomUnitAmount';
export * from './priceRecurring';
export * from './priceTaxBehavior';
export * from './priceTier';
export * from './priceTiersMode';
export * from './priceTransformQuantity';
export * from './priceType';
export * from './processingCard';
export * from './productPackageDimensions';
export * from './productType';
export * from './promotionCodeRestrictions';
export * from './prorationDetailsCreditedItems';
export * from './purchaseDetailsFlight';
export * from './purchaseDetailsFuel';
export * from './purchaseDetailsLodging';
export * from './purchaseDetailsReceipt';
export * from './quoteAutomaticTax';
export * from './quoteCollectionMethod';
export * from './quoteComputed';
export * from './quoteComputedRecurring';
export * from './quoteFromQuote';
export * from './quoteFromQuoteQuote';
export * from './quoteInvoiceSettings';
export * from './quoteStatus';
export * from './quoteStatusTransitions';
export * from './quoteSubscriptionData';
export * from './quoteTotalDetails';
export * from './quoteTransferData';
export * from './receiptAccountType';
export * from './recurringAggregateUsage';
export * from './recurringInterval';
export * from './recurringTotalDetails';
export * from './recurringUsageType';
export * from './referralSummary';
export * from './refundNextAction';
export * from './refundNextActionDisplayDetails';
export * from './refundReason';
export * from './requestHistoryAmountDetails';
export * from './requestHistoryReason';
export * from './requirementsAlternative';
export * from './requirementsDisabledReason';
export * from './requirementsError';
export * from './requirementsPastDue';
export * from './resourceAlreadyExistError';
export * from './resourceNotFoundError';
export * from './restrictionsCurrencyOptions';
export * from './reviewClosedReason';
export * from './reviewIpAddressLocation';
export * from './reviewOpenedReason';
export * from './reviewSession';
export * from './sepaDebitGeneratedFrom';
export * from './sepaDebitGeneratedFromCharge';
export * from './sepaDebitGeneratedFromSetupAttempt';
export * from './settingsBacsDebitPayments';
export * from './settingsBranding';
export * from './settingsBrandingIcon';
export * from './settingsBrandingLogo';
export * from './settingsCardIssuing';
export * from './settingsCardPayments';
export * from './settingsDashboard';
export * from './settingsPayments';
export * from './settingsPayouts';
export * from './settingsReconciliationMode';
export * from './settingsSepaDebitPayments';
export * from './settingsTreasury';
export * from './setupAttemptFlowDirection';
export * from './setupAttemptPaymentMethodDetails';
export * from './setupAttemptSetupError';
export * from './setupErrorType';
export * from './setupIntentCancellationReason';
export * from './setupIntentFlowDirection';
export * from './setupIntentLastSetupError';
export * from './setupIntentNextAction';
export * from './setupIntentPaymentMethodOptions';
export * from './setupIntentStatus';
export * from './shippingCarrier';
export * from './shippingCustoms';
export * from './shippingService';
export * from './shippingStatus';
export * from './shippingType';
export * from './sofortPreferredLanguage';
export * from './sofortSetupFutureUsage';
export * from './source';
export * from './sourceAchCreditTransfer';
export * from './sourceAchDebit';
export * from './sourceAcssDebit';
export * from './sourceAlipay';
export * from './sourceAuBecsDebit';
export * from './sourceBancontact';
export * from './sourceCard';
export * from './sourceCardPresent';
export * from './sourceCodeVerification';
export * from './sourceEps';
export * from './sourceGiropay';
export * from './sourceIdeal';
export * from './sourceKlarna';
export * from './sourceMultibanco';
export * from './sourceOrderItem';
export * from './sourceOrderShipping';
export * from './sourceOwner';
export * from './sourceOwnerAddress';
export * from './sourceOwnerVerifiedAddress';
export * from './sourceP24';
export * from './sourceReceiver';
export * from './sourceRedirect';
export * from './sourceSepaCreditTransfer';
export * from './sourceSepaDebit';
export * from './sourceSofort';
export * from './sourceSourceOrder';
export * from './sourceThreeDSecure';
export * from './sourceType';
export * from './sourceWechat';
export * from './spendingControlsAllowedCategory';
export * from './spendingControlsBlockedCategory';
export * from './spendingControlsSpendingLimit';
export * from './spendingLimitCategory';
export * from './spendingLimitInterval';
export * from './storeChain';
export * from './storesFamilymart';
export * from './storesLawson';
export * from './storesMinistop';
export * from './storesSeicomart';
export * from './stripeAccount';
export * from './stripeAccountBusinessProfile';
export * from './stripeAccountSettings';
export * from './stripeAddress';
export * from './stripeApplication';
export * from './stripeApplicationFee';
export * from './stripeApplicationFeeAccount';
export * from './stripeApplicationFeeApplication';
export * from './stripeApplicationFeeBalanceTransaction';
export * from './stripeApplicationFeeCharge';
export * from './stripeApplicationFeeOriginatingTransaction';
export * from './stripeBalanceTransaction';
export * from './stripeBalanceTransactionSource';
export * from './stripeBankAccount';
export * from './stripeBankAccountAccount';
export * from './stripeBankAccountCustomer';
export * from './stripeCard';
export * from './stripeCardAccount';
export * from './stripeCardCustomer';
export * from './stripeCashBalance';
export * from './stripeCharge';
export * from './stripeChargeApplication';
export * from './stripeChargeApplicationFee';
export * from './stripeChargeBalanceTransaction';
export * from './stripeChargeCustomer';
export * from './stripeChargeDestination';
export * from './stripeChargeDispute';
export * from './stripeChargeFailureBalanceTransaction';
export * from './stripeChargeFraudDetails';
export * from './stripeChargeInvoice';
export * from './stripeChargeOnBehalfOf';
export * from './stripeChargeOutcome';
export * from './stripeChargePaymentIntent';
export * from './stripeChargePaymentMethodDetails';
export * from './stripeChargeRefunds';
export * from './stripeChargeReview';
export * from './stripeChargeShipping';
export * from './stripeChargeSource';
export * from './stripeChargeSourceTransfer';
export * from './stripeChargeTransfer';
export * from './stripeChargeTransferData';
export * from './stripeConnectCollectionTransfer';
export * from './stripeConnectCollectionTransferDestination';
export * from './stripeCoupon';
export * from './stripeCustomer';
export * from './stripeCustomerAddress';
export * from './stripeCustomerCashBalance';
export * from './stripeCustomerDefaultSource';
export * from './stripeCustomerDiscount';
export * from './stripeCustomerShipping';
export * from './stripeCustomerSource';
export * from './stripeCustomerTestClock';
export * from './stripeDeletedApplication';
export * from './stripeDeletedBankAccount';
export * from './stripeDeletedCard';
export * from './stripeDeletedCoupon';
export * from './stripeDeletedCustomer';
export * from './stripeDeletedDiscount';
export * from './stripeDeletedInvoice';
export * from './stripeDeletedPlan';
export * from './stripeDeletedPrice';
export * from './stripeDeletedProduct';
export * from './stripeDeletedTaxId';
export * from './stripeDiscount';
export * from './stripeDiscountCustomer';
export * from './stripeDiscountPromotionCode';
export * from './stripeDispute';
export * from './stripeDisputeCharge';
export * from './stripeDisputePaymentIntent';
export * from './stripeFeeRefund';
export * from './stripeFeeRefundBalanceTransaction';
export * from './stripeFeeRefundFee';
export * from './stripeFile';
export * from './stripeFileLink';
export * from './stripeFileLinkFile';
export * from './stripeFileLinks';
export * from './stripeInvoice';
export * from './stripeInvoiceAccountTaxIdsInner';
export * from './stripeInvoiceApplication';
export * from './stripeInvoiceCharge';
export * from './stripeInvoiceCustomer';
export * from './stripeInvoiceCustomerAddress';
export * from './stripeInvoiceCustomerShipping';
export * from './stripeInvoiceDefaultPaymentMethod';
export * from './stripeInvoiceDefaultSource';
export * from './stripeInvoiceDiscount';
export * from './stripeInvoiceDiscountsInner';
export * from './stripeInvoiceFromInvoice';
export * from './stripeInvoiceLastFinalizationError';
export * from './stripeInvoiceLatestRevision';
export * from './stripeInvoiceLineItem';
export * from './stripeInvoiceLineItemDiscountsInner';
export * from './stripeInvoiceLineItemPlan';
export * from './stripeInvoiceLineItemPrice';
export * from './stripeInvoiceLineItemProrationDetails';
export * from './stripeInvoiceOnBehalfOf';
export * from './stripeInvoicePaymentIntent';
export * from './stripeInvoiceQuote';
export * from './stripeInvoiceRenderingOptions';
export * from './stripeInvoiceSubscription';
export * from './stripeInvoiceTestClock';
export * from './stripeInvoiceTransferData';
export * from './stripeIssuingAuthorization';
export * from './stripeIssuingAuthorizationAmountDetails';
export * from './stripeIssuingAuthorizationCardholder';
export * from './stripeIssuingAuthorizationNetworkData';
export * from './stripeIssuingAuthorizationPendingRequest';
export * from './stripeIssuingAuthorizationTreasury';
export * from './stripeIssuingCard';
export * from './stripeIssuingCardReplacedBy';
export * from './stripeIssuingCardReplacementFor';
export * from './stripeIssuingCardShipping';
export * from './stripeIssuingCardWallets';
export * from './stripeIssuingCardholder';
export * from './stripeIssuingCardholderCompany';
export * from './stripeIssuingCardholderIndividual';
export * from './stripeIssuingCardholderSpendingControls';
export * from './stripeIssuingDispute';
export * from './stripeIssuingDisputeTransaction';
export * from './stripeIssuingDisputeTreasury';
export * from './stripeIssuingTransaction';
export * from './stripeIssuingTransactionAmountDetails';
export * from './stripeIssuingTransactionAuthorization';
export * from './stripeIssuingTransactionBalanceTransaction';
export * from './stripeIssuingTransactionCard';
export * from './stripeIssuingTransactionCardholder';
export * from './stripeIssuingTransactionDispute';
export * from './stripeIssuingTransactionPurchaseDetails';
export * from './stripeIssuingTransactionTreasury';
export * from './stripeLineItem';
export * from './stripeLineItemPrice';
export * from './stripeMandate';
export * from './stripeMandatePaymentMethod';
export * from './stripePaymentIntent';
export * from './stripePaymentIntentApplication';
export * from './stripePaymentIntentAutomaticPaymentMethods';
export * from './stripePaymentIntentCustomer';
export * from './stripePaymentIntentInvoice';
export * from './stripePaymentIntentLastPaymentError';
export * from './stripePaymentIntentLatestCharge';
export * from './stripePaymentIntentNextAction';
export * from './stripePaymentIntentOnBehalfOf';
export * from './stripePaymentIntentPaymentMethod';
export * from './stripePaymentIntentPaymentMethodOptions';
export * from './stripePaymentIntentProcessing';
export * from './stripePaymentIntentReview';
export * from './stripePaymentIntentShipping';
export * from './stripePaymentIntentSource';
export * from './stripePaymentIntentTransferData';
export * from './stripePaymentMethod';
export * from './stripePaymentMethodCustomer';
export * from './stripePayout';
export * from './stripePayoutBalanceTransaction';
export * from './stripePayoutDestination';
export * from './stripePayoutFailureBalanceTransaction';
export * from './stripePayoutOriginalPayout';
export * from './stripePayoutReversedBy';
export * from './stripePerson';
export * from './stripePersonAddressKana';
export * from './stripePersonAddressKanji';
export * from './stripePersonFutureRequirements';
export * from './stripePersonRequirements';
export * from './stripePlan';
export * from './stripePlanProduct';
export * from './stripePlanTransformUsage';
export * from './stripePlatformTaxFee';
export * from './stripePrice';
export * from './stripePriceCustomUnitAmount';
export * from './stripePriceProduct';
export * from './stripePriceRecurring';
export * from './stripePriceTransformQuantity';
export * from './stripeProduct';
export * from './stripeProductDefaultPrice';
export * from './stripeProductPackageDimensions';
export * from './stripeProductTaxCode';
export * from './stripePromotionCode';
export * from './stripePromotionCodeCustomer';
export * from './stripeQuote';
export * from './stripeQuoteApplication';
export * from './stripeQuoteCustomer';
export * from './stripeQuoteDefaultTaxRatesInner';
export * from './stripeQuoteFromQuote';
export * from './stripeQuoteInvoice';
export * from './stripeQuoteInvoiceSettings';
export * from './stripeQuoteOnBehalfOf';
export * from './stripeQuoteSubscription';
export * from './stripeQuoteSubscriptionSchedule';
export * from './stripeQuoteTestClock';
export * from './stripeQuoteTransferData';
export * from './stripeRefund';
export * from './stripeRefundCharge';
export * from './stripeRefundFailureBalanceTransaction';
export * from './stripeRefundPaymentIntent';
export * from './stripeRefundSourceTransferReversal';
export * from './stripeRefundTransferReversal';
export * from './stripeReserveTransaction';
export * from './stripeReview';
export * from './stripeReviewCharge';
export * from './stripeReviewIpAddressLocation';
export * from './stripeReviewPaymentIntent';
export * from './stripeReviewSession';
export * from './stripeSetupAttempt';
export * from './stripeSetupAttemptApplication';
export * from './stripeSetupAttemptCustomer';
export * from './stripeSetupAttemptOnBehalfOf';
export * from './stripeSetupAttemptPaymentMethod';
export * from './stripeSetupAttemptSetupError';
export * from './stripeSetupAttemptSetupIntent';
export * from './stripeSetupIntent';
export * from './stripeSetupIntentApplication';
export * from './stripeSetupIntentCustomer';
export * from './stripeSetupIntentLastSetupError';
export * from './stripeSetupIntentLatestAttempt';
export * from './stripeSetupIntentMandate';
export * from './stripeSetupIntentNextAction';
export * from './stripeSetupIntentOnBehalfOf';
export * from './stripeSetupIntentPaymentMethod';
export * from './stripeSetupIntentPaymentMethodOptions';
export * from './stripeSetupIntentSingleUseMandate';
export * from './stripeSource';
export * from './stripeSubscription';
export * from './stripeSubscriptionApplication';
export * from './stripeSubscriptionBillingThresholds';
export * from './stripeSubscriptionCustomer';
export * from './stripeSubscriptionDefaultPaymentMethod';
export * from './stripeSubscriptionDefaultSource';
export * from './stripeSubscriptionDiscount';
export * from './stripeSubscriptionItem';
export * from './stripeSubscriptionItemBillingThresholds';
export * from './stripeSubscriptionLatestInvoice';
export * from './stripeSubscriptionOnBehalfOf';
export * from './stripeSubscriptionPauseCollection';
export * from './stripeSubscriptionPaymentSettings';
export * from './stripeSubscriptionPendingInvoiceItemInterval';
export * from './stripeSubscriptionPendingSetupIntent';
export * from './stripeSubscriptionPendingUpdate';
export * from './stripeSubscriptionSchedule';
export * from './stripeSubscriptionScheduleApplication';
export * from './stripeSubscriptionScheduleCurrentPhase';
export * from './stripeSubscriptionScheduleCustomer';
export * from './stripeSubscriptionScheduleSubscription';
export * from './stripeSubscriptionScheduleTestClock';
export * from './stripeSubscriptionTestClock';
export * from './stripeSubscriptionTransferData';
export * from './stripeTaxCode';
export * from './stripeTaxDeductedAtSource';
export * from './stripeTaxId';
export * from './stripeTaxIdCustomer';
export * from './stripeTaxIdVerification';
export * from './stripeTaxRate';
export * from './stripeTestHelpersTestClock';
export * from './stripeTopup';
export * from './stripeTopupBalanceTransaction';
export * from './stripeTopupSource';
export * from './stripeTransfer';
export * from './stripeTransferBalanceTransaction';
export * from './stripeTransferDestination';
export * from './stripeTransferDestinationPayment';
export * from './stripeTransferReversal';
export * from './stripeTransferReversalDestinationPaymentRefund';
export * from './stripeTransferReversalSourceRefund';
export * from './stripeTransferReversalTransfer';
export * from './stripeTransferSourceTransaction';
export * from './subscriptionAutomaticTax';
export * from './subscriptionBillingThresholds';
export * from './subscriptionCollectionMethod';
export * from './subscriptionItemBillingThresholds';
export * from './subscriptionPauseCollection';
export * from './subscriptionPaymentSettings';
export * from './subscriptionPaymentSettingsPaymentMethodOptions';
export * from './subscriptionPendingInvoiceItemInterval';
export * from './subscriptionPendingUpdate';
export * from './subscriptionScheduleCurrentPhase';
export * from './subscriptionScheduleDefaultSettings';
export * from './subscriptionScheduleDefaultSettingsBillingThresholds';
export * from './subscriptionScheduleDefaultSettingsDefaultPaymentMethod';
export * from './subscriptionScheduleDefaultSettingsInvoiceSettings';
export * from './subscriptionScheduleDefaultSettingsOnBehalfOf';
export * from './subscriptionScheduleDefaultSettingsTransferData';
export * from './subscriptionScheduleEndBehavior';
export * from './subscriptionSchedulePhase';
export * from './subscriptionSchedulePhaseBillingThresholds';
export * from './subscriptionSchedulePhaseCoupon';
export * from './subscriptionSchedulePhaseDefaultPaymentMethod';
export * from './subscriptionSchedulePhaseInvoiceSettings';
export * from './subscriptionSchedulePhaseTransferData';
export * from './subscriptionScheduleStatus';
export * from './subscriptionStatus';
export * from './subscriptionTransferData';
export * from './taxAutomaticTax';
export * from './taxIdType';
export * from './taxIdVerification';
export * from './taxLocation';
export * from './taxRateTaxType';
export * from './testClockStatus';
export * from './thresholdReasonItemReason';
export * from './topupStatus';
export * from './totalDetailsBreakdown';
export * from './transactionAmountDetails';
export * from './transactionMerchantData';
export * from './transactionPurchaseDetails';
export * from './transactionPurchaseDetailsFlight';
export * from './transactionPurchaseDetailsFuel';
export * from './transactionPurchaseDetailsLodging';
export * from './transactionTreasury';
export * from './transactionType';
export * from './transactionWallet';
export * from './transformQuantityRound';
export * from './transformUsageRound';
export * from './treasuryTosAcceptance';
export * from './upfrontTotalDetails';
export * from './usBankAccountAccountHolderType';
export * from './usBankAccountAccountType';
export * from './usBankAccountFinancialConnections';
export * from './usBankAccountNetworks';
export * from './usBankAccountVerificationMethod';
export * from './user';
export * from './validationError';
export * from './verificationAdditionalDocument';
export * from './verificationAdditionalDocumentBack';
export * from './verificationAdditionalDocumentFront';
export * from './verificationDataAddressLine1Check';
export * from './verificationDataAddressPostalCodeCheck';
export * from './verificationDataCvcCheck';
export * from './verificationDataExpiryCheck';
export * from './verificationDocument';
export * from './verificationDocumentBack';
export * from './verificationDocumentFront';
export * from './verificationStatus';
export * from './verifyWithMicrodepositsMicrodepositType';
export * from './walletMasterpass';
export * from './walletMasterpassBillingAddress';
export * from './walletMasterpassShippingAddress';
export * from './walletType';
export * from './walletVisaCheckout';
export * from './walletsApplePay';
export * from './walletsGooglePay';
export * from './wechatPayClient';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessDeniedError } from './accessDeniedError';
import { AccountBusinessProfile } from './accountBusinessProfile';
import { AccountBusinessProfileSupportAddress } from './accountBusinessProfileSupportAddress';
import { AccountBusinessType } from './accountBusinessType';
import { AccountCapabilities } from './accountCapabilities';
import { AccountCompany } from './accountCompany';
import { AccountCompanyAddressKana } from './accountCompanyAddressKana';
import { AccountCompanyAddressKanji } from './accountCompanyAddressKanji';
import { AccountCompanyOwnershipDeclaration } from './accountCompanyOwnershipDeclaration';
import { AccountCompanyVerification } from './accountCompanyVerification';
import { AccountController } from './accountController';
import { AccountDebitSource } from './accountDebitSource';
import { AccountFutureRequirements } from './accountFutureRequirements';
import { AccountRequirements } from './accountRequirements';
import { AccountSettings } from './accountSettings';
import { AccountTosAcceptance } from './accountTosAcceptance';
import { AccountType } from './accountType';
import { AchDebitAccountHolderType } from './achDebitAccountHolderType';
import { AcssDebitCurrency } from './acssDebitCurrency';
import { AcssDebitMandateOptions } from './acssDebitMandateOptions';
import { AcssDebitVerificationMethod } from './acssDebitVerificationMethod';
import { AddPromoCodeRequest } from './addPromoCodeRequest';
import { AlipaySetupFutureUsage } from './alipaySetupFutureUsage';
import { AmountDetailsTip } from './amountDetailsTip';
import { ApiListStripeBankAccountOrStripeCard } from './apiListStripeBankAccountOrStripeCard';
import { ApiListStripeBankAccountOrStripeCardDataInner } from './apiListStripeBankAccountOrStripeCardDataInner';
import { ApiListStripeCustomerSource } from './apiListStripeCustomerSource';
import { ApiListStripeFeeRefund } from './apiListStripeFeeRefund';
import { ApiListStripeFileLink } from './apiListStripeFileLink';
import { ApiListStripeInvoiceLineItem } from './apiListStripeInvoiceLineItem';
import { ApiListStripeLineItem } from './apiListStripeLineItem';
import { ApiListStripeRefund } from './apiListStripeRefund';
import { ApiListStripeSubscription } from './apiListStripeSubscription';
import { ApiListStripeSubscriptionItem } from './apiListStripeSubscriptionItem';
import { ApiListStripeTaxId } from './apiListStripeTaxId';
import { ApiListStripeTransferReversal } from './apiListStripeTransferReversal';
import { ApplePayIneligibleReason } from './applePayIneligibleReason';
import { AuBecsDebitSetupFutureUsage } from './auBecsDebitSetupFutureUsage';
import { AuthorizationAmountDetails } from './authorizationAmountDetails';
import { AuthorizationAuthorizationMethod } from './authorizationAuthorizationMethod';
import { AuthorizationMerchantData } from './authorizationMerchantData';
import { AuthorizationNetworkData } from './authorizationNetworkData';
import { AuthorizationPendingRequest } from './authorizationPendingRequest';
import { AuthorizationPendingRequestAmountDetails } from './authorizationPendingRequestAmountDetails';
import { AuthorizationRequestHistory } from './authorizationRequestHistory';
import { AuthorizationRequestHistoryAmountDetails } from './authorizationRequestHistoryAmountDetails';
import { AuthorizationStatus } from './authorizationStatus';
import { AuthorizationTreasury } from './authorizationTreasury';
import { AuthorizationVerificationData } from './authorizationVerificationData';
import { AutomaticTaxStatus } from './automaticTaxStatus';
import { BacsDebitSetupFutureUsage } from './bacsDebitSetupFutureUsage';
import { BalanceTransactionFeeDetail } from './balanceTransactionFeeDetail';
import { BalanceTransactionType } from './balanceTransactionType';
import { BancontactPreferredLanguage } from './bancontactPreferredLanguage';
import { BankAccount } from './bankAccount';
import { BankAccountAvailablePayoutMethod } from './bankAccountAvailablePayoutMethod';
import { BankTransferEuBankTransfer } from './bankTransferEuBankTransfer';
import { BlikMandateOptions } from './blikMandateOptions';
import { BlikOffSession } from './blikOffSession';
import { BlikType } from './blikType';
import { BoletoSetupFutureUsage } from './boletoSetupFutureUsage';
import { BreakdownDiscount } from './breakdownDiscount';
import { BreakdownTax } from './breakdownTax';
import { CapabilitiesAcssDebitPayments } from './capabilitiesAcssDebitPayments';
import { CapabilitiesAffirmPayments } from './capabilitiesAffirmPayments';
import { CapabilitiesAfterpayClearpayPayments } from './capabilitiesAfterpayClearpayPayments';
import { CapabilitiesAuBecsDebitPayments } from './capabilitiesAuBecsDebitPayments';
import { CapabilitiesBacsDebitPayments } from './capabilitiesBacsDebitPayments';
import { CapabilitiesBancontactPayments } from './capabilitiesBancontactPayments';
import { CapabilitiesBankTransferPayments } from './capabilitiesBankTransferPayments';
import { CapabilitiesBlikPayments } from './capabilitiesBlikPayments';
import { CapabilitiesBoletoPayments } from './capabilitiesBoletoPayments';
import { CapabilitiesCardIssuing } from './capabilitiesCardIssuing';
import { CapabilitiesCardPayments } from './capabilitiesCardPayments';
import { CapabilitiesCartesBancairesPayments } from './capabilitiesCartesBancairesPayments';
import { CapabilitiesEpsPayments } from './capabilitiesEpsPayments';
import { CapabilitiesFpxPayments } from './capabilitiesFpxPayments';
import { CapabilitiesGiropayPayments } from './capabilitiesGiropayPayments';
import { CapabilitiesGrabpayPayments } from './capabilitiesGrabpayPayments';
import { CapabilitiesIdealPayments } from './capabilitiesIdealPayments';
import { CapabilitiesIndiaInternationalPayments } from './capabilitiesIndiaInternationalPayments';
import { CapabilitiesJcbPayments } from './capabilitiesJcbPayments';
import { CapabilitiesKlarnaPayments } from './capabilitiesKlarnaPayments';
import { CapabilitiesKonbiniPayments } from './capabilitiesKonbiniPayments';
import { CapabilitiesLegacyPayments } from './capabilitiesLegacyPayments';
import { CapabilitiesLinkPayments } from './capabilitiesLinkPayments';
import { CapabilitiesOxxoPayments } from './capabilitiesOxxoPayments';
import { CapabilitiesP24Payments } from './capabilitiesP24Payments';
import { CapabilitiesPaynowPayments } from './capabilitiesPaynowPayments';
import { CapabilitiesPromptpayPayments } from './capabilitiesPromptpayPayments';
import { CapabilitiesSepaDebitPayments } from './capabilitiesSepaDebitPayments';
import { CapabilitiesSofortPayments } from './capabilitiesSofortPayments';
import { CapabilitiesTaxReportingUs1099K } from './capabilitiesTaxReportingUs1099K';
import { CapabilitiesTaxReportingUs1099Misc } from './capabilitiesTaxReportingUs1099Misc';
import { CapabilitiesTransfers } from './capabilitiesTransfers';
import { CapabilitiesTreasury } from './capabilitiesTreasury';
import { CapabilitiesUsBankAccountAchPayments } from './capabilitiesUsBankAccountAchPayments';
import { Card } from './card';
import { CardAvailablePayoutMethod } from './cardAvailablePayoutMethod';
import { CardCancellationReason } from './cardCancellationReason';
import { CardChecks } from './cardChecks';
import { CardCustomerNotification } from './cardCustomerNotification';
import { CardIssuingTosAcceptance } from './cardIssuingTosAcceptance';
import { CardMandateOptions } from './cardMandateOptions';
import { CardNetwork } from './cardNetwork';
import { CardNetworks } from './cardNetworks';
import { CardPaymentsDeclineOn } from './cardPaymentsDeclineOn';
import { CardReplacementReason } from './cardReplacementReason';
import { CardRequestThreeDSecure } from './cardRequestThreeDSecure';
import { CardShipping } from './cardShipping';
import { CardShippingCustoms } from './cardShippingCustoms';
import { CardSpendingControls } from './cardSpendingControls';
import { CardStatus } from './cardStatus';
import { CardThreeDSecureUsage } from './cardThreeDSecureUsage';
import { CardType } from './cardType';
import { CardWallet } from './cardWallet';
import { CardWallets } from './cardWallets';
import { CardholderBilling } from './cardholderBilling';
import { CardholderCompany } from './cardholderCompany';
import { CardholderIndividual } from './cardholderIndividual';
import { CardholderIndividualDob } from './cardholderIndividualDob';
import { CardholderIndividualVerification } from './cardholderIndividualVerification';
import { CardholderRequirements } from './cardholderRequirements';
import { CardholderSpendingControls } from './cardholderSpendingControls';
import { CardholderStatus } from './cardholderStatus';
import { CardholderType } from './cardholderType';
import { CashBalanceSettings } from './cashBalanceSettings';
import { ChargeAlternateStatementDescriptors } from './chargeAlternateStatementDescriptors';
import { ChargeBillingDetails } from './chargeBillingDetails';
import { ChargeFraudDetails } from './chargeFraudDetails';
import { ChargeLevel3 } from './chargeLevel3';
import { ChargeOutcome } from './chargeOutcome';
import { ChargeOutcomeRule } from './chargeOutcomeRule';
import { ChargePaymentMethodDetails } from './chargePaymentMethodDetails';
import { ChargeRadarOptions } from './chargeRadarOptions';
import { ChargeShipping } from './chargeShipping';
import { ChargeStatus } from './chargeStatus';
import { ChargeTransferData } from './chargeTransferData';
import { ChargeTransferDataDestination } from './chargeTransferDataDestination';
import { CodeShareSummary } from './codeShareSummary';
import { CompanyAddressKana } from './companyAddressKana';
import { CompanyAddressKanji } from './companyAddressKanji';
import { CompanyOwnershipDeclaration } from './companyOwnershipDeclaration';
import { CompanyStructure } from './companyStructure';
import { CompanyVerification } from './companyVerification';
import { ComputedRecurring } from './computedRecurring';
import { ComputedUpfront } from './computedUpfront';
import { ConcurrencyError } from './concurrencyError';
import { ControllerType } from './controllerType';
import { CouponAppliesTo } from './couponAppliesTo';
import { CouponCurrencyOptions } from './couponCurrencyOptions';
import { CouponDuration } from './couponDuration';
import { CreateCheckoutRequest } from './createCheckoutRequest';
import { CreateCheckoutResponse } from './createCheckoutResponse';
import { CreateCustomerPortalSessionRequest } from './createCustomerPortalSessionRequest';
import { CreateUserRequest } from './createUserRequest';
import { CurrencyOptionsCustomUnitAmount } from './currencyOptionsCustomUnitAmount';
import { CurrencyOptionsTaxBehavior } from './currencyOptionsTaxBehavior';
import { CurrencyOptionsTier } from './currencyOptionsTier';
import { CustomerAcceptanceOnline } from './customerAcceptanceOnline';
import { CustomerAcceptanceType } from './customerAcceptanceType';
import { CustomerBalanceBankTransfer } from './customerBalanceBankTransfer';
import { CustomerInvoiceSettings } from './customerInvoiceSettings';
import { CustomerInvoiceSettingsDefaultPaymentMethod } from './customerInvoiceSettingsDefaultPaymentMethod';
import { CustomerInvoiceSettingsRenderingOptions } from './customerInvoiceSettingsRenderingOptions';
import { CustomerShipping } from './customerShipping';
import { CustomerTax } from './customerTax';
import { CustomerTaxExempt } from './customerTaxExempt';
import { CustomerTaxIdType } from './customerTaxIdType';
import { CustomerTaxLocation } from './customerTaxLocation';
import { DefaultSettingsAutomaticTax } from './defaultSettingsAutomaticTax';
import { DefaultSettingsBillingCycleAnchor } from './defaultSettingsBillingCycleAnchor';
import { DefaultSettingsBillingThresholds } from './defaultSettingsBillingThresholds';
import { DefaultSettingsCollectionMethod } from './defaultSettingsCollectionMethod';
import { DefaultSettingsInvoiceSettings } from './defaultSettingsInvoiceSettings';
import { DefaultSettingsTransferData } from './defaultSettingsTransferData';
import { DefaultSettingsTransferDataDestination } from './defaultSettingsTransferDataDestination';
import { DisplayBankTransferInstructionsFinancialAddress } from './displayBankTransferInstructionsFinancialAddress';
import { DisplayBankTransferInstructionsType } from './displayBankTransferInstructionsType';
import { DisplayDetailsEmailSent } from './displayDetailsEmailSent';
import { DisputeEvidence } from './disputeEvidence';
import { DisputeEvidenceCancellationPolicy } from './disputeEvidenceCancellationPolicy';
import { DisputeEvidenceCustomerCommunication } from './disputeEvidenceCustomerCommunication';
import { DisputeEvidenceCustomerSignature } from './disputeEvidenceCustomerSignature';
import { DisputeEvidenceDetails } from './disputeEvidenceDetails';
import { DisputeEvidenceDuplicateChargeDocumentation } from './disputeEvidenceDuplicateChargeDocumentation';
import { DisputeEvidenceReceipt } from './disputeEvidenceReceipt';
import { DisputeEvidenceRefundPolicy } from './disputeEvidenceRefundPolicy';
import { DisputeEvidenceServiceDocumentation } from './disputeEvidenceServiceDocumentation';
import { DisputeEvidenceShippingDocumentation } from './disputeEvidenceShippingDocumentation';
import { DisputeEvidenceUncategorizedFile } from './disputeEvidenceUncategorizedFile';
import { DisputeStatus } from './disputeStatus';
import { DisputeTreasury } from './disputeTreasury';
import { Emoji } from './emoji';
import { EpsBank } from './epsBank';
import { ErrorCode } from './errorCode';
import { EuBankTransferCountry } from './euBankTransferCountry';
import { FilePurpose } from './filePurpose';
import { FinancialAddressIban } from './financialAddressIban';
import { FinancialAddressSortCode } from './financialAddressSortCode';
import { FinancialAddressSpei } from './financialAddressSpei';
import { FinancialAddressSupportedNetwork } from './financialAddressSupportedNetwork';
import { FinancialAddressType } from './financialAddressType';
import { FinancialAddressZengin } from './financialAddressZengin';
import { FinancialConnectionsPermission } from './financialConnectionsPermission';
import { FlightSegment } from './flightSegment';
import { FpxAccountHolderType } from './fpxAccountHolderType';
import { FpxBank } from './fpxBank';
import { FutureRequirementsAlternative } from './futureRequirementsAlternative';
import { FutureRequirementsError } from './futureRequirementsError';
import { GetEmojiRequest } from './getEmojiRequest';
import { GetProductRequest } from './getProductRequest';
import { GetProductResponse } from './getProductResponse';
import { GetUserRequest } from './getUserRequest';
import { GooglePayIneligibleReason } from './googlePayIneligibleReason';
import { IdealBank } from './idealBank';
import { IdealBic } from './idealBic';
import { IdealSetupFutureUsage } from './idealSetupFutureUsage';
import { IndividualDob } from './individualDob';
import { IndividualVerification } from './individualVerification';
import { IndividualVerificationDocument } from './individualVerificationDocument';
import { InteracPresentReadMethod } from './interacPresentReadMethod';
import { InteracPresentReceipt } from './interacPresentReceipt';
import { InternalServerError } from './internalServerError';
import { InvoiceAutomaticTax } from './invoiceAutomaticTax';
import { InvoiceBillingReason } from './invoiceBillingReason';
import { InvoiceCollectionMethod } from './invoiceCollectionMethod';
import { InvoiceCustomField } from './invoiceCustomField';
import { InvoiceCustomerShipping } from './invoiceCustomerShipping';
import { InvoiceCustomerTaxExempt } from './invoiceCustomerTaxExempt';
import { InvoiceCustomerTaxId } from './invoiceCustomerTaxId';
import { InvoiceFromInvoice } from './invoiceFromInvoice';
import { InvoiceFromInvoiceInvoice } from './invoiceFromInvoiceInvoice';
import { InvoiceLastFinalizationError } from './invoiceLastFinalizationError';
import { InvoiceLineItemDiscountAmount } from './invoiceLineItemDiscountAmount';
import { InvoiceLineItemDiscountAmountDiscount } from './invoiceLineItemDiscountAmountDiscount';
import { InvoiceLineItemPeriod } from './invoiceLineItemPeriod';
import { InvoiceLineItemProrationDetails } from './invoiceLineItemProrationDetails';
import { InvoiceLineItemProrationDetailsCreditedItems } from './invoiceLineItemProrationDetailsCreditedItems';
import { InvoiceLineItemTaxAmount } from './invoiceLineItemTaxAmount';
import { InvoiceLineItemTaxAmountTaxRate } from './invoiceLineItemTaxAmountTaxRate';
import { InvoiceLineItemType } from './invoiceLineItemType';
import { InvoicePaymentSettings } from './invoicePaymentSettings';
import { InvoicePaymentSettingsPaymentMethodOptions } from './invoicePaymentSettingsPaymentMethodOptions';
import { InvoiceRenderingOptions } from './invoiceRenderingOptions';
import { InvoiceSettingsCustomField } from './invoiceSettingsCustomField';
import { InvoiceSettingsRenderingOptions } from './invoiceSettingsRenderingOptions';
import { InvoiceStatus } from './invoiceStatus';
import { InvoiceStatusTransitions } from './invoiceStatusTransitions';
import { InvoiceThresholdReason } from './invoiceThresholdReason';
import { InvoiceTotalDiscountAmount } from './invoiceTotalDiscountAmount';
import { InvoiceTotalTaxAmount } from './invoiceTotalTaxAmount';
import { InvoiceTransferData } from './invoiceTransferData';
import { ItemBillingThresholds } from './itemBillingThresholds';
import { KlarnaDob } from './klarnaDob';
import { KonbiniDisplayDetailsStores } from './konbiniDisplayDetailsStores';
import { KonbiniDisplayDetailsStoresFamilymart } from './konbiniDisplayDetailsStoresFamilymart';
import { KonbiniDisplayDetailsStoresLawson } from './konbiniDisplayDetailsStoresLawson';
import { KonbiniDisplayDetailsStoresMinistop } from './konbiniDisplayDetailsStoresMinistop';
import { KonbiniDisplayDetailsStoresSeicomart } from './konbiniDisplayDetailsStoresSeicomart';
import { KonbiniStore } from './konbiniStore';
import { LastFinalizationErrorType } from './lastFinalizationErrorType';
import { LastPaymentErrorType } from './lastPaymentErrorType';
import { LastSetupErrorType } from './lastSetupErrorType';
import { Level3LineItem } from './level3LineItem';
import { LineItemDiscount } from './lineItemDiscount';
import { LineItemTax } from './lineItemTax';
import { ListPromoCodesRequest } from './listPromoCodesRequest';
import { LocationSource } from './locationSource';
import { MandateCustomerAcceptance } from './mandateCustomerAcceptance';
import { MandateOptionsAmountType } from './mandateOptionsAmountType';
import { MandateOptionsDefaultFor } from './mandateOptionsDefaultFor';
import { MandateOptionsInterval } from './mandateOptionsInterval';
import { MandateOptionsOffSession } from './mandateOptionsOffSession';
import { MandateOptionsPaymentSchedule } from './mandateOptionsPaymentSchedule';
import { MandateOptionsTransactionType } from './mandateOptionsTransactionType';
import { MandateOptionsType } from './mandateOptionsType';
import { MandatePaymentMethodDetails } from './mandatePaymentMethodDetails';
import { MandateSingleUse } from './mandateSingleUse';
import { MandateStatus } from './mandateStatus';
import { MandateType } from './mandateType';
import { NetworksSupported } from './networksSupported';
import { NextActionAlipayHandleRedirect } from './nextActionAlipayHandleRedirect';
import { NextActionBoletoDisplayDetails } from './nextActionBoletoDisplayDetails';
import { NextActionCardAwaitNotification } from './nextActionCardAwaitNotification';
import { NextActionDisplayBankTransferInstructions } from './nextActionDisplayBankTransferInstructions';
import { NextActionDisplayDetails } from './nextActionDisplayDetails';
import { NextActionKonbiniDisplayDetails } from './nextActionKonbiniDisplayDetails';
import { NextActionOxxoDisplayDetails } from './nextActionOxxoDisplayDetails';
import { NextActionPaynowDisplayQrCode } from './nextActionPaynowDisplayQrCode';
import { NextActionPixDisplayQrCode } from './nextActionPixDisplayQrCode';
import { NextActionPromptpayDisplayQrCode } from './nextActionPromptpayDisplayQrCode';
import { NextActionRedirectToUrl } from './nextActionRedirectToUrl';
import { NextActionVerifyWithMicrodeposits } from './nextActionVerifyWithMicrodeposits';
import { NextActionWechatPayDisplayQrCode } from './nextActionWechatPayDisplayQrCode';
import { NextActionWechatPayRedirectToAndroidApp } from './nextActionWechatPayRedirectToAndroidApp';
import { NextActionWechatPayRedirectToIosApp } from './nextActionWechatPayRedirectToIosApp';
import { OffSessionInterval } from './offSessionInterval';
import { OutcomeRule } from './outcomeRule';
import { P24Bank } from './p24Bank';
import { PauseCollectionBehavior } from './pauseCollectionBehavior';
import { PaymentIntentAmountDetails } from './paymentIntentAmountDetails';
import { PaymentIntentAutomaticPaymentMethods } from './paymentIntentAutomaticPaymentMethods';
import { PaymentIntentCancellationReason } from './paymentIntentCancellationReason';
import { PaymentIntentCaptureMethod } from './paymentIntentCaptureMethod';
import { PaymentIntentConfirmationMethod } from './paymentIntentConfirmationMethod';
import { PaymentIntentLastPaymentError } from './paymentIntentLastPaymentError';
import { PaymentIntentNextAction } from './paymentIntentNextAction';
import { PaymentIntentPaymentMethodOptions } from './paymentIntentPaymentMethodOptions';
import { PaymentIntentProcessing } from './paymentIntentProcessing';
import { PaymentIntentSetupFutureUsage } from './paymentIntentSetupFutureUsage';
import { PaymentIntentShipping } from './paymentIntentShipping';
import { PaymentIntentStatus } from './paymentIntentStatus';
import { PaymentIntentTransferData } from './paymentIntentTransferData';
import { PaymentIntentTransferDataDestination } from './paymentIntentTransferDataDestination';
import { PaymentMethodAcssDebit } from './paymentMethodAcssDebit';
import { PaymentMethodAuBecsDebit } from './paymentMethodAuBecsDebit';
import { PaymentMethodBacsDebit } from './paymentMethodBacsDebit';
import { PaymentMethodBillingDetails } from './paymentMethodBillingDetails';
import { PaymentMethodBillingDetailsAddress } from './paymentMethodBillingDetailsAddress';
import { PaymentMethodBoleto } from './paymentMethodBoleto';
import { PaymentMethodCard } from './paymentMethodCard';
import { PaymentMethodCardChecks } from './paymentMethodCardChecks';
import { PaymentMethodCardNetworks } from './paymentMethodCardNetworks';
import { PaymentMethodCardThreeDSecureUsage } from './paymentMethodCardThreeDSecureUsage';
import { PaymentMethodCardWallet } from './paymentMethodCardWallet';
import { PaymentMethodDetailsAchCreditTransfer } from './paymentMethodDetailsAchCreditTransfer';
import { PaymentMethodDetailsAchDebit } from './paymentMethodDetailsAchDebit';
import { PaymentMethodDetailsAfterpayClearpay } from './paymentMethodDetailsAfterpayClearpay';
import { PaymentMethodDetailsAlipay } from './paymentMethodDetailsAlipay';
import { PaymentMethodDetailsBancontact } from './paymentMethodDetailsBancontact';
import { PaymentMethodDetailsBancontactGeneratedSepaDebit } from './paymentMethodDetailsBancontactGeneratedSepaDebit';
import { PaymentMethodDetailsBancontactGeneratedSepaDebitMandate } from './paymentMethodDetailsBancontactGeneratedSepaDebitMandate';
import { PaymentMethodDetailsBlik } from './paymentMethodDetailsBlik';
import { PaymentMethodDetailsCardPresent } from './paymentMethodDetailsCardPresent';
import { PaymentMethodDetailsCardPresentGeneratedCard } from './paymentMethodDetailsCardPresentGeneratedCard';
import { PaymentMethodDetailsEps } from './paymentMethodDetailsEps';
import { PaymentMethodDetailsFpx } from './paymentMethodDetailsFpx';
import { PaymentMethodDetailsGiropay } from './paymentMethodDetailsGiropay';
import { PaymentMethodDetailsGrabpay } from './paymentMethodDetailsGrabpay';
import { PaymentMethodDetailsIdeal } from './paymentMethodDetailsIdeal';
import { PaymentMethodDetailsInteracPresent } from './paymentMethodDetailsInteracPresent';
import { PaymentMethodDetailsInteracPresentReceipt } from './paymentMethodDetailsInteracPresentReceipt';
import { PaymentMethodDetailsKonbini } from './paymentMethodDetailsKonbini';
import { PaymentMethodDetailsKonbiniStore } from './paymentMethodDetailsKonbiniStore';
import { PaymentMethodDetailsMultibanco } from './paymentMethodDetailsMultibanco';
import { PaymentMethodDetailsOxxo } from './paymentMethodDetailsOxxo';
import { PaymentMethodDetailsP24 } from './paymentMethodDetailsP24';
import { PaymentMethodDetailsPaynow } from './paymentMethodDetailsPaynow';
import { PaymentMethodDetailsPix } from './paymentMethodDetailsPix';
import { PaymentMethodDetailsPromptpay } from './paymentMethodDetailsPromptpay';
import { PaymentMethodDetailsSepaCreditTransfer } from './paymentMethodDetailsSepaCreditTransfer';
import { PaymentMethodDetailsSepaDebit } from './paymentMethodDetailsSepaDebit';
import { PaymentMethodDetailsSofort } from './paymentMethodDetailsSofort';
import { PaymentMethodDetailsWechatPay } from './paymentMethodDetailsWechatPay';
import { PaymentMethodEps } from './paymentMethodEps';
import { PaymentMethodFpx } from './paymentMethodFpx';
import { PaymentMethodIdeal } from './paymentMethodIdeal';
import { PaymentMethodKlarna } from './paymentMethodKlarna';
import { PaymentMethodKlarnaDob } from './paymentMethodKlarnaDob';
import { PaymentMethodLink } from './paymentMethodLink';
import { PaymentMethodOptionsAcssDebit } from './paymentMethodOptionsAcssDebit';
import { PaymentMethodOptionsAffirm } from './paymentMethodOptionsAffirm';
import { PaymentMethodOptionsAfterpayClearpay } from './paymentMethodOptionsAfterpayClearpay';
import { PaymentMethodOptionsAlipay } from './paymentMethodOptionsAlipay';
import { PaymentMethodOptionsAuBecsDebit } from './paymentMethodOptionsAuBecsDebit';
import { PaymentMethodOptionsBacsDebit } from './paymentMethodOptionsBacsDebit';
import { PaymentMethodOptionsBancontact } from './paymentMethodOptionsBancontact';
import { PaymentMethodOptionsBlik } from './paymentMethodOptionsBlik';
import { PaymentMethodOptionsBoleto } from './paymentMethodOptionsBoleto';
import { PaymentMethodOptionsCard } from './paymentMethodOptionsCard';
import { PaymentMethodOptionsCardMandateOptions } from './paymentMethodOptionsCardMandateOptions';
import { PaymentMethodOptionsCardPresent } from './paymentMethodOptionsCardPresent';
import { PaymentMethodOptionsCustomerBalance } from './paymentMethodOptionsCustomerBalance';
import { PaymentMethodOptionsEps } from './paymentMethodOptionsEps';
import { PaymentMethodOptionsFpx } from './paymentMethodOptionsFpx';
import { PaymentMethodOptionsGiropay } from './paymentMethodOptionsGiropay';
import { PaymentMethodOptionsGrabpay } from './paymentMethodOptionsGrabpay';
import { PaymentMethodOptionsIdeal } from './paymentMethodOptionsIdeal';
import { PaymentMethodOptionsKlarna } from './paymentMethodOptionsKlarna';
import { PaymentMethodOptionsLink } from './paymentMethodOptionsLink';
import { PaymentMethodOptionsOxxo } from './paymentMethodOptionsOxxo';
import { PaymentMethodOptionsP24 } from './paymentMethodOptionsP24';
import { PaymentMethodOptionsPaynow } from './paymentMethodOptionsPaynow';
import { PaymentMethodOptionsPix } from './paymentMethodOptionsPix';
import { PaymentMethodOptionsPromptpay } from './paymentMethodOptionsPromptpay';
import { PaymentMethodOptionsSepaDebit } from './paymentMethodOptionsSepaDebit';
import { PaymentMethodOptionsSofort } from './paymentMethodOptionsSofort';
import { PaymentMethodOptionsUsBankAccount } from './paymentMethodOptionsUsBankAccount';
import { PaymentMethodOptionsWechatPay } from './paymentMethodOptionsWechatPay';
import { PaymentMethodP24 } from './paymentMethodP24';
import { PaymentMethodRadarOptions } from './paymentMethodRadarOptions';
import { PaymentMethodSepaDebit } from './paymentMethodSepaDebit';
import { PaymentMethodSepaDebitGeneratedFrom } from './paymentMethodSepaDebitGeneratedFrom';
import { PaymentMethodSofort } from './paymentMethodSofort';
import { PaymentMethodType } from './paymentMethodType';
import { PaymentMethodUsBankAccount } from './paymentMethodUsBankAccount';
import { PaymentMethodUsBankAccountNetworks } from './paymentMethodUsBankAccountNetworks';
import { PaymentSettingsPaymentMethodOptions } from './paymentSettingsPaymentMethodOptions';
import { PaymentSettingsPaymentMethodOptionsAcssDebit } from './paymentSettingsPaymentMethodOptionsAcssDebit';
import { PaymentSettingsPaymentMethodOptionsBancontact } from './paymentSettingsPaymentMethodOptionsBancontact';
import { PaymentSettingsPaymentMethodOptionsCard } from './paymentSettingsPaymentMethodOptionsCard';
import { PaymentSettingsPaymentMethodOptionsCustomerBalance } from './paymentSettingsPaymentMethodOptionsCustomerBalance';
import { PaymentSettingsPaymentMethodOptionsUsBankAccount } from './paymentSettingsPaymentMethodOptionsUsBankAccount';
import { PaymentSettingsPaymentMethodType } from './paymentSettingsPaymentMethodType';
import { PaymentSettingsSaveDefaultPaymentMethod } from './paymentSettingsSaveDefaultPaymentMethod';
import { PayoutType } from './payoutType';
import { PayoutsSchedule } from './payoutsSchedule';
import { PendingInvoiceItemIntervalInterval } from './pendingInvoiceItemIntervalInterval';
import { PendingRequestAmountDetails } from './pendingRequestAmountDetails';
import { PersonAddressKana } from './personAddressKana';
import { PersonAddressKanji } from './personAddressKanji';
import { PersonDob } from './personDob';
import { PersonFutureRequirements } from './personFutureRequirements';
import { PersonPoliticalExposure } from './personPoliticalExposure';
import { PersonRelationship } from './personRelationship';
import { PersonRequirements } from './personRequirements';
import { PersonVerification } from './personVerification';
import { PersonVerificationAdditionalDocument } from './personVerificationAdditionalDocument';
import { PhaseAddInvoiceItem } from './phaseAddInvoiceItem';
import { PhaseAddInvoiceItemPrice } from './phaseAddInvoiceItemPrice';
import { PhaseAutomaticTax } from './phaseAutomaticTax';
import { PhaseBillingCycleAnchor } from './phaseBillingCycleAnchor';
import { PhaseBillingThresholds } from './phaseBillingThresholds';
import { PhaseCollectionMethod } from './phaseCollectionMethod';
import { PhaseInvoiceSettings } from './phaseInvoiceSettings';
import { PhaseItem } from './phaseItem';
import { PhaseItemBillingThresholds } from './phaseItemBillingThresholds';
import { PhaseItemPlan } from './phaseItemPlan';
import { PhaseItemPrice } from './phaseItemPrice';
import { PhaseProrationBehavior } from './phaseProrationBehavior';
import { PhaseTransferData } from './phaseTransferData';
import { PlanAggregateUsage } from './planAggregateUsage';
import { PlanBillingScheme } from './planBillingScheme';
import { PlanInterval } from './planInterval';
import { PlanTier } from './planTier';
import { PlanTiersMode } from './planTiersMode';
import { PlanTransformUsage } from './planTransformUsage';
import { PlanUsageType } from './planUsageType';
import { PriceBillingScheme } from './priceBillingScheme';
import { PriceCurrencyOptions } from './priceCurrencyOptions';
import { PriceCurrencyOptionsCustomUnitAmount } from './priceCurrencyOptionsCustomUnitAmount';
import { PriceCustomUnitAmount } from './priceCustomUnitAmount';
import { PriceRecurring } from './priceRecurring';
import { PriceTaxBehavior } from './priceTaxBehavior';
import { PriceTier } from './priceTier';
import { PriceTiersMode } from './priceTiersMode';
import { PriceTransformQuantity } from './priceTransformQuantity';
import { PriceType } from './priceType';
import { ProcessingCard } from './processingCard';
import { ProductPackageDimensions } from './productPackageDimensions';
import { ProductType } from './productType';
import { PromotionCodeRestrictions } from './promotionCodeRestrictions';
import { ProrationDetailsCreditedItems } from './prorationDetailsCreditedItems';
import { PurchaseDetailsFlight } from './purchaseDetailsFlight';
import { PurchaseDetailsFuel } from './purchaseDetailsFuel';
import { PurchaseDetailsLodging } from './purchaseDetailsLodging';
import { PurchaseDetailsReceipt } from './purchaseDetailsReceipt';
import { QuoteAutomaticTax } from './quoteAutomaticTax';
import { QuoteCollectionMethod } from './quoteCollectionMethod';
import { QuoteComputed } from './quoteComputed';
import { QuoteComputedRecurring } from './quoteComputedRecurring';
import { QuoteFromQuote } from './quoteFromQuote';
import { QuoteFromQuoteQuote } from './quoteFromQuoteQuote';
import { QuoteInvoiceSettings } from './quoteInvoiceSettings';
import { QuoteStatus } from './quoteStatus';
import { QuoteStatusTransitions } from './quoteStatusTransitions';
import { QuoteSubscriptionData } from './quoteSubscriptionData';
import { QuoteTotalDetails } from './quoteTotalDetails';
import { QuoteTransferData } from './quoteTransferData';
import { ReceiptAccountType } from './receiptAccountType';
import { RecurringAggregateUsage } from './recurringAggregateUsage';
import { RecurringInterval } from './recurringInterval';
import { RecurringTotalDetails } from './recurringTotalDetails';
import { RecurringUsageType } from './recurringUsageType';
import { ReferralSummary } from './referralSummary';
import { RefundNextAction } from './refundNextAction';
import { RefundNextActionDisplayDetails } from './refundNextActionDisplayDetails';
import { RefundReason } from './refundReason';
import { RequestHistoryAmountDetails } from './requestHistoryAmountDetails';
import { RequestHistoryReason } from './requestHistoryReason';
import { RequirementsAlternative } from './requirementsAlternative';
import { RequirementsDisabledReason } from './requirementsDisabledReason';
import { RequirementsError } from './requirementsError';
import { RequirementsPastDue } from './requirementsPastDue';
import { ResourceAlreadyExistError } from './resourceAlreadyExistError';
import { ResourceNotFoundError } from './resourceNotFoundError';
import { RestrictionsCurrencyOptions } from './restrictionsCurrencyOptions';
import { ReviewClosedReason } from './reviewClosedReason';
import { ReviewIpAddressLocation } from './reviewIpAddressLocation';
import { ReviewOpenedReason } from './reviewOpenedReason';
import { ReviewSession } from './reviewSession';
import { SepaDebitGeneratedFrom } from './sepaDebitGeneratedFrom';
import { SepaDebitGeneratedFromCharge } from './sepaDebitGeneratedFromCharge';
import { SepaDebitGeneratedFromSetupAttempt } from './sepaDebitGeneratedFromSetupAttempt';
import { SettingsBacsDebitPayments } from './settingsBacsDebitPayments';
import { SettingsBranding } from './settingsBranding';
import { SettingsBrandingIcon } from './settingsBrandingIcon';
import { SettingsBrandingLogo } from './settingsBrandingLogo';
import { SettingsCardIssuing } from './settingsCardIssuing';
import { SettingsCardPayments } from './settingsCardPayments';
import { SettingsDashboard } from './settingsDashboard';
import { SettingsPayments } from './settingsPayments';
import { SettingsPayouts } from './settingsPayouts';
import { SettingsReconciliationMode } from './settingsReconciliationMode';
import { SettingsSepaDebitPayments } from './settingsSepaDebitPayments';
import { SettingsTreasury } from './settingsTreasury';
import { SetupAttemptFlowDirection } from './setupAttemptFlowDirection';
import { SetupAttemptPaymentMethodDetails } from './setupAttemptPaymentMethodDetails';
import { SetupAttemptSetupError } from './setupAttemptSetupError';
import { SetupErrorType } from './setupErrorType';
import { SetupIntentCancellationReason } from './setupIntentCancellationReason';
import { SetupIntentFlowDirection } from './setupIntentFlowDirection';
import { SetupIntentLastSetupError } from './setupIntentLastSetupError';
import { SetupIntentNextAction } from './setupIntentNextAction';
import { SetupIntentPaymentMethodOptions } from './setupIntentPaymentMethodOptions';
import { SetupIntentStatus } from './setupIntentStatus';
import { ShippingCarrier } from './shippingCarrier';
import { ShippingCustoms } from './shippingCustoms';
import { ShippingService } from './shippingService';
import { ShippingStatus } from './shippingStatus';
import { ShippingType } from './shippingType';
import { SofortPreferredLanguage } from './sofortPreferredLanguage';
import { SofortSetupFutureUsage } from './sofortSetupFutureUsage';
import { Source } from './source';
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
import { SourceOrderItem } from './sourceOrderItem';
import { SourceOrderShipping } from './sourceOrderShipping';
import { SourceOwner } from './sourceOwner';
import { SourceOwnerAddress } from './sourceOwnerAddress';
import { SourceOwnerVerifiedAddress } from './sourceOwnerVerifiedAddress';
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
import { SpendingControlsAllowedCategory } from './spendingControlsAllowedCategory';
import { SpendingControlsBlockedCategory } from './spendingControlsBlockedCategory';
import { SpendingControlsSpendingLimit } from './spendingControlsSpendingLimit';
import { SpendingLimitCategory } from './spendingLimitCategory';
import { SpendingLimitInterval } from './spendingLimitInterval';
import { StoreChain } from './storeChain';
import { StoresFamilymart } from './storesFamilymart';
import { StoresLawson } from './storesLawson';
import { StoresMinistop } from './storesMinistop';
import { StoresSeicomart } from './storesSeicomart';
import { StripeAccount } from './stripeAccount';
import { StripeAccountBusinessProfile } from './stripeAccountBusinessProfile';
import { StripeAccountSettings } from './stripeAccountSettings';
import { StripeAddress } from './stripeAddress';
import { StripeApplication } from './stripeApplication';
import { StripeApplicationFee } from './stripeApplicationFee';
import { StripeApplicationFeeAccount } from './stripeApplicationFeeAccount';
import { StripeApplicationFeeApplication } from './stripeApplicationFeeApplication';
import { StripeApplicationFeeBalanceTransaction } from './stripeApplicationFeeBalanceTransaction';
import { StripeApplicationFeeCharge } from './stripeApplicationFeeCharge';
import { StripeApplicationFeeOriginatingTransaction } from './stripeApplicationFeeOriginatingTransaction';
import { StripeBalanceTransaction } from './stripeBalanceTransaction';
import { StripeBalanceTransactionSource } from './stripeBalanceTransactionSource';
import { StripeBankAccount } from './stripeBankAccount';
import { StripeBankAccountAccount } from './stripeBankAccountAccount';
import { StripeBankAccountCustomer } from './stripeBankAccountCustomer';
import { StripeCard } from './stripeCard';
import { StripeCardAccount } from './stripeCardAccount';
import { StripeCardCustomer } from './stripeCardCustomer';
import { StripeCashBalance } from './stripeCashBalance';
import { StripeCharge } from './stripeCharge';
import { StripeChargeApplication } from './stripeChargeApplication';
import { StripeChargeApplicationFee } from './stripeChargeApplicationFee';
import { StripeChargeBalanceTransaction } from './stripeChargeBalanceTransaction';
import { StripeChargeCustomer } from './stripeChargeCustomer';
import { StripeChargeDestination } from './stripeChargeDestination';
import { StripeChargeDispute } from './stripeChargeDispute';
import { StripeChargeFailureBalanceTransaction } from './stripeChargeFailureBalanceTransaction';
import { StripeChargeFraudDetails } from './stripeChargeFraudDetails';
import { StripeChargeInvoice } from './stripeChargeInvoice';
import { StripeChargeOnBehalfOf } from './stripeChargeOnBehalfOf';
import { StripeChargeOutcome } from './stripeChargeOutcome';
import { StripeChargePaymentIntent } from './stripeChargePaymentIntent';
import { StripeChargePaymentMethodDetails } from './stripeChargePaymentMethodDetails';
import { StripeChargeRefunds } from './stripeChargeRefunds';
import { StripeChargeReview } from './stripeChargeReview';
import { StripeChargeShipping } from './stripeChargeShipping';
import { StripeChargeSource } from './stripeChargeSource';
import { StripeChargeSourceTransfer } from './stripeChargeSourceTransfer';
import { StripeChargeTransfer } from './stripeChargeTransfer';
import { StripeChargeTransferData } from './stripeChargeTransferData';
import { StripeConnectCollectionTransfer } from './stripeConnectCollectionTransfer';
import { StripeConnectCollectionTransferDestination } from './stripeConnectCollectionTransferDestination';
import { StripeCoupon } from './stripeCoupon';
import { StripeCustomer } from './stripeCustomer';
import { StripeCustomerAddress } from './stripeCustomerAddress';
import { StripeCustomerCashBalance } from './stripeCustomerCashBalance';
import { StripeCustomerDefaultSource } from './stripeCustomerDefaultSource';
import { StripeCustomerDiscount } from './stripeCustomerDiscount';
import { StripeCustomerShipping } from './stripeCustomerShipping';
import { StripeCustomerSource } from './stripeCustomerSource';
import { StripeCustomerTestClock } from './stripeCustomerTestClock';
import { StripeDeletedApplication } from './stripeDeletedApplication';
import { StripeDeletedBankAccount } from './stripeDeletedBankAccount';
import { StripeDeletedCard } from './stripeDeletedCard';
import { StripeDeletedCoupon } from './stripeDeletedCoupon';
import { StripeDeletedCustomer } from './stripeDeletedCustomer';
import { StripeDeletedDiscount } from './stripeDeletedDiscount';
import { StripeDeletedInvoice } from './stripeDeletedInvoice';
import { StripeDeletedPlan } from './stripeDeletedPlan';
import { StripeDeletedPrice } from './stripeDeletedPrice';
import { StripeDeletedProduct } from './stripeDeletedProduct';
import { StripeDeletedTaxId } from './stripeDeletedTaxId';
import { StripeDiscount } from './stripeDiscount';
import { StripeDiscountCustomer } from './stripeDiscountCustomer';
import { StripeDiscountPromotionCode } from './stripeDiscountPromotionCode';
import { StripeDispute } from './stripeDispute';
import { StripeDisputeCharge } from './stripeDisputeCharge';
import { StripeDisputePaymentIntent } from './stripeDisputePaymentIntent';
import { StripeFeeRefund } from './stripeFeeRefund';
import { StripeFeeRefundBalanceTransaction } from './stripeFeeRefundBalanceTransaction';
import { StripeFeeRefundFee } from './stripeFeeRefundFee';
import { StripeFile } from './stripeFile';
import { StripeFileLink } from './stripeFileLink';
import { StripeFileLinkFile } from './stripeFileLinkFile';
import { StripeFileLinks } from './stripeFileLinks';
import { StripeInvoice } from './stripeInvoice';
import { StripeInvoiceAccountTaxIdsInner } from './stripeInvoiceAccountTaxIdsInner';
import { StripeInvoiceApplication } from './stripeInvoiceApplication';
import { StripeInvoiceCharge } from './stripeInvoiceCharge';
import { StripeInvoiceCustomer } from './stripeInvoiceCustomer';
import { StripeInvoiceCustomerAddress } from './stripeInvoiceCustomerAddress';
import { StripeInvoiceCustomerShipping } from './stripeInvoiceCustomerShipping';
import { StripeInvoiceDefaultPaymentMethod } from './stripeInvoiceDefaultPaymentMethod';
import { StripeInvoiceDefaultSource } from './stripeInvoiceDefaultSource';
import { StripeInvoiceDiscount } from './stripeInvoiceDiscount';
import { StripeInvoiceDiscountsInner } from './stripeInvoiceDiscountsInner';
import { StripeInvoiceFromInvoice } from './stripeInvoiceFromInvoice';
import { StripeInvoiceLastFinalizationError } from './stripeInvoiceLastFinalizationError';
import { StripeInvoiceLatestRevision } from './stripeInvoiceLatestRevision';
import { StripeInvoiceLineItem } from './stripeInvoiceLineItem';
import { StripeInvoiceLineItemDiscountsInner } from './stripeInvoiceLineItemDiscountsInner';
import { StripeInvoiceLineItemPlan } from './stripeInvoiceLineItemPlan';
import { StripeInvoiceLineItemPrice } from './stripeInvoiceLineItemPrice';
import { StripeInvoiceLineItemProrationDetails } from './stripeInvoiceLineItemProrationDetails';
import { StripeInvoiceOnBehalfOf } from './stripeInvoiceOnBehalfOf';
import { StripeInvoicePaymentIntent } from './stripeInvoicePaymentIntent';
import { StripeInvoiceQuote } from './stripeInvoiceQuote';
import { StripeInvoiceRenderingOptions } from './stripeInvoiceRenderingOptions';
import { StripeInvoiceSubscription } from './stripeInvoiceSubscription';
import { StripeInvoiceTestClock } from './stripeInvoiceTestClock';
import { StripeInvoiceTransferData } from './stripeInvoiceTransferData';
import { StripeIssuingAuthorization } from './stripeIssuingAuthorization';
import { StripeIssuingAuthorizationAmountDetails } from './stripeIssuingAuthorizationAmountDetails';
import { StripeIssuingAuthorizationCardholder } from './stripeIssuingAuthorizationCardholder';
import { StripeIssuingAuthorizationNetworkData } from './stripeIssuingAuthorizationNetworkData';
import { StripeIssuingAuthorizationPendingRequest } from './stripeIssuingAuthorizationPendingRequest';
import { StripeIssuingAuthorizationTreasury } from './stripeIssuingAuthorizationTreasury';
import { StripeIssuingCard } from './stripeIssuingCard';
import { StripeIssuingCardReplacedBy } from './stripeIssuingCardReplacedBy';
import { StripeIssuingCardReplacementFor } from './stripeIssuingCardReplacementFor';
import { StripeIssuingCardShipping } from './stripeIssuingCardShipping';
import { StripeIssuingCardWallets } from './stripeIssuingCardWallets';
import { StripeIssuingCardholder } from './stripeIssuingCardholder';
import { StripeIssuingCardholderCompany } from './stripeIssuingCardholderCompany';
import { StripeIssuingCardholderIndividual } from './stripeIssuingCardholderIndividual';
import { StripeIssuingCardholderSpendingControls } from './stripeIssuingCardholderSpendingControls';
import { StripeIssuingDispute } from './stripeIssuingDispute';
import { StripeIssuingDisputeTransaction } from './stripeIssuingDisputeTransaction';
import { StripeIssuingDisputeTreasury } from './stripeIssuingDisputeTreasury';
import { StripeIssuingTransaction } from './stripeIssuingTransaction';
import { StripeIssuingTransactionAmountDetails } from './stripeIssuingTransactionAmountDetails';
import { StripeIssuingTransactionAuthorization } from './stripeIssuingTransactionAuthorization';
import { StripeIssuingTransactionBalanceTransaction } from './stripeIssuingTransactionBalanceTransaction';
import { StripeIssuingTransactionCard } from './stripeIssuingTransactionCard';
import { StripeIssuingTransactionCardholder } from './stripeIssuingTransactionCardholder';
import { StripeIssuingTransactionDispute } from './stripeIssuingTransactionDispute';
import { StripeIssuingTransactionPurchaseDetails } from './stripeIssuingTransactionPurchaseDetails';
import { StripeIssuingTransactionTreasury } from './stripeIssuingTransactionTreasury';
import { StripeLineItem } from './stripeLineItem';
import { StripeLineItemPrice } from './stripeLineItemPrice';
import { StripeMandate } from './stripeMandate';
import { StripeMandatePaymentMethod } from './stripeMandatePaymentMethod';
import { StripePaymentIntent } from './stripePaymentIntent';
import { StripePaymentIntentApplication } from './stripePaymentIntentApplication';
import { StripePaymentIntentAutomaticPaymentMethods } from './stripePaymentIntentAutomaticPaymentMethods';
import { StripePaymentIntentCustomer } from './stripePaymentIntentCustomer';
import { StripePaymentIntentInvoice } from './stripePaymentIntentInvoice';
import { StripePaymentIntentLastPaymentError } from './stripePaymentIntentLastPaymentError';
import { StripePaymentIntentLatestCharge } from './stripePaymentIntentLatestCharge';
import { StripePaymentIntentNextAction } from './stripePaymentIntentNextAction';
import { StripePaymentIntentOnBehalfOf } from './stripePaymentIntentOnBehalfOf';
import { StripePaymentIntentPaymentMethod } from './stripePaymentIntentPaymentMethod';
import { StripePaymentIntentPaymentMethodOptions } from './stripePaymentIntentPaymentMethodOptions';
import { StripePaymentIntentProcessing } from './stripePaymentIntentProcessing';
import { StripePaymentIntentReview } from './stripePaymentIntentReview';
import { StripePaymentIntentShipping } from './stripePaymentIntentShipping';
import { StripePaymentIntentSource } from './stripePaymentIntentSource';
import { StripePaymentIntentTransferData } from './stripePaymentIntentTransferData';
import { StripePaymentMethod } from './stripePaymentMethod';
import { StripePaymentMethodCustomer } from './stripePaymentMethodCustomer';
import { StripePayout } from './stripePayout';
import { StripePayoutBalanceTransaction } from './stripePayoutBalanceTransaction';
import { StripePayoutDestination } from './stripePayoutDestination';
import { StripePayoutFailureBalanceTransaction } from './stripePayoutFailureBalanceTransaction';
import { StripePayoutOriginalPayout } from './stripePayoutOriginalPayout';
import { StripePayoutReversedBy } from './stripePayoutReversedBy';
import { StripePerson } from './stripePerson';
import { StripePersonAddressKana } from './stripePersonAddressKana';
import { StripePersonAddressKanji } from './stripePersonAddressKanji';
import { StripePersonFutureRequirements } from './stripePersonFutureRequirements';
import { StripePersonRequirements } from './stripePersonRequirements';
import { StripePlan } from './stripePlan';
import { StripePlanProduct } from './stripePlanProduct';
import { StripePlanTransformUsage } from './stripePlanTransformUsage';
import { StripePlatformTaxFee } from './stripePlatformTaxFee';
import { StripePrice } from './stripePrice';
import { StripePriceCustomUnitAmount } from './stripePriceCustomUnitAmount';
import { StripePriceProduct } from './stripePriceProduct';
import { StripePriceRecurring } from './stripePriceRecurring';
import { StripePriceTransformQuantity } from './stripePriceTransformQuantity';
import { StripeProduct } from './stripeProduct';
import { StripeProductDefaultPrice } from './stripeProductDefaultPrice';
import { StripeProductPackageDimensions } from './stripeProductPackageDimensions';
import { StripeProductTaxCode } from './stripeProductTaxCode';
import { StripePromotionCode } from './stripePromotionCode';
import { StripePromotionCodeCustomer } from './stripePromotionCodeCustomer';
import { StripeQuote } from './stripeQuote';
import { StripeQuoteApplication } from './stripeQuoteApplication';
import { StripeQuoteCustomer } from './stripeQuoteCustomer';
import { StripeQuoteDefaultTaxRatesInner } from './stripeQuoteDefaultTaxRatesInner';
import { StripeQuoteFromQuote } from './stripeQuoteFromQuote';
import { StripeQuoteInvoice } from './stripeQuoteInvoice';
import { StripeQuoteInvoiceSettings } from './stripeQuoteInvoiceSettings';
import { StripeQuoteOnBehalfOf } from './stripeQuoteOnBehalfOf';
import { StripeQuoteSubscription } from './stripeQuoteSubscription';
import { StripeQuoteSubscriptionSchedule } from './stripeQuoteSubscriptionSchedule';
import { StripeQuoteTestClock } from './stripeQuoteTestClock';
import { StripeQuoteTransferData } from './stripeQuoteTransferData';
import { StripeRefund } from './stripeRefund';
import { StripeRefundCharge } from './stripeRefundCharge';
import { StripeRefundFailureBalanceTransaction } from './stripeRefundFailureBalanceTransaction';
import { StripeRefundPaymentIntent } from './stripeRefundPaymentIntent';
import { StripeRefundSourceTransferReversal } from './stripeRefundSourceTransferReversal';
import { StripeRefundTransferReversal } from './stripeRefundTransferReversal';
import { StripeReserveTransaction } from './stripeReserveTransaction';
import { StripeReview } from './stripeReview';
import { StripeReviewCharge } from './stripeReviewCharge';
import { StripeReviewIpAddressLocation } from './stripeReviewIpAddressLocation';
import { StripeReviewPaymentIntent } from './stripeReviewPaymentIntent';
import { StripeReviewSession } from './stripeReviewSession';
import { StripeSetupAttempt } from './stripeSetupAttempt';
import { StripeSetupAttemptApplication } from './stripeSetupAttemptApplication';
import { StripeSetupAttemptCustomer } from './stripeSetupAttemptCustomer';
import { StripeSetupAttemptOnBehalfOf } from './stripeSetupAttemptOnBehalfOf';
import { StripeSetupAttemptPaymentMethod } from './stripeSetupAttemptPaymentMethod';
import { StripeSetupAttemptSetupError } from './stripeSetupAttemptSetupError';
import { StripeSetupAttemptSetupIntent } from './stripeSetupAttemptSetupIntent';
import { StripeSetupIntent } from './stripeSetupIntent';
import { StripeSetupIntentApplication } from './stripeSetupIntentApplication';
import { StripeSetupIntentCustomer } from './stripeSetupIntentCustomer';
import { StripeSetupIntentLastSetupError } from './stripeSetupIntentLastSetupError';
import { StripeSetupIntentLatestAttempt } from './stripeSetupIntentLatestAttempt';
import { StripeSetupIntentMandate } from './stripeSetupIntentMandate';
import { StripeSetupIntentNextAction } from './stripeSetupIntentNextAction';
import { StripeSetupIntentOnBehalfOf } from './stripeSetupIntentOnBehalfOf';
import { StripeSetupIntentPaymentMethod } from './stripeSetupIntentPaymentMethod';
import { StripeSetupIntentPaymentMethodOptions } from './stripeSetupIntentPaymentMethodOptions';
import { StripeSetupIntentSingleUseMandate } from './stripeSetupIntentSingleUseMandate';
import { StripeSource } from './stripeSource';
import { StripeSubscription } from './stripeSubscription';
import { StripeSubscriptionApplication } from './stripeSubscriptionApplication';
import { StripeSubscriptionBillingThresholds } from './stripeSubscriptionBillingThresholds';
import { StripeSubscriptionCustomer } from './stripeSubscriptionCustomer';
import { StripeSubscriptionDefaultPaymentMethod } from './stripeSubscriptionDefaultPaymentMethod';
import { StripeSubscriptionDefaultSource } from './stripeSubscriptionDefaultSource';
import { StripeSubscriptionDiscount } from './stripeSubscriptionDiscount';
import { StripeSubscriptionItem } from './stripeSubscriptionItem';
import { StripeSubscriptionItemBillingThresholds } from './stripeSubscriptionItemBillingThresholds';
import { StripeSubscriptionLatestInvoice } from './stripeSubscriptionLatestInvoice';
import { StripeSubscriptionOnBehalfOf } from './stripeSubscriptionOnBehalfOf';
import { StripeSubscriptionPauseCollection } from './stripeSubscriptionPauseCollection';
import { StripeSubscriptionPaymentSettings } from './stripeSubscriptionPaymentSettings';
import { StripeSubscriptionPendingInvoiceItemInterval } from './stripeSubscriptionPendingInvoiceItemInterval';
import { StripeSubscriptionPendingSetupIntent } from './stripeSubscriptionPendingSetupIntent';
import { StripeSubscriptionPendingUpdate } from './stripeSubscriptionPendingUpdate';
import { StripeSubscriptionSchedule } from './stripeSubscriptionSchedule';
import { StripeSubscriptionScheduleApplication } from './stripeSubscriptionScheduleApplication';
import { StripeSubscriptionScheduleCurrentPhase } from './stripeSubscriptionScheduleCurrentPhase';
import { StripeSubscriptionScheduleCustomer } from './stripeSubscriptionScheduleCustomer';
import { StripeSubscriptionScheduleSubscription } from './stripeSubscriptionScheduleSubscription';
import { StripeSubscriptionScheduleTestClock } from './stripeSubscriptionScheduleTestClock';
import { StripeSubscriptionTestClock } from './stripeSubscriptionTestClock';
import { StripeSubscriptionTransferData } from './stripeSubscriptionTransferData';
import { StripeTaxCode } from './stripeTaxCode';
import { StripeTaxDeductedAtSource } from './stripeTaxDeductedAtSource';
import { StripeTaxId } from './stripeTaxId';
import { StripeTaxIdCustomer } from './stripeTaxIdCustomer';
import { StripeTaxIdVerification } from './stripeTaxIdVerification';
import { StripeTaxRate } from './stripeTaxRate';
import { StripeTestHelpersTestClock } from './stripeTestHelpersTestClock';
import { StripeTopup } from './stripeTopup';
import { StripeTopupBalanceTransaction } from './stripeTopupBalanceTransaction';
import { StripeTopupSource } from './stripeTopupSource';
import { StripeTransfer } from './stripeTransfer';
import { StripeTransferBalanceTransaction } from './stripeTransferBalanceTransaction';
import { StripeTransferDestination } from './stripeTransferDestination';
import { StripeTransferDestinationPayment } from './stripeTransferDestinationPayment';
import { StripeTransferReversal } from './stripeTransferReversal';
import { StripeTransferReversalDestinationPaymentRefund } from './stripeTransferReversalDestinationPaymentRefund';
import { StripeTransferReversalSourceRefund } from './stripeTransferReversalSourceRefund';
import { StripeTransferReversalTransfer } from './stripeTransferReversalTransfer';
import { StripeTransferSourceTransaction } from './stripeTransferSourceTransaction';
import { SubscriptionAutomaticTax } from './subscriptionAutomaticTax';
import { SubscriptionBillingThresholds } from './subscriptionBillingThresholds';
import { SubscriptionCollectionMethod } from './subscriptionCollectionMethod';
import { SubscriptionItemBillingThresholds } from './subscriptionItemBillingThresholds';
import { SubscriptionPauseCollection } from './subscriptionPauseCollection';
import { SubscriptionPaymentSettings } from './subscriptionPaymentSettings';
import { SubscriptionPaymentSettingsPaymentMethodOptions } from './subscriptionPaymentSettingsPaymentMethodOptions';
import { SubscriptionPendingInvoiceItemInterval } from './subscriptionPendingInvoiceItemInterval';
import { SubscriptionPendingUpdate } from './subscriptionPendingUpdate';
import { SubscriptionScheduleCurrentPhase } from './subscriptionScheduleCurrentPhase';
import { SubscriptionScheduleDefaultSettings } from './subscriptionScheduleDefaultSettings';
import { SubscriptionScheduleDefaultSettingsBillingThresholds } from './subscriptionScheduleDefaultSettingsBillingThresholds';
import { SubscriptionScheduleDefaultSettingsDefaultPaymentMethod } from './subscriptionScheduleDefaultSettingsDefaultPaymentMethod';
import { SubscriptionScheduleDefaultSettingsInvoiceSettings } from './subscriptionScheduleDefaultSettingsInvoiceSettings';
import { SubscriptionScheduleDefaultSettingsOnBehalfOf } from './subscriptionScheduleDefaultSettingsOnBehalfOf';
import { SubscriptionScheduleDefaultSettingsTransferData } from './subscriptionScheduleDefaultSettingsTransferData';
import { SubscriptionScheduleEndBehavior } from './subscriptionScheduleEndBehavior';
import { SubscriptionSchedulePhase } from './subscriptionSchedulePhase';
import { SubscriptionSchedulePhaseBillingThresholds } from './subscriptionSchedulePhaseBillingThresholds';
import { SubscriptionSchedulePhaseCoupon } from './subscriptionSchedulePhaseCoupon';
import { SubscriptionSchedulePhaseDefaultPaymentMethod } from './subscriptionSchedulePhaseDefaultPaymentMethod';
import { SubscriptionSchedulePhaseInvoiceSettings } from './subscriptionSchedulePhaseInvoiceSettings';
import { SubscriptionSchedulePhaseTransferData } from './subscriptionSchedulePhaseTransferData';
import { SubscriptionScheduleStatus } from './subscriptionScheduleStatus';
import { SubscriptionStatus } from './subscriptionStatus';
import { SubscriptionTransferData } from './subscriptionTransferData';
import { TaxAutomaticTax } from './taxAutomaticTax';
import { TaxIdType } from './taxIdType';
import { TaxIdVerification } from './taxIdVerification';
import { TaxLocation } from './taxLocation';
import { TaxRateTaxType } from './taxRateTaxType';
import { TestClockStatus } from './testClockStatus';
import { ThresholdReasonItemReason } from './thresholdReasonItemReason';
import { TopupStatus } from './topupStatus';
import { TotalDetailsBreakdown } from './totalDetailsBreakdown';
import { TransactionAmountDetails } from './transactionAmountDetails';
import { TransactionMerchantData } from './transactionMerchantData';
import { TransactionPurchaseDetails } from './transactionPurchaseDetails';
import { TransactionPurchaseDetailsFlight } from './transactionPurchaseDetailsFlight';
import { TransactionPurchaseDetailsFuel } from './transactionPurchaseDetailsFuel';
import { TransactionPurchaseDetailsLodging } from './transactionPurchaseDetailsLodging';
import { TransactionTreasury } from './transactionTreasury';
import { TransactionType } from './transactionType';
import { TransactionWallet } from './transactionWallet';
import { TransformQuantityRound } from './transformQuantityRound';
import { TransformUsageRound } from './transformUsageRound';
import { TreasuryTosAcceptance } from './treasuryTosAcceptance';
import { UpfrontTotalDetails } from './upfrontTotalDetails';
import { UsBankAccountAccountHolderType } from './usBankAccountAccountHolderType';
import { UsBankAccountAccountType } from './usBankAccountAccountType';
import { UsBankAccountFinancialConnections } from './usBankAccountFinancialConnections';
import { UsBankAccountNetworks } from './usBankAccountNetworks';
import { UsBankAccountVerificationMethod } from './usBankAccountVerificationMethod';
import { User } from './user';
import { ValidationError } from './validationError';
import { VerificationAdditionalDocument } from './verificationAdditionalDocument';
import { VerificationAdditionalDocumentBack } from './verificationAdditionalDocumentBack';
import { VerificationAdditionalDocumentFront } from './verificationAdditionalDocumentFront';
import { VerificationDataAddressLine1Check } from './verificationDataAddressLine1Check';
import { VerificationDataAddressPostalCodeCheck } from './verificationDataAddressPostalCodeCheck';
import { VerificationDataCvcCheck } from './verificationDataCvcCheck';
import { VerificationDataExpiryCheck } from './verificationDataExpiryCheck';
import { VerificationDocument } from './verificationDocument';
import { VerificationDocumentBack } from './verificationDocumentBack';
import { VerificationDocumentFront } from './verificationDocumentFront';
import { VerificationStatus } from './verificationStatus';
import { VerifyWithMicrodepositsMicrodepositType } from './verifyWithMicrodepositsMicrodepositType';
import { WalletMasterpass } from './walletMasterpass';
import { WalletMasterpassBillingAddress } from './walletMasterpassBillingAddress';
import { WalletMasterpassShippingAddress } from './walletMasterpassShippingAddress';
import { WalletType } from './walletType';
import { WalletVisaCheckout } from './walletVisaCheckout';
import { WalletsApplePay } from './walletsApplePay';
import { WalletsGooglePay } from './walletsGooglePay';
import { WechatPayClient } from './wechatPayClient';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountBusinessType": AccountBusinessType,
        "AccountDebitSource.ObjectEnum": AccountDebitSource.ObjectEnum,
        "AccountType": AccountType,
        "AchDebitAccountHolderType": AchDebitAccountHolderType,
        "AcssDebitCurrency": AcssDebitCurrency,
        "AcssDebitVerificationMethod": AcssDebitVerificationMethod,
        "AlipaySetupFutureUsage": AlipaySetupFutureUsage,
        "ApiListStripeBankAccountOrStripeCard.ObjectEnum": ApiListStripeBankAccountOrStripeCard.ObjectEnum,
        "ApiListStripeBankAccountOrStripeCardDataInner.ObjectEnum": ApiListStripeBankAccountOrStripeCardDataInner.ObjectEnum,
        "ApiListStripeCustomerSource.ObjectEnum": ApiListStripeCustomerSource.ObjectEnum,
        "ApiListStripeFeeRefund.ObjectEnum": ApiListStripeFeeRefund.ObjectEnum,
        "ApiListStripeFileLink.ObjectEnum": ApiListStripeFileLink.ObjectEnum,
        "ApiListStripeInvoiceLineItem.ObjectEnum": ApiListStripeInvoiceLineItem.ObjectEnum,
        "ApiListStripeLineItem.ObjectEnum": ApiListStripeLineItem.ObjectEnum,
        "ApiListStripeRefund.ObjectEnum": ApiListStripeRefund.ObjectEnum,
        "ApiListStripeSubscription.ObjectEnum": ApiListStripeSubscription.ObjectEnum,
        "ApiListStripeSubscriptionItem.ObjectEnum": ApiListStripeSubscriptionItem.ObjectEnum,
        "ApiListStripeTaxId.ObjectEnum": ApiListStripeTaxId.ObjectEnum,
        "ApiListStripeTransferReversal.ObjectEnum": ApiListStripeTransferReversal.ObjectEnum,
        "ApplePayIneligibleReason": ApplePayIneligibleReason,
        "AuBecsDebitSetupFutureUsage": AuBecsDebitSetupFutureUsage,
        "AuthorizationAuthorizationMethod": AuthorizationAuthorizationMethod,
        "AuthorizationStatus": AuthorizationStatus,
        "AutomaticTaxStatus": AutomaticTaxStatus,
        "BacsDebitSetupFutureUsage": BacsDebitSetupFutureUsage,
        "BalanceTransactionType": BalanceTransactionType,
        "BancontactPreferredLanguage": BancontactPreferredLanguage,
        "BankAccount.ObjectEnum": BankAccount.ObjectEnum,
        "BankAccountAvailablePayoutMethod": BankAccountAvailablePayoutMethod,
        "BlikType": BlikType,
        "BoletoSetupFutureUsage": BoletoSetupFutureUsage,
        "CapabilitiesAcssDebitPayments": CapabilitiesAcssDebitPayments,
        "CapabilitiesAffirmPayments": CapabilitiesAffirmPayments,
        "CapabilitiesAfterpayClearpayPayments": CapabilitiesAfterpayClearpayPayments,
        "CapabilitiesAuBecsDebitPayments": CapabilitiesAuBecsDebitPayments,
        "CapabilitiesBacsDebitPayments": CapabilitiesBacsDebitPayments,
        "CapabilitiesBancontactPayments": CapabilitiesBancontactPayments,
        "CapabilitiesBankTransferPayments": CapabilitiesBankTransferPayments,
        "CapabilitiesBlikPayments": CapabilitiesBlikPayments,
        "CapabilitiesBoletoPayments": CapabilitiesBoletoPayments,
        "CapabilitiesCardIssuing": CapabilitiesCardIssuing,
        "CapabilitiesCardPayments": CapabilitiesCardPayments,
        "CapabilitiesCartesBancairesPayments": CapabilitiesCartesBancairesPayments,
        "CapabilitiesEpsPayments": CapabilitiesEpsPayments,
        "CapabilitiesFpxPayments": CapabilitiesFpxPayments,
        "CapabilitiesGiropayPayments": CapabilitiesGiropayPayments,
        "CapabilitiesGrabpayPayments": CapabilitiesGrabpayPayments,
        "CapabilitiesIdealPayments": CapabilitiesIdealPayments,
        "CapabilitiesIndiaInternationalPayments": CapabilitiesIndiaInternationalPayments,
        "CapabilitiesJcbPayments": CapabilitiesJcbPayments,
        "CapabilitiesKlarnaPayments": CapabilitiesKlarnaPayments,
        "CapabilitiesKonbiniPayments": CapabilitiesKonbiniPayments,
        "CapabilitiesLegacyPayments": CapabilitiesLegacyPayments,
        "CapabilitiesLinkPayments": CapabilitiesLinkPayments,
        "CapabilitiesOxxoPayments": CapabilitiesOxxoPayments,
        "CapabilitiesP24Payments": CapabilitiesP24Payments,
        "CapabilitiesPaynowPayments": CapabilitiesPaynowPayments,
        "CapabilitiesPromptpayPayments": CapabilitiesPromptpayPayments,
        "CapabilitiesSepaDebitPayments": CapabilitiesSepaDebitPayments,
        "CapabilitiesSofortPayments": CapabilitiesSofortPayments,
        "CapabilitiesTaxReportingUs1099K": CapabilitiesTaxReportingUs1099K,
        "CapabilitiesTaxReportingUs1099Misc": CapabilitiesTaxReportingUs1099Misc,
        "CapabilitiesTransfers": CapabilitiesTransfers,
        "CapabilitiesTreasury": CapabilitiesTreasury,
        "CapabilitiesUsBankAccountAchPayments": CapabilitiesUsBankAccountAchPayments,
        "Card.ObjectEnum": Card.ObjectEnum,
        "CardAvailablePayoutMethod": CardAvailablePayoutMethod,
        "CardCancellationReason": CardCancellationReason,
        "CardMandateOptions.SupportedTypesEnum": CardMandateOptions.SupportedTypesEnum,
        "CardNetwork": CardNetwork,
        "CardReplacementReason": CardReplacementReason,
        "CardRequestThreeDSecure": CardRequestThreeDSecure,
        "CardStatus": CardStatus,
        "CardType": CardType,
        "CardholderStatus": CardholderStatus,
        "CardholderType": CardholderType,
        "ChargeStatus": ChargeStatus,
        "ChargeTransferDataDestination.ObjectEnum": ChargeTransferDataDestination.ObjectEnum,
        "CompanyStructure": CompanyStructure,
        "ControllerType": ControllerType,
        "CouponDuration": CouponDuration,
        "CurrencyOptionsTaxBehavior": CurrencyOptionsTaxBehavior,
        "CustomerAcceptanceType": CustomerAcceptanceType,
        "CustomerInvoiceSettingsDefaultPaymentMethod.ObjectEnum": CustomerInvoiceSettingsDefaultPaymentMethod.ObjectEnum,
        "CustomerTaxExempt": CustomerTaxExempt,
        "CustomerTaxIdType": CustomerTaxIdType,
        "DefaultSettingsBillingCycleAnchor": DefaultSettingsBillingCycleAnchor,
        "DefaultSettingsCollectionMethod": DefaultSettingsCollectionMethod,
        "DefaultSettingsTransferDataDestination.ObjectEnum": DefaultSettingsTransferDataDestination.ObjectEnum,
        "DisplayBankTransferInstructionsType": DisplayBankTransferInstructionsType,
        "DisputeEvidenceCancellationPolicy.ObjectEnum": DisputeEvidenceCancellationPolicy.ObjectEnum,
        "DisputeEvidenceCustomerCommunication.ObjectEnum": DisputeEvidenceCustomerCommunication.ObjectEnum,
        "DisputeEvidenceCustomerSignature.ObjectEnum": DisputeEvidenceCustomerSignature.ObjectEnum,
        "DisputeEvidenceDuplicateChargeDocumentation.ObjectEnum": DisputeEvidenceDuplicateChargeDocumentation.ObjectEnum,
        "DisputeEvidenceReceipt.ObjectEnum": DisputeEvidenceReceipt.ObjectEnum,
        "DisputeEvidenceRefundPolicy.ObjectEnum": DisputeEvidenceRefundPolicy.ObjectEnum,
        "DisputeEvidenceServiceDocumentation.ObjectEnum": DisputeEvidenceServiceDocumentation.ObjectEnum,
        "DisputeEvidenceShippingDocumentation.ObjectEnum": DisputeEvidenceShippingDocumentation.ObjectEnum,
        "DisputeEvidenceUncategorizedFile.ObjectEnum": DisputeEvidenceUncategorizedFile.ObjectEnum,
        "DisputeStatus": DisputeStatus,
        "EpsBank": EpsBank,
        "ErrorCode": ErrorCode,
        "EuBankTransferCountry": EuBankTransferCountry,
        "FilePurpose": FilePurpose,
        "FinancialAddressSupportedNetwork": FinancialAddressSupportedNetwork,
        "FinancialAddressType": FinancialAddressType,
        "FinancialConnectionsPermission": FinancialConnectionsPermission,
        "FpxAccountHolderType": FpxAccountHolderType,
        "FpxBank": FpxBank,
        "GooglePayIneligibleReason": GooglePayIneligibleReason,
        "IdealBank": IdealBank,
        "IdealBic": IdealBic,
        "IdealSetupFutureUsage": IdealSetupFutureUsage,
        "InteracPresentReadMethod": InteracPresentReadMethod,
        "InvoiceBillingReason": InvoiceBillingReason,
        "InvoiceCollectionMethod": InvoiceCollectionMethod,
        "InvoiceCustomerTaxExempt": InvoiceCustomerTaxExempt,
        "InvoiceFromInvoiceInvoice.ObjectEnum": InvoiceFromInvoiceInvoice.ObjectEnum,
        "InvoiceLineItemDiscountAmountDiscount.ObjectEnum": InvoiceLineItemDiscountAmountDiscount.ObjectEnum,
        "InvoiceLineItemDiscountAmountDiscount.DeletedEnum": InvoiceLineItemDiscountAmountDiscount.DeletedEnum,
        "InvoiceLineItemTaxAmountTaxRate.ObjectEnum": InvoiceLineItemTaxAmountTaxRate.ObjectEnum,
        "InvoiceLineItemType": InvoiceLineItemType,
        "InvoiceStatus": InvoiceStatus,
        "LastFinalizationErrorType": LastFinalizationErrorType,
        "LastPaymentErrorType": LastPaymentErrorType,
        "LastSetupErrorType": LastSetupErrorType,
        "LocationSource": LocationSource,
        "MandateOptionsAmountType": MandateOptionsAmountType,
        "MandateOptionsDefaultFor": MandateOptionsDefaultFor,
        "MandateOptionsInterval": MandateOptionsInterval,
        "MandateOptionsPaymentSchedule": MandateOptionsPaymentSchedule,
        "MandateOptionsTransactionType": MandateOptionsTransactionType,
        "MandateOptionsType": MandateOptionsType,
        "MandateStatus": MandateStatus,
        "MandateType": MandateType,
        "NetworksSupported": NetworksSupported,
        "OffSessionInterval": OffSessionInterval,
        "P24Bank": P24Bank,
        "PauseCollectionBehavior": PauseCollectionBehavior,
        "PaymentIntentCancellationReason": PaymentIntentCancellationReason,
        "PaymentIntentCaptureMethod": PaymentIntentCaptureMethod,
        "PaymentIntentConfirmationMethod": PaymentIntentConfirmationMethod,
        "PaymentIntentProcessing.TypeEnum": PaymentIntentProcessing.TypeEnum,
        "PaymentIntentSetupFutureUsage": PaymentIntentSetupFutureUsage,
        "PaymentIntentStatus": PaymentIntentStatus,
        "PaymentIntentTransferDataDestination.ObjectEnum": PaymentIntentTransferDataDestination.ObjectEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum": PaymentMethodDetailsBancontactGeneratedSepaDebit.ObjectEnum,
        "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate.ObjectEnum,
        "PaymentMethodDetailsCardPresentGeneratedCard.ObjectEnum": PaymentMethodDetailsCardPresentGeneratedCard.ObjectEnum,
        "PaymentMethodOptionsAffirm.CaptureMethodEnum": PaymentMethodOptionsAffirm.CaptureMethodEnum,
        "PaymentMethodOptionsAffirm.SetupFutureUsageEnum": PaymentMethodOptionsAffirm.SetupFutureUsageEnum,
        "PaymentMethodOptionsAfterpayClearpay.CaptureMethodEnum": PaymentMethodOptionsAfterpayClearpay.CaptureMethodEnum,
        "PaymentMethodOptionsAfterpayClearpay.SetupFutureUsageEnum": PaymentMethodOptionsAfterpayClearpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum": PaymentMethodOptionsCardMandateOptions.SupportedTypesEnum,
        "PaymentMethodOptionsCustomerBalance.FundingTypeEnum": PaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "PaymentMethodOptionsEps.SetupFutureUsageEnum": PaymentMethodOptionsEps.SetupFutureUsageEnum,
        "PaymentMethodOptionsFpx.SetupFutureUsageEnum": PaymentMethodOptionsFpx.SetupFutureUsageEnum,
        "PaymentMethodOptionsGiropay.SetupFutureUsageEnum": PaymentMethodOptionsGiropay.SetupFutureUsageEnum,
        "PaymentMethodOptionsGrabpay.SetupFutureUsageEnum": PaymentMethodOptionsGrabpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsKlarna.CaptureMethodEnum": PaymentMethodOptionsKlarna.CaptureMethodEnum,
        "PaymentMethodOptionsKlarna.SetupFutureUsageEnum": PaymentMethodOptionsKlarna.SetupFutureUsageEnum,
        "PaymentMethodOptionsOxxo.SetupFutureUsageEnum": PaymentMethodOptionsOxxo.SetupFutureUsageEnum,
        "PaymentMethodOptionsP24.SetupFutureUsageEnum": PaymentMethodOptionsP24.SetupFutureUsageEnum,
        "PaymentMethodOptionsPaynow.SetupFutureUsageEnum": PaymentMethodOptionsPaynow.SetupFutureUsageEnum,
        "PaymentMethodOptionsPix.SetupFutureUsageEnum": PaymentMethodOptionsPix.SetupFutureUsageEnum,
        "PaymentMethodOptionsPromptpay.SetupFutureUsageEnum": PaymentMethodOptionsPromptpay.SetupFutureUsageEnum,
        "PaymentMethodOptionsWechatPay.SetupFutureUsageEnum": PaymentMethodOptionsWechatPay.SetupFutureUsageEnum,
        "PaymentMethodType": PaymentMethodType,
        "PaymentSettingsPaymentMethodOptionsCustomerBalance.FundingTypeEnum": PaymentSettingsPaymentMethodOptionsCustomerBalance.FundingTypeEnum,
        "PaymentSettingsPaymentMethodType": PaymentSettingsPaymentMethodType,
        "PaymentSettingsSaveDefaultPaymentMethod": PaymentSettingsSaveDefaultPaymentMethod,
        "PayoutType": PayoutType,
        "PendingInvoiceItemIntervalInterval": PendingInvoiceItemIntervalInterval,
        "PersonPoliticalExposure": PersonPoliticalExposure,
        "PhaseAddInvoiceItemPrice.ObjectEnum": PhaseAddInvoiceItemPrice.ObjectEnum,
        "PhaseAddInvoiceItemPrice.DeletedEnum": PhaseAddInvoiceItemPrice.DeletedEnum,
        "PhaseBillingCycleAnchor": PhaseBillingCycleAnchor,
        "PhaseCollectionMethod": PhaseCollectionMethod,
        "PhaseItemPlan.ObjectEnum": PhaseItemPlan.ObjectEnum,
        "PhaseItemPlan.DeletedEnum": PhaseItemPlan.DeletedEnum,
        "PhaseItemPrice.ObjectEnum": PhaseItemPrice.ObjectEnum,
        "PhaseItemPrice.DeletedEnum": PhaseItemPrice.DeletedEnum,
        "PhaseProrationBehavior": PhaseProrationBehavior,
        "PlanAggregateUsage": PlanAggregateUsage,
        "PlanBillingScheme": PlanBillingScheme,
        "PlanInterval": PlanInterval,
        "PlanTiersMode": PlanTiersMode,
        "PlanUsageType": PlanUsageType,
        "PriceBillingScheme": PriceBillingScheme,
        "PriceTaxBehavior": PriceTaxBehavior,
        "PriceTiersMode": PriceTiersMode,
        "PriceType": PriceType,
        "ProductType": ProductType,
        "QuoteCollectionMethod": QuoteCollectionMethod,
        "QuoteFromQuoteQuote.ObjectEnum": QuoteFromQuoteQuote.ObjectEnum,
        "QuoteStatus": QuoteStatus,
        "ReceiptAccountType": ReceiptAccountType,
        "RecurringAggregateUsage": RecurringAggregateUsage,
        "RecurringInterval": RecurringInterval,
        "RecurringUsageType": RecurringUsageType,
        "RefundReason": RefundReason,
        "RequestHistoryReason": RequestHistoryReason,
        "RequirementsDisabledReason": RequirementsDisabledReason,
        "RequirementsPastDue": RequirementsPastDue,
        "ReviewClosedReason": ReviewClosedReason,
        "ReviewOpenedReason": ReviewOpenedReason,
        "SepaDebitGeneratedFromCharge.ObjectEnum": SepaDebitGeneratedFromCharge.ObjectEnum,
        "SepaDebitGeneratedFromSetupAttempt.ObjectEnum": SepaDebitGeneratedFromSetupAttempt.ObjectEnum,
        "SettingsBrandingIcon.ObjectEnum": SettingsBrandingIcon.ObjectEnum,
        "SettingsBrandingLogo.ObjectEnum": SettingsBrandingLogo.ObjectEnum,
        "SettingsReconciliationMode": SettingsReconciliationMode,
        "SetupAttemptFlowDirection": SetupAttemptFlowDirection,
        "SetupErrorType": SetupErrorType,
        "SetupIntentCancellationReason": SetupIntentCancellationReason,
        "SetupIntentFlowDirection": SetupIntentFlowDirection,
        "SetupIntentStatus": SetupIntentStatus,
        "ShippingCarrier": ShippingCarrier,
        "ShippingService": ShippingService,
        "ShippingStatus": ShippingStatus,
        "ShippingType": ShippingType,
        "SofortPreferredLanguage": SofortPreferredLanguage,
        "SofortSetupFutureUsage": SofortSetupFutureUsage,
        "Source.ObjectEnum": Source.ObjectEnum,
        "SourceType": SourceType,
        "SpendingControlsAllowedCategory": SpendingControlsAllowedCategory,
        "SpendingControlsBlockedCategory": SpendingControlsBlockedCategory,
        "SpendingLimitCategory": SpendingLimitCategory,
        "SpendingLimitInterval": SpendingLimitInterval,
        "StoreChain": StoreChain,
        "StripeAccount.ObjectEnum": StripeAccount.ObjectEnum,
        "StripeApplication.ObjectEnum": StripeApplication.ObjectEnum,
        "StripeApplicationFee.ObjectEnum": StripeApplicationFee.ObjectEnum,
        "StripeApplicationFeeAccount.ObjectEnum": StripeApplicationFeeAccount.ObjectEnum,
        "StripeApplicationFeeApplication.ObjectEnum": StripeApplicationFeeApplication.ObjectEnum,
        "StripeApplicationFeeBalanceTransaction.ObjectEnum": StripeApplicationFeeBalanceTransaction.ObjectEnum,
        "StripeApplicationFeeCharge.ObjectEnum": StripeApplicationFeeCharge.ObjectEnum,
        "StripeApplicationFeeOriginatingTransaction.ObjectEnum": StripeApplicationFeeOriginatingTransaction.ObjectEnum,
        "StripeBalanceTransaction.ObjectEnum": StripeBalanceTransaction.ObjectEnum,
        "StripeBalanceTransactionSource.ObjectEnum": StripeBalanceTransactionSource.ObjectEnum,
        "StripeBankAccount.ObjectEnum": StripeBankAccount.ObjectEnum,
        "StripeBankAccountAccount.ObjectEnum": StripeBankAccountAccount.ObjectEnum,
        "StripeBankAccountCustomer.ObjectEnum": StripeBankAccountCustomer.ObjectEnum,
        "StripeBankAccountCustomer.DeletedEnum": StripeBankAccountCustomer.DeletedEnum,
        "StripeCard.ObjectEnum": StripeCard.ObjectEnum,
        "StripeCardAccount.ObjectEnum": StripeCardAccount.ObjectEnum,
        "StripeCardCustomer.ObjectEnum": StripeCardCustomer.ObjectEnum,
        "StripeCardCustomer.DeletedEnum": StripeCardCustomer.DeletedEnum,
        "StripeCashBalance.ObjectEnum": StripeCashBalance.ObjectEnum,
        "StripeCharge.ObjectEnum": StripeCharge.ObjectEnum,
        "StripeChargeApplication.ObjectEnum": StripeChargeApplication.ObjectEnum,
        "StripeChargeApplicationFee.ObjectEnum": StripeChargeApplicationFee.ObjectEnum,
        "StripeChargeBalanceTransaction.ObjectEnum": StripeChargeBalanceTransaction.ObjectEnum,
        "StripeChargeCustomer.ObjectEnum": StripeChargeCustomer.ObjectEnum,
        "StripeChargeCustomer.DeletedEnum": StripeChargeCustomer.DeletedEnum,
        "StripeChargeDestination.ObjectEnum": StripeChargeDestination.ObjectEnum,
        "StripeChargeDispute.ObjectEnum": StripeChargeDispute.ObjectEnum,
        "StripeChargeFailureBalanceTransaction.ObjectEnum": StripeChargeFailureBalanceTransaction.ObjectEnum,
        "StripeChargeInvoice.ObjectEnum": StripeChargeInvoice.ObjectEnum,
        "StripeChargeOnBehalfOf.ObjectEnum": StripeChargeOnBehalfOf.ObjectEnum,
        "StripeChargePaymentIntent.ObjectEnum": StripeChargePaymentIntent.ObjectEnum,
        "StripeChargeRefunds.ObjectEnum": StripeChargeRefunds.ObjectEnum,
        "StripeChargeReview.ObjectEnum": StripeChargeReview.ObjectEnum,
        "StripeChargeSource.ObjectEnum": StripeChargeSource.ObjectEnum,
        "StripeChargeSourceTransfer.ObjectEnum": StripeChargeSourceTransfer.ObjectEnum,
        "StripeChargeTransfer.ObjectEnum": StripeChargeTransfer.ObjectEnum,
        "StripeConnectCollectionTransfer.ObjectEnum": StripeConnectCollectionTransfer.ObjectEnum,
        "StripeConnectCollectionTransferDestination.ObjectEnum": StripeConnectCollectionTransferDestination.ObjectEnum,
        "StripeCoupon.ObjectEnum": StripeCoupon.ObjectEnum,
        "StripeCustomer.ObjectEnum": StripeCustomer.ObjectEnum,
        "StripeCustomerCashBalance.ObjectEnum": StripeCustomerCashBalance.ObjectEnum,
        "StripeCustomerDefaultSource.ObjectEnum": StripeCustomerDefaultSource.ObjectEnum,
        "StripeCustomerDiscount.ObjectEnum": StripeCustomerDiscount.ObjectEnum,
        "StripeCustomerSource.ObjectEnum": StripeCustomerSource.ObjectEnum,
        "StripeCustomerTestClock.ObjectEnum": StripeCustomerTestClock.ObjectEnum,
        "StripeDeletedApplication.ObjectEnum": StripeDeletedApplication.ObjectEnum,
        "StripeDeletedApplication.DeletedEnum": StripeDeletedApplication.DeletedEnum,
        "StripeDeletedBankAccount.ObjectEnum": StripeDeletedBankAccount.ObjectEnum,
        "StripeDeletedBankAccount.DeletedEnum": StripeDeletedBankAccount.DeletedEnum,
        "StripeDeletedCard.ObjectEnum": StripeDeletedCard.ObjectEnum,
        "StripeDeletedCard.DeletedEnum": StripeDeletedCard.DeletedEnum,
        "StripeDeletedCoupon.ObjectEnum": StripeDeletedCoupon.ObjectEnum,
        "StripeDeletedCoupon.DeletedEnum": StripeDeletedCoupon.DeletedEnum,
        "StripeDeletedCustomer.ObjectEnum": StripeDeletedCustomer.ObjectEnum,
        "StripeDeletedCustomer.DeletedEnum": StripeDeletedCustomer.DeletedEnum,
        "StripeDeletedDiscount.ObjectEnum": StripeDeletedDiscount.ObjectEnum,
        "StripeDeletedDiscount.DeletedEnum": StripeDeletedDiscount.DeletedEnum,
        "StripeDeletedInvoice.ObjectEnum": StripeDeletedInvoice.ObjectEnum,
        "StripeDeletedInvoice.DeletedEnum": StripeDeletedInvoice.DeletedEnum,
        "StripeDeletedPlan.ObjectEnum": StripeDeletedPlan.ObjectEnum,
        "StripeDeletedPlan.DeletedEnum": StripeDeletedPlan.DeletedEnum,
        "StripeDeletedPrice.ObjectEnum": StripeDeletedPrice.ObjectEnum,
        "StripeDeletedPrice.DeletedEnum": StripeDeletedPrice.DeletedEnum,
        "StripeDeletedProduct.ObjectEnum": StripeDeletedProduct.ObjectEnum,
        "StripeDeletedProduct.DeletedEnum": StripeDeletedProduct.DeletedEnum,
        "StripeDeletedTaxId.ObjectEnum": StripeDeletedTaxId.ObjectEnum,
        "StripeDeletedTaxId.DeletedEnum": StripeDeletedTaxId.DeletedEnum,
        "StripeDiscount.ObjectEnum": StripeDiscount.ObjectEnum,
        "StripeDiscountCustomer.ObjectEnum": StripeDiscountCustomer.ObjectEnum,
        "StripeDiscountCustomer.DeletedEnum": StripeDiscountCustomer.DeletedEnum,
        "StripeDiscountPromotionCode.ObjectEnum": StripeDiscountPromotionCode.ObjectEnum,
        "StripeDispute.ObjectEnum": StripeDispute.ObjectEnum,
        "StripeDisputeCharge.ObjectEnum": StripeDisputeCharge.ObjectEnum,
        "StripeDisputePaymentIntent.ObjectEnum": StripeDisputePaymentIntent.ObjectEnum,
        "StripeFeeRefund.ObjectEnum": StripeFeeRefund.ObjectEnum,
        "StripeFeeRefundBalanceTransaction.ObjectEnum": StripeFeeRefundBalanceTransaction.ObjectEnum,
        "StripeFeeRefundFee.ObjectEnum": StripeFeeRefundFee.ObjectEnum,
        "StripeFile.ObjectEnum": StripeFile.ObjectEnum,
        "StripeFileLink.ObjectEnum": StripeFileLink.ObjectEnum,
        "StripeFileLinkFile.ObjectEnum": StripeFileLinkFile.ObjectEnum,
        "StripeFileLinks.ObjectEnum": StripeFileLinks.ObjectEnum,
        "StripeInvoice.ObjectEnum": StripeInvoice.ObjectEnum,
        "StripeInvoiceAccountTaxIdsInner.ObjectEnum": StripeInvoiceAccountTaxIdsInner.ObjectEnum,
        "StripeInvoiceAccountTaxIdsInner.DeletedEnum": StripeInvoiceAccountTaxIdsInner.DeletedEnum,
        "StripeInvoiceApplication.ObjectEnum": StripeInvoiceApplication.ObjectEnum,
        "StripeInvoiceApplication.DeletedEnum": StripeInvoiceApplication.DeletedEnum,
        "StripeInvoiceCharge.ObjectEnum": StripeInvoiceCharge.ObjectEnum,
        "StripeInvoiceCustomer.ObjectEnum": StripeInvoiceCustomer.ObjectEnum,
        "StripeInvoiceCustomer.DeletedEnum": StripeInvoiceCustomer.DeletedEnum,
        "StripeInvoiceDefaultPaymentMethod.ObjectEnum": StripeInvoiceDefaultPaymentMethod.ObjectEnum,
        "StripeInvoiceDefaultSource.ObjectEnum": StripeInvoiceDefaultSource.ObjectEnum,
        "StripeInvoiceDiscount.ObjectEnum": StripeInvoiceDiscount.ObjectEnum,
        "StripeInvoiceDiscountsInner.ObjectEnum": StripeInvoiceDiscountsInner.ObjectEnum,
        "StripeInvoiceDiscountsInner.DeletedEnum": StripeInvoiceDiscountsInner.DeletedEnum,
        "StripeInvoiceLatestRevision.ObjectEnum": StripeInvoiceLatestRevision.ObjectEnum,
        "StripeInvoiceLineItem.ObjectEnum": StripeInvoiceLineItem.ObjectEnum,
        "StripeInvoiceLineItemDiscountsInner.ObjectEnum": StripeInvoiceLineItemDiscountsInner.ObjectEnum,
        "StripeInvoiceLineItemPlan.ObjectEnum": StripeInvoiceLineItemPlan.ObjectEnum,
        "StripeInvoiceLineItemPrice.ObjectEnum": StripeInvoiceLineItemPrice.ObjectEnum,
        "StripeInvoiceOnBehalfOf.ObjectEnum": StripeInvoiceOnBehalfOf.ObjectEnum,
        "StripeInvoicePaymentIntent.ObjectEnum": StripeInvoicePaymentIntent.ObjectEnum,
        "StripeInvoiceQuote.ObjectEnum": StripeInvoiceQuote.ObjectEnum,
        "StripeInvoiceSubscription.ObjectEnum": StripeInvoiceSubscription.ObjectEnum,
        "StripeInvoiceTestClock.ObjectEnum": StripeInvoiceTestClock.ObjectEnum,
        "StripeIssuingAuthorization.ObjectEnum": StripeIssuingAuthorization.ObjectEnum,
        "StripeIssuingAuthorizationCardholder.ObjectEnum": StripeIssuingAuthorizationCardholder.ObjectEnum,
        "StripeIssuingCard.ObjectEnum": StripeIssuingCard.ObjectEnum,
        "StripeIssuingCardReplacedBy.ObjectEnum": StripeIssuingCardReplacedBy.ObjectEnum,
        "StripeIssuingCardReplacementFor.ObjectEnum": StripeIssuingCardReplacementFor.ObjectEnum,
        "StripeIssuingCardholder.ObjectEnum": StripeIssuingCardholder.ObjectEnum,
        "StripeIssuingDispute.ObjectEnum": StripeIssuingDispute.ObjectEnum,
        "StripeIssuingDisputeTransaction.ObjectEnum": StripeIssuingDisputeTransaction.ObjectEnum,
        "StripeIssuingTransaction.ObjectEnum": StripeIssuingTransaction.ObjectEnum,
        "StripeIssuingTransactionAuthorization.ObjectEnum": StripeIssuingTransactionAuthorization.ObjectEnum,
        "StripeIssuingTransactionBalanceTransaction.ObjectEnum": StripeIssuingTransactionBalanceTransaction.ObjectEnum,
        "StripeIssuingTransactionCard.ObjectEnum": StripeIssuingTransactionCard.ObjectEnum,
        "StripeIssuingTransactionCardholder.ObjectEnum": StripeIssuingTransactionCardholder.ObjectEnum,
        "StripeIssuingTransactionDispute.ObjectEnum": StripeIssuingTransactionDispute.ObjectEnum,
        "StripeLineItem.ObjectEnum": StripeLineItem.ObjectEnum,
        "StripeLineItemPrice.ObjectEnum": StripeLineItemPrice.ObjectEnum,
        "StripeMandate.ObjectEnum": StripeMandate.ObjectEnum,
        "StripeMandatePaymentMethod.ObjectEnum": StripeMandatePaymentMethod.ObjectEnum,
        "StripePaymentIntent.ObjectEnum": StripePaymentIntent.ObjectEnum,
        "StripePaymentIntentApplication.ObjectEnum": StripePaymentIntentApplication.ObjectEnum,
        "StripePaymentIntentCustomer.ObjectEnum": StripePaymentIntentCustomer.ObjectEnum,
        "StripePaymentIntentCustomer.DeletedEnum": StripePaymentIntentCustomer.DeletedEnum,
        "StripePaymentIntentInvoice.ObjectEnum": StripePaymentIntentInvoice.ObjectEnum,
        "StripePaymentIntentLatestCharge.ObjectEnum": StripePaymentIntentLatestCharge.ObjectEnum,
        "StripePaymentIntentOnBehalfOf.ObjectEnum": StripePaymentIntentOnBehalfOf.ObjectEnum,
        "StripePaymentIntentPaymentMethod.ObjectEnum": StripePaymentIntentPaymentMethod.ObjectEnum,
        "StripePaymentIntentProcessing.TypeEnum": StripePaymentIntentProcessing.TypeEnum,
        "StripePaymentIntentReview.ObjectEnum": StripePaymentIntentReview.ObjectEnum,
        "StripePaymentIntentSource.ObjectEnum": StripePaymentIntentSource.ObjectEnum,
        "StripePaymentIntentSource.DeletedEnum": StripePaymentIntentSource.DeletedEnum,
        "StripePaymentMethod.ObjectEnum": StripePaymentMethod.ObjectEnum,
        "StripePaymentMethodCustomer.ObjectEnum": StripePaymentMethodCustomer.ObjectEnum,
        "StripePayout.ObjectEnum": StripePayout.ObjectEnum,
        "StripePayoutBalanceTransaction.ObjectEnum": StripePayoutBalanceTransaction.ObjectEnum,
        "StripePayoutDestination.ObjectEnum": StripePayoutDestination.ObjectEnum,
        "StripePayoutDestination.DeletedEnum": StripePayoutDestination.DeletedEnum,
        "StripePayoutFailureBalanceTransaction.ObjectEnum": StripePayoutFailureBalanceTransaction.ObjectEnum,
        "StripePayoutOriginalPayout.ObjectEnum": StripePayoutOriginalPayout.ObjectEnum,
        "StripePayoutReversedBy.ObjectEnum": StripePayoutReversedBy.ObjectEnum,
        "StripePerson.ObjectEnum": StripePerson.ObjectEnum,
        "StripePlan.ObjectEnum": StripePlan.ObjectEnum,
        "StripePlanProduct.ObjectEnum": StripePlanProduct.ObjectEnum,
        "StripePlanProduct.DeletedEnum": StripePlanProduct.DeletedEnum,
        "StripePlatformTaxFee.ObjectEnum": StripePlatformTaxFee.ObjectEnum,
        "StripePrice.ObjectEnum": StripePrice.ObjectEnum,
        "StripePriceProduct.ObjectEnum": StripePriceProduct.ObjectEnum,
        "StripePriceProduct.DeletedEnum": StripePriceProduct.DeletedEnum,
        "StripeProduct.ObjectEnum": StripeProduct.ObjectEnum,
        "StripeProductDefaultPrice.ObjectEnum": StripeProductDefaultPrice.ObjectEnum,
        "StripeProductTaxCode.ObjectEnum": StripeProductTaxCode.ObjectEnum,
        "StripePromotionCode.ObjectEnum": StripePromotionCode.ObjectEnum,
        "StripePromotionCodeCustomer.ObjectEnum": StripePromotionCodeCustomer.ObjectEnum,
        "StripePromotionCodeCustomer.DeletedEnum": StripePromotionCodeCustomer.DeletedEnum,
        "StripeQuote.ObjectEnum": StripeQuote.ObjectEnum,
        "StripeQuoteApplication.ObjectEnum": StripeQuoteApplication.ObjectEnum,
        "StripeQuoteApplication.DeletedEnum": StripeQuoteApplication.DeletedEnum,
        "StripeQuoteCustomer.ObjectEnum": StripeQuoteCustomer.ObjectEnum,
        "StripeQuoteCustomer.DeletedEnum": StripeQuoteCustomer.DeletedEnum,
        "StripeQuoteDefaultTaxRatesInner.ObjectEnum": StripeQuoteDefaultTaxRatesInner.ObjectEnum,
        "StripeQuoteInvoice.ObjectEnum": StripeQuoteInvoice.ObjectEnum,
        "StripeQuoteInvoice.DeletedEnum": StripeQuoteInvoice.DeletedEnum,
        "StripeQuoteOnBehalfOf.ObjectEnum": StripeQuoteOnBehalfOf.ObjectEnum,
        "StripeQuoteSubscription.ObjectEnum": StripeQuoteSubscription.ObjectEnum,
        "StripeQuoteSubscriptionSchedule.ObjectEnum": StripeQuoteSubscriptionSchedule.ObjectEnum,
        "StripeQuoteTestClock.ObjectEnum": StripeQuoteTestClock.ObjectEnum,
        "StripeRefund.ObjectEnum": StripeRefund.ObjectEnum,
        "StripeRefundCharge.ObjectEnum": StripeRefundCharge.ObjectEnum,
        "StripeRefundFailureBalanceTransaction.ObjectEnum": StripeRefundFailureBalanceTransaction.ObjectEnum,
        "StripeRefundPaymentIntent.ObjectEnum": StripeRefundPaymentIntent.ObjectEnum,
        "StripeRefundSourceTransferReversal.ObjectEnum": StripeRefundSourceTransferReversal.ObjectEnum,
        "StripeRefundTransferReversal.ObjectEnum": StripeRefundTransferReversal.ObjectEnum,
        "StripeReserveTransaction.ObjectEnum": StripeReserveTransaction.ObjectEnum,
        "StripeReview.ObjectEnum": StripeReview.ObjectEnum,
        "StripeReviewCharge.ObjectEnum": StripeReviewCharge.ObjectEnum,
        "StripeReviewPaymentIntent.ObjectEnum": StripeReviewPaymentIntent.ObjectEnum,
        "StripeSetupAttempt.ObjectEnum": StripeSetupAttempt.ObjectEnum,
        "StripeSetupAttemptApplication.ObjectEnum": StripeSetupAttemptApplication.ObjectEnum,
        "StripeSetupAttemptCustomer.ObjectEnum": StripeSetupAttemptCustomer.ObjectEnum,
        "StripeSetupAttemptCustomer.DeletedEnum": StripeSetupAttemptCustomer.DeletedEnum,
        "StripeSetupAttemptOnBehalfOf.ObjectEnum": StripeSetupAttemptOnBehalfOf.ObjectEnum,
        "StripeSetupAttemptPaymentMethod.ObjectEnum": StripeSetupAttemptPaymentMethod.ObjectEnum,
        "StripeSetupAttemptSetupIntent.ObjectEnum": StripeSetupAttemptSetupIntent.ObjectEnum,
        "StripeSetupIntent.ObjectEnum": StripeSetupIntent.ObjectEnum,
        "StripeSetupIntentApplication.ObjectEnum": StripeSetupIntentApplication.ObjectEnum,
        "StripeSetupIntentCustomer.ObjectEnum": StripeSetupIntentCustomer.ObjectEnum,
        "StripeSetupIntentCustomer.DeletedEnum": StripeSetupIntentCustomer.DeletedEnum,
        "StripeSetupIntentLatestAttempt.ObjectEnum": StripeSetupIntentLatestAttempt.ObjectEnum,
        "StripeSetupIntentMandate.ObjectEnum": StripeSetupIntentMandate.ObjectEnum,
        "StripeSetupIntentOnBehalfOf.ObjectEnum": StripeSetupIntentOnBehalfOf.ObjectEnum,
        "StripeSetupIntentPaymentMethod.ObjectEnum": StripeSetupIntentPaymentMethod.ObjectEnum,
        "StripeSetupIntentSingleUseMandate.ObjectEnum": StripeSetupIntentSingleUseMandate.ObjectEnum,
        "StripeSource.ObjectEnum": StripeSource.ObjectEnum,
        "StripeSubscription.ObjectEnum": StripeSubscription.ObjectEnum,
        "StripeSubscriptionApplication.ObjectEnum": StripeSubscriptionApplication.ObjectEnum,
        "StripeSubscriptionApplication.DeletedEnum": StripeSubscriptionApplication.DeletedEnum,
        "StripeSubscriptionCustomer.ObjectEnum": StripeSubscriptionCustomer.ObjectEnum,
        "StripeSubscriptionCustomer.DeletedEnum": StripeSubscriptionCustomer.DeletedEnum,
        "StripeSubscriptionDefaultPaymentMethod.ObjectEnum": StripeSubscriptionDefaultPaymentMethod.ObjectEnum,
        "StripeSubscriptionDefaultSource.ObjectEnum": StripeSubscriptionDefaultSource.ObjectEnum,
        "StripeSubscriptionDiscount.ObjectEnum": StripeSubscriptionDiscount.ObjectEnum,
        "StripeSubscriptionItem.ObjectEnum": StripeSubscriptionItem.ObjectEnum,
        "StripeSubscriptionLatestInvoice.ObjectEnum": StripeSubscriptionLatestInvoice.ObjectEnum,
        "StripeSubscriptionOnBehalfOf.ObjectEnum": StripeSubscriptionOnBehalfOf.ObjectEnum,
        "StripeSubscriptionPendingSetupIntent.ObjectEnum": StripeSubscriptionPendingSetupIntent.ObjectEnum,
        "StripeSubscriptionSchedule.ObjectEnum": StripeSubscriptionSchedule.ObjectEnum,
        "StripeSubscriptionScheduleApplication.ObjectEnum": StripeSubscriptionScheduleApplication.ObjectEnum,
        "StripeSubscriptionScheduleApplication.DeletedEnum": StripeSubscriptionScheduleApplication.DeletedEnum,
        "StripeSubscriptionScheduleCustomer.ObjectEnum": StripeSubscriptionScheduleCustomer.ObjectEnum,
        "StripeSubscriptionScheduleCustomer.DeletedEnum": StripeSubscriptionScheduleCustomer.DeletedEnum,
        "StripeSubscriptionScheduleSubscription.ObjectEnum": StripeSubscriptionScheduleSubscription.ObjectEnum,
        "StripeSubscriptionScheduleTestClock.ObjectEnum": StripeSubscriptionScheduleTestClock.ObjectEnum,
        "StripeSubscriptionTestClock.ObjectEnum": StripeSubscriptionTestClock.ObjectEnum,
        "StripeTaxCode.ObjectEnum": StripeTaxCode.ObjectEnum,
        "StripeTaxDeductedAtSource.ObjectEnum": StripeTaxDeductedAtSource.ObjectEnum,
        "StripeTaxId.ObjectEnum": StripeTaxId.ObjectEnum,
        "StripeTaxIdCustomer.ObjectEnum": StripeTaxIdCustomer.ObjectEnum,
        "StripeTaxRate.ObjectEnum": StripeTaxRate.ObjectEnum,
        "StripeTestHelpersTestClock.ObjectEnum": StripeTestHelpersTestClock.ObjectEnum,
        "StripeTopup.ObjectEnum": StripeTopup.ObjectEnum,
        "StripeTopupBalanceTransaction.ObjectEnum": StripeTopupBalanceTransaction.ObjectEnum,
        "StripeTopupSource.ObjectEnum": StripeTopupSource.ObjectEnum,
        "StripeTransfer.ObjectEnum": StripeTransfer.ObjectEnum,
        "StripeTransferBalanceTransaction.ObjectEnum": StripeTransferBalanceTransaction.ObjectEnum,
        "StripeTransferDestination.ObjectEnum": StripeTransferDestination.ObjectEnum,
        "StripeTransferDestinationPayment.ObjectEnum": StripeTransferDestinationPayment.ObjectEnum,
        "StripeTransferReversal.ObjectEnum": StripeTransferReversal.ObjectEnum,
        "StripeTransferReversalDestinationPaymentRefund.ObjectEnum": StripeTransferReversalDestinationPaymentRefund.ObjectEnum,
        "StripeTransferReversalSourceRefund.ObjectEnum": StripeTransferReversalSourceRefund.ObjectEnum,
        "StripeTransferReversalTransfer.ObjectEnum": StripeTransferReversalTransfer.ObjectEnum,
        "StripeTransferSourceTransaction.ObjectEnum": StripeTransferSourceTransaction.ObjectEnum,
        "SubscriptionCollectionMethod": SubscriptionCollectionMethod,
        "SubscriptionScheduleDefaultSettingsDefaultPaymentMethod.ObjectEnum": SubscriptionScheduleDefaultSettingsDefaultPaymentMethod.ObjectEnum,
        "SubscriptionScheduleDefaultSettingsOnBehalfOf.ObjectEnum": SubscriptionScheduleDefaultSettingsOnBehalfOf.ObjectEnum,
        "SubscriptionScheduleEndBehavior": SubscriptionScheduleEndBehavior,
        "SubscriptionSchedulePhaseCoupon.ObjectEnum": SubscriptionSchedulePhaseCoupon.ObjectEnum,
        "SubscriptionSchedulePhaseCoupon.DeletedEnum": SubscriptionSchedulePhaseCoupon.DeletedEnum,
        "SubscriptionSchedulePhaseDefaultPaymentMethod.ObjectEnum": SubscriptionSchedulePhaseDefaultPaymentMethod.ObjectEnum,
        "SubscriptionScheduleStatus": SubscriptionScheduleStatus,
        "SubscriptionStatus": SubscriptionStatus,
        "TaxAutomaticTax": TaxAutomaticTax,
        "TaxIdType": TaxIdType,
        "TaxRateTaxType": TaxRateTaxType,
        "TestClockStatus": TestClockStatus,
        "TopupStatus": TopupStatus,
        "TransactionType": TransactionType,
        "TransactionWallet": TransactionWallet,
        "TransformQuantityRound": TransformQuantityRound,
        "TransformUsageRound": TransformUsageRound,
        "UsBankAccountAccountHolderType": UsBankAccountAccountHolderType,
        "UsBankAccountAccountType": UsBankAccountAccountType,
        "UsBankAccountVerificationMethod": UsBankAccountVerificationMethod,
        "VerificationAdditionalDocumentBack.ObjectEnum": VerificationAdditionalDocumentBack.ObjectEnum,
        "VerificationAdditionalDocumentFront.ObjectEnum": VerificationAdditionalDocumentFront.ObjectEnum,
        "VerificationDataAddressLine1Check": VerificationDataAddressLine1Check,
        "VerificationDataAddressPostalCodeCheck": VerificationDataAddressPostalCodeCheck,
        "VerificationDataCvcCheck": VerificationDataCvcCheck,
        "VerificationDataExpiryCheck": VerificationDataExpiryCheck,
        "VerificationDocumentBack.ObjectEnum": VerificationDocumentBack.ObjectEnum,
        "VerificationDocumentFront.ObjectEnum": VerificationDocumentFront.ObjectEnum,
        "VerificationStatus": VerificationStatus,
        "VerifyWithMicrodepositsMicrodepositType": VerifyWithMicrodepositsMicrodepositType,
        "WalletType": WalletType,
        "WechatPayClient": WechatPayClient,
}

let typeMap: {[index: string]: any} = {
    "AccessDeniedError": AccessDeniedError,
    "AccountBusinessProfile": AccountBusinessProfile,
    "AccountBusinessProfileSupportAddress": AccountBusinessProfileSupportAddress,
    "AccountCapabilities": AccountCapabilities,
    "AccountCompany": AccountCompany,
    "AccountCompanyAddressKana": AccountCompanyAddressKana,
    "AccountCompanyAddressKanji": AccountCompanyAddressKanji,
    "AccountCompanyOwnershipDeclaration": AccountCompanyOwnershipDeclaration,
    "AccountCompanyVerification": AccountCompanyVerification,
    "AccountController": AccountController,
    "AccountDebitSource": AccountDebitSource,
    "AccountFutureRequirements": AccountFutureRequirements,
    "AccountRequirements": AccountRequirements,
    "AccountSettings": AccountSettings,
    "AccountTosAcceptance": AccountTosAcceptance,
    "AcssDebitMandateOptions": AcssDebitMandateOptions,
    "AddPromoCodeRequest": AddPromoCodeRequest,
    "AmountDetailsTip": AmountDetailsTip,
    "ApiListStripeBankAccountOrStripeCard": ApiListStripeBankAccountOrStripeCard,
    "ApiListStripeBankAccountOrStripeCardDataInner": ApiListStripeBankAccountOrStripeCardDataInner,
    "ApiListStripeCustomerSource": ApiListStripeCustomerSource,
    "ApiListStripeFeeRefund": ApiListStripeFeeRefund,
    "ApiListStripeFileLink": ApiListStripeFileLink,
    "ApiListStripeInvoiceLineItem": ApiListStripeInvoiceLineItem,
    "ApiListStripeLineItem": ApiListStripeLineItem,
    "ApiListStripeRefund": ApiListStripeRefund,
    "ApiListStripeSubscription": ApiListStripeSubscription,
    "ApiListStripeSubscriptionItem": ApiListStripeSubscriptionItem,
    "ApiListStripeTaxId": ApiListStripeTaxId,
    "ApiListStripeTransferReversal": ApiListStripeTransferReversal,
    "AuthorizationAmountDetails": AuthorizationAmountDetails,
    "AuthorizationMerchantData": AuthorizationMerchantData,
    "AuthorizationNetworkData": AuthorizationNetworkData,
    "AuthorizationPendingRequest": AuthorizationPendingRequest,
    "AuthorizationPendingRequestAmountDetails": AuthorizationPendingRequestAmountDetails,
    "AuthorizationRequestHistory": AuthorizationRequestHistory,
    "AuthorizationRequestHistoryAmountDetails": AuthorizationRequestHistoryAmountDetails,
    "AuthorizationTreasury": AuthorizationTreasury,
    "AuthorizationVerificationData": AuthorizationVerificationData,
    "BalanceTransactionFeeDetail": BalanceTransactionFeeDetail,
    "BankAccount": BankAccount,
    "BankTransferEuBankTransfer": BankTransferEuBankTransfer,
    "BlikMandateOptions": BlikMandateOptions,
    "BlikOffSession": BlikOffSession,
    "BreakdownDiscount": BreakdownDiscount,
    "BreakdownTax": BreakdownTax,
    "Card": Card,
    "CardChecks": CardChecks,
    "CardCustomerNotification": CardCustomerNotification,
    "CardIssuingTosAcceptance": CardIssuingTosAcceptance,
    "CardMandateOptions": CardMandateOptions,
    "CardNetworks": CardNetworks,
    "CardPaymentsDeclineOn": CardPaymentsDeclineOn,
    "CardShipping": CardShipping,
    "CardShippingCustoms": CardShippingCustoms,
    "CardSpendingControls": CardSpendingControls,
    "CardThreeDSecureUsage": CardThreeDSecureUsage,
    "CardWallet": CardWallet,
    "CardWallets": CardWallets,
    "CardholderBilling": CardholderBilling,
    "CardholderCompany": CardholderCompany,
    "CardholderIndividual": CardholderIndividual,
    "CardholderIndividualDob": CardholderIndividualDob,
    "CardholderIndividualVerification": CardholderIndividualVerification,
    "CardholderRequirements": CardholderRequirements,
    "CardholderSpendingControls": CardholderSpendingControls,
    "CashBalanceSettings": CashBalanceSettings,
    "ChargeAlternateStatementDescriptors": ChargeAlternateStatementDescriptors,
    "ChargeBillingDetails": ChargeBillingDetails,
    "ChargeFraudDetails": ChargeFraudDetails,
    "ChargeLevel3": ChargeLevel3,
    "ChargeOutcome": ChargeOutcome,
    "ChargeOutcomeRule": ChargeOutcomeRule,
    "ChargePaymentMethodDetails": ChargePaymentMethodDetails,
    "ChargeRadarOptions": ChargeRadarOptions,
    "ChargeShipping": ChargeShipping,
    "ChargeTransferData": ChargeTransferData,
    "ChargeTransferDataDestination": ChargeTransferDataDestination,
    "CodeShareSummary": CodeShareSummary,
    "CompanyAddressKana": CompanyAddressKana,
    "CompanyAddressKanji": CompanyAddressKanji,
    "CompanyOwnershipDeclaration": CompanyOwnershipDeclaration,
    "CompanyVerification": CompanyVerification,
    "ComputedRecurring": ComputedRecurring,
    "ComputedUpfront": ComputedUpfront,
    "ConcurrencyError": ConcurrencyError,
    "CouponAppliesTo": CouponAppliesTo,
    "CouponCurrencyOptions": CouponCurrencyOptions,
    "CreateCheckoutRequest": CreateCheckoutRequest,
    "CreateCheckoutResponse": CreateCheckoutResponse,
    "CreateCustomerPortalSessionRequest": CreateCustomerPortalSessionRequest,
    "CreateUserRequest": CreateUserRequest,
    "CurrencyOptionsCustomUnitAmount": CurrencyOptionsCustomUnitAmount,
    "CurrencyOptionsTier": CurrencyOptionsTier,
    "CustomerAcceptanceOnline": CustomerAcceptanceOnline,
    "CustomerBalanceBankTransfer": CustomerBalanceBankTransfer,
    "CustomerInvoiceSettings": CustomerInvoiceSettings,
    "CustomerInvoiceSettingsDefaultPaymentMethod": CustomerInvoiceSettingsDefaultPaymentMethod,
    "CustomerInvoiceSettingsRenderingOptions": CustomerInvoiceSettingsRenderingOptions,
    "CustomerShipping": CustomerShipping,
    "CustomerTax": CustomerTax,
    "CustomerTaxLocation": CustomerTaxLocation,
    "DefaultSettingsAutomaticTax": DefaultSettingsAutomaticTax,
    "DefaultSettingsBillingThresholds": DefaultSettingsBillingThresholds,
    "DefaultSettingsInvoiceSettings": DefaultSettingsInvoiceSettings,
    "DefaultSettingsTransferData": DefaultSettingsTransferData,
    "DefaultSettingsTransferDataDestination": DefaultSettingsTransferDataDestination,
    "DisplayBankTransferInstructionsFinancialAddress": DisplayBankTransferInstructionsFinancialAddress,
    "DisplayDetailsEmailSent": DisplayDetailsEmailSent,
    "DisputeEvidence": DisputeEvidence,
    "DisputeEvidenceCancellationPolicy": DisputeEvidenceCancellationPolicy,
    "DisputeEvidenceCustomerCommunication": DisputeEvidenceCustomerCommunication,
    "DisputeEvidenceCustomerSignature": DisputeEvidenceCustomerSignature,
    "DisputeEvidenceDetails": DisputeEvidenceDetails,
    "DisputeEvidenceDuplicateChargeDocumentation": DisputeEvidenceDuplicateChargeDocumentation,
    "DisputeEvidenceReceipt": DisputeEvidenceReceipt,
    "DisputeEvidenceRefundPolicy": DisputeEvidenceRefundPolicy,
    "DisputeEvidenceServiceDocumentation": DisputeEvidenceServiceDocumentation,
    "DisputeEvidenceShippingDocumentation": DisputeEvidenceShippingDocumentation,
    "DisputeEvidenceUncategorizedFile": DisputeEvidenceUncategorizedFile,
    "DisputeTreasury": DisputeTreasury,
    "Emoji": Emoji,
    "FinancialAddressIban": FinancialAddressIban,
    "FinancialAddressSortCode": FinancialAddressSortCode,
    "FinancialAddressSpei": FinancialAddressSpei,
    "FinancialAddressZengin": FinancialAddressZengin,
    "FlightSegment": FlightSegment,
    "FutureRequirementsAlternative": FutureRequirementsAlternative,
    "FutureRequirementsError": FutureRequirementsError,
    "GetEmojiRequest": GetEmojiRequest,
    "GetProductRequest": GetProductRequest,
    "GetProductResponse": GetProductResponse,
    "GetUserRequest": GetUserRequest,
    "IndividualDob": IndividualDob,
    "IndividualVerification": IndividualVerification,
    "IndividualVerificationDocument": IndividualVerificationDocument,
    "InteracPresentReceipt": InteracPresentReceipt,
    "InternalServerError": InternalServerError,
    "InvoiceAutomaticTax": InvoiceAutomaticTax,
    "InvoiceCustomField": InvoiceCustomField,
    "InvoiceCustomerShipping": InvoiceCustomerShipping,
    "InvoiceCustomerTaxId": InvoiceCustomerTaxId,
    "InvoiceFromInvoice": InvoiceFromInvoice,
    "InvoiceFromInvoiceInvoice": InvoiceFromInvoiceInvoice,
    "InvoiceLastFinalizationError": InvoiceLastFinalizationError,
    "InvoiceLineItemDiscountAmount": InvoiceLineItemDiscountAmount,
    "InvoiceLineItemDiscountAmountDiscount": InvoiceLineItemDiscountAmountDiscount,
    "InvoiceLineItemPeriod": InvoiceLineItemPeriod,
    "InvoiceLineItemProrationDetails": InvoiceLineItemProrationDetails,
    "InvoiceLineItemProrationDetailsCreditedItems": InvoiceLineItemProrationDetailsCreditedItems,
    "InvoiceLineItemTaxAmount": InvoiceLineItemTaxAmount,
    "InvoiceLineItemTaxAmountTaxRate": InvoiceLineItemTaxAmountTaxRate,
    "InvoicePaymentSettings": InvoicePaymentSettings,
    "InvoicePaymentSettingsPaymentMethodOptions": InvoicePaymentSettingsPaymentMethodOptions,
    "InvoiceRenderingOptions": InvoiceRenderingOptions,
    "InvoiceSettingsCustomField": InvoiceSettingsCustomField,
    "InvoiceSettingsRenderingOptions": InvoiceSettingsRenderingOptions,
    "InvoiceStatusTransitions": InvoiceStatusTransitions,
    "InvoiceThresholdReason": InvoiceThresholdReason,
    "InvoiceTotalDiscountAmount": InvoiceTotalDiscountAmount,
    "InvoiceTotalTaxAmount": InvoiceTotalTaxAmount,
    "InvoiceTransferData": InvoiceTransferData,
    "ItemBillingThresholds": ItemBillingThresholds,
    "KlarnaDob": KlarnaDob,
    "KonbiniDisplayDetailsStores": KonbiniDisplayDetailsStores,
    "KonbiniDisplayDetailsStoresFamilymart": KonbiniDisplayDetailsStoresFamilymart,
    "KonbiniDisplayDetailsStoresLawson": KonbiniDisplayDetailsStoresLawson,
    "KonbiniDisplayDetailsStoresMinistop": KonbiniDisplayDetailsStoresMinistop,
    "KonbiniDisplayDetailsStoresSeicomart": KonbiniDisplayDetailsStoresSeicomart,
    "KonbiniStore": KonbiniStore,
    "Level3LineItem": Level3LineItem,
    "LineItemDiscount": LineItemDiscount,
    "LineItemTax": LineItemTax,
    "ListPromoCodesRequest": ListPromoCodesRequest,
    "MandateCustomerAcceptance": MandateCustomerAcceptance,
    "MandateOptionsOffSession": MandateOptionsOffSession,
    "MandatePaymentMethodDetails": MandatePaymentMethodDetails,
    "MandateSingleUse": MandateSingleUse,
    "NextActionAlipayHandleRedirect": NextActionAlipayHandleRedirect,
    "NextActionBoletoDisplayDetails": NextActionBoletoDisplayDetails,
    "NextActionCardAwaitNotification": NextActionCardAwaitNotification,
    "NextActionDisplayBankTransferInstructions": NextActionDisplayBankTransferInstructions,
    "NextActionDisplayDetails": NextActionDisplayDetails,
    "NextActionKonbiniDisplayDetails": NextActionKonbiniDisplayDetails,
    "NextActionOxxoDisplayDetails": NextActionOxxoDisplayDetails,
    "NextActionPaynowDisplayQrCode": NextActionPaynowDisplayQrCode,
    "NextActionPixDisplayQrCode": NextActionPixDisplayQrCode,
    "NextActionPromptpayDisplayQrCode": NextActionPromptpayDisplayQrCode,
    "NextActionRedirectToUrl": NextActionRedirectToUrl,
    "NextActionVerifyWithMicrodeposits": NextActionVerifyWithMicrodeposits,
    "NextActionWechatPayDisplayQrCode": NextActionWechatPayDisplayQrCode,
    "NextActionWechatPayRedirectToAndroidApp": NextActionWechatPayRedirectToAndroidApp,
    "NextActionWechatPayRedirectToIosApp": NextActionWechatPayRedirectToIosApp,
    "OutcomeRule": OutcomeRule,
    "PaymentIntentAmountDetails": PaymentIntentAmountDetails,
    "PaymentIntentAutomaticPaymentMethods": PaymentIntentAutomaticPaymentMethods,
    "PaymentIntentLastPaymentError": PaymentIntentLastPaymentError,
    "PaymentIntentNextAction": PaymentIntentNextAction,
    "PaymentIntentPaymentMethodOptions": PaymentIntentPaymentMethodOptions,
    "PaymentIntentProcessing": PaymentIntentProcessing,
    "PaymentIntentShipping": PaymentIntentShipping,
    "PaymentIntentTransferData": PaymentIntentTransferData,
    "PaymentIntentTransferDataDestination": PaymentIntentTransferDataDestination,
    "PaymentMethodAcssDebit": PaymentMethodAcssDebit,
    "PaymentMethodAuBecsDebit": PaymentMethodAuBecsDebit,
    "PaymentMethodBacsDebit": PaymentMethodBacsDebit,
    "PaymentMethodBillingDetails": PaymentMethodBillingDetails,
    "PaymentMethodBillingDetailsAddress": PaymentMethodBillingDetailsAddress,
    "PaymentMethodBoleto": PaymentMethodBoleto,
    "PaymentMethodCard": PaymentMethodCard,
    "PaymentMethodCardChecks": PaymentMethodCardChecks,
    "PaymentMethodCardNetworks": PaymentMethodCardNetworks,
    "PaymentMethodCardThreeDSecureUsage": PaymentMethodCardThreeDSecureUsage,
    "PaymentMethodCardWallet": PaymentMethodCardWallet,
    "PaymentMethodDetailsAchCreditTransfer": PaymentMethodDetailsAchCreditTransfer,
    "PaymentMethodDetailsAchDebit": PaymentMethodDetailsAchDebit,
    "PaymentMethodDetailsAfterpayClearpay": PaymentMethodDetailsAfterpayClearpay,
    "PaymentMethodDetailsAlipay": PaymentMethodDetailsAlipay,
    "PaymentMethodDetailsBancontact": PaymentMethodDetailsBancontact,
    "PaymentMethodDetailsBancontactGeneratedSepaDebit": PaymentMethodDetailsBancontactGeneratedSepaDebit,
    "PaymentMethodDetailsBancontactGeneratedSepaDebitMandate": PaymentMethodDetailsBancontactGeneratedSepaDebitMandate,
    "PaymentMethodDetailsBlik": PaymentMethodDetailsBlik,
    "PaymentMethodDetailsCardPresent": PaymentMethodDetailsCardPresent,
    "PaymentMethodDetailsCardPresentGeneratedCard": PaymentMethodDetailsCardPresentGeneratedCard,
    "PaymentMethodDetailsEps": PaymentMethodDetailsEps,
    "PaymentMethodDetailsFpx": PaymentMethodDetailsFpx,
    "PaymentMethodDetailsGiropay": PaymentMethodDetailsGiropay,
    "PaymentMethodDetailsGrabpay": PaymentMethodDetailsGrabpay,
    "PaymentMethodDetailsIdeal": PaymentMethodDetailsIdeal,
    "PaymentMethodDetailsInteracPresent": PaymentMethodDetailsInteracPresent,
    "PaymentMethodDetailsInteracPresentReceipt": PaymentMethodDetailsInteracPresentReceipt,
    "PaymentMethodDetailsKonbini": PaymentMethodDetailsKonbini,
    "PaymentMethodDetailsKonbiniStore": PaymentMethodDetailsKonbiniStore,
    "PaymentMethodDetailsMultibanco": PaymentMethodDetailsMultibanco,
    "PaymentMethodDetailsOxxo": PaymentMethodDetailsOxxo,
    "PaymentMethodDetailsP24": PaymentMethodDetailsP24,
    "PaymentMethodDetailsPaynow": PaymentMethodDetailsPaynow,
    "PaymentMethodDetailsPix": PaymentMethodDetailsPix,
    "PaymentMethodDetailsPromptpay": PaymentMethodDetailsPromptpay,
    "PaymentMethodDetailsSepaCreditTransfer": PaymentMethodDetailsSepaCreditTransfer,
    "PaymentMethodDetailsSepaDebit": PaymentMethodDetailsSepaDebit,
    "PaymentMethodDetailsSofort": PaymentMethodDetailsSofort,
    "PaymentMethodDetailsWechatPay": PaymentMethodDetailsWechatPay,
    "PaymentMethodEps": PaymentMethodEps,
    "PaymentMethodFpx": PaymentMethodFpx,
    "PaymentMethodIdeal": PaymentMethodIdeal,
    "PaymentMethodKlarna": PaymentMethodKlarna,
    "PaymentMethodKlarnaDob": PaymentMethodKlarnaDob,
    "PaymentMethodLink": PaymentMethodLink,
    "PaymentMethodOptionsAcssDebit": PaymentMethodOptionsAcssDebit,
    "PaymentMethodOptionsAffirm": PaymentMethodOptionsAffirm,
    "PaymentMethodOptionsAfterpayClearpay": PaymentMethodOptionsAfterpayClearpay,
    "PaymentMethodOptionsAlipay": PaymentMethodOptionsAlipay,
    "PaymentMethodOptionsAuBecsDebit": PaymentMethodOptionsAuBecsDebit,
    "PaymentMethodOptionsBacsDebit": PaymentMethodOptionsBacsDebit,
    "PaymentMethodOptionsBancontact": PaymentMethodOptionsBancontact,
    "PaymentMethodOptionsBlik": PaymentMethodOptionsBlik,
    "PaymentMethodOptionsBoleto": PaymentMethodOptionsBoleto,
    "PaymentMethodOptionsCard": PaymentMethodOptionsCard,
    "PaymentMethodOptionsCardMandateOptions": PaymentMethodOptionsCardMandateOptions,
    "PaymentMethodOptionsCardPresent": PaymentMethodOptionsCardPresent,
    "PaymentMethodOptionsCustomerBalance": PaymentMethodOptionsCustomerBalance,
    "PaymentMethodOptionsEps": PaymentMethodOptionsEps,
    "PaymentMethodOptionsFpx": PaymentMethodOptionsFpx,
    "PaymentMethodOptionsGiropay": PaymentMethodOptionsGiropay,
    "PaymentMethodOptionsGrabpay": PaymentMethodOptionsGrabpay,
    "PaymentMethodOptionsIdeal": PaymentMethodOptionsIdeal,
    "PaymentMethodOptionsKlarna": PaymentMethodOptionsKlarna,
    "PaymentMethodOptionsLink": PaymentMethodOptionsLink,
    "PaymentMethodOptionsOxxo": PaymentMethodOptionsOxxo,
    "PaymentMethodOptionsP24": PaymentMethodOptionsP24,
    "PaymentMethodOptionsPaynow": PaymentMethodOptionsPaynow,
    "PaymentMethodOptionsPix": PaymentMethodOptionsPix,
    "PaymentMethodOptionsPromptpay": PaymentMethodOptionsPromptpay,
    "PaymentMethodOptionsSepaDebit": PaymentMethodOptionsSepaDebit,
    "PaymentMethodOptionsSofort": PaymentMethodOptionsSofort,
    "PaymentMethodOptionsUsBankAccount": PaymentMethodOptionsUsBankAccount,
    "PaymentMethodOptionsWechatPay": PaymentMethodOptionsWechatPay,
    "PaymentMethodP24": PaymentMethodP24,
    "PaymentMethodRadarOptions": PaymentMethodRadarOptions,
    "PaymentMethodSepaDebit": PaymentMethodSepaDebit,
    "PaymentMethodSepaDebitGeneratedFrom": PaymentMethodSepaDebitGeneratedFrom,
    "PaymentMethodSofort": PaymentMethodSofort,
    "PaymentMethodUsBankAccount": PaymentMethodUsBankAccount,
    "PaymentMethodUsBankAccountNetworks": PaymentMethodUsBankAccountNetworks,
    "PaymentSettingsPaymentMethodOptions": PaymentSettingsPaymentMethodOptions,
    "PaymentSettingsPaymentMethodOptionsAcssDebit": PaymentSettingsPaymentMethodOptionsAcssDebit,
    "PaymentSettingsPaymentMethodOptionsBancontact": PaymentSettingsPaymentMethodOptionsBancontact,
    "PaymentSettingsPaymentMethodOptionsCard": PaymentSettingsPaymentMethodOptionsCard,
    "PaymentSettingsPaymentMethodOptionsCustomerBalance": PaymentSettingsPaymentMethodOptionsCustomerBalance,
    "PaymentSettingsPaymentMethodOptionsUsBankAccount": PaymentSettingsPaymentMethodOptionsUsBankAccount,
    "PayoutsSchedule": PayoutsSchedule,
    "PendingRequestAmountDetails": PendingRequestAmountDetails,
    "PersonAddressKana": PersonAddressKana,
    "PersonAddressKanji": PersonAddressKanji,
    "PersonDob": PersonDob,
    "PersonFutureRequirements": PersonFutureRequirements,
    "PersonRelationship": PersonRelationship,
    "PersonRequirements": PersonRequirements,
    "PersonVerification": PersonVerification,
    "PersonVerificationAdditionalDocument": PersonVerificationAdditionalDocument,
    "PhaseAddInvoiceItem": PhaseAddInvoiceItem,
    "PhaseAddInvoiceItemPrice": PhaseAddInvoiceItemPrice,
    "PhaseAutomaticTax": PhaseAutomaticTax,
    "PhaseBillingThresholds": PhaseBillingThresholds,
    "PhaseInvoiceSettings": PhaseInvoiceSettings,
    "PhaseItem": PhaseItem,
    "PhaseItemBillingThresholds": PhaseItemBillingThresholds,
    "PhaseItemPlan": PhaseItemPlan,
    "PhaseItemPrice": PhaseItemPrice,
    "PhaseTransferData": PhaseTransferData,
    "PlanTier": PlanTier,
    "PlanTransformUsage": PlanTransformUsage,
    "PriceCurrencyOptions": PriceCurrencyOptions,
    "PriceCurrencyOptionsCustomUnitAmount": PriceCurrencyOptionsCustomUnitAmount,
    "PriceCustomUnitAmount": PriceCustomUnitAmount,
    "PriceRecurring": PriceRecurring,
    "PriceTier": PriceTier,
    "PriceTransformQuantity": PriceTransformQuantity,
    "ProcessingCard": ProcessingCard,
    "ProductPackageDimensions": ProductPackageDimensions,
    "PromotionCodeRestrictions": PromotionCodeRestrictions,
    "ProrationDetailsCreditedItems": ProrationDetailsCreditedItems,
    "PurchaseDetailsFlight": PurchaseDetailsFlight,
    "PurchaseDetailsFuel": PurchaseDetailsFuel,
    "PurchaseDetailsLodging": PurchaseDetailsLodging,
    "PurchaseDetailsReceipt": PurchaseDetailsReceipt,
    "QuoteAutomaticTax": QuoteAutomaticTax,
    "QuoteComputed": QuoteComputed,
    "QuoteComputedRecurring": QuoteComputedRecurring,
    "QuoteFromQuote": QuoteFromQuote,
    "QuoteFromQuoteQuote": QuoteFromQuoteQuote,
    "QuoteInvoiceSettings": QuoteInvoiceSettings,
    "QuoteStatusTransitions": QuoteStatusTransitions,
    "QuoteSubscriptionData": QuoteSubscriptionData,
    "QuoteTotalDetails": QuoteTotalDetails,
    "QuoteTransferData": QuoteTransferData,
    "RecurringTotalDetails": RecurringTotalDetails,
    "ReferralSummary": ReferralSummary,
    "RefundNextAction": RefundNextAction,
    "RefundNextActionDisplayDetails": RefundNextActionDisplayDetails,
    "RequestHistoryAmountDetails": RequestHistoryAmountDetails,
    "RequirementsAlternative": RequirementsAlternative,
    "RequirementsError": RequirementsError,
    "ResourceAlreadyExistError": ResourceAlreadyExistError,
    "ResourceNotFoundError": ResourceNotFoundError,
    "RestrictionsCurrencyOptions": RestrictionsCurrencyOptions,
    "ReviewIpAddressLocation": ReviewIpAddressLocation,
    "ReviewSession": ReviewSession,
    "SepaDebitGeneratedFrom": SepaDebitGeneratedFrom,
    "SepaDebitGeneratedFromCharge": SepaDebitGeneratedFromCharge,
    "SepaDebitGeneratedFromSetupAttempt": SepaDebitGeneratedFromSetupAttempt,
    "SettingsBacsDebitPayments": SettingsBacsDebitPayments,
    "SettingsBranding": SettingsBranding,
    "SettingsBrandingIcon": SettingsBrandingIcon,
    "SettingsBrandingLogo": SettingsBrandingLogo,
    "SettingsCardIssuing": SettingsCardIssuing,
    "SettingsCardPayments": SettingsCardPayments,
    "SettingsDashboard": SettingsDashboard,
    "SettingsPayments": SettingsPayments,
    "SettingsPayouts": SettingsPayouts,
    "SettingsSepaDebitPayments": SettingsSepaDebitPayments,
    "SettingsTreasury": SettingsTreasury,
    "SetupAttemptPaymentMethodDetails": SetupAttemptPaymentMethodDetails,
    "SetupAttemptSetupError": SetupAttemptSetupError,
    "SetupIntentLastSetupError": SetupIntentLastSetupError,
    "SetupIntentNextAction": SetupIntentNextAction,
    "SetupIntentPaymentMethodOptions": SetupIntentPaymentMethodOptions,
    "ShippingCustoms": ShippingCustoms,
    "Source": Source,
    "SourceAchCreditTransfer": SourceAchCreditTransfer,
    "SourceAchDebit": SourceAchDebit,
    "SourceAcssDebit": SourceAcssDebit,
    "SourceAlipay": SourceAlipay,
    "SourceAuBecsDebit": SourceAuBecsDebit,
    "SourceBancontact": SourceBancontact,
    "SourceCard": SourceCard,
    "SourceCardPresent": SourceCardPresent,
    "SourceCodeVerification": SourceCodeVerification,
    "SourceEps": SourceEps,
    "SourceGiropay": SourceGiropay,
    "SourceIdeal": SourceIdeal,
    "SourceKlarna": SourceKlarna,
    "SourceMultibanco": SourceMultibanco,
    "SourceOrderItem": SourceOrderItem,
    "SourceOrderShipping": SourceOrderShipping,
    "SourceOwner": SourceOwner,
    "SourceOwnerAddress": SourceOwnerAddress,
    "SourceOwnerVerifiedAddress": SourceOwnerVerifiedAddress,
    "SourceP24": SourceP24,
    "SourceReceiver": SourceReceiver,
    "SourceRedirect": SourceRedirect,
    "SourceSepaCreditTransfer": SourceSepaCreditTransfer,
    "SourceSepaDebit": SourceSepaDebit,
    "SourceSofort": SourceSofort,
    "SourceSourceOrder": SourceSourceOrder,
    "SourceThreeDSecure": SourceThreeDSecure,
    "SourceWechat": SourceWechat,
    "SpendingControlsSpendingLimit": SpendingControlsSpendingLimit,
    "StoresFamilymart": StoresFamilymart,
    "StoresLawson": StoresLawson,
    "StoresMinistop": StoresMinistop,
    "StoresSeicomart": StoresSeicomart,
    "StripeAccount": StripeAccount,
    "StripeAccountBusinessProfile": StripeAccountBusinessProfile,
    "StripeAccountSettings": StripeAccountSettings,
    "StripeAddress": StripeAddress,
    "StripeApplication": StripeApplication,
    "StripeApplicationFee": StripeApplicationFee,
    "StripeApplicationFeeAccount": StripeApplicationFeeAccount,
    "StripeApplicationFeeApplication": StripeApplicationFeeApplication,
    "StripeApplicationFeeBalanceTransaction": StripeApplicationFeeBalanceTransaction,
    "StripeApplicationFeeCharge": StripeApplicationFeeCharge,
    "StripeApplicationFeeOriginatingTransaction": StripeApplicationFeeOriginatingTransaction,
    "StripeBalanceTransaction": StripeBalanceTransaction,
    "StripeBalanceTransactionSource": StripeBalanceTransactionSource,
    "StripeBankAccount": StripeBankAccount,
    "StripeBankAccountAccount": StripeBankAccountAccount,
    "StripeBankAccountCustomer": StripeBankAccountCustomer,
    "StripeCard": StripeCard,
    "StripeCardAccount": StripeCardAccount,
    "StripeCardCustomer": StripeCardCustomer,
    "StripeCashBalance": StripeCashBalance,
    "StripeCharge": StripeCharge,
    "StripeChargeApplication": StripeChargeApplication,
    "StripeChargeApplicationFee": StripeChargeApplicationFee,
    "StripeChargeBalanceTransaction": StripeChargeBalanceTransaction,
    "StripeChargeCustomer": StripeChargeCustomer,
    "StripeChargeDestination": StripeChargeDestination,
    "StripeChargeDispute": StripeChargeDispute,
    "StripeChargeFailureBalanceTransaction": StripeChargeFailureBalanceTransaction,
    "StripeChargeFraudDetails": StripeChargeFraudDetails,
    "StripeChargeInvoice": StripeChargeInvoice,
    "StripeChargeOnBehalfOf": StripeChargeOnBehalfOf,
    "StripeChargeOutcome": StripeChargeOutcome,
    "StripeChargePaymentIntent": StripeChargePaymentIntent,
    "StripeChargePaymentMethodDetails": StripeChargePaymentMethodDetails,
    "StripeChargeRefunds": StripeChargeRefunds,
    "StripeChargeReview": StripeChargeReview,
    "StripeChargeShipping": StripeChargeShipping,
    "StripeChargeSource": StripeChargeSource,
    "StripeChargeSourceTransfer": StripeChargeSourceTransfer,
    "StripeChargeTransfer": StripeChargeTransfer,
    "StripeChargeTransferData": StripeChargeTransferData,
    "StripeConnectCollectionTransfer": StripeConnectCollectionTransfer,
    "StripeConnectCollectionTransferDestination": StripeConnectCollectionTransferDestination,
    "StripeCoupon": StripeCoupon,
    "StripeCustomer": StripeCustomer,
    "StripeCustomerAddress": StripeCustomerAddress,
    "StripeCustomerCashBalance": StripeCustomerCashBalance,
    "StripeCustomerDefaultSource": StripeCustomerDefaultSource,
    "StripeCustomerDiscount": StripeCustomerDiscount,
    "StripeCustomerShipping": StripeCustomerShipping,
    "StripeCustomerSource": StripeCustomerSource,
    "StripeCustomerTestClock": StripeCustomerTestClock,
    "StripeDeletedApplication": StripeDeletedApplication,
    "StripeDeletedBankAccount": StripeDeletedBankAccount,
    "StripeDeletedCard": StripeDeletedCard,
    "StripeDeletedCoupon": StripeDeletedCoupon,
    "StripeDeletedCustomer": StripeDeletedCustomer,
    "StripeDeletedDiscount": StripeDeletedDiscount,
    "StripeDeletedInvoice": StripeDeletedInvoice,
    "StripeDeletedPlan": StripeDeletedPlan,
    "StripeDeletedPrice": StripeDeletedPrice,
    "StripeDeletedProduct": StripeDeletedProduct,
    "StripeDeletedTaxId": StripeDeletedTaxId,
    "StripeDiscount": StripeDiscount,
    "StripeDiscountCustomer": StripeDiscountCustomer,
    "StripeDiscountPromotionCode": StripeDiscountPromotionCode,
    "StripeDispute": StripeDispute,
    "StripeDisputeCharge": StripeDisputeCharge,
    "StripeDisputePaymentIntent": StripeDisputePaymentIntent,
    "StripeFeeRefund": StripeFeeRefund,
    "StripeFeeRefundBalanceTransaction": StripeFeeRefundBalanceTransaction,
    "StripeFeeRefundFee": StripeFeeRefundFee,
    "StripeFile": StripeFile,
    "StripeFileLink": StripeFileLink,
    "StripeFileLinkFile": StripeFileLinkFile,
    "StripeFileLinks": StripeFileLinks,
    "StripeInvoice": StripeInvoice,
    "StripeInvoiceAccountTaxIdsInner": StripeInvoiceAccountTaxIdsInner,
    "StripeInvoiceApplication": StripeInvoiceApplication,
    "StripeInvoiceCharge": StripeInvoiceCharge,
    "StripeInvoiceCustomer": StripeInvoiceCustomer,
    "StripeInvoiceCustomerAddress": StripeInvoiceCustomerAddress,
    "StripeInvoiceCustomerShipping": StripeInvoiceCustomerShipping,
    "StripeInvoiceDefaultPaymentMethod": StripeInvoiceDefaultPaymentMethod,
    "StripeInvoiceDefaultSource": StripeInvoiceDefaultSource,
    "StripeInvoiceDiscount": StripeInvoiceDiscount,
    "StripeInvoiceDiscountsInner": StripeInvoiceDiscountsInner,
    "StripeInvoiceFromInvoice": StripeInvoiceFromInvoice,
    "StripeInvoiceLastFinalizationError": StripeInvoiceLastFinalizationError,
    "StripeInvoiceLatestRevision": StripeInvoiceLatestRevision,
    "StripeInvoiceLineItem": StripeInvoiceLineItem,
    "StripeInvoiceLineItemDiscountsInner": StripeInvoiceLineItemDiscountsInner,
    "StripeInvoiceLineItemPlan": StripeInvoiceLineItemPlan,
    "StripeInvoiceLineItemPrice": StripeInvoiceLineItemPrice,
    "StripeInvoiceLineItemProrationDetails": StripeInvoiceLineItemProrationDetails,
    "StripeInvoiceOnBehalfOf": StripeInvoiceOnBehalfOf,
    "StripeInvoicePaymentIntent": StripeInvoicePaymentIntent,
    "StripeInvoiceQuote": StripeInvoiceQuote,
    "StripeInvoiceRenderingOptions": StripeInvoiceRenderingOptions,
    "StripeInvoiceSubscription": StripeInvoiceSubscription,
    "StripeInvoiceTestClock": StripeInvoiceTestClock,
    "StripeInvoiceTransferData": StripeInvoiceTransferData,
    "StripeIssuingAuthorization": StripeIssuingAuthorization,
    "StripeIssuingAuthorizationAmountDetails": StripeIssuingAuthorizationAmountDetails,
    "StripeIssuingAuthorizationCardholder": StripeIssuingAuthorizationCardholder,
    "StripeIssuingAuthorizationNetworkData": StripeIssuingAuthorizationNetworkData,
    "StripeIssuingAuthorizationPendingRequest": StripeIssuingAuthorizationPendingRequest,
    "StripeIssuingAuthorizationTreasury": StripeIssuingAuthorizationTreasury,
    "StripeIssuingCard": StripeIssuingCard,
    "StripeIssuingCardReplacedBy": StripeIssuingCardReplacedBy,
    "StripeIssuingCardReplacementFor": StripeIssuingCardReplacementFor,
    "StripeIssuingCardShipping": StripeIssuingCardShipping,
    "StripeIssuingCardWallets": StripeIssuingCardWallets,
    "StripeIssuingCardholder": StripeIssuingCardholder,
    "StripeIssuingCardholderCompany": StripeIssuingCardholderCompany,
    "StripeIssuingCardholderIndividual": StripeIssuingCardholderIndividual,
    "StripeIssuingCardholderSpendingControls": StripeIssuingCardholderSpendingControls,
    "StripeIssuingDispute": StripeIssuingDispute,
    "StripeIssuingDisputeTransaction": StripeIssuingDisputeTransaction,
    "StripeIssuingDisputeTreasury": StripeIssuingDisputeTreasury,
    "StripeIssuingTransaction": StripeIssuingTransaction,
    "StripeIssuingTransactionAmountDetails": StripeIssuingTransactionAmountDetails,
    "StripeIssuingTransactionAuthorization": StripeIssuingTransactionAuthorization,
    "StripeIssuingTransactionBalanceTransaction": StripeIssuingTransactionBalanceTransaction,
    "StripeIssuingTransactionCard": StripeIssuingTransactionCard,
    "StripeIssuingTransactionCardholder": StripeIssuingTransactionCardholder,
    "StripeIssuingTransactionDispute": StripeIssuingTransactionDispute,
    "StripeIssuingTransactionPurchaseDetails": StripeIssuingTransactionPurchaseDetails,
    "StripeIssuingTransactionTreasury": StripeIssuingTransactionTreasury,
    "StripeLineItem": StripeLineItem,
    "StripeLineItemPrice": StripeLineItemPrice,
    "StripeMandate": StripeMandate,
    "StripeMandatePaymentMethod": StripeMandatePaymentMethod,
    "StripePaymentIntent": StripePaymentIntent,
    "StripePaymentIntentApplication": StripePaymentIntentApplication,
    "StripePaymentIntentAutomaticPaymentMethods": StripePaymentIntentAutomaticPaymentMethods,
    "StripePaymentIntentCustomer": StripePaymentIntentCustomer,
    "StripePaymentIntentInvoice": StripePaymentIntentInvoice,
    "StripePaymentIntentLastPaymentError": StripePaymentIntentLastPaymentError,
    "StripePaymentIntentLatestCharge": StripePaymentIntentLatestCharge,
    "StripePaymentIntentNextAction": StripePaymentIntentNextAction,
    "StripePaymentIntentOnBehalfOf": StripePaymentIntentOnBehalfOf,
    "StripePaymentIntentPaymentMethod": StripePaymentIntentPaymentMethod,
    "StripePaymentIntentPaymentMethodOptions": StripePaymentIntentPaymentMethodOptions,
    "StripePaymentIntentProcessing": StripePaymentIntentProcessing,
    "StripePaymentIntentReview": StripePaymentIntentReview,
    "StripePaymentIntentShipping": StripePaymentIntentShipping,
    "StripePaymentIntentSource": StripePaymentIntentSource,
    "StripePaymentIntentTransferData": StripePaymentIntentTransferData,
    "StripePaymentMethod": StripePaymentMethod,
    "StripePaymentMethodCustomer": StripePaymentMethodCustomer,
    "StripePayout": StripePayout,
    "StripePayoutBalanceTransaction": StripePayoutBalanceTransaction,
    "StripePayoutDestination": StripePayoutDestination,
    "StripePayoutFailureBalanceTransaction": StripePayoutFailureBalanceTransaction,
    "StripePayoutOriginalPayout": StripePayoutOriginalPayout,
    "StripePayoutReversedBy": StripePayoutReversedBy,
    "StripePerson": StripePerson,
    "StripePersonAddressKana": StripePersonAddressKana,
    "StripePersonAddressKanji": StripePersonAddressKanji,
    "StripePersonFutureRequirements": StripePersonFutureRequirements,
    "StripePersonRequirements": StripePersonRequirements,
    "StripePlan": StripePlan,
    "StripePlanProduct": StripePlanProduct,
    "StripePlanTransformUsage": StripePlanTransformUsage,
    "StripePlatformTaxFee": StripePlatformTaxFee,
    "StripePrice": StripePrice,
    "StripePriceCustomUnitAmount": StripePriceCustomUnitAmount,
    "StripePriceProduct": StripePriceProduct,
    "StripePriceRecurring": StripePriceRecurring,
    "StripePriceTransformQuantity": StripePriceTransformQuantity,
    "StripeProduct": StripeProduct,
    "StripeProductDefaultPrice": StripeProductDefaultPrice,
    "StripeProductPackageDimensions": StripeProductPackageDimensions,
    "StripeProductTaxCode": StripeProductTaxCode,
    "StripePromotionCode": StripePromotionCode,
    "StripePromotionCodeCustomer": StripePromotionCodeCustomer,
    "StripeQuote": StripeQuote,
    "StripeQuoteApplication": StripeQuoteApplication,
    "StripeQuoteCustomer": StripeQuoteCustomer,
    "StripeQuoteDefaultTaxRatesInner": StripeQuoteDefaultTaxRatesInner,
    "StripeQuoteFromQuote": StripeQuoteFromQuote,
    "StripeQuoteInvoice": StripeQuoteInvoice,
    "StripeQuoteInvoiceSettings": StripeQuoteInvoiceSettings,
    "StripeQuoteOnBehalfOf": StripeQuoteOnBehalfOf,
    "StripeQuoteSubscription": StripeQuoteSubscription,
    "StripeQuoteSubscriptionSchedule": StripeQuoteSubscriptionSchedule,
    "StripeQuoteTestClock": StripeQuoteTestClock,
    "StripeQuoteTransferData": StripeQuoteTransferData,
    "StripeRefund": StripeRefund,
    "StripeRefundCharge": StripeRefundCharge,
    "StripeRefundFailureBalanceTransaction": StripeRefundFailureBalanceTransaction,
    "StripeRefundPaymentIntent": StripeRefundPaymentIntent,
    "StripeRefundSourceTransferReversal": StripeRefundSourceTransferReversal,
    "StripeRefundTransferReversal": StripeRefundTransferReversal,
    "StripeReserveTransaction": StripeReserveTransaction,
    "StripeReview": StripeReview,
    "StripeReviewCharge": StripeReviewCharge,
    "StripeReviewIpAddressLocation": StripeReviewIpAddressLocation,
    "StripeReviewPaymentIntent": StripeReviewPaymentIntent,
    "StripeReviewSession": StripeReviewSession,
    "StripeSetupAttempt": StripeSetupAttempt,
    "StripeSetupAttemptApplication": StripeSetupAttemptApplication,
    "StripeSetupAttemptCustomer": StripeSetupAttemptCustomer,
    "StripeSetupAttemptOnBehalfOf": StripeSetupAttemptOnBehalfOf,
    "StripeSetupAttemptPaymentMethod": StripeSetupAttemptPaymentMethod,
    "StripeSetupAttemptSetupError": StripeSetupAttemptSetupError,
    "StripeSetupAttemptSetupIntent": StripeSetupAttemptSetupIntent,
    "StripeSetupIntent": StripeSetupIntent,
    "StripeSetupIntentApplication": StripeSetupIntentApplication,
    "StripeSetupIntentCustomer": StripeSetupIntentCustomer,
    "StripeSetupIntentLastSetupError": StripeSetupIntentLastSetupError,
    "StripeSetupIntentLatestAttempt": StripeSetupIntentLatestAttempt,
    "StripeSetupIntentMandate": StripeSetupIntentMandate,
    "StripeSetupIntentNextAction": StripeSetupIntentNextAction,
    "StripeSetupIntentOnBehalfOf": StripeSetupIntentOnBehalfOf,
    "StripeSetupIntentPaymentMethod": StripeSetupIntentPaymentMethod,
    "StripeSetupIntentPaymentMethodOptions": StripeSetupIntentPaymentMethodOptions,
    "StripeSetupIntentSingleUseMandate": StripeSetupIntentSingleUseMandate,
    "StripeSource": StripeSource,
    "StripeSubscription": StripeSubscription,
    "StripeSubscriptionApplication": StripeSubscriptionApplication,
    "StripeSubscriptionBillingThresholds": StripeSubscriptionBillingThresholds,
    "StripeSubscriptionCustomer": StripeSubscriptionCustomer,
    "StripeSubscriptionDefaultPaymentMethod": StripeSubscriptionDefaultPaymentMethod,
    "StripeSubscriptionDefaultSource": StripeSubscriptionDefaultSource,
    "StripeSubscriptionDiscount": StripeSubscriptionDiscount,
    "StripeSubscriptionItem": StripeSubscriptionItem,
    "StripeSubscriptionItemBillingThresholds": StripeSubscriptionItemBillingThresholds,
    "StripeSubscriptionLatestInvoice": StripeSubscriptionLatestInvoice,
    "StripeSubscriptionOnBehalfOf": StripeSubscriptionOnBehalfOf,
    "StripeSubscriptionPauseCollection": StripeSubscriptionPauseCollection,
    "StripeSubscriptionPaymentSettings": StripeSubscriptionPaymentSettings,
    "StripeSubscriptionPendingInvoiceItemInterval": StripeSubscriptionPendingInvoiceItemInterval,
    "StripeSubscriptionPendingSetupIntent": StripeSubscriptionPendingSetupIntent,
    "StripeSubscriptionPendingUpdate": StripeSubscriptionPendingUpdate,
    "StripeSubscriptionSchedule": StripeSubscriptionSchedule,
    "StripeSubscriptionScheduleApplication": StripeSubscriptionScheduleApplication,
    "StripeSubscriptionScheduleCurrentPhase": StripeSubscriptionScheduleCurrentPhase,
    "StripeSubscriptionScheduleCustomer": StripeSubscriptionScheduleCustomer,
    "StripeSubscriptionScheduleSubscription": StripeSubscriptionScheduleSubscription,
    "StripeSubscriptionScheduleTestClock": StripeSubscriptionScheduleTestClock,
    "StripeSubscriptionTestClock": StripeSubscriptionTestClock,
    "StripeSubscriptionTransferData": StripeSubscriptionTransferData,
    "StripeTaxCode": StripeTaxCode,
    "StripeTaxDeductedAtSource": StripeTaxDeductedAtSource,
    "StripeTaxId": StripeTaxId,
    "StripeTaxIdCustomer": StripeTaxIdCustomer,
    "StripeTaxIdVerification": StripeTaxIdVerification,
    "StripeTaxRate": StripeTaxRate,
    "StripeTestHelpersTestClock": StripeTestHelpersTestClock,
    "StripeTopup": StripeTopup,
    "StripeTopupBalanceTransaction": StripeTopupBalanceTransaction,
    "StripeTopupSource": StripeTopupSource,
    "StripeTransfer": StripeTransfer,
    "StripeTransferBalanceTransaction": StripeTransferBalanceTransaction,
    "StripeTransferDestination": StripeTransferDestination,
    "StripeTransferDestinationPayment": StripeTransferDestinationPayment,
    "StripeTransferReversal": StripeTransferReversal,
    "StripeTransferReversalDestinationPaymentRefund": StripeTransferReversalDestinationPaymentRefund,
    "StripeTransferReversalSourceRefund": StripeTransferReversalSourceRefund,
    "StripeTransferReversalTransfer": StripeTransferReversalTransfer,
    "StripeTransferSourceTransaction": StripeTransferSourceTransaction,
    "SubscriptionAutomaticTax": SubscriptionAutomaticTax,
    "SubscriptionBillingThresholds": SubscriptionBillingThresholds,
    "SubscriptionItemBillingThresholds": SubscriptionItemBillingThresholds,
    "SubscriptionPauseCollection": SubscriptionPauseCollection,
    "SubscriptionPaymentSettings": SubscriptionPaymentSettings,
    "SubscriptionPaymentSettingsPaymentMethodOptions": SubscriptionPaymentSettingsPaymentMethodOptions,
    "SubscriptionPendingInvoiceItemInterval": SubscriptionPendingInvoiceItemInterval,
    "SubscriptionPendingUpdate": SubscriptionPendingUpdate,
    "SubscriptionScheduleCurrentPhase": SubscriptionScheduleCurrentPhase,
    "SubscriptionScheduleDefaultSettings": SubscriptionScheduleDefaultSettings,
    "SubscriptionScheduleDefaultSettingsBillingThresholds": SubscriptionScheduleDefaultSettingsBillingThresholds,
    "SubscriptionScheduleDefaultSettingsDefaultPaymentMethod": SubscriptionScheduleDefaultSettingsDefaultPaymentMethod,
    "SubscriptionScheduleDefaultSettingsInvoiceSettings": SubscriptionScheduleDefaultSettingsInvoiceSettings,
    "SubscriptionScheduleDefaultSettingsOnBehalfOf": SubscriptionScheduleDefaultSettingsOnBehalfOf,
    "SubscriptionScheduleDefaultSettingsTransferData": SubscriptionScheduleDefaultSettingsTransferData,
    "SubscriptionSchedulePhase": SubscriptionSchedulePhase,
    "SubscriptionSchedulePhaseBillingThresholds": SubscriptionSchedulePhaseBillingThresholds,
    "SubscriptionSchedulePhaseCoupon": SubscriptionSchedulePhaseCoupon,
    "SubscriptionSchedulePhaseDefaultPaymentMethod": SubscriptionSchedulePhaseDefaultPaymentMethod,
    "SubscriptionSchedulePhaseInvoiceSettings": SubscriptionSchedulePhaseInvoiceSettings,
    "SubscriptionSchedulePhaseTransferData": SubscriptionSchedulePhaseTransferData,
    "SubscriptionTransferData": SubscriptionTransferData,
    "TaxIdVerification": TaxIdVerification,
    "TaxLocation": TaxLocation,
    "ThresholdReasonItemReason": ThresholdReasonItemReason,
    "TotalDetailsBreakdown": TotalDetailsBreakdown,
    "TransactionAmountDetails": TransactionAmountDetails,
    "TransactionMerchantData": TransactionMerchantData,
    "TransactionPurchaseDetails": TransactionPurchaseDetails,
    "TransactionPurchaseDetailsFlight": TransactionPurchaseDetailsFlight,
    "TransactionPurchaseDetailsFuel": TransactionPurchaseDetailsFuel,
    "TransactionPurchaseDetailsLodging": TransactionPurchaseDetailsLodging,
    "TransactionTreasury": TransactionTreasury,
    "TreasuryTosAcceptance": TreasuryTosAcceptance,
    "UpfrontTotalDetails": UpfrontTotalDetails,
    "UsBankAccountFinancialConnections": UsBankAccountFinancialConnections,
    "UsBankAccountNetworks": UsBankAccountNetworks,
    "User": User,
    "ValidationError": ValidationError,
    "VerificationAdditionalDocument": VerificationAdditionalDocument,
    "VerificationAdditionalDocumentBack": VerificationAdditionalDocumentBack,
    "VerificationAdditionalDocumentFront": VerificationAdditionalDocumentFront,
    "VerificationDocument": VerificationDocument,
    "VerificationDocumentBack": VerificationDocumentBack,
    "VerificationDocumentFront": VerificationDocumentFront,
    "WalletMasterpass": WalletMasterpass,
    "WalletMasterpassBillingAddress": WalletMasterpassBillingAddress,
    "WalletMasterpassShippingAddress": WalletMasterpassShippingAddress,
    "WalletVisaCheckout": WalletVisaCheckout,
    "WalletsApplePay": WalletsApplePay,
    "WalletsGooglePay": WalletsGooglePay,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
