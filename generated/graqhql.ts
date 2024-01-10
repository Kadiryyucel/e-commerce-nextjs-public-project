

import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  Day: { input: number; output: number; }
  Decimal: { input: number; output: number; }
  GenericScalar: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
  JSONString: { input: string; output: string; }
  Metadata: { input: Record<string, string>; output: Record<string, string>; }
  Minute: { input: number; output: number; }
  PositiveDecimal: { input: number; output: number; }
  UUID: { input: string; output: string; }
  Upload: { input: unknown; output: unknown; }
  WeightScalar: { input: unknown; output: unknown; }
  _Any: { input: unknown; output: unknown; }
};

/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - ADDRESS_CREATED (async): An address was created.
 */
export type AccountAddressCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/**
 * Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
 *
 * Triggers the following webhook events:
 * - ADDRESS_DELETED (async): An address was deleted.
 */
export type AccountAddressDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

/**
 * Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
 *
 * Triggers the following webhook events:
 * - ADDRESS_UPDATED (async): An address was updated.
 */
export type AccountAddressUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

/**
 * Event sent when account change email is requested.
 *
 * Added in Saleor 3.15.
 */
export type AccountChangeEmailRequested = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The new email address the user wants to change to. */
  newEmail?: Maybe<Scalars['String']['output']>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when account confirmation requested. This event is always sent. enableAccountConfirmationByEmail flag set to True is not required.
 *
 * Added in Saleor 3.15.
 */
export type AccountConfirmationRequested = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when account is confirmed.
 *
 * Added in Saleor 3.15.
 */
export type AccountConfirmed = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - ACCOUNT_DELETED (async): Account was deleted.
 */
export type AccountDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/**
 * Event sent when account delete is requested.
 *
 * Added in Saleor 3.15.
 */
export type AccountDeleteRequested = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when account is deleted.
 *
 * Added in Saleor 3.15.
 */
export type AccountDeleted = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when account email is changed.
 *
 * Added in Saleor 3.15.
 */
export type AccountEmailChanged = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The new email address. */
  newEmail?: Maybe<Scalars['String']['output']>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents errors in account mutations. */
export type AccountError = {
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AccountErrorCode =
  | 'ACCOUNT_NOT_CONFIRMED'
  | 'ACTIVATE_OWN_ACCOUNT'
  | 'ACTIVATE_SUPERUSER_ACCOUNT'
  | 'CHANNEL_INACTIVE'
  | 'DEACTIVATE_OWN_ACCOUNT'
  | 'DEACTIVATE_SUPERUSER_ACCOUNT'
  | 'DELETE_NON_STAFF_USER'
  | 'DELETE_OWN_ACCOUNT'
  | 'DELETE_STAFF_ACCOUNT'
  | 'DELETE_SUPERUSER_ACCOUNT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INACTIVE'
  | 'INVALID'
  | 'INVALID_CREDENTIALS'
  | 'INVALID_PASSWORD'
  | 'JWT_DECODE_ERROR'
  | 'JWT_INVALID_CSRF_TOKEN'
  | 'JWT_INVALID_TOKEN'
  | 'JWT_MISSING_TOKEN'
  | 'JWT_SIGNATURE_EXPIRED'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'MISSING_CHANNEL_SLUG'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_GROUP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'PASSWORD_ENTIRELY_NUMERIC'
  | 'PASSWORD_RESET_ALREADY_REQUESTED'
  | 'PASSWORD_TOO_COMMON'
  | 'PASSWORD_TOO_SHORT'
  | 'PASSWORD_TOO_SIMILAR'
  | 'REQUIRED'
  | 'UNIQUE';

/** Fields required to update the user. */
export type AccountInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
};

/**
 * Register a new user.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_CREATED (async): A new customer account was created.
 * - NOTIFY_USER (async): A notification for account confirmation.
 * - ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.
 */
export type AccountRegister = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

/** Fields required to create a user. */
export type AccountRegisterInput = {
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the user. */
  email: Scalars['String']['input'];
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** User public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Password. */
  password: Scalars['String']['input'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account delete request.
 * - ACCOUNT_DELETE_REQUESTED (async): An account delete requested.
 */
export type AccountRequestDeletion = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer's address was updated.
 */
export type AccountSetDefaultAddress = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Event sent when setting a new password is requested.
 *
 * Added in Saleor 3.15.
 */
export type AccountSetPasswordRequested = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type AccountUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & ObjectWithMetadata & {
  /** The city of the address. */
  city: Scalars['String']['output'];
  /** The district of the address. */
  cityArea: Scalars['String']['output'];
  /** Company or organization name. */
  companyName: Scalars['String']['output'];
  /** The country of the address. */
  country: CountryDisplay;
  /** The country area of the address. */
  countryArea: Scalars['String']['output'];
  /** The given name of the address. */
  firstName: Scalars['String']['output'];
  /** The ID of the address. */
  id: Scalars['ID']['output'];
  /** Address is user's default billing address. */
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  /** The family name of the address. */
  lastName: Scalars['String']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.10.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The phone number assigned the address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postal code of the address. */
  postalCode: Scalars['String']['output'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.10.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.10.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.10.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The first line of the address. */
  streetAddress1: Scalars['String']['output'];
  /** The second line of the address. */
  streetAddress2: Scalars['String']['output'];
};


/** Represents user address data. */
export type AddressMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user address data. */
export type AddressMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents user address data. */
export type AddressPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user address data. */
export type AddressPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_CREATED (async): A new address was created.
 */
export type AddressCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
};

/**
 * Event sent when new address is created.
 *
 * Added in Saleor 3.5.
 */
export type AddressCreated = Event & {
  /** The address the event relates to. */
  address?: Maybe<Address>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_DELETED (async): An address was deleted.
 */
export type AddressDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
};

/**
 * Event sent when address is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AddressDeleted = Event & {
  /** The address the event relates to. */
  address?: Maybe<Address>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Address public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Phone number.
   *
   * Phone numbers are validated with Google's [libphonenumber](https://github.com/google/libphonenumber) library.
   */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer was updated.
 */
export type AddressSetDefault = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type AddressTypeEnum =
  | 'BILLING'
  | 'SHIPPING';

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_UPDATED (async): An address was updated.
 */
export type AddressUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  errors: Array<AccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
};

/**
 * Event sent when address is updated.
 *
 * Added in Saleor 3.5.
 */
export type AddressUpdated = Event & {
  /** The address the event relates to. */
  address?: Maybe<Address>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents address validation rules for a country. */
export type AddressValidationData = {
  /**
   * The address format of the address validation rule.
   *
   * Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:
   *
   * - `N`: Name
   * - `O`: Organisation
   * - `A`: Street Address Line(s)
   * - `D`: Dependent locality (may be an inner-city district or a suburb)
   * - `C`: City or Locality
   * - `S`: Administrative area such as a state, province, island etc
   * - `Z`: Zip or postal code
   * - `X`: Sorting code
   *
   * [Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)
   */
  addressFormat: Scalars['String']['output'];
  /**
   * The latin address format of the address validation rule.
   *
   * Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:
   *
   * - `N`: Name
   * - `O`: Organisation
   * - `A`: Street Address Line(s)
   * - `D`: Dependent locality (may be an inner-city district or a suburb)
   * - `C`: City or Locality
   * - `S`: Administrative area such as a state, province, island etc
   * - `Z`: Zip or postal code
   * - `X`: Sorting code
   *
   * [Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)
   */
  addressLatinFormat: Scalars['String']['output'];
  /** The allowed fields to use in address. */
  allowedFields: Array<Scalars['String']['output']>;
  /** The available choices for the city area of the address validation rule. */
  cityAreaChoices: Array<ChoiceValue>;
  /** The formal name of the city area of the address validation rule. */
  cityAreaType: Scalars['String']['output'];
  /** The available choices for the city of the address validation rule. */
  cityChoices: Array<ChoiceValue>;
  /** The formal name of the city of the address validation rule. */
  cityType: Scalars['String']['output'];
  /** The available choices for the country area of the address validation rule. */
  countryAreaChoices: Array<ChoiceValue>;
  /** The formal name of the county area of the address validation rule. */
  countryAreaType: Scalars['String']['output'];
  /** The country code of the address validation rule. */
  countryCode: Scalars['String']['output'];
  /** The country name of the address validation rule. */
  countryName: Scalars['String']['output'];
  /** The example postal code of the address validation rule. */
  postalCodeExamples: Array<Scalars['String']['output']>;
  /** The regular expression for postal code validation. */
  postalCodeMatchers: Array<Scalars['String']['output']>;
  /** The postal code prefix of the address validation rule. */
  postalCodePrefix: Scalars['String']['output'];
  /** The formal name of the postal code of the address validation rule. */
  postalCodeType: Scalars['String']['output'];
  /** The required fields to create a valid address. */
  requiredFields: Array<Scalars['String']['output']>;
  /** The list of fields that should be in upper case for address validation rule. */
  upperFields: Array<Scalars['String']['output']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  /** The ID of allocation. */
  id: Scalars['ID']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int']['output'];
  /**
   * The warehouse were items were allocated.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  warehouse: Warehouse;
};

/**
 * Determine the allocation strategy for the channel.
 *
 *     PRIORITIZE_SORTING_ORDER - allocate stocks according to the warehouses' order
 *     within the channel
 *
 *     PRIORITIZE_HIGH_STOCK - allocate stock in a warehouse with the most stock
 *
 */
export type AllocationStrategyEnum =
  | 'PRIORITIZE_HIGH_STOCK'
  | 'PRIORITIZE_SORTING_ORDER';

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  /** Description of this app. */
  aboutApp?: Maybe<Scalars['String']['output']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** URL to iframe with the app. */
  appUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  author?: Maybe<Scalars['String']['output']>;
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  brand?: Maybe<AppBrand>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  configurationUrl?: Maybe<Scalars['String']['output']>;
  /** The date and time when the app was created. */
  created?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  /** URL to details about the privacy policy on the app owner page. */
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  /**
   * App's dashboard extensions.
   *
   * Added in Saleor 3.1.
   */
  extensions: Array<AppExtension>;
  /** Homepage of the app. */
  homepageUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the app. */
  id: Scalars['ID']['output'];
  /** Determine if app will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /**
   * URL to manifest used during app's installation.
   *
   * Added in Saleor 3.5.
   */
  manifestUrl?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the app. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of the app's permissions. */
  permissions?: Maybe<Array<Permission>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Support page for the app. */
  supportUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Last 4 characters of the tokens.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  tokens?: Maybe<Array<AppToken>>;
  /** Type of the app. */
  type?: Maybe<AppTypeEnum>;
  /** Version number of the app. */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * List of webhooks assigned to this app.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  webhooks?: Maybe<Array<Webhook>>;
};


/** Represents app data. */
export type AppMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents app data. */
export type AppPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_STATUS_CHANGED (async): An app was activated.
 */
export type AppActivate = {
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Represents the app's brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrand = {
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  logo: AppBrandLogo;
};

/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrandLogo = {
  /**
   * URL to the default logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  default: Scalars['String']['output'];
};


/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppBrandLogoDefaultArgs = {
  format?: InputMaybe<IconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppCountableConnection = {
  edges: Array<AppCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: App;
};

/**
 * Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_INSTALLED (async): An app was installed.
 */
export type AppCreate = {
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AppError>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_STATUS_CHANGED (async): An app was deactivated.
 */
export type AppDeactivate = {
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_DELETED (async): An app was deleted.
 */
export type AppDelete = {
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeleteFailedInstallation = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

/**
 * Event sent when app is deleted.
 *
 * Added in Saleor 3.4.
 */
export type AppDeleted = Event & {
  /** The application the event relates to. */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type AppError = {
  /** The error code. */
  code: AppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export type AppErrorCode =
  | 'FORBIDDEN'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_CUSTOM_HEADERS'
  | 'INVALID_MANIFEST_FORMAT'
  | 'INVALID_PERMISSION'
  | 'INVALID_STATUS'
  | 'INVALID_URL_FORMAT'
  | 'MANIFEST_URL_CANT_CONNECT'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_APP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'UNSUPPORTED_SALEOR_VERSION';

/** Represents app data. */
export type AppExtension = Node & {
  /** JWT token used to authenticate by third-party app extension. */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The app assigned to app extension. */
  app: App;
  /** The ID of the app extension. */
  id: Scalars['ID']['output'];
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']['output'];
};

export type AppExtensionCountableConnection = {
  edges: Array<AppExtensionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppExtensionCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AppExtension;
};

export type AppExtensionFilterInput = {
  mount?: InputMaybe<Array<AppExtensionMountEnum>>;
  target?: InputMaybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export type AppExtensionMountEnum =
  | 'CUSTOMER_DETAILS_MORE_ACTIONS'
  | 'CUSTOMER_OVERVIEW_CREATE'
  | 'CUSTOMER_OVERVIEW_MORE_ACTIONS'
  | 'NAVIGATION_CATALOG'
  | 'NAVIGATION_CUSTOMERS'
  | 'NAVIGATION_DISCOUNTS'
  | 'NAVIGATION_ORDERS'
  | 'NAVIGATION_PAGES'
  | 'NAVIGATION_TRANSLATIONS'
  | 'ORDER_DETAILS_MORE_ACTIONS'
  | 'ORDER_OVERVIEW_CREATE'
  | 'ORDER_OVERVIEW_MORE_ACTIONS'
  | 'PRODUCT_DETAILS_MORE_ACTIONS'
  | 'PRODUCT_OVERVIEW_CREATE'
  | 'PRODUCT_OVERVIEW_MORE_ACTIONS';

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export type AppExtensionTargetEnum =
  | 'APP_PAGE'
  | 'POPUP';

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppFetchManifest = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  /** The validated manifest. */
  manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppInstallInput = {
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the app to install. */
  appName?: InputMaybe<Scalars['String']['input']>;
  /** URL to app's manifest in JSON format. */
  manifestUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Job & Node & {
  /** The name of the app installation. */
  appName: Scalars['String']['output'];
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  brand?: Maybe<AppBrand>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the app installation. */
  id: Scalars['ID']['output'];
  /** The URL address of manifest for the app installation. */
  manifestUrl: Scalars['String']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Event sent when new app is installed.
 *
 * Added in Saleor 3.4.
 */
export type AppInstalled = Event & {
  /** The application the event relates to. */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrand = {
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  logo: AppManifestBrandLogo;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrandLogo = {
  /**
   * Data URL with a base64 encoded logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  default: Scalars['String']['output'];
};


/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AppManifestBrandLogoDefaultArgs = {
  format?: InputMaybe<IconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AppManifestExtension = {
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']['output'];
  /** Place where given extension will be mounted. */
  mount: AppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<Permission>;
  /** Type of way how app extension will be opened. */
  target: AppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']['output'];
};

export type AppManifestRequiredSaleorVersion = {
  /**
   * Required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  constraint: Scalars['String']['output'];
  /**
   * Informs if the Saleor version matches the required one.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  satisfied: Scalars['Boolean']['output'];
};

export type AppManifestWebhook = {
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: Maybe<Array<WebhookEventTypeAsyncEnum>>;
  /** The name of the webhook. */
  name: Scalars['String']['output'];
  /** Subscription query of a webhook */
  query: Scalars['String']['output'];
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: Maybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl: Scalars['String']['output'];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_INSTALLED (async): An app was installed.
 */
export type AppRetryInstall = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  errors: Array<AppError>;
};

export type AppSortField =
  /** Sort apps by creation date. */
  | 'CREATION_DATE'
  /** Sort apps by name. */
  | 'NAME';

export type AppSortingInput = {
  /** Specifies the direction in which to sort apps. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

/**
 * Event sent when app status has changed.
 *
 * Added in Saleor 3.4.
 */
export type AppStatusChanged = Event & {
  /** The application the event relates to. */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents token data. */
export type AppToken = Node & {
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars['String']['output']>;
  /** The ID of the app token. */
  id: Scalars['ID']['output'];
  /** Name of the authenticated token. */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AppError>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  errors: Array<AppError>;
};

export type AppTokenInput = {
  /** ID of app. */
  app: Scalars['ID']['input'];
  /** Name of the token. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean']['output'];
};

/** Enum determining type of your App. */
export type AppTypeEnum =
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  | 'LOCAL'
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  | 'THIRDPARTY';

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_UPDATED (async): An app was updated.
 */
export type AppUpdate = {
  app?: Maybe<App>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>;
  errors: Array<AppError>;
};

/**
 * Event sent when app is updated.
 *
 * Added in Saleor 3.4.
 */
export type AppUpdated = Event & {
  /** The application the event relates to. */
  app?: Maybe<App>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AreaUnitsEnum =
  | 'SQ_CM'
  | 'SQ_DM'
  | 'SQ_FT'
  | 'SQ_INCH'
  | 'SQ_KM'
  | 'SQ_M'
  | 'SQ_MM'
  | 'SQ_YD';

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type AssignNavigation = {
  errors: Array<MenuError>;
  /** Assigned navigation menu. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type AssignedVariantAttribute = {
  /** Attribute assigned to variant. */
  attribute: Attribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars['Boolean']['output'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  /**
   * Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  availableInGrid: Scalars['Boolean']['output'];
  /** List of attribute's values. */
  choices?: Maybe<AttributeValueCountableConnection>;
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  filterableInDashboard: Scalars['Boolean']['output'];
  /**
   * Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  filterableInStorefront: Scalars['Boolean']['output'];
  /** The ID of the attribute. */
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** A list of product types that use this attribute as a product attribute. */
  productTypes: ProductTypeCountableConnection;
  /** A list of product types that use this attribute as a product variant attribute. */
  productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']['output']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition: Scalars['Int']['output'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
  /** The attribute type. */
  type?: Maybe<AttributeTypeEnum>;
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  valueRequired: Scalars['Boolean']['output'];
  /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
  visibleInStorefront: Scalars['Boolean']['output'];
  /** Flag indicating that attribute has predefined choices. */
  withChoices: Scalars['Boolean']['output'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates attributes.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_CREATED (async): An attribute was created.
 */
export type AttributeBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeBulkCreateError>;
  /** List of the created attributes. */
  results: Array<AttributeBulkCreateResult>;
};

export type AttributeBulkCreateError = {
  /** The error code. */
  code: AttributeBulkCreateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AttributeBulkCreateErrorCode =
  | 'ALREADY_EXISTS'
  | 'BLANK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LENGTH'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type AttributeBulkCreateResult = {
  /** Attribute data. */
  attribute?: Maybe<Attribute>;
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<AttributeBulkCreateError>>;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_DELETED (async): An attribute was deleted.
 */
export type AttributeBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeError>;
};

/**
 * Creates/updates translations for attributes.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeBulkTranslate = {
  /** Returns how many translations were created/updated. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeBulkTranslateError>;
  /** List of the translations. */
  results: Array<AttributeBulkTranslateResult>;
};

export type AttributeBulkTranslateError = {
  /** The error code. */
  code: AttributeTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

export type AttributeBulkTranslateInput = {
  /** External reference of an attribute. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Attribute ID. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  languageCode: LanguageCodeEnum;
  /** Translation fields. */
  translationFields: NameTranslationInput;
};

export type AttributeBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<AttributeBulkTranslateError>>;
  /** Attribute translation data. */
  translation?: Maybe<AttributeTranslation>;
};

/**
 * Updates attributes.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
 * - ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
 * - ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.
 */
export type AttributeBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeBulkUpdateError>;
  /** List of the updated attributes. */
  results: Array<AttributeBulkUpdateResult>;
};

export type AttributeBulkUpdateError = {
  /** The error code. */
  code: AttributeBulkUpdateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AttributeBulkUpdateErrorCode =
  | 'ALREADY_EXISTS'
  | 'BLANK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LENGTH'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type AttributeBulkUpdateInput = {
  /** External ID of this attribute. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Fields to update. */
  fields: AttributeUpdateInput;
  /** ID of an attribute to update. */
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AttributeBulkUpdateResult = {
  /** Attribute data. */
  attribute?: Maybe<Attribute>;
  /** List of errors occurred on update attempt. */
  errors?: Maybe<Array<AttributeBulkUpdateError>>;
};

export type AttributeChoicesSortField =
  /** Sort attribute choice by name. */
  | 'NAME'
  /** Sort attribute choice by slug. */
  | 'SLUG';

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort attribute choices. */
  direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attribute;
};

/**
 * Creates an attribute.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_CREATED (async): An attribute was created.
 */
export type AttributeCreate = {
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

/**
 * Represents an input for create of attribute.
 *
 * NOTE: Deprecated fields `filterableInStorefront`, `storefrontSearchPosition` and `availableInGrid` are not supported in bulk mutations: `attributeBulkCreate`, `attributeBulkUpdate`.
 */
export type AttributeCreateInput = {
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** The entity type which can be used as a reference. */
  entityType?: InputMaybe<AttributeEntityTypeEnum>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String']['input'];
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The attribute type. */
  type: AttributeTypeEnum;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attribute's values. */
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when new attribute is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeCreated = Event & {
  /** The attribute the event relates to. */
  attribute?: Maybe<Attribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_DELETED (async): An attribute was deleted.
 */
export type AttributeDelete = {
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

/**
 * Event sent when attribute is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeDeleted = Event & {
  /** The attribute the event relates to. */
  attribute?: Maybe<Attribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AttributeEntityTypeEnum =
  | 'PAGE'
  | 'PRODUCT'
  | 'PRODUCT_VARIANT';

export type AttributeEntityTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<AttributeEntityTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<AttributeEntityTypeEnum>>;
};

export type AttributeError = {
  /** The error code. */
  code: AttributeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type AttributeErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type AttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  inCategory?: InputMaybe<Scalars['ID']['input']>;
  inCollection?: InputMaybe<Scalars['ID']['input']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<AttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeInput = {
  /** The boolean value of the attribute. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  date?: InputMaybe<DateRangeInput>;
  /** The date/time range that the returned values should be in. */
  dateTime?: InputMaybe<DateTimeRangeInput>;
  /** Internal representation of an attribute name. */
  slug: Scalars['String']['input'];
  /** Internal representation of a value (unique per attribute). */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The range that the returned values should be in. */
  valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export type AttributeInputTypeEnum =
  | 'BOOLEAN'
  | 'DATE'
  | 'DATE_TIME'
  | 'DROPDOWN'
  | 'FILE'
  | 'MULTISELECT'
  | 'NUMERIC'
  | 'PLAIN_TEXT'
  | 'REFERENCE'
  | 'RICH_TEXT'
  | 'SWATCH';

export type AttributeInputTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<AttributeInputTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<AttributeInputTypeEnum>>;
};

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeReorderValues = {
  /** Attribute from which values are reordered. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

export type AttributeSortField =
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  | 'AVAILABLE_IN_GRID'
  /** Sort attributes by the filterable in dashboard flag */
  | 'FILTERABLE_IN_DASHBOARD'
  /** Sort attributes by the filterable in storefront flag */
  | 'FILTERABLE_IN_STOREFRONT'
  /** Sort attributes by the variant only flag */
  | 'IS_VARIANT_ONLY'
  /** Sort attributes by name */
  | 'NAME'
  /** Sort attributes by slug */
  | 'SLUG'
  /** Sort attributes by their position in storefront */
  | 'STOREFRONT_SEARCH_POSITION'
  /** Sort attributes by the value required flag */
  | 'VALUE_REQUIRED'
  /** Sort attributes by visibility in the storefront */
  | 'VISIBLE_IN_STOREFRONT';

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort attributes. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

/** Represents attribute's original translatable fields and related translations. */
export type AttributeTranslatableContent = Node & {
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute?: Maybe<Attribute>;
  /** The ID of the attribute. */
  id: Scalars['ID']['output'];
  /** Name of the attribute to translate. */
  name: Scalars['String']['output'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
};


/** Represents attribute's original translatable fields and related translations. */
export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeTranslate = {
  attribute?: Maybe<Attribute>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** An enumeration. */
export type AttributeTranslateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** Represents attribute translations. */
export type AttributeTranslation = Node & {
  /** The ID of the attribute translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated attribute name. */
  name: Scalars['String']['output'];
};

/** An enumeration. */
export type AttributeTypeEnum =
  | 'PAGE_TYPE'
  | 'PRODUCT_TYPE';

export type AttributeTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<AttributeTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<AttributeTypeEnum>>;
};

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeUpdate = {
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  errors: Array<AttributeError>;
};

/**
 * Represents an input for update of attribute.
 *
 * NOTE: Deprecated fields `filterableInStorefront`, `storefrontSearchPosition` and `availableInGrid` are not supported in bulk mutations: `attributeBulkCreate`, `attributeBulkUpdate`.
 */
export type AttributeUpdateInput = {
  /** New values to be created for this attribute. */
  addValues?: InputMaybe<Array<AttributeValueUpdateInput>>;
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** The unit of attribute values. */
  unit?: InputMaybe<MeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when attribute is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeUpdated = Event & {
  /** The attribute the event relates to. */
  attribute?: Maybe<Attribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']['output']>;
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']['output']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<File>;
  /** The ID of the attribute value. */
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']['output']>;
  /** Represents the text of the attribute value, plain text without formating. */
  plainText?: Maybe<Scalars['String']['output']>;
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars['ID']['output']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars['String']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']['output']>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeValueBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeError>;
};

/**
 * Creates/updates translations for attributes values.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueBulkTranslate = {
  /** Returns how many translations were created/updated. */
  count: Scalars['Int']['output'];
  errors: Array<AttributeValueBulkTranslateError>;
  /** List of the translations. */
  results: Array<AttributeValueBulkTranslateResult>;
};

export type AttributeValueBulkTranslateError = {
  /** The error code. */
  code: AttributeValueTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

export type AttributeValueBulkTranslateInput = {
  /** External reference of an attribute value. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Attribute value ID. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  languageCode: LanguageCodeEnum;
  /** Translation fields. */
  translationFields: AttributeValueTranslationInput;
};

export type AttributeValueBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<AttributeValueBulkTranslateError>>;
  /** Attribute value translation data. */
  translation?: Maybe<AttributeValueTranslation>;
};

export type AttributeValueCountableConnection = {
  edges: Array<AttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeValueCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeValueCreate = {
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueCreateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String']['input'];
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new attribute value is created.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueCreated = Event & {
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeValueDelete = {
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

/**
 * Event sent when attribute value is deleted.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueDeleted = Event & {
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type AttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AttributeValueInput = {
  /** Represents the boolean value of the attribute value. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** Represents the date value of the attribute value. */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  dropdown?: InputMaybe<AttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * List of attribute value IDs or external references.
   *
   * Added in Saleor 3.9.
   */
  multiselect?: InputMaybe<Array<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.9.
   */
  numeric?: InputMaybe<Scalars['String']['input']>;
  /** Plain text content. */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /** List of entity IDs that will be used as references. */
  references?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Text content in JSON format. */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  swatch?: InputMaybe<AttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. This field will be removed in Saleor 4.0. */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Represents attribute value.
 * 1. If ID is provided, then attribute value will be resolved by ID.
 * 2. If externalReference is provided, then attribute value will be resolved by external reference.
 * 3. If value is provided, then attribute value will be resolved by value. If this attribute value doesn't exist, then it will be created.
 * 4. If externalReference and value is provided then new attribute value will be created.
 *
 * Added in Saleor 3.9.
 */
export type AttributeValueSelectableTypeInput = {
  /**
   * External reference of an attribute value.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of an attribute value. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Represents attribute value's original translatable fields and related translations. */
export type AttributeValueTranslatableContent = Node & {
  /**
   * Associated attribute that can be translated.
   *
   * Added in Saleor 3.9.
   */
  attribute?: Maybe<AttributeTranslatableContent>;
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue?: Maybe<AttributeValue>;
  /** The ID of the attribute value translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the attribute value to translate. */
  name: Scalars['String']['output'];
  /** Attribute plain text value. */
  plainText?: Maybe<Scalars['String']['output']>;
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
};


/** Represents attribute value's original translatable fields and related translations. */
export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueTranslate = {
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** An enumeration. */
export type AttributeValueTranslateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** Represents attribute value translations. */
export type AttributeValueTranslation = Node & {
  /** The ID of the attribute value translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated attribute value name. */
  name: Scalars['String']['output'];
  /** Translated plain text attribute value . */
  plainText?: Maybe<Scalars['String']['output']>;
  /**
   * Translated rich-text attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars['JSONString']['output']>;
};

export type AttributeValueTranslationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  /** Translated text. */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Translated text.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type AttributeValueUpdate = {
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<AttributeError>;
};

export type AttributeValueUpdateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when attribute value is updated.
 *
 * Added in Saleor 3.5.
 */
export type AttributeValueUpdated = Event & {
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<AttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Where filtering options.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type AttributeWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<AttributeWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<AttributeWhereInput>>;
  entityType?: InputMaybe<AttributeEntityTypeEnumFilterInput>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  inCategory?: InputMaybe<Scalars['ID']['input']>;
  inCollection?: InputMaybe<Scalars['ID']['input']>;
  inputType?: InputMaybe<AttributeInputTypeEnumFilterInput>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  name?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<AttributeTypeEnumFilterInput>;
  unit?: InputMaybe<MeasurementUnitsEnumFilterInput>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  withChoices?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BulkAttributeValueInput = {
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * File content type.
   *
   * Added in Saleor 3.12.
   */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Represents the date value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  date?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Represents the date/time value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  dropdown?: InputMaybe<AttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * URL of the file attribute. Every time, a new value is created.
   *
   * Added in Saleor 3.12.
   */
  file?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * List of attribute value IDs.
   *
   * Added in Saleor 3.12.
   */
  multiselect?: InputMaybe<Array<AttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.12.
   */
  numeric?: InputMaybe<Scalars['String']['input']>;
  /**
   * Plain text content.
   *
   * Added in Saleor 3.12.
   */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of entity IDs that will be used as references.
   *
   * Added in Saleor 3.12.
   */
  references?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Text content in JSON format.
   *
   * Added in Saleor 3.12.
   */
  richText?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  swatch?: InputMaybe<AttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.This field will be removed in Saleor 4.0. */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BulkProductError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

export type BulkStockError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/**
 * Synchronous webhook for calculating checkout/order taxes.
 *
 * Added in Saleor 3.7.
 */
export type CalculateTaxes = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  taxBase: TaxableObject;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars['String']['input'];
  /** Card security code. */
  cvc?: InputMaybe<Scalars['String']['input']>;
  /** Information about currency and amount. */
  money: MoneyInput;
};

export type CatalogueInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product variant related to the discount.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CataloguePredicateInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<CataloguePredicateInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<CataloguePredicateInput>>;
  /** Defines the category conditions to be met. */
  categoryPredicate?: InputMaybe<CategoryWhereInput>;
  /** Defines the collection conditions to be met. */
  collectionPredicate?: InputMaybe<CollectionWhereInput>;
  /** Defines the product conditions to be met. */
  productPredicate?: InputMaybe<ProductWhereInput>;
  /** Defines the product variant conditions to be met. */
  variantPredicate?: InputMaybe<ProductVariantWhereInput>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  /** List of ancestors of the category. */
  ancestors?: Maybe<CategoryCountableConnection>;
  /** Background image of the category. */
  backgroundImage?: Maybe<Image>;
  /** List of children of the category. */
  children?: Maybe<CategoryCountableConnection>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the category. */
  id: Scalars['ID']['output'];
  /** Level of the category. */
  level: Scalars['Int']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of category */
  name: Scalars['String']['output'];
  /** Parent category. */
  parent?: Maybe<Category>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  /** SEO description of category. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title of category. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Slug of the category. */
  slug: Scalars['String']['output'];
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
  /**
   * The date and time when the category was last updated.
   *
   * Added in Saleor 3.17.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryCreate = {
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when new category is created.
 *
 * Added in Saleor 3.2.
 */
export type CategoryCreated = Event & {
  /** The category the event relates to. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryDelete = {
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when category is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CategoryDeleted = Event & {
  /** The category the event relates to. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Filter by when was the most recent update.
   *
   * Added in Saleor 3.17.
   */
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CategoryInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for a product media. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Category description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * Fields required to update the category metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Category name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the category private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Category slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategorySortField =
  /** Sort categories by name. */
  | 'NAME'
  /** Sort categories by product count. */
  | 'PRODUCT_COUNT'
  /** Sort categories by subcategory count. */
  | 'SUBCATEGORY_COUNT';

export type CategorySortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort categories. */
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

/** Represents category original translatable fields and related translations. */
export type CategoryTranslatableContent = Node & {
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category?: Maybe<Category>;
  /**
   * Category description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the category translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the category translatable content. */
  name: Scalars['String']['output'];
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
};


/** Represents category original translatable fields and related translations. */
export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CategoryTranslate = {
  category?: Maybe<Category>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** Represents category translations. */
export type CategoryTranslation = Node & {
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the category translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated category name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryUpdate = {
  category?: Maybe<Category>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when category is updated.
 *
 * Added in Saleor 3.2.
 */
export type CategoryUpdated = Event & {
  /** The category the event relates to. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type CategoryWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
};

/** Represents channel. */
export type Channel = Node & ObjectWithMetadata & {
  /**
   * Shipping methods that are available for the channel.
   *
   * Added in Saleor 3.6.
   */
  availableShippingMethodsPerCountry?: Maybe<Array<ShippingMethodsPerCountry>>;
  /**
   * Channel-specific checkout settings.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_CHECKOUTS.
   */
  checkoutSettings: CheckoutSettings;
  /**
   * List of shippable countries for the channel.
   *
   * Added in Saleor 3.6.
   */
  countries?: Maybe<Array<CountryDisplay>>;
  /**
   * A currency that is assigned to the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  currencyCode: Scalars['String']['output'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  defaultCountry: CountryDisplay;
  /**
   * Whether a channel has associated orders.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  hasOrders: Scalars['Boolean']['output'];
  /** The ID of the channel. */
  id: Scalars['ID']['output'];
  /**
   * Whether the channel is active.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  isActive: Scalars['Boolean']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.15.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.15.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.15.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Name of the channel.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  name: Scalars['String']['output'];
  /**
   * Channel-specific order settings.
   *
   * Added in Saleor 3.12.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_ORDERS.
   */
  orderSettings: OrderSettings;
  /**
   * Channel-specific payment settings.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS, HANDLE_PAYMENTS.
   */
  paymentSettings: PaymentSettings;
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.15.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.15.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Slug of the channel. */
  slug: Scalars['String']['output'];
  /**
   * Define the stock setting for this channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  stockSettings: StockSettings;
  /**
   * List of warehouses assigned to this channel.
   *
   * Added in Saleor 3.5.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  warehouses: Array<Warehouse>;
};


/** Represents channel. */
export type ChannelAvailableShippingMethodsPerCountryArgs = {
  countries?: InputMaybe<Array<CountryCode>>;
};


/** Represents channel. */
export type ChannelMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents channel. */
export type ChannelMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents channel. */
export type ChannelPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents channel. */
export type ChannelPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_STATUS_CHANGED (async): A channel was activated.
 */
export type ChannelActivate = {
  /** Activated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_CREATED (async): A channel was created.
 */
export type ChannelCreate = {
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelCreateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The channel checkout settings
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutSettings?: InputMaybe<CheckoutSettingsInput>;
  /** Currency of the channel. */
  currencyCode: Scalars['String']['input'];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry: CountryCode;
  /** Determine if channel will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Channel public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Name of the channel. */
  name: Scalars['String']['input'];
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: InputMaybe<OrderSettingsInput>;
  /**
   * The channel payment settings
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  paymentSettings?: InputMaybe<PaymentSettingsInput>;
  /**
   * Channel private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Slug of the channel. */
  slug: Scalars['String']['input'];
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: InputMaybe<StockSettingsInput>;
};

/**
 * Event sent when new channel is created.
 *
 * Added in Saleor 3.2.
 */
export type ChannelCreated = Event & {
  /** The channel the event relates to. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_STATUS_CHANGED (async): A channel was deactivated.
 */
export type ChannelDeactivate = {
  /** Deactivated channel. */
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_DELETED (async): A channel was deleted.
 */
export type ChannelDelete = {
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars['ID']['input'];
};

/**
 * Event sent when channel is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ChannelDeleted = Event & {
  /** The channel the event relates to. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ChannelError = {
  /** The error code. */
  code: ChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of shipping zone IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of warehouses IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ChannelErrorCode =
  | 'ALREADY_EXISTS'
  | 'CHANNELS_CURRENCY_MUST_BE_THE_SAME'
  | 'CHANNEL_WITH_ORDERS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type ChannelListingUpdateInput = {
  /** ID of a channel listing. */
  channelListing: Scalars['ID']['input'];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The threshold for preorder variant in channel. */
  preorderThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Price of the particular variant in channel. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

/**
 * Event sent when channel metadata is updated.
 *
 * Added in Saleor 3.15.
 */
export type ChannelMetadataUpdated = Event & {
  /** The channel the event relates to. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Reorder the warehouses of a channel.
 *
 * Added in Saleor 3.7.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelReorderWarehouses = {
  /** Channel within the warehouses are reordered. */
  channel?: Maybe<Channel>;
  errors: Array<ChannelError>;
};

/**
 * Event sent when channel status has changed.
 *
 * Added in Saleor 3.2.
 */
export type ChannelStatusChanged = Event & {
  /** The channel the event relates to. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 * Requires one of the following permissions when updating only `orderSettings` field: `MANAGE_CHANNELS`, `MANAGE_ORDERS`.
 * Requires one of the following permissions when updating only `checkoutSettings` field: `MANAGE_CHANNELS`, `MANAGE_CHECKOUTS`.
 * Requires one of the following permissions when updating only `paymentSettings` field: `MANAGE_CHANNELS`, `HANDLE_PAYMENTS`.
 *
 * Triggers the following webhook events:
 * - CHANNEL_UPDATED (async): A channel was updated.
 * - CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
 */
export type ChannelUpdate = {
  channel?: Maybe<Channel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>;
  errors: Array<ChannelError>;
};

export type ChannelUpdateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The channel checkout settings
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutSettings?: InputMaybe<CheckoutSettingsInput>;
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry?: InputMaybe<CountryCode>;
  /** Determine if channel will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Channel public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Name of the channel. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: InputMaybe<OrderSettingsInput>;
  /**
   * The channel payment settings
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  paymentSettings?: InputMaybe<PaymentSettingsInput>;
  /**
   * Channel private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * List of warehouses to unassign from the channel.
   *
   * Added in Saleor 3.5.
   */
  removeWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Slug of the channel. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: InputMaybe<StockSettingsInput>;
};

/**
 * Event sent when channel is updated.
 *
 * Added in Saleor 3.2.
 */
export type ChannelUpdated = Event & {
  /** The channel the event relates to. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  /**
   * The authorize status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  authorizeStatus: CheckoutAuthorizeStatusEnum;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  availableCollectionPoints: Array<Warehouse>;
  /**
   * List of available payment gateways.
   *
   * Triggers the following webhook events:
   * - PAYMENT_LIST_GATEWAYS (sync): Fetch payment gateways available for checkout.
   */
  availablePaymentGateways: Array<PaymentGateway>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
   */
  availableShippingMethods: Array<ShippingMethod>;
  /** The billing address of the checkout. */
  billingAddress?: Maybe<Address>;
  /** The channel for which checkout was created. */
  channel: Channel;
  /**
   * The charge status of the checkout.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  chargeStatus: CheckoutChargeStatusEnum;
  /** The date and time when the checkout was created. */
  created: Scalars['DateTime']['output'];
  /**
   * The delivery method selected for this checkout.
   *
   * Added in Saleor 3.1.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   */
  deliveryMethod?: Maybe<DeliveryMethod>;
  /** The total discount applied to the checkout. Note: Only discount created via voucher are included in this field. */
  discount?: Maybe<Money>;
  /** The name of voucher assigned to the checkout. */
  discountName?: Maybe<Scalars['String']['output']>;
  /**
   * Determines whether displayed prices should include taxes.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** Email of a customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Array<GiftCard>;
  /** The ID of the checkout. */
  id: Scalars['ID']['output'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  /** Checkout language code. */
  languageCode: LanguageCodeEnum;
  /** @deprecated This field will be removed in Saleor 4.0. Use `updatedAt` instead. */
  lastChange: Scalars['DateTime']['output'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The note for the checkout. */
  note: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of problems with the checkout.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  problems?: Maybe<Array<CheckoutProblem>>;
  /** The number of items purchased. */
  quantity: Scalars['Int']['output'];
  /** The shipping address of the checkout. */
  shippingAddress?: Maybe<Address>;
  /**
   * The shipping method related with checkout.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   */
  shippingMethods: Array<ShippingMethod>;
  /**
   * The price of the shipping, with all the taxes included. Set to 0 when no delivery method is selected.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  shippingPrice: TaxedMoney;
  /**
   * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
   *
   * Added in Saleor 3.1.
   */
  stockReservationExpires?: Maybe<Scalars['DateTime']['output']>;
  /**
   * List of user's stored payment methods that can be used in this checkout session. It uses the channel that the checkout was created in. When `amount` is not provided, `checkout.total` will be used as a default value.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  storedPaymentMethods?: Maybe<Array<StoredPaymentMethod>>;
  /**
   * The price of the checkout before shipping, with taxes included.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  subtotalPrice: TaxedMoney;
  /**
   * Returns True if checkout has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  taxExemption: Scalars['Boolean']['output'];
  /** The checkout's token. */
  token: Scalars['UUID']['output'];
  /**
   * The difference between the paid and the checkout total amount.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  totalBalance: Money;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  totalPrice: TaxedMoney;
  /**
   * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactions?: Maybe<Array<TransactionItem>>;
  /** Translation of the discountName field in the language set in Checkout.languageCode field.Note: this field is set automatically when Checkout.languageCode is defined; otherwise it's null */
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  /**
   * Time of last modification of the given checkout.
   *
   * Added in Saleor 3.13.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user assigned to the checkout. Requires one of the following permissions: MANAGE_USERS, HANDLE_PAYMENTS, OWNER. */
  user?: Maybe<User>;
  /**
   * The voucher assigned to the checkout.
   *
   * Added in Saleor 3.18.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucher?: Maybe<Voucher>;
  /** The code of voucher assigned to the checkout. */
  voucherCode?: Maybe<Scalars['String']['output']>;
};


/** Checkout object. */
export type CheckoutMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Checkout object. */
export type CheckoutStoredPaymentMethodsArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

/**
 * Adds a gift card or a voucher to a checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutAddPromoCode = {
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutAddressValidationRules = {
  /** Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected. */
  checkFieldsFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input. */
  checkRequiredFields?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters. */
  enableFieldsNormalization?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Determine a current authorize status for checkout.
 *
 *     We treat the checkout as fully authorized when the sum of authorized and charged
 *     funds cover the checkout.total.
 *     We treat the checkout as partially authorized when the sum of authorized and charged
 *     funds covers only part of the checkout.total
 *     We treat the checkout as not authorized when the sum of authorized and charged funds
 *     is 0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the cover funds don't cover fully the checkout's total
 *     FULL - the cover funds covers the checkout's total
 *
 */
export type CheckoutAuthorizeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'PARTIAL';

/**
 * Update billing address in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutBillingAddressUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Determine the current charge status for the checkout.
 *
 *     The checkout is considered overcharged when the sum of the transactionItem's charge
 *     amounts exceeds the value of `checkout.total`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `checkout.total`, we consider the checkout to be fully charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `checkout.total`, we treat the checkout as partially charged.
 *
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the checkout's total
 *     FULL - the funds that are charged fully cover the checkout's total
 *     OVERCHARGED - the charged funds are bigger than checkout's total
 *
 */
export type CheckoutChargeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'OVERCHARGED'
  | 'PARTIAL';

/**
 * Completes the checkout. As a result a new order is created. The mutation allows to create the unpaid order when setting `orderSettings.allowUnpaidOrders` for given `Channel` is set to `true`. When `orderSettings.allowUnpaidOrders` is set to `false`, checkout can be completed only when attached `Payment`/`TransactionItem`s fully cover the checkout's total. When processing the checkout with `Payment`, in case of required additional confirmation step like 3D secure, the `confirmationNeeded` flag will be set to True and no order will be created until payment is confirmed with second call of this mutation.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
 * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
 * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
 * - ORDER_CREATED (async): Triggered when order is created.
 * - NOTIFY_USER (async): A notification for order placement.
 * - NOTIFY_USER (async): A staff notification for order placement.
 * - ORDER_UPDATED (async): Triggered when order received the update after placement.
 * - ORDER_PAID (async): Triggered when newly created order is paid.
 * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
 * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
 */
export type CheckoutComplete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars['JSONString']['output']>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean']['output'];
  errors: Array<CheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  edges: Array<CheckoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Checkout;
};

/**
 * Create a new checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_CREATED (async): A checkout was created.
 */
export type CheckoutCreate = {
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  created?: Maybe<Scalars['Boolean']['output']>;
  errors: Array<CheckoutError>;
};

/**
 * Create new checkout from existing order.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutCreateFromOrder = {
  /** Created checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutCreateFromOrderError>;
  /** Variants that were not attached to the checkout. */
  unavailableVariants?: Maybe<Array<CheckoutCreateFromOrderUnavailableVariant>>;
};

export type CheckoutCreateFromOrderError = {
  /** The error code. */
  code: CheckoutCreateFromOrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type CheckoutCreateFromOrderErrorCode =
  | 'CHANNEL_INACTIVE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'ORDER_NOT_FOUND'
  | 'TAX_ERROR';

export type CheckoutCreateFromOrderUnavailableVariant = {
  /** The error code. */
  code: CheckoutCreateFromOrderUnavailableVariantErrorCode;
  /** Order line ID that is unavailable. */
  lineId: Scalars['ID']['output'];
  /** The error message. */
  message: Scalars['String']['output'];
  /** Variant ID that is unavailable. */
  variantId: Scalars['ID']['output'];
};

/** An enumeration. */
export type CheckoutCreateFromOrderUnavailableVariantErrorCode =
  | 'INSUFFICIENT_STOCK'
  | 'NOT_FOUND'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL';

export type CheckoutCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Slug of a channel in which to create a checkout. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checkout language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * The checkout validation rules that can be changed.
   *
   * Added in Saleor 3.5.
   */
  validationRules?: InputMaybe<CheckoutValidationRules>;
};

/**
 * Event sent when new checkout is created.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutCreated = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutCustomerAttach = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutCustomerDetach = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutDeliveryMethodUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/**
 * Updates email address in the existing checkout object.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutEmailUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutError = {
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type CheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_NOT_FULLY_PAID'
  | 'DELIVERY_METHOD_NOT_APPLICABLE'
  | 'EMAIL_NOT_SET'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'GRAPHQL_ERROR'
  | 'INACTIVE_PAYMENT'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_SHIPPING_METHOD'
  | 'MISSING_CHANNEL_SLUG'
  | 'NOT_FOUND'
  | 'NO_LINES'
  | 'PAYMENT_ERROR'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'SHIPPING_NOT_REQUIRED'
  | 'TAX_ERROR'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'UNIQUE'
  | 'VOUCHER_NOT_APPLICABLE'
  | 'ZERO_QUANTITY';

export type CheckoutFilterInput = {
  authorizeStatus?: InputMaybe<Array<CheckoutAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  chargeStatus?: InputMaybe<Array<CheckoutChargeStatusEnum>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateRangeInput>;
};

/**
 * Filter shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type CheckoutFilterShippingMethods = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when checkout is fully paid with transactions.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutFullyPaid = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Update language code in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutLanguageCodeUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & ObjectWithMetadata & {
  /** The ID of the checkout line. */
  id: Scalars['ID']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of problems with the checkout line.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  problems?: Maybe<Array<CheckoutLineProblem>>;
  /** The quantity of product variant assigned to the checkout line. */
  quantity: Scalars['Int']['output'];
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Scalars['Boolean']['output'];
  /**
   * The sum of the checkout line price, taxes and discounts.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  totalPrice: TaxedMoney;
  /** The sum of the checkout line price, without discounts. */
  undiscountedTotalPrice: Money;
  /** The unit price of the checkout line, without discounts. */
  undiscountedUnitPrice: Money;
  /**
   * The unit price of the checkout line, with taxes and discounts.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   */
  unitPrice: TaxedMoney;
  /** The product variant from which the checkout line was created. */
  variant: ProductVariant;
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an item in the checkout. */
export type CheckoutLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an item in the checkout. */
export type CheckoutLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CheckoutLineCountableConnection = {
  edges: Array<CheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutLineCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CheckoutLine;
};

/**
 * Deletes a CheckoutLine.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutLineDelete = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the object's metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. */
  quantity: Scalars['Int']['input'];
  /** ID of the product variant. */
  variantId: Scalars['ID']['input'];
};

/**
 * Represents an problem in the checkout line.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutLineProblem = CheckoutLineProblemInsufficientStock | CheckoutLineProblemVariantNotAvailable;

/**
 * Indicates insufficient stock for a given checkout line.Placing the order will not be possible until solving this problem.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutLineProblemInsufficientStock = {
  /** Available quantity of a variant. */
  availableQuantity?: Maybe<Scalars['Int']['output']>;
  /** The line that has variant with insufficient stock. */
  line: CheckoutLine;
  /** The variant with insufficient stock. */
  variant: ProductVariant;
};

/**
 * The variant assigned to the checkout line is not available.Placing the order will not be possible until solving this problem.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutLineProblemVariantNotAvailable = {
  /** The line that has variant that is not available. */
  line: CheckoutLine;
};

export type CheckoutLineUpdateInput = {
  /**
   * ID of the line.
   *
   * Added in Saleor 3.6.
   */
  lineId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /**
   * ID of the product variant.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `lineId` instead.
   */
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutLinesAdd = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Deletes checkout lines.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutLinesDelete = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  errors: Array<CheckoutError>;
};

/**
 * Updates checkout line in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutLinesUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Event sent when checkout metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CheckoutMetadataUpdated = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  /** Related checkout object. */
  checkout?: Maybe<Checkout>;
  errors: Array<PaymentError>;
  /** A newly created payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/**
 * Represents an problem in the checkout.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutProblem = CheckoutLineProblemInsufficientStock | CheckoutLineProblemVariantNotAvailable;

/**
 * Remove a gift card or a voucher from a checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutRemovePromoCode = {
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Represents the channel-specific checkout settings.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutSettings = {
  /**
   * Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.
   *
   * Added in Saleor 3.15.This field will be removed in Saleor 4.0.
   */
  useLegacyErrorFlow: Scalars['Boolean']['output'];
};

export type CheckoutSettingsInput = {
  /**
   * Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.
   *
   * Added in Saleor 3.15.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  useLegacyErrorFlow?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Update shipping address in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutShippingAddressUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

/**
 * Updates the shipping method of the checkout.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type CheckoutShippingMethodUpdate = {
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>;
  errors: Array<CheckoutError>;
};

export type CheckoutSortField =
  /** Sort checkouts by creation date. */
  | 'CREATION_DATE'
  /** Sort checkouts by customer. */
  | 'CUSTOMER'
  /** Sort checkouts by payment. */
  | 'PAYMENT';

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort checkouts. */
  direction: OrderDirection;
  /** Sort checkouts by the selected field. */
  field: CheckoutSortField;
};

/**
 * Event sent when checkout is updated.
 *
 * Added in Saleor 3.2.
 */
export type CheckoutUpdated = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type CheckoutValidationRules = {
  /** The validation rules that can be applied to provided billing address data. */
  billingAddress?: InputMaybe<CheckoutAddressValidationRules>;
  /** The validation rules that can be applied to provided shipping address data. */
  shippingAddress?: InputMaybe<CheckoutAddressValidationRules>;
};

export type ChoiceValue = {
  /** The raw name of the choice. */
  raw?: Maybe<Scalars['String']['output']>;
  /** The verbose name of the choice. */
  verbose?: Maybe<Scalars['String']['output']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  /** Background image of the collection. */
  backgroundImage?: Maybe<Image>;
  /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of channels in which the collection is available.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings?: Maybe<Array<CollectionChannelListing>>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the collection. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the collection. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of products in this collection. */
  products?: Maybe<ProductCountableConnection>;
  /** SEO description of the collection. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title of the collection. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Slug of the collection. */
  slug: Scalars['String']['output'];
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionAddProducts = {
  /** Collection to which products will be added. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  /** The channel to which the collection belongs. */
  channel: Channel;
  /** The ID of the collection channel listing. */
  id: Scalars['ID']['output'];
  /** Indicates if the collection is published in the channel. */
  isPublished: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The collection publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CollectionChannelListingError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionChannelListingUpdate = {
  /** An updated collection instance. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
  errors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents a connection to a list of collections. */
export type CollectionCountableConnection = {
  edges: Array<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectionCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionCreate = {
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionCreateInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** List of products to be added to the collection. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreated = Event & {
  /** The collection the event relates to. */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type CollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionDelete = {
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeleted = Event & {
  /** The collection the event relates to. */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type CollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionError = {
  /** The error code. */
  code: CollectionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type CollectionErrorCode =
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type CollectionFilterInput = {
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CollectionInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdated = Event & {
  /** The collection the event relates to. */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CollectionMetadataUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionPublished =
  | 'HIDDEN'
  | 'PUBLISHED';

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionRemoveProducts = {
  /** Collection from which products will be removed. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionReorderProducts = {
  /** Collection from which products are reordered. */
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

export type CollectionSortField =
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'AVAILABILITY'
  /** Sort collections by name. */
  | 'NAME'
  /** Sort collections by product count. */
  | 'PRODUCT_COUNT'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT';

export type CollectionSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort collections. */
  direction: OrderDirection;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

/** Represents collection's original translatable fields and related translations. */
export type CollectionTranslatableContent = Node & {
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection?: Maybe<Collection>;
  /**
   * Collection's description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the collection translatable content. */
  id: Scalars['ID']['output'];
  /** Collection's name to translate. */
  name: Scalars['String']['output'];
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


/** Represents collection's original translatable fields and related translations. */
export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CollectionTranslate = {
  collection?: Maybe<Collection>;
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** Represents collection translations. */
export type CollectionTranslation = Node & {
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the collection translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated collection name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionUpdate = {
  collection?: Maybe<Collection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>;
  errors: Array<CollectionError>;
};

/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdated = Event & {
  /** The collection the event relates to. */
  collection?: Maybe<Collection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type CollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  /** Help text for the field. */
  helpText?: Maybe<Scalars['String']['output']>;
  /** Label for the field. */
  label?: Maybe<Scalars['String']['output']>;
  /** Name of the field. */
  name: Scalars['String']['output'];
  /** Type of the field. */
  type?: Maybe<ConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String']['input'];
  /** Value of the given field to update. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export type ConfigurationTypeFieldEnum =
  | 'BOOLEAN'
  | 'MULTILINE'
  | 'OUTPUT'
  | 'PASSWORD'
  | 'SECRET'
  | 'SECRETMULTILINE'
  | 'STRING';

/**
 * Confirm user account with token sent by email during registration.
 *
 * Triggers the following webhook events:
 * - ACCOUNT_CONFIRMED (async): Account was confirmed.
 */
export type ConfirmAccount = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An activated user account. */
  user?: Maybe<User>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - NOTIFY_USER (async): A notification that account email change was confirmed.
 * - ACCOUNT_EMAIL_CHANGED (async): An account email was changed.
 */
export type ConfirmEmailChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new email. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'EU'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type CountryDisplay = {
  /** Country code. */
  code: Scalars['String']['output'];
  /** Country name. */
  country: Scalars['String']['output'];
  /**
   * Country tax.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`. Use `TaxClassCountryRate` type to manage tax rates per country.
   */
  vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  attachedToShippingZones?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CountryRateInput = {
  /** Country in which this rate applies. */
  countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. */
  rate: Scalars['Float']['input'];
};

export type CountryRateUpdateInput = {
  /** Country in which this rate applies. */
  countryCode: CountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. Provide `null` to remove the particular rate. */
  rate?: InputMaybe<Scalars['Float']['input']>;
};

/** Create JWT token. */
export type CreateToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type CreditCard = {
  /** Card brand. */
  brand: Scalars['String']['output'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars['String']['output']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String']['output'];
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_DELETED (async): A customer account was deleted.
 */
export type CustomerBulkDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AccountError>;
};

export type CustomerBulkResult = {
  /** Customer data. */
  customer?: Maybe<User>;
  /** List of errors that occurred during the update attempt. */
  errors?: Maybe<Array<CustomerBulkUpdateError>>;
};

/**
 * Updates customers.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type CustomerBulkUpdate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<CustomerBulkUpdateError>;
  /** List of the updated customers. */
  results: Array<CustomerBulkResult>;
};

export type CustomerBulkUpdateError = {
  /** The error code. */
  code: CustomerBulkUpdateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type CustomerBulkUpdateErrorCode =
  | 'BLANK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LENGTH'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type CustomerBulkUpdateInput = {
  /** External ID of a customer to update. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of a customer to update. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Fields required to update a customer. */
  input: CustomerInput;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_CREATED (async): A new customer account was created.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 * - NOTIFY_USER (async): A notification for setting the password.
 * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
 */
export type CustomerCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/**
 * Event sent when new customer user is created.
 *
 * Added in Saleor 3.2.
 */
export type CustomerCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_DELETED (async): A customer account was deleted.
 */
export type CustomerDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  /** App that performed the action. */
  app?: Maybe<App>;
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the customer event. */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** The concerned order. */
  order?: Maybe<Order>;
  /** The concerned order line. */
  orderLine?: Maybe<OrderLine>;
  /** Customer event type. */
  type?: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type CustomerEventsEnum =
  | 'ACCOUNT_ACTIVATED'
  | 'ACCOUNT_CREATED'
  | 'ACCOUNT_DEACTIVATED'
  | 'CUSTOMER_DELETED'
  | 'DIGITAL_LINK_DOWNLOADED'
  | 'EMAIL_ASSIGNED'
  | 'EMAIL_CHANGED'
  | 'EMAIL_CHANGED_REQUEST'
  | 'NAME_ASSIGNED'
  | 'NOTE_ADDED'
  | 'NOTE_ADDED_TO_ORDER'
  | 'PASSWORD_CHANGED'
  | 'PASSWORD_RESET'
  | 'PASSWORD_RESET_LINK_SENT'
  | 'PLACED_ORDER';

export type CustomerFilterInput = {
  dateJoined?: InputMaybe<DateRangeInput>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is confirmed.
   *
   * Added in Saleor 3.15.
   */
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
};

/**
 * Event sent when customer user metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type CustomerMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A new customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type CustomerUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  user?: Maybe<User>;
};

/**
 * Event sent when customer user is updated.
 *
 * Added in Saleor 3.2.
 */
export type CustomerUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type DateRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['Date']['input']>;
};

/**
 * Define the filtering options for date time fields.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type DateTimeFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** The value in range. */
  range?: InputMaybe<DateTimeRangeInput>;
};

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type DeactivateAllUserTokens = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/**
 * Define the filtering options for decimal fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type DecimalFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  /** The value in range. */
  range?: InputMaybe<DecimalRangeInput>;
};

export type DecimalRangeInput = {
  /** Decimal value greater than or equal to. */
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  /** Decimal value less than or equal to. */
  lte?: InputMaybe<Scalars['Decimal']['input']>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 */
export type DeliveryMethod = ShippingMethod | Warehouse;

/** Represents digital content associated with a product variant. */
export type DigitalContent = Node & ObjectWithMetadata & {
  /** Indicator for automatic fulfillment of digital content. */
  automaticFulfillment: Scalars['Boolean']['output'];
  /** File associated with digital content. */
  contentFile: Scalars['String']['output'];
  /** The ID of the digital content. */
  id: Scalars['ID']['output'];
  /** Maximum number of allowed downloads for the digital content. */
  maxDownloads?: Maybe<Scalars['Int']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product variant assigned to digital content. */
  productVariant: ProductVariant;
  /** Number of days the URL for the digital content remains valid. */
  urlValidDays?: Maybe<Scalars['Int']['output']>;
  /** List of URLs for the digital variant. */
  urls?: Maybe<Array<DigitalContentUrl>>;
  /** Default settings indicator for digital content. */
  useDefaultSettings: Scalars['Boolean']['output'];
};


/** Represents digital content associated with a product variant. */
export type DigitalContentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents digital content associated with a product variant. */
export type DigitalContentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents digital content associated with a product variant. */
export type DigitalContentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents digital content associated with a product variant. */
export type DigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A connection to a list of digital content items. */
export type DigitalContentCountableConnection = {
  edges: Array<DigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DigitalContentCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DigitalContent;
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentCreate = {
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentDelete = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUpdate = {
  content?: Maybe<DigitalContent>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload']['input'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
};

/** Represents a URL for digital content. */
export type DigitalContentUrl = Node & {
  /** Digital content associated with the URL. */
  content: DigitalContent;
  /** Date and time when the digital content URL was created. */
  created: Scalars['DateTime']['output'];
  /** Number of times digital content has been downloaded. */
  downloadNum: Scalars['Int']['output'];
  /** The ID of the digital content URL. */
  id: Scalars['ID']['output'];
  /** UUID of digital content. */
  token: Scalars['UUID']['output'];
  /** URL for digital content. */
  url?: Maybe<Scalars['String']['output']>;
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUrlCreate = {
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID']['input'];
};

export type DiscountError = {
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: DiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']['output']>>;
  /**
   * List of voucher codes which causes the error.
   *
   * Added in Saleor 3.18.
   */
  voucherCodes?: Maybe<Array<Scalars['String']['output']>>;
};

/** An enumeration. */
export type DiscountErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'VOUCHER_ALREADY_USED';

export type DiscountStatusEnum =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'SCHEDULED';

export type DiscountValueTypeEnum =
  | 'FIXED'
  | 'PERCENTAGE';

/** An enumeration. */
export type DistanceUnitsEnum =
  | 'CM'
  | 'DM'
  | 'FT'
  | 'INCH'
  | 'KM'
  | 'M'
  | 'MM'
  | 'YD';

/** Represents API domain. */
export type Domain = {
  /** The host name of the domain. */
  host: Scalars['String']['output'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean']['output'];
  /** The absolute URL of the API. */
  url: Scalars['String']['output'];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderComplete = {
  errors: Array<OrderError>;
  /** Completed order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderCreate = {
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']['input']>;
  /**
   * A code of the voucher associated with the order.
   *
   * Added in Saleor 3.18.
   */
  voucherCode?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new draft order is created.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderDelete = {
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when draft order is deleted.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars['ID']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars['ID']['input']>;
  /**
   * A code of the voucher associated with the order.
   *
   * Added in Saleor 3.18.
   */
  voucherCode?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderLinesBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderUpdate = {
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when draft order is updated.
 *
 * Added in Saleor 3.2.
 */
export type DraftOrderUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ErrorPolicyEnum =
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  | 'IGNORE_FAILED'
  /** Reject all rows if there is at least one error in any of them. */
  | 'REJECT_EVERYTHING'
  /** Reject rows with errors. */
  | 'REJECT_FAILED_ROWS';

export type Event = {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Event delivery. */
export type EventDelivery = Node & {
  /** Event delivery attempts. */
  attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
  /** Creation time of an event delivery. */
  createdAt: Scalars['DateTime']['output'];
  /** Webhook event type. */
  eventType: WebhookEventTypeEnum;
  /** The ID of an event delivery. */
  id: Scalars['ID']['output'];
  /** Event payload. */
  payload?: Maybe<Scalars['String']['output']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
};


/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
  /** Event delivery creation date and time. */
  createdAt: Scalars['DateTime']['output'];
  /** Delivery attempt duration. */
  duration?: Maybe<Scalars['Float']['output']>;
  /** The ID of Event Delivery Attempt. */
  id: Scalars['ID']['output'];
  /** Request headers for delivery attempt. */
  requestHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response content. */
  response?: Maybe<Scalars['String']['output']>;
  /** Response headers for delivery attempt. */
  responseHeaders?: Maybe<Scalars['String']['output']>;
  /** Delivery attempt response status code. */
  responseStatusCode?: Maybe<Scalars['Int']['output']>;
  /** Event delivery status. */
  status: EventDeliveryStatusEnum;
  /** Task id for delivery attempt. */
  taskId?: Maybe<Scalars['String']['output']>;
};

export type EventDeliveryAttemptCountableConnection = {
  edges: Array<EventDeliveryAttemptCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryAttemptCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EventDeliveryAttempt;
};

export type EventDeliveryAttemptSortField =
  /** Sort event delivery attempts by created at. */
  | 'CREATED_AT';

export type EventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort attempts. */
  direction: OrderDirection;
  /** Sort attempts by the selected field. */
  field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
  edges: Array<EventDeliveryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventDeliveryCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EventDelivery;
};

export type EventDeliveryFilterInput = {
  eventType?: InputMaybe<WebhookEventTypeEnum>;
  status?: InputMaybe<EventDeliveryStatusEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type EventDeliveryRetry = {
  /** Event delivery. */
  delivery?: Maybe<EventDelivery>;
  errors: Array<WebhookError>;
};

export type EventDeliverySortField =
  /** Sort event deliveries by created at. */
  | 'CREATED_AT';

export type EventDeliverySortingInput = {
  /** Specifies the direction in which to sort deliveries. */
  direction: OrderDirection;
  /** Sort deliveries by the selected field. */
  field: EventDeliverySortField;
};

export type EventDeliveryStatusEnum =
  | 'FAILED'
  | 'PENDING'
  | 'SUCCESS';

export type ExportError = {
  /** The error code. */
  code: ExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ExportErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** History log of export file. */
export type ExportEvent = Node & {
  /** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
  app?: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Scalars['String']['output'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type ExportEventsEnum =
  | 'EXPORTED_FILE_SENT'
  | 'EXPORT_DELETED'
  | 'EXPORT_FAILED'
  | 'EXPORT_FAILED_INFO_SENT'
  | 'EXPORT_PENDING'
  | 'EXPORT_SUCCESS';

/** Represents a job data of exported file. */
export type ExportFile = Job & Node & {
  /** The app which requests file export. */
  app?: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** List of events associated with the export. */
  events?: Maybe<Array<ExportEvent>>;
  /** The ID of the export file. */
  id: Scalars['ID']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL of field to download. */
  url?: Maybe<Scalars['String']['output']>;
  /** The user who requests file export. */
  user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  edges: Array<ExportFileCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ExportFileCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExportFile;
};

export type ExportFileFilterInput = {
  app?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type ExportFileSortField =
  | 'CREATED_AT'
  | 'LAST_MODIFIED_AT'
  | 'STATUS'
  | 'UPDATED_AT';

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort export file. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for the exported file.
 * - GIFT_CARD_EXPORT_COMPLETED (async): A notification for the exported file.
 */
export type ExportGiftCards = {
  errors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for gift cards. */
  filter?: InputMaybe<GiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determine which gift cards should be exported. */
  scope: ExportScope;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of channels ids which should be exported. */
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of product fields witch should be exported. */
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for the exported file.
 * - PRODUCT_EXPORT_COMPLETED (async): A notification for the exported file.
 */
export type ExportProducts = {
  errors: Array<ExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  /** Input with info about fields which should be exported. */
  exportInfo?: InputMaybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for products. */
  filter?: InputMaybe<ProductFilterInput>;
  /** List of products IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determine which products should be exported. */
  scope: ExportScope;
};

export type ExportScope =
  /** Export all products. */
  | 'ALL'
  /** Export the filtered products. */
  | 'FILTER'
  /** Export products with given ids. */
  | 'IDS';

/**
 * Export voucher codes to csv/xlsx file.
 *
 * Added in Saleor 3.18.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_CODE_EXPORT_COMPLETED (async): A notification for the exported file.
 */
export type ExportVoucherCodes = {
  errors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
};

export type ExportVoucherCodesInput = {
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** List of voucher code IDs to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The ID of the voucher. If provided, exports all codes belonging to the voucher. */
  voucherId?: InputMaybe<Scalars['ID']['input']>;
};

/** External authentication plugin. */
export type ExternalAuthentication = {
  /** ID of external authentication plugin. */
  id: Scalars['String']['output'];
  /** Name of external authentication plugin. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Prepare external authentication URL for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  authenticationData?: Maybe<Scalars['JSONString']['output']>;
  errors: Array<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** The data returned by authentication plugin. */
  logoutData?: Maybe<Scalars['JSONString']['output']>;
};

export type ExternalNotificationError = {
  /** The error code. */
  code: ExternalNotificationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ExternalNotificationErrorCodes =
  | 'CHANNEL_INACTIVE'
  | 'INVALID_MODEL_TYPE'
  | 'NOT_FOUND'
  | 'REQUIRED';

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type ExternalNotificationTrigger = {
  errors: Array<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars['String']['input'];
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: InputMaybe<Scalars['JSONString']['input']>;
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Scalars['ID']['input']>;
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if authentication data is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** User assigned to data. */
  user?: Maybe<User>;
  /** External data. */
  verifyData?: Maybe<Scalars['JSONString']['output']>;
};

export type File = {
  /** Content type of the file. */
  contentType?: Maybe<Scalars['String']['output']>;
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** An enumeration. */
export type FileTypesEnum =
  | 'CSV'
  | 'XLSX';

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type FileUpload = {
  errors: Array<UploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>;
  uploadedFile?: Maybe<File>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  created: Scalars['DateTime']['output'];
  fulfillmentOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** List of lines for the fulfillment. */
  lines?: Maybe<Array<FulfillmentLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Amount of refunded shipping price.
   *
   * Added in Saleor 3.14.
   */
  shippingRefundedAmount?: Maybe<Money>;
  status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  statusDisplay?: Maybe<Scalars['String']['output']>;
  /**
   * Total refunded amount assigned to this fulfillment.
   *
   * Added in Saleor 3.14.
   */
  totalRefundedAmount?: Maybe<Money>;
  trackingNumber: Scalars['String']['output'];
  /** Warehouse from fulfillment was fulfilled. */
  warehouse?: Maybe<Warehouse>;
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - FULFILLMENT_APPROVED (async): Fulfillment is approved.
 */
export type FulfillmentApprove = {
  errors: Array<OrderError>;
  /** An approved fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was approved. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when fulfillment is approved.
 *
 * Added in Saleor 3.7.
 */
export type FulfillmentApproved = Event & {
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * If true, send a notification to the customer.
   *
   * Added in Saleor 3.16.
   */
  notifyCustomer: Scalars['Boolean']['output'];
  /** The order the fulfillment belongs to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentCancel = {
  errors: Array<OrderError>;
  /** A canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when fulfillment is canceled.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCanceled = Event & {
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when new fulfillment is created.
 *
 * Added in Saleor 3.4.
 */
export type FulfillmentCreated = Event & {
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * If true, the app should send a notification to the customer.
   *
   * Added in Saleor 3.16.
   */
  notifyCustomer: Scalars['Boolean']['output'];
  /** The order the fulfillment belongs to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  id: Scalars['ID']['output'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int']['output'];
};

/**
 * Event sent when fulfillment metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type FulfillmentMetadataUpdated = Event & {
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentRefundProducts = {
  errors: Array<OrderError>;
  /** A refunded fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentReturnProducts = {
  errors: Array<OrderError>;
  /** Order which fulfillment was returned. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<Fulfillment>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<Order>;
  /** A return fulfillment. */
  returnFulfillment?: Maybe<Fulfillment>;
};

/** An enumeration. */
export type FulfillmentStatus =
  | 'CANCELED'
  | 'FULFILLED'
  | 'REFUNDED'
  | 'REFUNDED_AND_RETURNED'
  | 'REPLACED'
  | 'RETURNED'
  | 'WAITING_FOR_APPROVAL';

/**
 * Event sent when the tracking number is updated.
 *
 * Added in Saleor 3.16.
 */
export type FulfillmentTrackingNumberUpdated = Event & {
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<Fulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Fulfillment tracking number is updated.
 */
export type FulfillmentUpdateTracking = {
  errors: Array<OrderError>;
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fulfillment tracking number. */
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  /** Gateway config key. */
  field: Scalars['String']['output'];
  /** Gateway config value for key. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & ObjectWithMetadata & {
  /**
   * App which created the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_APPS, OWNER.
   */
  app?: Maybe<App>;
  /**
   * Slug of the channel where the gift card was bought.
   *
   * Added in Saleor 3.1.
   */
  boughtInChannel?: Maybe<Scalars['String']['output']>;
  /**
   * Gift card code. It can be fetched both by a staff member with 'MANAGE_GIFT_CARD' when gift card hasn't been used yet or a user who bought or issued the gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD, OWNER.
   */
  code: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /**
   * The user who bought or issued a gift card.
   *
   * Added in Saleor 3.1.
   */
  createdBy?: Maybe<User>;
  /**
   * Email address of the user who bought or issued gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  createdByEmail?: Maybe<Scalars['String']['output']>;
  currentBalance: Money;
  /** Code in format which allows displaying in a user interface. */
  displayCode: Scalars['String']['output'];
  /**
   * End date of gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
   */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * List of events associated with the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  events: Array<GiftCardEvent>;
  expiryDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  initialBalance: Money;
  isActive: Scalars['Boolean']['output'];
  /** Last 4 characters of gift card code. */
  last4CodeChars: Scalars['String']['output'];
  lastUsedOn?: Maybe<Scalars['DateTime']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Related gift card product.
   *
   * Added in Saleor 3.1.
   */
  product?: Maybe<Product>;
  /**
   * Start date of gift card.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The gift card tag.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  tags: Array<GiftCardTag>;
  /**
   * The customer who used a gift card.
   *
   * Added in Saleor 3.1.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  usedBy?: Maybe<User>;
  /**
   * Email address of the customer who used a gift card.
   *
   * Added in Saleor 3.1.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  usedByEmail?: Maybe<Scalars['String']['output']>;
  /**
   * The customer who bought a gift card.
   * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
   */
  user?: Maybe<User>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
  filter?: InputMaybe<GiftCardEventFilterInput>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
 */
export type GiftCardActivate = {
  errors: Array<GiftCardError>;
  /** Activated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_UPDATED (async): A gift card was updated.
 */
export type GiftCardAddNote = {
  errors: Array<GiftCardError>;
  /** Gift card note created. */
  event?: Maybe<GiftCardEvent>;
  /** Gift card with the note added. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars['String']['input'];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
 */
export type GiftCardBulkActivate = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_CREATED (async): A gift card was created.
 * - NOTIFY_USER (async): A notification for created gift card.
 */
export type GiftCardBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
  /** List of created gift cards. */
  giftCards: Array<GiftCard>;
};

export type GiftCardBulkCreateInput = {
  /** Balance of the gift card. */
  balance: PriceInput;
  /** The number of cards to issue. */
  count: Scalars['Int']['input'];
  /** The gift card expiry date. */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /** Determine if gift card is active. */
  isActive: Scalars['Boolean']['input'];
  /** The gift card tags. */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
 */
export type GiftCardBulkDeactivate = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_DELETED (async): A gift card was deleted.
 */
export type GiftCardBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  edges: Array<GiftCardCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GiftCard;
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_CREATED (async): A gift card was created.
 * - NOTIFY_USER (async): A notification for created gift card.
 */
export type GiftCardCreate = {
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCreateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Balance of the gift card. */
  balance: PriceInput;
  /**
   * Slug of a channel from which the email should be sent.
   *
   * Added in Saleor 3.1.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: InputMaybe<Scalars['String']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Determine if gift card is active.
   *
   * Added in Saleor 3.1.
   */
  isActive: Scalars['Boolean']['input'];
  /**
   * The gift card note from the staff member.
   *
   * Added in Saleor 3.1.
   */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new gift card is created.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardCreated = Event & {
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
 */
export type GiftCardDeactivate = {
  errors: Array<GiftCardError>;
  /** Deactivated gift card. */
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_DELETED (async): A gift card was deleted.
 */
export type GiftCardDelete = {
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

/**
 * Event sent when gift card is deleted.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardDeleted = Event & {
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type GiftCardError = {
  /** The error code. */
  code: GiftCardErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of tag values that cause the error. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

/** An enumeration. */
export type GiftCardErrorCode =
  | 'ALREADY_EXISTS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'EXPIRED_GIFT_CARD'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardEvent = Node & {
  /** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  app?: Maybe<App>;
  /** The gift card balance. */
  balance?: Maybe<GiftCardEventBalance>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** Previous gift card expiry date. */
  oldExpiryDate?: Maybe<Scalars['Date']['output']>;
  /** The list of old gift card tags. */
  oldTags?: Maybe<Array<Scalars['String']['output']>>;
  /** The order ID where gift card was used or bought. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** The list of gift card tags. */
  tags?: Maybe<Array<Scalars['String']['output']>>;
  /** Gift card event type. */
  type?: Maybe<GiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user?: Maybe<User>;
};

export type GiftCardEventBalance = {
  /** Current balance of the gift card. */
  currentBalance: Money;
  /** Initial balance of the gift card. */
  initialBalance?: Maybe<Money>;
  /** Previous current balance of the gift card. */
  oldCurrentBalance?: Maybe<Money>;
  /** Previous initial balance of the gift card. */
  oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
  orders?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<GiftCardEventsEnum>;
};

/** An enumeration. */
export type GiftCardEventsEnum =
  | 'ACTIVATED'
  | 'BALANCE_RESET'
  | 'BOUGHT'
  | 'DEACTIVATED'
  | 'EXPIRY_DATE_UPDATED'
  | 'ISSUED'
  | 'NOTE_ADDED'
  | 'RESENT'
  | 'SENT_TO_CUSTOMER'
  | 'TAGS_UPDATED'
  | 'UPDATED'
  | 'USED_IN_ORDER';

/**
 * Event sent when gift card export is completed.
 *
 * Added in Saleor 3.16.
 */
export type GiftCardExportCompleted = Event & {
  /** The export file for gift cards. */
  export?: Maybe<ExportFile>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type GiftCardFilterInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdByEmail?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currentBalance?: InputMaybe<PriceRangeInput>;
  initialBalance?: InputMaybe<PriceRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  used?: InputMaybe<Scalars['Boolean']['input']>;
  usedBy?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Event sent when gift card metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type GiftCardMetadataUpdated = Event & {
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for gift card resend.
 */
export type GiftCardResend = {
  errors: Array<GiftCardError>;
  /** Gift card which has been sent. */
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars['String']['input'];
  /** Email to which gift card should be send. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ID of a gift card to resend. */
  id: Scalars['ID']['input'];
};

/**
 * Event sent when gift card is e-mailed.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardSent = Event & {
  /** Slug of a channel for which this gift card email was sent. */
  channel?: Maybe<Scalars['String']['output']>;
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** E-mail address to which gift card was sent. */
  sentToEmail?: Maybe<Scalars['String']['output']>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  /** The gift card expiry period settings. */
  expiryPeriod?: Maybe<TimePeriod>;
  /** The gift card expiry type settings. */
  expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
  /** The error code. */
  code: GiftCardSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type GiftCardSettingsErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'REQUIRED';

/** An enumeration. */
export type GiftCardSettingsExpiryTypeEnum =
  | 'EXPIRY_PERIOD'
  | 'NEVER_EXPIRE';

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardSettingsUpdate = {
  errors: Array<GiftCardSettingsError>;
  /** Gift card settings. */
  giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card expiry period. */
  expiryPeriod?: InputMaybe<TimePeriodInputType>;
  /** Defines gift card default expiry settings. */
  expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export type GiftCardSortField =
  /**
   * Sort gift cards by created at.
   *
   * Added in Saleor 3.8.
   */
  | 'CREATED_AT'
  /** Sort gift cards by current balance. */
  | 'CURRENT_BALANCE'
  /** Sort gift cards by product. */
  | 'PRODUCT'
  /** Sort gift cards by used by. */
  | 'USED_BY';

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort gift cards. */
  direction: OrderDirection;
  /** Sort gift cards by the selected field. */
  field: GiftCardSortField;
};

/**
 * Event sent when gift card status has changed.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardStatusChanged = Event & {
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 */
export type GiftCardTag = Node & {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GiftCardTagCountableConnection = {
  edges: Array<GiftCardTagCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardTagCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_UPDATED (async): A gift card was updated.
 */
export type GiftCardUpdate = {
  errors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   */
  balanceAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   */
  removeTags?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

/**
 * Event sent when gift card is updated.
 *
 * Added in Saleor 3.2.
 */
export type GiftCardUpdated = Event & {
  /** The gift card the event relates to. */
  giftCard?: Maybe<GiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Define the filtering options for foreign key fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GlobalIdFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents permission group data. */
export type Group = Node & {
  /**
   * List of channels the group has access to.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  accessibleChannels?: Maybe<Array<Channel>>;
  /** The ID of the group. */
  id: Scalars['ID']['output'];
  /** The name of the group. */
  name: Scalars['String']['output'];
  /** List of group permissions */
  permissions?: Maybe<Array<Permission>>;
  /**
   * Determine if the group have restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels: Scalars['Boolean']['output'];
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean']['output'];
  /**
   * List of group users
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  users?: Maybe<Array<User>>;
};

export type GroupCountableConnection = {
  edges: Array<GroupCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GroupCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Group;
};

/** Thumbnail formats for icon images. */
export type IconThumbnailFormatEnum =
  | 'ORIGINAL'
  | 'WEBP';

/** Represents an image. */
export type Image = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an Invoice. */
export type Invoice = Job & Node & ObjectWithMetadata & {
  /** Date and time at which invoice was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * URL to view an invoice.
   * @deprecated This field will be removed in Saleor 4.0. Use `url` field.This field will be removed in 4.0
   */
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Message associated with an invoice. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Invoice number. */
  number?: Maybe<Scalars['String']['output']>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order?: Maybe<Order>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date and time at which invoice was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** URL to view/download an invoice. This can be an internal URL if the Invoicing Plugin was used or an external URL if it has been provided. */
  url?: Maybe<Scalars['String']['output']>;
};


/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceCreate = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceCreateInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Invoice number. */
  number: Scalars['String']['input'];
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of an invoice to download. */
  url: Scalars['String']['input'];
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceDelete = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

/**
 * Event sent when invoice is deleted.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceDeleted = Event & {
  /** The invoice the event relates to. */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type InvoiceError = {
  /** The error code. */
  code: InvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type InvoiceErrorCode =
  | 'EMAIL_NOT_SET'
  | 'INVALID_STATUS'
  | 'NOT_FOUND'
  | 'NOT_READY'
  | 'NO_INVOICE_PLUGIN'
  | 'NUMBER_NOT_SET'
  | 'REQUIRED'
  | 'URL_NOT_SET';

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_REQUESTED (async): An invoice was requested.
 */
export type InvoiceRequest = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
  /** Order related to an invoice. */
  order?: Maybe<Order>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_DELETED (async): An invoice was requested to delete.
 */
export type InvoiceRequestDelete = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

/**
 * Event sent when invoice is requested.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceRequested = Event & {
  /** The invoice the event relates to. */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: Order;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_SENT (async): A notification for invoice send
 * - NOTIFY_USER (async): A notification for invoice send
 */
export type InvoiceSendNotification = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

/**
 * Event sent when invoice is sent.
 *
 * Added in Saleor 3.2.
 */
export type InvoiceSent = Event & {
  /** The invoice the event relates to. */
  invoice?: Maybe<Invoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceUpdate = {
  errors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>;
};

export type IssuingPrincipal = App | User;

export type Job = {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** Job message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
};

/** An enumeration. */
export type JobStatusEnum =
  | 'DELETED'
  | 'FAILED'
  | 'PENDING'
  | 'SUCCESS';

/** An enumeration. */
export type LanguageCodeEnum =
  | 'AF'
  | 'AF_NA'
  | 'AF_ZA'
  | 'AGQ'
  | 'AGQ_CM'
  | 'AK'
  | 'AK_GH'
  | 'AM'
  | 'AM_ET'
  | 'AR'
  | 'AR_AE'
  | 'AR_BH'
  | 'AR_DJ'
  | 'AR_DZ'
  | 'AR_EG'
  | 'AR_EH'
  | 'AR_ER'
  | 'AR_IL'
  | 'AR_IQ'
  | 'AR_JO'
  | 'AR_KM'
  | 'AR_KW'
  | 'AR_LB'
  | 'AR_LY'
  | 'AR_MA'
  | 'AR_MR'
  | 'AR_OM'
  | 'AR_PS'
  | 'AR_QA'
  | 'AR_SA'
  | 'AR_SD'
  | 'AR_SO'
  | 'AR_SS'
  | 'AR_SY'
  | 'AR_TD'
  | 'AR_TN'
  | 'AR_YE'
  | 'AS'
  | 'ASA'
  | 'ASA_TZ'
  | 'AST'
  | 'AST_ES'
  | 'AS_IN'
  | 'AZ'
  | 'AZ_CYRL'
  | 'AZ_CYRL_AZ'
  | 'AZ_LATN'
  | 'AZ_LATN_AZ'
  | 'BAS'
  | 'BAS_CM'
  | 'BE'
  | 'BEM'
  | 'BEM_ZM'
  | 'BEZ'
  | 'BEZ_TZ'
  | 'BE_BY'
  | 'BG'
  | 'BG_BG'
  | 'BM'
  | 'BM_ML'
  | 'BN'
  | 'BN_BD'
  | 'BN_IN'
  | 'BO'
  | 'BO_CN'
  | 'BO_IN'
  | 'BR'
  | 'BRX'
  | 'BRX_IN'
  | 'BR_FR'
  | 'BS'
  | 'BS_CYRL'
  | 'BS_CYRL_BA'
  | 'BS_LATN'
  | 'BS_LATN_BA'
  | 'CA'
  | 'CA_AD'
  | 'CA_ES'
  | 'CA_ES_VALENCIA'
  | 'CA_FR'
  | 'CA_IT'
  | 'CCP'
  | 'CCP_BD'
  | 'CCP_IN'
  | 'CE'
  | 'CEB'
  | 'CEB_PH'
  | 'CE_RU'
  | 'CGG'
  | 'CGG_UG'
  | 'CHR'
  | 'CHR_US'
  | 'CKB'
  | 'CKB_IQ'
  | 'CKB_IR'
  | 'CS'
  | 'CS_CZ'
  | 'CU'
  | 'CU_RU'
  | 'CY'
  | 'CY_GB'
  | 'DA'
  | 'DAV'
  | 'DAV_KE'
  | 'DA_DK'
  | 'DA_GL'
  | 'DE'
  | 'DE_AT'
  | 'DE_BE'
  | 'DE_CH'
  | 'DE_DE'
  | 'DE_IT'
  | 'DE_LI'
  | 'DE_LU'
  | 'DJE'
  | 'DJE_NE'
  | 'DSB'
  | 'DSB_DE'
  | 'DUA'
  | 'DUA_CM'
  | 'DYO'
  | 'DYO_SN'
  | 'DZ'
  | 'DZ_BT'
  | 'EBU'
  | 'EBU_KE'
  | 'EE'
  | 'EE_GH'
  | 'EE_TG'
  | 'EL'
  | 'EL_CY'
  | 'EL_GR'
  | 'EN'
  | 'EN_AE'
  | 'EN_AG'
  | 'EN_AI'
  | 'EN_AS'
  | 'EN_AT'
  | 'EN_AU'
  | 'EN_BB'
  | 'EN_BE'
  | 'EN_BI'
  | 'EN_BM'
  | 'EN_BS'
  | 'EN_BW'
  | 'EN_BZ'
  | 'EN_CA'
  | 'EN_CC'
  | 'EN_CH'
  | 'EN_CK'
  | 'EN_CM'
  | 'EN_CX'
  | 'EN_CY'
  | 'EN_DE'
  | 'EN_DG'
  | 'EN_DK'
  | 'EN_DM'
  | 'EN_ER'
  | 'EN_FI'
  | 'EN_FJ'
  | 'EN_FK'
  | 'EN_FM'
  | 'EN_GB'
  | 'EN_GD'
  | 'EN_GG'
  | 'EN_GH'
  | 'EN_GI'
  | 'EN_GM'
  | 'EN_GU'
  | 'EN_GY'
  | 'EN_HK'
  | 'EN_IE'
  | 'EN_IL'
  | 'EN_IM'
  | 'EN_IN'
  | 'EN_IO'
  | 'EN_JE'
  | 'EN_JM'
  | 'EN_KE'
  | 'EN_KI'
  | 'EN_KN'
  | 'EN_KY'
  | 'EN_LC'
  | 'EN_LR'
  | 'EN_LS'
  | 'EN_MG'
  | 'EN_MH'
  | 'EN_MO'
  | 'EN_MP'
  | 'EN_MS'
  | 'EN_MT'
  | 'EN_MU'
  | 'EN_MW'
  | 'EN_MY'
  | 'EN_NA'
  | 'EN_NF'
  | 'EN_NG'
  | 'EN_NL'
  | 'EN_NR'
  | 'EN_NU'
  | 'EN_NZ'
  | 'EN_PG'
  | 'EN_PH'
  | 'EN_PK'
  | 'EN_PN'
  | 'EN_PR'
  | 'EN_PW'
  | 'EN_RW'
  | 'EN_SB'
  | 'EN_SC'
  | 'EN_SD'
  | 'EN_SE'
  | 'EN_SG'
  | 'EN_SH'
  | 'EN_SI'
  | 'EN_SL'
  | 'EN_SS'
  | 'EN_SX'
  | 'EN_SZ'
  | 'EN_TC'
  | 'EN_TK'
  | 'EN_TO'
  | 'EN_TT'
  | 'EN_TV'
  | 'EN_TZ'
  | 'EN_UG'
  | 'EN_UM'
  | 'EN_US'
  | 'EN_VC'
  | 'EN_VG'
  | 'EN_VI'
  | 'EN_VU'
  | 'EN_WS'
  | 'EN_ZA'
  | 'EN_ZM'
  | 'EN_ZW'
  | 'EO'
  | 'ES'
  | 'ES_AR'
  | 'ES_BO'
  | 'ES_BR'
  | 'ES_BZ'
  | 'ES_CL'
  | 'ES_CO'
  | 'ES_CR'
  | 'ES_CU'
  | 'ES_DO'
  | 'ES_EA'
  | 'ES_EC'
  | 'ES_ES'
  | 'ES_GQ'
  | 'ES_GT'
  | 'ES_HN'
  | 'ES_IC'
  | 'ES_MX'
  | 'ES_NI'
  | 'ES_PA'
  | 'ES_PE'
  | 'ES_PH'
  | 'ES_PR'
  | 'ES_PY'
  | 'ES_SV'
  | 'ES_US'
  | 'ES_UY'
  | 'ES_VE'
  | 'ET'
  | 'ET_EE'
  | 'EU'
  | 'EU_ES'
  | 'EWO'
  | 'EWO_CM'
  | 'FA'
  | 'FA_AF'
  | 'FA_IR'
  | 'FF'
  | 'FF_ADLM'
  | 'FF_ADLM_BF'
  | 'FF_ADLM_CM'
  | 'FF_ADLM_GH'
  | 'FF_ADLM_GM'
  | 'FF_ADLM_GN'
  | 'FF_ADLM_GW'
  | 'FF_ADLM_LR'
  | 'FF_ADLM_MR'
  | 'FF_ADLM_NE'
  | 'FF_ADLM_NG'
  | 'FF_ADLM_SL'
  | 'FF_ADLM_SN'
  | 'FF_LATN'
  | 'FF_LATN_BF'
  | 'FF_LATN_CM'
  | 'FF_LATN_GH'
  | 'FF_LATN_GM'
  | 'FF_LATN_GN'
  | 'FF_LATN_GW'
  | 'FF_LATN_LR'
  | 'FF_LATN_MR'
  | 'FF_LATN_NE'
  | 'FF_LATN_NG'
  | 'FF_LATN_SL'
  | 'FF_LATN_SN'
  | 'FI'
  | 'FIL'
  | 'FIL_PH'
  | 'FI_FI'
  | 'FO'
  | 'FO_DK'
  | 'FO_FO'
  | 'FR'
  | 'FR_BE'
  | 'FR_BF'
  | 'FR_BI'
  | 'FR_BJ'
  | 'FR_BL'
  | 'FR_CA'
  | 'FR_CD'
  | 'FR_CF'
  | 'FR_CG'
  | 'FR_CH'
  | 'FR_CI'
  | 'FR_CM'
  | 'FR_DJ'
  | 'FR_DZ'
  | 'FR_FR'
  | 'FR_GA'
  | 'FR_GF'
  | 'FR_GN'
  | 'FR_GP'
  | 'FR_GQ'
  | 'FR_HT'
  | 'FR_KM'
  | 'FR_LU'
  | 'FR_MA'
  | 'FR_MC'
  | 'FR_MF'
  | 'FR_MG'
  | 'FR_ML'
  | 'FR_MQ'
  | 'FR_MR'
  | 'FR_MU'
  | 'FR_NC'
  | 'FR_NE'
  | 'FR_PF'
  | 'FR_PM'
  | 'FR_RE'
  | 'FR_RW'
  | 'FR_SC'
  | 'FR_SN'
  | 'FR_SY'
  | 'FR_TD'
  | 'FR_TG'
  | 'FR_TN'
  | 'FR_VU'
  | 'FR_WF'
  | 'FR_YT'
  | 'FUR'
  | 'FUR_IT'
  | 'FY'
  | 'FY_NL'
  | 'GA'
  | 'GA_GB'
  | 'GA_IE'
  | 'GD'
  | 'GD_GB'
  | 'GL'
  | 'GL_ES'
  | 'GSW'
  | 'GSW_CH'
  | 'GSW_FR'
  | 'GSW_LI'
  | 'GU'
  | 'GUZ'
  | 'GUZ_KE'
  | 'GU_IN'
  | 'GV'
  | 'GV_IM'
  | 'HA'
  | 'HAW'
  | 'HAW_US'
  | 'HA_GH'
  | 'HA_NE'
  | 'HA_NG'
  | 'HE'
  | 'HE_IL'
  | 'HI'
  | 'HI_IN'
  | 'HR'
  | 'HR_BA'
  | 'HR_HR'
  | 'HSB'
  | 'HSB_DE'
  | 'HU'
  | 'HU_HU'
  | 'HY'
  | 'HY_AM'
  | 'IA'
  | 'ID'
  | 'ID_ID'
  | 'IG'
  | 'IG_NG'
  | 'II'
  | 'II_CN'
  | 'IS'
  | 'IS_IS'
  | 'IT'
  | 'IT_CH'
  | 'IT_IT'
  | 'IT_SM'
  | 'IT_VA'
  | 'JA'
  | 'JA_JP'
  | 'JGO'
  | 'JGO_CM'
  | 'JMC'
  | 'JMC_TZ'
  | 'JV'
  | 'JV_ID'
  | 'KA'
  | 'KAB'
  | 'KAB_DZ'
  | 'KAM'
  | 'KAM_KE'
  | 'KA_GE'
  | 'KDE'
  | 'KDE_TZ'
  | 'KEA'
  | 'KEA_CV'
  | 'KHQ'
  | 'KHQ_ML'
  | 'KI'
  | 'KI_KE'
  | 'KK'
  | 'KKJ'
  | 'KKJ_CM'
  | 'KK_KZ'
  | 'KL'
  | 'KLN'
  | 'KLN_KE'
  | 'KL_GL'
  | 'KM'
  | 'KM_KH'
  | 'KN'
  | 'KN_IN'
  | 'KO'
  | 'KOK'
  | 'KOK_IN'
  | 'KO_KP'
  | 'KO_KR'
  | 'KS'
  | 'KSB'
  | 'KSB_TZ'
  | 'KSF'
  | 'KSF_CM'
  | 'KSH'
  | 'KSH_DE'
  | 'KS_ARAB'
  | 'KS_ARAB_IN'
  | 'KU'
  | 'KU_TR'
  | 'KW'
  | 'KW_GB'
  | 'KY'
  | 'KY_KG'
  | 'LAG'
  | 'LAG_TZ'
  | 'LB'
  | 'LB_LU'
  | 'LG'
  | 'LG_UG'
  | 'LKT'
  | 'LKT_US'
  | 'LN'
  | 'LN_AO'
  | 'LN_CD'
  | 'LN_CF'
  | 'LN_CG'
  | 'LO'
  | 'LO_LA'
  | 'LRC'
  | 'LRC_IQ'
  | 'LRC_IR'
  | 'LT'
  | 'LT_LT'
  | 'LU'
  | 'LUO'
  | 'LUO_KE'
  | 'LUY'
  | 'LUY_KE'
  | 'LU_CD'
  | 'LV'
  | 'LV_LV'
  | 'MAI'
  | 'MAI_IN'
  | 'MAS'
  | 'MAS_KE'
  | 'MAS_TZ'
  | 'MER'
  | 'MER_KE'
  | 'MFE'
  | 'MFE_MU'
  | 'MG'
  | 'MGH'
  | 'MGH_MZ'
  | 'MGO'
  | 'MGO_CM'
  | 'MG_MG'
  | 'MI'
  | 'MI_NZ'
  | 'MK'
  | 'MK_MK'
  | 'ML'
  | 'ML_IN'
  | 'MN'
  | 'MNI'
  | 'MNI_BENG'
  | 'MNI_BENG_IN'
  | 'MN_MN'
  | 'MR'
  | 'MR_IN'
  | 'MS'
  | 'MS_BN'
  | 'MS_ID'
  | 'MS_MY'
  | 'MS_SG'
  | 'MT'
  | 'MT_MT'
  | 'MUA'
  | 'MUA_CM'
  | 'MY'
  | 'MY_MM'
  | 'MZN'
  | 'MZN_IR'
  | 'NAQ'
  | 'NAQ_NA'
  | 'NB'
  | 'NB_NO'
  | 'NB_SJ'
  | 'ND'
  | 'NDS'
  | 'NDS_DE'
  | 'NDS_NL'
  | 'ND_ZW'
  | 'NE'
  | 'NE_IN'
  | 'NE_NP'
  | 'NL'
  | 'NL_AW'
  | 'NL_BE'
  | 'NL_BQ'
  | 'NL_CW'
  | 'NL_NL'
  | 'NL_SR'
  | 'NL_SX'
  | 'NMG'
  | 'NMG_CM'
  | 'NN'
  | 'NNH'
  | 'NNH_CM'
  | 'NN_NO'
  | 'NUS'
  | 'NUS_SS'
  | 'NYN'
  | 'NYN_UG'
  | 'OM'
  | 'OM_ET'
  | 'OM_KE'
  | 'OR'
  | 'OR_IN'
  | 'OS'
  | 'OS_GE'
  | 'OS_RU'
  | 'PA'
  | 'PA_ARAB'
  | 'PA_ARAB_PK'
  | 'PA_GURU'
  | 'PA_GURU_IN'
  | 'PCM'
  | 'PCM_NG'
  | 'PL'
  | 'PL_PL'
  | 'PRG'
  | 'PS'
  | 'PS_AF'
  | 'PS_PK'
  | 'PT'
  | 'PT_AO'
  | 'PT_BR'
  | 'PT_CH'
  | 'PT_CV'
  | 'PT_GQ'
  | 'PT_GW'
  | 'PT_LU'
  | 'PT_MO'
  | 'PT_MZ'
  | 'PT_PT'
  | 'PT_ST'
  | 'PT_TL'
  | 'QU'
  | 'QU_BO'
  | 'QU_EC'
  | 'QU_PE'
  | 'RM'
  | 'RM_CH'
  | 'RN'
  | 'RN_BI'
  | 'RO'
  | 'ROF'
  | 'ROF_TZ'
  | 'RO_MD'
  | 'RO_RO'
  | 'RU'
  | 'RU_BY'
  | 'RU_KG'
  | 'RU_KZ'
  | 'RU_MD'
  | 'RU_RU'
  | 'RU_UA'
  | 'RW'
  | 'RWK'
  | 'RWK_TZ'
  | 'RW_RW'
  | 'SAH'
  | 'SAH_RU'
  | 'SAQ'
  | 'SAQ_KE'
  | 'SAT'
  | 'SAT_OLCK'
  | 'SAT_OLCK_IN'
  | 'SBP'
  | 'SBP_TZ'
  | 'SD'
  | 'SD_ARAB'
  | 'SD_ARAB_PK'
  | 'SD_DEVA'
  | 'SD_DEVA_IN'
  | 'SE'
  | 'SEH'
  | 'SEH_MZ'
  | 'SES'
  | 'SES_ML'
  | 'SE_FI'
  | 'SE_NO'
  | 'SE_SE'
  | 'SG'
  | 'SG_CF'
  | 'SHI'
  | 'SHI_LATN'
  | 'SHI_LATN_MA'
  | 'SHI_TFNG'
  | 'SHI_TFNG_MA'
  | 'SI'
  | 'SI_LK'
  | 'SK'
  | 'SK_SK'
  | 'SL'
  | 'SL_SI'
  | 'SMN'
  | 'SMN_FI'
  | 'SN'
  | 'SN_ZW'
  | 'SO'
  | 'SO_DJ'
  | 'SO_ET'
  | 'SO_KE'
  | 'SO_SO'
  | 'SQ'
  | 'SQ_AL'
  | 'SQ_MK'
  | 'SQ_XK'
  | 'SR'
  | 'SR_CYRL'
  | 'SR_CYRL_BA'
  | 'SR_CYRL_ME'
  | 'SR_CYRL_RS'
  | 'SR_CYRL_XK'
  | 'SR_LATN'
  | 'SR_LATN_BA'
  | 'SR_LATN_ME'
  | 'SR_LATN_RS'
  | 'SR_LATN_XK'
  | 'SU'
  | 'SU_LATN'
  | 'SU_LATN_ID'
  | 'SV'
  | 'SV_AX'
  | 'SV_FI'
  | 'SV_SE'
  | 'SW'
  | 'SW_CD'
  | 'SW_KE'
  | 'SW_TZ'
  | 'SW_UG'
  | 'TA'
  | 'TA_IN'
  | 'TA_LK'
  | 'TA_MY'
  | 'TA_SG'
  | 'TE'
  | 'TEO'
  | 'TEO_KE'
  | 'TEO_UG'
  | 'TE_IN'
  | 'TG'
  | 'TG_TJ'
  | 'TH'
  | 'TH_TH'
  | 'TI'
  | 'TI_ER'
  | 'TI_ET'
  | 'TK'
  | 'TK_TM'
  | 'TO'
  | 'TO_TO'
  | 'TR'
  | 'TR_CY'
  | 'TR_TR'
  | 'TT'
  | 'TT_RU'
  | 'TWQ'
  | 'TWQ_NE'
  | 'TZM'
  | 'TZM_MA'
  | 'UG'
  | 'UG_CN'
  | 'UK'
  | 'UK_UA'
  | 'UR'
  | 'UR_IN'
  | 'UR_PK'
  | 'UZ'
  | 'UZ_ARAB'
  | 'UZ_ARAB_AF'
  | 'UZ_CYRL'
  | 'UZ_CYRL_UZ'
  | 'UZ_LATN'
  | 'UZ_LATN_UZ'
  | 'VAI'
  | 'VAI_LATN'
  | 'VAI_LATN_LR'
  | 'VAI_VAII'
  | 'VAI_VAII_LR'
  | 'VI'
  | 'VI_VN'
  | 'VO'
  | 'VUN'
  | 'VUN_TZ'
  | 'WAE'
  | 'WAE_CH'
  | 'WO'
  | 'WO_SN'
  | 'XH'
  | 'XH_ZA'
  | 'XOG'
  | 'XOG_UG'
  | 'YAV'
  | 'YAV_CM'
  | 'YI'
  | 'YO'
  | 'YO_BJ'
  | 'YO_NG'
  | 'YUE'
  | 'YUE_HANS'
  | 'YUE_HANS_CN'
  | 'YUE_HANT'
  | 'YUE_HANT_HK'
  | 'ZGH'
  | 'ZGH_MA'
  | 'ZH'
  | 'ZH_HANS'
  | 'ZH_HANS_CN'
  | 'ZH_HANS_HK'
  | 'ZH_HANS_MO'
  | 'ZH_HANS_SG'
  | 'ZH_HANT'
  | 'ZH_HANT_HK'
  | 'ZH_HANT_MO'
  | 'ZH_HANT_TW'
  | 'ZU'
  | 'ZU_ZA';

export type LanguageDisplay = {
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String']['output'];
};

/** Store the current and allowed usage. */
export type LimitInfo = {
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: Limits;
  /** Defines the current resource usage. */
  currentUsage: Limits;
};

export type Limits = {
  /** Defines the number of channels. */
  channels?: Maybe<Scalars['Int']['output']>;
  /** Defines the number of order. */
  orders?: Maybe<Scalars['Int']['output']>;
  /** Defines the number of product variants. */
  productVariants?: Maybe<Scalars['Int']['output']>;
  /** Defines the number of staff users. */
  staffUsers?: Maybe<Scalars['Int']['output']>;
  /** Defines the number of warehouses. */
  warehouses?: Maybe<Scalars['Int']['output']>;
};

/**
 * List payment methods stored for the user by payment gateway.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ListStoredPaymentMethods = Event & {
  /** Channel in context which was used to fetch the list of payment methods. */
  channel: Channel;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user for which the app should return a list of payment methods. */
  user: User;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** The manifest definition. */
export type Manifest = {
  /** Description of the app displayed in the dashboard. */
  about?: Maybe<Scalars['String']['output']>;
  /** App website rendered in the dashboard. */
  appUrl?: Maybe<Scalars['String']['output']>;
  /**
   * The audience that will be included in all JWT tokens for the app.
   *
   * Added in Saleor 3.8.
   */
  audience?: Maybe<Scalars['String']['output']>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  author?: Maybe<Scalars['String']['output']>;
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  brand?: Maybe<AppManifestBrand>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  configurationUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  /** URL to the full privacy policy. */
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  /** List of extensions that will be mounted in Saleor's dashboard. For details, please [see the extension section.](https://docs.saleor.io/docs/3.x/developer/extending/apps/extending-dashboard-with-apps#key-concepts) */
  extensions: Array<AppManifestExtension>;
  /** External URL to the app homepage. */
  homepageUrl?: Maybe<Scalars['String']['output']>;
  /** The identifier of the manifest for the app. */
  identifier: Scalars['String']['output'];
  /** The name of the manifest for the app . */
  name: Scalars['String']['output'];
  /** The array permissions required for the app. */
  permissions?: Maybe<Array<Permission>>;
  /**
   * Determines the app's required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  requiredSaleorVersion?: Maybe<AppManifestRequiredSaleorVersion>;
  /** External URL to the page where app users can find support. */
  supportUrl?: Maybe<Scalars['String']['output']>;
  /** Endpoint used during process of app installation, [see installing an app.](https://docs.saleor.io/docs/3.x/developer/extending/apps/installing-apps#installing-an-app) */
  tokenTargetUrl?: Maybe<Scalars['String']['output']>;
  /** The version of the manifest for the app. */
  version: Scalars['String']['output'];
  /**
   * List of the app's webhooks.
   *
   * Added in Saleor 3.5.
   */
  webhooks: Array<AppManifestWebhook>;
};

/** Metadata for the Margin class. */
export type Margin = {
  /** The starting value of the margin. */
  start?: Maybe<Scalars['Int']['output']>;
  /** The ending value of the margin. */
  stop?: Maybe<Scalars['Int']['output']>;
};

/**
 * Determine the mark as paid strategy for the channel.
 *
 *     TRANSACTION_FLOW - new orders marked as paid will receive a
 *     `TransactionItem` object, that will cover the `order.total`.
 *
 *     PAYMENT_FLOW - new orders marked as paid will receive a
 *     `Payment` object, that will cover the `order.total`.
 *
 *
 */
export type MarkAsPaidStrategyEnum =
  | 'PAYMENT_FLOW'
  | 'TRANSACTION_FLOW';

/** An enumeration. */
export type MeasurementUnitsEnum =
  | 'ACRE_FT'
  | 'ACRE_IN'
  | 'CM'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'DM'
  | 'FL_OZ'
  | 'FT'
  | 'G'
  | 'INCH'
  | 'KG'
  | 'KM'
  | 'LB'
  | 'LITER'
  | 'M'
  | 'MM'
  | 'OZ'
  | 'PINT'
  | 'QT'
  | 'SQ_CM'
  | 'SQ_DM'
  | 'SQ_FT'
  | 'SQ_INCH'
  | 'SQ_KM'
  | 'SQ_M'
  | 'SQ_MM'
  | 'SQ_YD'
  | 'TONNE'
  | 'YD';

export type MeasurementUnitsEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<MeasurementUnitsEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<MeasurementUnitsEnum>>;
};

export type MediaChoicesSortField =
  /** Sort media by ID. */
  | 'ID';

export type MediaInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MediaSortingInput = {
  /** Specifies the direction in which to sort media. */
  direction: OrderDirection;
  /** Sort media by the selected field. */
  field: MediaChoicesSortField;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  /** The ID of the menu. */
  id: Scalars['ID']['output'];
  /** Menu items associated with this menu. */
  items?: Maybe<Array<MenuItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The name of the menu. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Slug of the menu. */
  slug: Scalars['String']['output'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_DELETED (async): A menu was deleted.
 */
export type MenuBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  edges: Array<MenuCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Menu;
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_CREATED (async): A menu was created.
 */
export type MenuCreate = {
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuCreateInput = {
  /** List of menu items. */
  items?: InputMaybe<Array<MenuItemInput>>;
  /** Name of the menu. */
  name: Scalars['String']['input'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuCreatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_DELETED (async): A menu was deleted.
 */
export type MenuDelete = {
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuDeletedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuError = {
  /** The error code. */
  code: MenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type MenuErrorCode =
  | 'CANNOT_ASSIGN_NODE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_MENU_ITEM'
  | 'NOT_FOUND'
  | 'NO_MENU_ITEM_PROVIDED'
  | 'REQUIRED'
  | 'TOO_MANY_MENU_ITEMS'
  | 'UNIQUE';

export type MenuFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<Scalars['String']['input']>>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Slug of the menu. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  /** Category associated with the menu item. */
  category?: Maybe<Category>;
  /** Represents the child items of the current menu item. */
  children?: Maybe<Array<MenuItem>>;
  /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  /** The ID of the menu item. */
  id: Scalars['ID']['output'];
  /** Indicates the position of the menu item within the menu structure. */
  level: Scalars['Int']['output'];
  /** Represents the menu to which the menu item belongs. */
  menu: Menu;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The name of the menu item. */
  name: Scalars['String']['output'];
  /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
  page?: Maybe<Page>;
  /** ID of parent menu item. If empty, menu will be top level menu. */
  parent?: Maybe<MenuItem>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
  /** URL to the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_DELETED (async): A menu item was deleted.
 */
export type MenuItemBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  edges: Array<MenuItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuItemCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MenuItem;
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_CREATED (async): A menu item was created.
 */
export type MenuItemCreate = {
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID']['input'];
  /** Name of the menu item. */
  name: Scalars['String']['input'];
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemCreatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_DELETED (async): A menu item was deleted.
 */
export type MenuItemDelete = {
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemDeletedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the menu item. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.
 */
export type MenuItemMove = {
  errors: Array<MenuError>;
  /** Assigned menu to move within. */
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID']['input'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort menu items. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

/** Represents menu item's original translatable fields and related translations. */
export type MenuItemTranslatableContent = Node & {
  /** The ID of the menu item translatable content. */
  id: Scalars['ID']['output'];
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem?: Maybe<MenuItem>;
  /** Name of the menu item to translate. */
  name: Scalars['String']['output'];
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
};


/** Represents menu item's original translatable fields and related translations. */
export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type MenuItemTranslate = {
  errors: Array<TranslationError>;
  menuItem?: Maybe<MenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** Represents menu item translations. */
export type MenuItemTranslation = Node & {
  /** The ID of the menu item translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated menu item name. */
  name: Scalars['String']['output'];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_UPDATED (async): A menu item was updated.
 */
export type MenuItemUpdate = {
  errors: Array<MenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<MenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuItemUpdatedMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemsSortField =
  /** Sort menu items by name. */
  | 'NAME';

export type MenuSortField =
  /** Sort menus by items count. */
  | 'ITEMS_COUNT'
  /** Sort menus by name. */
  | 'NAME';

export type MenuSortingInput = {
  /** Specifies the direction in which to sort menus. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_UPDATED (async): A menu was updated.
 */
export type MenuUpdate = {
  errors: Array<MenuError>;
  menu?: Maybe<Menu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>;
};

/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<Menu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type MenuUpdatedMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataError = {
  /** The error code. */
  code: MetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type MetadataErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'NOT_UPDATED'
  | 'REQUIRED';

export type MetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars['String']['input'];
  /** Value of a metadata item. */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String']['input'];
  /** Value of a metadata item. */
  value: Scalars['String']['input'];
};

export type MetadataItem = {
  /** Key of a metadata item. */
  key: Scalars['String']['output'];
  /** Value of a metadata item. */
  value: Scalars['String']['output'];
};

/** Represents amount of money in specific currency. */
export type Money = {
  /** Amount of money. */
  amount: Scalars['Float']['output'];
  /** Currency code. */
  currency: Scalars['String']['output'];
};

export type MoneyInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  currency: Scalars['String']['input'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  /** Lower bound of a price range. */
  start?: Maybe<Money>;
  /** Upper bound of a price range. */
  stop?: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID']['input'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  /**
   * Create a new address for the customer.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - ADDRESS_CREATED (async): An address was created.
   */
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  /**
   * Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
   *
   * Triggers the following webhook events:
   * - ADDRESS_DELETED (async): An address was deleted.
   */
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  /**
   * Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
   *
   * Triggers the following webhook events:
   * - ADDRESS_UPDATED (async): An address was updated.
   */
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  /**
   * Remove user account.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - ACCOUNT_DELETED (async): Account was deleted.
   */
  accountDelete?: Maybe<AccountDelete>;
  /**
   * Register a new user.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_CREATED (async): A new customer account was created.
   * - NOTIFY_USER (async): A notification for account confirmation.
   * - ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.
   */
  accountRegister?: Maybe<AccountRegister>;
  /**
   * Sends an email with the account removal link for the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account delete request.
   * - ACCOUNT_DELETE_REQUESTED (async): An account delete requested.
   */
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  /**
   * Sets a default address for the authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer's address was updated.
   */
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  /**
   * Updates the account of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  accountUpdate?: Maybe<AccountUpdate>;
  /**
   * Creates user address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_CREATED (async): A new address was created.
   */
  addressCreate?: Maybe<AddressCreate>;
  /**
   * Deletes an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_DELETED (async): An address was deleted.
   */
  addressDelete?: Maybe<AddressDelete>;
  /**
   * Sets a default address for the given user.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer was updated.
   */
  addressSetDefault?: Maybe<AddressSetDefault>;
  /**
   * Updates an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_UPDATED (async): An address was updated.
   */
  addressUpdate?: Maybe<AddressUpdate>;
  /**
   * Activate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_STATUS_CHANGED (async): An app was activated.
   */
  appActivate?: Maybe<AppActivate>;
  /**
   * Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_INSTALLED (async): An app was installed.
   */
  appCreate?: Maybe<AppCreate>;
  /**
   * Deactivate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_STATUS_CHANGED (async): An app was deactivated.
   */
  appDeactivate?: Maybe<AppDeactivate>;
  /**
   * Deletes an app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_DELETED (async): An app was deleted.
   */
  appDelete?: Maybe<AppDelete>;
  /**
   * Delete failed installation.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  /**
   * Fetch and validate manifest.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appFetchManifest?: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appInstall?: Maybe<AppInstall>;
  /**
   * Retry failed installation of new app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_INSTALLED (async): An app was installed.
   */
  appRetryInstall?: Maybe<AppRetryInstall>;
  /**
   * Creates a new token.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenCreate?: Maybe<AppTokenCreate>;
  /**
   * Deletes an authentication token assigned to app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenDelete?: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify?: Maybe<AppTokenVerify>;
  /**
   * Updates an existing app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_UPDATED (async): An app was updated.
   */
  appUpdate?: Maybe<AppUpdate>;
  /**
   * Assigns storefront's navigation menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
   */
  assignNavigation?: Maybe<AssignNavigation>;
  /**
   * Add shipping zone to given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  /**
   * Creates attributes.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_CREATED (async): An attribute was created.
   */
  attributeBulkCreate?: Maybe<AttributeBulkCreate>;
  /**
   * Deletes attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_DELETED (async): An attribute was deleted.
   */
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /**
   * Creates/updates translations for attributes.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeBulkTranslate?: Maybe<AttributeBulkTranslate>;
  /**
   * Updates attributes.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
   * - ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
   * - ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.
   */
  attributeBulkUpdate?: Maybe<AttributeBulkUpdate>;
  /**
   * Creates an attribute.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_CREATED (async): An attribute was created.
   */
  attributeCreate?: Maybe<AttributeCreate>;
  /**
   * Deletes an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_DELETED (async): An attribute was deleted.
   */
  attributeDelete?: Maybe<AttributeDelete>;
  /**
   * Reorder the values of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  /**
   * Creates/updates translations for an attribute.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeTranslate?: Maybe<AttributeTranslate>;
  /**
   * Updates attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeUpdate?: Maybe<AttributeUpdate>;
  /**
   * Deletes values of attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  /**
   * Creates/updates translations for attributes values.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueBulkTranslate?: Maybe<AttributeValueBulkTranslate>;
  /**
   * Creates a value for an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  /**
   * Deletes a value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  /**
   * Creates/updates translations for an attribute value.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  /**
   * Updates value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /**
   * Deletes categories.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /**
   * Creates a new category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryCreate?: Maybe<CategoryCreate>;
  /**
   * Deletes a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryDelete?: Maybe<CategoryDelete>;
  /**
   * Creates/updates translations for a category.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  categoryTranslate?: Maybe<CategoryTranslate>;
  /**
   * Updates a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryUpdate?: Maybe<CategoryUpdate>;
  /**
   * Activate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_STATUS_CHANGED (async): A channel was activated.
   */
  channelActivate?: Maybe<ChannelActivate>;
  /**
   * Creates new channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_CREATED (async): A channel was created.
   */
  channelCreate?: Maybe<ChannelCreate>;
  /**
   * Deactivate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_STATUS_CHANGED (async): A channel was deactivated.
   */
  channelDeactivate?: Maybe<ChannelDeactivate>;
  /**
   * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_DELETED (async): A channel was deleted.
   */
  channelDelete?: Maybe<ChannelDelete>;
  /**
   * Reorder the warehouses of a channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelReorderWarehouses?: Maybe<ChannelReorderWarehouses>;
  /**
   * Update a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   * Requires one of the following permissions when updating only `orderSettings` field: `MANAGE_CHANNELS`, `MANAGE_ORDERS`.
   * Requires one of the following permissions when updating only `checkoutSettings` field: `MANAGE_CHANNELS`, `MANAGE_CHECKOUTS`.
   * Requires one of the following permissions when updating only `paymentSettings` field: `MANAGE_CHANNELS`, `HANDLE_PAYMENTS`.
   *
   * Triggers the following webhook events:
   * - CHANNEL_UPDATED (async): A channel was updated.
   * - CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
   */
  channelUpdate?: Maybe<ChannelUpdate>;
  /**
   * Adds a gift card or a voucher to a checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  /**
   * Update billing address in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /**
   * Completes the checkout. As a result a new order is created. The mutation allows to create the unpaid order when setting `orderSettings.allowUnpaidOrders` for given `Channel` is set to `true`. When `orderSettings.allowUnpaidOrders` is set to `false`, checkout can be completed only when attached `Payment`/`TransactionItem`s fully cover the checkout's total. When processing the checkout with `Payment`, in case of required additional confirmation step like 3D secure, the `confirmationNeeded` flag will be set to True and no order will be created until payment is confirmed with second call of this mutation.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   * - ORDER_CREATED (async): Triggered when order is created.
   * - NOTIFY_USER (async): A notification for order placement.
   * - NOTIFY_USER (async): A staff notification for order placement.
   * - ORDER_UPDATED (async): Triggered when order received the update after placement.
   * - ORDER_PAID (async): Triggered when newly created order is paid.
   * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
   * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
   */
  checkoutComplete?: Maybe<CheckoutComplete>;
  /**
   * Create a new checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CREATED (async): A checkout was created.
   */
  checkoutCreate?: Maybe<CheckoutCreate>;
  /**
   * Create new checkout from existing order.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutCreateFromOrder?: Maybe<CheckoutCreateFromOrder>;
  /**
   * Sets the customer as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  /**
   * Removes the user assigned as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  /**
   * Updates the delivery method (shipping method or pick up point) of the checkout.
   *
   * Added in Saleor 3.1.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
  /**
   * Updates email address in the existing checkout object.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  /**
   * Update language code in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
  /**
   * Deletes a CheckoutLine.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  /**
   * Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  /**
   * Deletes checkout lines.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
  /**
   * Updates checkout line in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  /**
   * Remove a gift card or a voucher from a checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  /**
   * Update shipping address in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /**
   * Adds products to a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  /**
   * Deletes collections.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  /**
   * Manage collection's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  /**
   * Creates a new collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionCreate?: Maybe<CollectionCreate>;
  /**
   * Deletes a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionDelete?: Maybe<CollectionDelete>;
  /**
   * Remove products from a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  /**
   * Reorder the products of a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  /**
   * Creates/updates translations for a collection.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  collectionTranslate?: Maybe<CollectionTranslate>;
  /**
   * Updates a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionUpdate?: Maybe<CollectionUpdate>;
  /**
   * Confirm user account with token sent by email during registration.
   *
   * Triggers the following webhook events:
   * - ACCOUNT_CONFIRMED (async): Account was confirmed.
   */
  confirmAccount?: Maybe<ConfirmAccount>;
  /**
   * Confirm the email change of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - NOTIFY_USER (async): A notification that account email change was confirmed.
   * - ACCOUNT_EMAIL_CHANGED (async): An account email was changed.
   */
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  /**
   * Creates new warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  createWarehouse?: Maybe<WarehouseCreate>;
  /**
   * Deletes customers.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_DELETED (async): A customer account was deleted.
   */
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  /**
   * Updates customers.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  customerBulkUpdate?: Maybe<CustomerBulkUpdate>;
  /**
   * Creates a new customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_CREATED (async): A new customer account was created.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   * - NOTIFY_USER (async): A notification for setting the password.
   * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
   */
  customerCreate?: Maybe<CustomerCreate>;
  /**
   * Deletes a customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_DELETED (async): A customer account was deleted.
   */
  customerDelete?: Maybe<CustomerDelete>;
  /**
   * Updates an existing customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A new customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  customerUpdate?: Maybe<CustomerUpdate>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  deleteMetadata?: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  /**
   * Deletes selected warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  deleteWarehouse?: Maybe<WarehouseDelete>;
  /**
   * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  /**
   * Remove digital content assigned to given variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  /**
   * Update digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  /**
   * Generate new URL to digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  /**
   * Deletes draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  /**
   * Completes creating an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  /**
   * Creates a new draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  /**
   * Deletes a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  /**
   * Deletes order lines.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  /**
   * Updates a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  /**
   * Retries event delivery.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
  /**
   * Export gift cards to csv file.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for the exported file.
   * - GIFT_CARD_EXPORT_COMPLETED (async): A notification for the exported file.
   */
  exportGiftCards?: Maybe<ExportGiftCards>;
  /**
   * Export products to csv file.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for the exported file.
   * - PRODUCT_EXPORT_COMPLETED (async): A notification for the exported file.
   */
  exportProducts?: Maybe<ExportProducts>;
  /**
   * Export voucher codes to csv/xlsx file.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_CODE_EXPORT_COMPLETED (async): A notification for the exported file.
   */
  exportVoucherCodes?: Maybe<ExportVoucherCodes>;
  /** Prepare external authentication URL for user by custom plugin. */
  externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
  /** Logout user by custom plugin. */
  externalLogout?: Maybe<ExternalLogout>;
  /**
   * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
   *
   * Added in Saleor 3.1.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   */
  externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  externalRefresh?: Maybe<ExternalRefresh>;
  /** Verify external authentication data by plugin. */
  externalVerify?: Maybe<ExternalVerify>;
  /**
   * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  fileUpload?: Maybe<FileUpload>;
  /**
   * Activate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
   */
  giftCardActivate?: Maybe<GiftCardActivate>;
  /**
   * Adds note to the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_UPDATED (async): A gift card was updated.
   */
  giftCardAddNote?: Maybe<GiftCardAddNote>;
  /**
   * Activate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
   */
  giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
  /**
   * Create gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_CREATED (async): A gift card was created.
   * - NOTIFY_USER (async): A notification for created gift card.
   */
  giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
  /**
   * Deactivate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
   */
  giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
  /**
   * Delete gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_DELETED (async): A gift card was deleted.
   */
  giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
  /**
   * Creates a new gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_CREATED (async): A gift card was created.
   * - NOTIFY_USER (async): A notification for created gift card.
   */
  giftCardCreate?: Maybe<GiftCardCreate>;
  /**
   * Deactivate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
   */
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  /**
   * Delete gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_DELETED (async): A gift card was deleted.
   */
  giftCardDelete?: Maybe<GiftCardDelete>;
  /**
   * Resend a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for gift card resend.
   */
  giftCardResend?: Maybe<GiftCardResend>;
  /**
   * Update gift card settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
  /**
   * Update a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_UPDATED (async): A gift card was updated.
   */
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  /**
   * Creates a ready to send invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceCreate?: Maybe<InvoiceCreate>;
  /**
   * Deletes an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceDelete?: Maybe<InvoiceDelete>;
  /**
   * Request an invoice for the order using plugin.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_REQUESTED (async): An invoice was requested.
   */
  invoiceRequest?: Maybe<InvoiceRequest>;
  /**
   * Requests deletion of an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_DELETED (async): An invoice was requested to delete.
   */
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  /**
   * Send an invoice notification to the customer.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_SENT (async): A notification for invoice send
   * - NOTIFY_USER (async): A notification for invoice send
   */
  invoiceSendNotification?: Maybe<InvoiceSendNotification>;
  /**
   * Updates an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  /**
   * Deletes menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_DELETED (async): A menu was deleted.
   */
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  /**
   * Creates a new Menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_CREATED (async): A menu was created.
   */
  menuCreate?: Maybe<MenuCreate>;
  /**
   * Deletes a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_DELETED (async): A menu was deleted.
   */
  menuDelete?: Maybe<MenuDelete>;
  /**
   * Deletes menu items.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_DELETED (async): A menu item was deleted.
   */
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  /**
   * Creates a new menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_CREATED (async): A menu item was created.
   */
  menuItemCreate?: Maybe<MenuItemCreate>;
  /**
   * Deletes a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_DELETED (async): A menu item was deleted.
   */
  menuItemDelete?: Maybe<MenuItemDelete>;
  /**
   * Moves items of menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.
   */
  menuItemMove?: Maybe<MenuItemMove>;
  /**
   * Creates/updates translations for a menu item.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  /**
   * Updates a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_UPDATED (async): A menu item was updated.
   */
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  /**
   * Updates a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_UPDATED (async): A menu was updated.
   */
  menuUpdate?: Maybe<MenuUpdate>;
  /**
   * Adds note to the order.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use `orderNoteAdd` instead.
   */
  orderAddNote?: Maybe<OrderAddNote>;
  /**
   * Cancels orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  /**
   * Creates multiple orders.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
   */
  orderBulkCreate?: Maybe<OrderBulkCreate>;
  /**
   * Cancel an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCancel?: Maybe<OrderCancel>;
  /**
   * Capture an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCapture?: Maybe<OrderCapture>;
  /**
   * Confirms an unconfirmed order by changing status to unfulfilled.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderConfirm?: Maybe<OrderConfirm>;
  /**
   * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
   *
   * Added in Saleor 3.2.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   * - ORDER_CREATED (async): Triggered when order is created.
   * - NOTIFY_USER (async): A notification for order placement.
   * - NOTIFY_USER (async): A staff notification for order placement.
   * - ORDER_UPDATED (async): Triggered when order received the update after placement.
   * - ORDER_PAID (async): Triggered when newly created order is paid.
   * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
   * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
   */
  orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
  /**
   * Adds discount to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountAdd?: Maybe<OrderDiscountAdd>;
  /**
   * Remove discount from the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountDelete?: Maybe<OrderDiscountDelete>;
  /**
   * Update discount for the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
  /**
   * Creates new fulfillments for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - FULFILLMENT_CREATED (async): A new fulfillment is created.
   * - ORDER_FULFILLED (async): Order is fulfilled.
   * - FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Sent when fulfillment tracking number is updated.
   * - FULFILLMENT_APPROVED (async): A fulfillment is approved.
   */
  orderFulfill?: Maybe<OrderFulfill>;
  /**
   * Approve existing fulfillment.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - FULFILLMENT_APPROVED (async): Fulfillment is approved.
   */
  orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
  /**
   * Cancels existing fulfillment and optionally restocks items.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /**
   * Refund products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  /**
   * Return products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  /**
   * Updates a fulfillment for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Fulfillment tracking number is updated.
   */
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  /**
   * Adds granted refund to the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundCreate?: Maybe<OrderGrantRefundCreate>;
  /**
   * Updates granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundUpdate?: Maybe<OrderGrantRefundUpdate>;
  /**
   * Deletes an order line from an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDelete?: Maybe<OrderLineDelete>;
  /**
   * Remove discount applied to the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
  /**
   * Update discount for the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
  /**
   * Updates an order line of an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineUpdate?: Maybe<OrderLineUpdate>;
  /**
   * Create order lines for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLinesCreate?: Maybe<OrderLinesCreate>;
  /**
   * Mark order as manually paid.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  /**
   * Adds note to the order.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderNoteAdd?: Maybe<OrderNoteAdd>;
  /**
   * Updates note of an order.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderNoteUpdate?: Maybe<OrderNoteUpdate>;
  /**
   * Refund an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderRefund?: Maybe<OrderRefund>;
  /**
   * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `channelUpdate` mutation instead.
   */
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  /**
   * Updates an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdate?: Maybe<OrderUpdate>;
  /**
   * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  /**
   * Void an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderVoid?: Maybe<OrderVoid>;
  /**
   * Assign attributes to a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeAssign?: Maybe<PageAttributeAssign>;
  /**
   * Unassign attributes from a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  /**
   * Deletes pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkDelete?: Maybe<PageBulkDelete>;
  /**
   * Publish pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkPublish?: Maybe<PageBulkPublish>;
  /**
   * Creates a new page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageCreate?: Maybe<PageCreate>;
  /**
   * Deletes a page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageDelete?: Maybe<PageDelete>;
  /**
   * Reorder page attribute values.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  /**
   * Creates/updates translations for a page.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  pageTranslate?: Maybe<PageTranslate>;
  /**
   * Delete page types.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  /**
   * Create a new page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeCreate?: Maybe<PageTypeCreate>;
  /**
   * Delete a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeDelete?: Maybe<PageTypeDelete>;
  /**
   * Reorder the attributes of a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  /**
   * Update page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeUpdate?: Maybe<PageTypeUpdate>;
  /**
   * Updates an existing page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageUpdate?: Maybe<PageUpdate>;
  /**
   * Change the password of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Captures the authorized payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentCapture?: Maybe<PaymentCapture>;
  /** Check payment balance. */
  paymentCheckBalance?: Maybe<PaymentCheckBalance>;
  /**
   * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  paymentGatewayInitialize?: Maybe<PaymentGatewayInitialize>;
  /**
   * Initializes payment gateway for tokenizing payment method session.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to initialize payment gateway for tokenization.
   */
  paymentGatewayInitializeTokenization?: Maybe<PaymentGatewayInitializeTokenization>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<PaymentInitialize>;
  /**
   * Tokenize payment method.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to tokenize payment method.
   */
  paymentMethodInitializeTokenization?: Maybe<PaymentMethodInitializeTokenization>;
  /**
   * Tokenize payment method.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION (sync): The customer continues payment method tokenization.
   */
  paymentMethodProcessTokenization?: Maybe<PaymentMethodProcessTokenization>;
  /**
   * Refunds the captured payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentRefund?: Maybe<PaymentRefund>;
  /**
   * Voids the authorized payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentVoid?: Maybe<PaymentVoid>;
  /**
   * Create new permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_CREATED (async)
   */
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  /**
   * Delete permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_DELETED (async)
   */
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  /**
   * Update permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_UPDATED (async)
   */
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  /**
   * Update plugin configuration.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  pluginUpdate?: Maybe<PluginUpdate>;
  /**
   * Assign attributes to a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssign?: Maybe<ProductAttributeAssign>;
  /**
   * Update attributes assigned to product variant for given product type.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
  /**
   * Un-assign attributes from a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  /**
   * Creates products.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkCreate?: Maybe<ProductBulkCreate>;
  /**
   * Deletes products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkDelete?: Maybe<ProductBulkDelete>;
  /**
   * Creates/updates translations for products.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   *
   * Triggers the following webhook events:
   * - TRANSLATION_CREATED (async): Called when a translation was created.
   * - TRANSLATION_UPDATED (async): Called when a translation was updated.
   */
  productBulkTranslate?: Maybe<ProductBulkTranslate>;
  /**
   * Manage product's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  /**
   * Creates a new product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productCreate?: Maybe<ProductCreate>;
  /**
   * Deletes a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productDelete?: Maybe<ProductDelete>;
  /**
   * Deletes product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
  /**
   * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaCreate?: Maybe<ProductMediaCreate>;
  /**
   * Deletes a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaDelete?: Maybe<ProductMediaDelete>;
  /**
   * Changes ordering of the product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaReorder?: Maybe<ProductMediaReorder>;
  /**
   * Updates a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaUpdate?: Maybe<ProductMediaUpdate>;
  /**
   * Reorder product attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  /**
   * Creates/updates translations for a product.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productTranslate?: Maybe<ProductTranslate>;
  /**
   * Deletes product types.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /**
   * Creates a new product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeCreate?: Maybe<ProductTypeCreate>;
  /**
   * Deletes a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeDelete?: Maybe<ProductTypeDelete>;
  /**
   * Reorder the attributes of a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  /**
   * Updates an existing product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /**
   * Updates an existing product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productUpdate?: Maybe<ProductUpdate>;
  /**
   * Creates product variants for a given product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  /**
   * Deletes product variants.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /**
   * Creates/updates translations for products variants.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   *
   * Triggers the following webhook events:
   * - TRANSLATION_CREATED (async): A translation was created.
   * - TRANSLATION_UPDATED (async): A translation was updated.
   */
  productVariantBulkTranslate?: Maybe<ProductVariantBulkTranslate>;
  /**
   * Update multiple product variants.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkUpdate?: Maybe<ProductVariantBulkUpdate>;
  /**
   * Manage product variant prices in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  /**
   * Creates a new variant for a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantCreate?: Maybe<ProductVariantCreate>;
  /**
   * Deletes a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantDelete?: Maybe<ProductVariantDelete>;
  /**
   * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
  /**
   * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorder?: Maybe<ProductVariantReorder>;
  /**
   * Reorder product variant attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  /**
   * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  /**
   * Creates stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  /**
   * Delete stocks from product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  /**
   * Update stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  /**
   * Creates/updates translations for a product variant.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  /**
   * Updates an existing variant for product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /**
   * Deletes promotions.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_DELETED (async): A promotion was deleted.
   */
  promotionBulkDelete?: Maybe<PromotionBulkDelete>;
  /**
   * Creates a new promotion.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_CREATED (async): A promotion was created.
   * - PROMOTION_STARTED (async): Optionally called if promotion was started.
   */
  promotionCreate?: Maybe<PromotionCreate>;
  /**
   * Deletes a promotion.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_DELETED (async): A promotion was deleted.
   */
  promotionDelete?: Maybe<PromotionDelete>;
  /**
   * Creates a new promotion rule.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_RULE_CREATED (async): A promotion rule was created.
   */
  promotionRuleCreate?: Maybe<PromotionRuleCreate>;
  /**
   * Deletes a promotion rule.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_RULE_DELETED (async): A promotion rule was deleted.
   */
  promotionRuleDelete?: Maybe<PromotionRuleDelete>;
  /**
   * Creates/updates translations for a promotion rule.
   *
   * Added in Saleor 3.17.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  promotionRuleTranslate?: Maybe<PromotionRuleTranslate>;
  /**
   * Updates an existing promotion rule.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_RULE_UPDATED (async): A promotion rule was updated.
   */
  promotionRuleUpdate?: Maybe<PromotionRuleUpdate>;
  /**
   * Creates/updates translations for a promotion.
   *
   * Added in Saleor 3.17.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  promotionTranslate?: Maybe<PromotionTranslate>;
  /**
   * Updates an existing promotion.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - PROMOTION_UPDATED (async): A promotion was updated.
   * - PROMOTION_STARTED (async): Optionally called if promotion was started.
   * - PROMOTION_ENDED (async): Optionally called if promotion was ended.
   */
  promotionUpdate?: Maybe<PromotionUpdate>;
  /**
   * Request email change of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account email change.
   * - ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.
   */
  requestEmailChange?: Maybe<RequestEmailChange>;
  /**
   * Sends an email with the account password modification link.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for password reset.
   * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
   * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
   */
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  /**
   * Deletes sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_DELETED (async): A sale was deleted.
   */
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  /**
   * Adds products, categories, collections to a sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleCreate` mutation instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   */
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  /**
   * Removes products, categories, collections from a sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleUpdate` or `promotionRuleDelete` mutations instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   */
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  /**
   * Manage sale's availability in channels.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleCreate` or `promotionRuleUpdate` mutations instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  /**
   * Creates a new sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionCreate` mutation instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_CREATED (async): A sale was created.
   */
  saleCreate?: Maybe<SaleCreate>;
  /**
   * Deletes a sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionDelete` mutation instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_DELETED (async): A sale was deleted.
   */
  saleDelete?: Maybe<SaleDelete>;
  /**
   * Creates/updates translations for a sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `PromotionTranslate` mutation instead.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  saleTranslate?: Maybe<SaleTranslate>;
  /**
   * Updates a sale.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionUpdate` mutation instead.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   * - SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.
   */
  saleUpdate?: Maybe<SaleUpdate>;
  /**
   * Sends a notification confirmation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account confirmation.
   * - ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.
   */
  sendConfirmationEmail?: Maybe<SendConfirmationEmail>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<SetPassword>;
  /**
   * Manage shipping method's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  /**
   * Deletes shipping prices.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  /**
   * Creates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  /**
   * Deletes a shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  /**
   * Exclude products from shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  /**
   * Remove product from excluded list for shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  /**
   * Creates/updates translations for a shipping method.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  /**
   * Updates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  /**
   * Deletes shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  /**
   * Creates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  /**
   * Deletes a shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  /**
   * Updates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  /**
   * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  /**
   * Updates site domain of the shop.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `PUBLIC_URL` environment variable instead.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `PUBLIC_URL` environment variable instead.
   */
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  /**
   * Fetch tax rates.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   */
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  /**
   * Creates/updates translations for shop settings.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  /**
   * Updates shop settings.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   *
   * Triggers the following webhook events:
   * - SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
   */
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  /**
   * Deletes staff users. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_DELETED (async): A staff account was deleted.
   */
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  /**
   * Creates a new staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_CREATED (async): A new staff account was created.
   * - NOTIFY_USER (async): A notification for setting the password.
   * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
   */
  staffCreate?: Maybe<StaffCreate>;
  /**
   * Deletes a staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_DELETED (async): A staff account was deleted.
   */
  staffDelete?: Maybe<StaffDelete>;
  /**
   * Creates a new staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  /**
   * Delete staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  /**
   * Updates a staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  /**
   * Updates an existing staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_UPDATED (async): A staff account was updated.
   */
  staffUpdate?: Maybe<StaffUpdate>;
  /**
   * Updates stocks for a given variant and warehouse.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   *
   * Triggers the following webhook events:
   * - PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock details were updated.
   */
  stockBulkUpdate?: Maybe<StockBulkUpdate>;
  /**
   * Request to delete a stored payment method on payment provider side.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - STORED_PAYMENT_METHOD_DELETE_REQUESTED (sync): The customer requested to delete a payment method.
   */
  storedPaymentMethodRequestDelete?: Maybe<StoredPaymentMethodRequestDelete>;
  /**
   * Create a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassCreate?: Maybe<TaxClassCreate>;
  /**
   * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassDelete?: Maybe<TaxClassDelete>;
  /**
   * Update a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassUpdate?: Maybe<TaxClassUpdate>;
  /**
   * Update tax configuration for a channel.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxConfigurationUpdate?: Maybe<TaxConfigurationUpdate>;
  /**
   * Remove all tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationDelete?: Maybe<TaxCountryConfigurationDelete>;
  /**
   * Update tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationUpdate?: Maybe<TaxCountryConfigurationUpdate>;
  /**
   * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
   *
   * Added in Saleor 3.8.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxExemptionManage?: Maybe<TaxExemptionManage>;
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /**
   * Deactivate all JWT tokens of the currently authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  /**
   * Create transaction for checkout or order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionCreate?: Maybe<TransactionCreate>;
  /**
   * Report the event for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  transactionEventReport?: Maybe<TransactionEventReport>;
  /**
   * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionInitialize?: Maybe<TransactionInitialize>;
  /**
   * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionProcess?: Maybe<TransactionProcess>;
  /**
   * Request an action for payment transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionRequestAction?: Maybe<TransactionRequestAction>;
  /**
   * Request a refund for payment transaction based on granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionRequestRefundForGrantedRefund?: Maybe<TransactionRequestRefundForGrantedRefund>;
  /**
   * Update transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  transactionUpdate?: Maybe<TransactionUpdate>;
  /**
   * Remove shipping zone from given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  updateMetadata?: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  /**
   * Updates given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  updateWarehouse?: Maybe<WarehouseUpdate>;
  /**
   * Deletes a user avatar. Only for staff members.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  /**
   * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  /**
   * Activate or deactivate users.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  /**
   * Assign an media to a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaAssign?: Maybe<VariantMediaAssign>;
  /**
   * Unassign an media from a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaUnassign?: Maybe<VariantMediaUnassign>;
  /**
   * Deletes vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_DELETED (async): A voucher was deleted.
   */
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  /**
   * Removes products, categories, collections from a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  /**
   * Manage voucher's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  /**
   * Deletes voucher codes.
   *
   * Added in Saleor 3.18.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherCodeBulkDelete?: Maybe<VoucherCodeBulkDelete>;
  /**
   * Creates a new voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_CREATED (async): A voucher was created.
   */
  voucherCreate?: Maybe<VoucherCreate>;
  /**
   * Deletes a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_DELETED (async): A voucher was deleted.
   */
  voucherDelete?: Maybe<VoucherDelete>;
  /**
   * Creates/updates translations for a voucher.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  voucherTranslate?: Maybe<VoucherTranslate>;
  /**
   * Updates a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherUpdate?: Maybe<VoucherUpdate>;
  /**
   * Creates a new webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookCreate?: Maybe<WebhookCreate>;
  /**
   * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookDelete?: Maybe<WebhookDelete>;
  /**
   * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookDryRun?: Maybe<WebhookDryRun>;
  /**
   * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookTrigger?: Maybe<WebhookTrigger>;
  /**
   * Updates a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  redirectUrl: Scalars['String']['input'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']['input'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID']['input'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']['input'];
  type: AddressTypeEnum;
  userId: Scalars['ID']['input'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String']['input'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']['input']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationAttributeBulkCreateArgs = {
  attributes: Array<AttributeCreateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAttributeBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: Array<AttributeBulkTranslateInput>;
};


export type MutationAttributeBulkUpdateArgs = {
  attributes: Array<AttributeBulkUpdateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAttributeValueBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: Array<AttributeValueBulkTranslateInput>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeValueTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ChannelDeleteInput>;
};


export type MutationChannelReorderWarehousesArgs = {
  channelId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode: Scalars['String']['input'];
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Array<MetadataInput>>;
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  storeSource?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCreateFromOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCodeEnum;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lineId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: Array<CheckoutLineInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  linesIds: Array<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lines: Array<CheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PaymentInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  promoCodeId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingAddress: AddressInput;
  token?: InputMaybe<Scalars['UUID']['input']>;
  validationRules?: InputMaybe<CheckoutAddressValidationRules>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shippingMethodId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']['input'];
  moves: Array<MoveProductInput>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCustomerBulkUpdateArgs = {
  customers: Array<CustomerBulkUpdateInput>;
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCustomerUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDraftOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: DraftOrderInput;
};


export type MutationEventDeliveryRetryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExportGiftCardsArgs = {
  input: ExportGiftCardsInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExportVoucherCodesArgs = {
  input: ExportVoucherCodesInput;
};


export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String']['input'];
  input: ExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString']['input'];
  pluginId: Scalars['String']['input'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardAddNoteInput;
};


export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkCreateArgs = {
  input: GiftCardBulkCreateInput;
};


export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput;
};


export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput;
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID']['input'];
  moves: Array<MenuItemMoveInput>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationOrderBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  orders: Array<OrderBulkCreateInput>;
  stockUpdatePolicy?: InputMaybe<StockUpdatePolicyEnum>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCreateFromCheckoutArgs = {
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<MetadataInput>>;
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  removeCheckout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput;
  orderId: Scalars['ID']['input'];
};


export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID']['input'];
};


export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID']['input'];
  input: OrderDiscountCommonInput;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  notifyCustomer: Scalars['Boolean']['input'];
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<FulfillmentCancelInput>;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderGrantRefundCreateArgs = {
  id: Scalars['ID']['input'];
  input: OrderGrantRefundCreateInput;
};


export type MutationOrderGrantRefundUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderGrantRefundUpdateInput;
};


export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput;
  orderLineId: Scalars['ID']['input'];
};


export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
};


export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID']['input'];
  input: Array<OrderLineCreateInput>;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']['input'];
  transactionReference?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrderNoteAddArgs = {
  input: OrderNoteInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderNoteUpdateArgs = {
  input: OrderNoteInput;
  note: Scalars['ID']['input'];
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  input: OrderUpdateShippingInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  pageId: Scalars['ID']['input'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID']['input'];
};


export type MutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput;
};


export type MutationPaymentGatewayInitializeArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
  paymentGateways?: InputMaybe<Array<PaymentGatewayToInitialize>>;
};


export type MutationPaymentGatewayInitializeTokenizationArgs = {
  channel: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
};


export type MutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  gateway: Scalars['String']['input'];
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
};


export type MutationPaymentMethodInitializeTokenizationArgs = {
  channel: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  paymentFlowToSupport: TokenizedPaymentFlowEnum;
};


export type MutationPaymentMethodProcessTokenizationArgs = {
  channel: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<ProductAttributeAssignInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<ProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']['input']>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationProductBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  products: Array<ProductBulkCreateInput>;
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: Array<ProductBulkTranslateInput>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput;
};


export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};


export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductMediaUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID']['input'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  product: Scalars['ID']['input'];
  variants: Array<ProductVariantBulkCreateInput>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationProductVariantBulkTranslateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  translations: Array<ProductVariantBulkTranslateInput>;
};


export type MutationProductVariantBulkUpdateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  product: Scalars['ID']['input'];
  variants: Array<ProductVariantBulkUpdateInput>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: Array<ProductVariantChannelListingAddInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<ReorderInput>;
  productId: Scalars['ID']['input'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksDeleteArgs = {
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  sku?: InputMaybe<Scalars['String']['input']>;
  stocks: Array<StockInput>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ProductVariantInput;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPromotionBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPromotionCreateArgs = {
  input: PromotionCreateInput;
};


export type MutationPromotionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPromotionRuleCreateArgs = {
  input: PromotionRuleCreateInput;
};


export type MutationPromotionRuleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPromotionRuleTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PromotionRuleTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPromotionRuleUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PromotionRuleUpdateInput;
};


export type MutationPromotionTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PromotionTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPromotionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PromotionUpdateInput;
};


export type MutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleInput;
};


export type MutationSendConfirmationEmailArgs = {
  channel: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationSetPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffUpdateInput;
};


export type MutationStockBulkUpdateArgs = {
  errorPolicy?: InputMaybe<ErrorPolicyEnum>;
  stocks: Array<StockBulkUpdateInput>;
};


export type MutationStoredPaymentMethodRequestDeleteArgs = {
  channel: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationTaxClassCreateArgs = {
  input: TaxClassCreateInput;
};


export type MutationTaxClassDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTaxClassUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TaxClassUpdateInput;
};


export type MutationTaxConfigurationUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TaxConfigurationUpdateInput;
};


export type MutationTaxCountryConfigurationDeleteArgs = {
  countryCode: CountryCode;
};


export type MutationTaxCountryConfigurationUpdateArgs = {
  countryCode: CountryCode;
  updateTaxClassRates: Array<TaxClassRateInput>;
};


export type MutationTaxExemptionManageArgs = {
  id: Scalars['ID']['input'];
  taxExemption: Scalars['Boolean']['input'];
};


export type MutationTokenCreateArgs = {
  audience?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationTransactionCreateArgs = {
  id: Scalars['ID']['input'];
  transaction: TransactionCreateInput;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationTransactionEventReportArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  pspReference: Scalars['String']['input'];
  time?: InputMaybe<Scalars['DateTime']['input']>;
  type: TransactionEventTypeEnum;
};


export type MutationTransactionInitializeArgs = {
  action?: InputMaybe<TransactionFlowStrategyEnum>;
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  customerIpAddress?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  idempotencyKey?: InputMaybe<Scalars['String']['input']>;
  paymentGateway: PaymentGatewayToInitialize;
};


export type MutationTransactionProcessArgs = {
  customerIpAddress?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationTransactionRequestActionArgs = {
  actionType: TransactionActionEnum;
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationTransactionRequestRefundForGrantedRefundArgs = {
  grantedRefundId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationTransactionUpdateArgs = {
  id: Scalars['ID']['input'];
  transaction?: InputMaybe<TransactionUpdateInput>;
  transactionEvent?: InputMaybe<TransactionEventInput>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Scalars['ID']['input']>;
  isActive: Scalars['Boolean']['input'];
};


export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCodeBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWebhookDryRunArgs = {
  objectId: Scalars['ID']['input'];
  query: Scalars['String']['input'];
};


export type MutationWebhookTriggerArgs = {
  objectId: Scalars['ID']['input'];
  webhookId: Scalars['ID']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WebhookUpdateInput;
};

export type NameTranslationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationType =
  /** Main storefront navigation. */
  | 'MAIN'
  /** Secondary storefront navigation. */
  | 'SECONDARY';

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type ObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
};


export type ObjectWithMetadataMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


export type ObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<OrderAction>;
  /**
   * The authorize status of the order.
   *
   * Added in Saleor 3.4.
   */
  authorizeStatus: OrderAuthorizeStatusEnum;
  /**
   * Collection points that can be used for this order.
   *
   * Added in Saleor 3.1.
   */
  availableCollectionPoints: Array<Warehouse>;
  /**
   * Shipping methods that can be used with this order.
   * @deprecated Use `shippingMethods`, this field will be removed in 4.0
   */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  billingAddress?: Maybe<Address>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean']['output'];
  channel: Channel;
  /**
   * The charge status of the order.
   *
   * Added in Saleor 3.4.
   */
  chargeStatus: OrderChargeStatusEnum;
  /**
   * ID of the checkout that the order was created from.
   *
   * Added in Saleor 3.11.
   */
  checkoutId?: Maybe<Scalars['ID']['output']>;
  collectionPointName?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  customerNote: Scalars['String']['output'];
  /**
   * The delivery method selected for this order.
   *
   * Added in Saleor 3.1.
   */
  deliveryMethod?: Maybe<DeliveryMethod>;
  /**
   * Returns applied discount.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discount?: Maybe<Money>;
  /**
   * Discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  discountName?: Maybe<Scalars['String']['output']>;
  /** List of all discounts assigned to the order. */
  discounts: Array<OrderDiscount>;
  /**
   * Determines whether displayed prices should include taxes.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** List of errors that occurred during order validation. */
  errors: Array<OrderError>;
  /**
   * List of events associated with the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  events: Array<OrderEvent>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>;
  /** List of user gift cards. */
  giftCards: Array<GiftCard>;
  /**
   * List of granted refunds.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  grantedRefunds: Array<OrderGrantedRefund>;
  id: Scalars['ID']['output'];
  /** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  invoices: Array<Invoice>;
  /** Informs if an order is fully paid. */
  isPaid: Scalars['Boolean']['output'];
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
  languageCode: Scalars['String']['output'];
  /** Order language code. */
  languageCodeEnum: LanguageCodeEnum;
  /** List of order lines. */
  lines: Array<OrderLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** User-friendly number of an order. */
  number: Scalars['String']['output'];
  /** The order origin. */
  origin: OrderOriginEnum;
  /** The ID of the order that was the base for this order. */
  original?: Maybe<Scalars['ID']['output']>;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String']['output'];
  /** List of payments for the order. */
  payments: Array<Payment>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  shippingAddress?: Maybe<Address>;
  /**
   * Shipping method for this order.
   * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
   */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']['output']>;
  /** Shipping methods related to this order. */
  shippingMethods: Array<ShippingMethod>;
  /** Total price of shipping. */
  shippingPrice: TaxedMoney;
  /**
   * Denormalized tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  shippingTaxClass?: Maybe<TaxClass>;
  /**
   * Denormalized public metadata of the shipping method's tax class.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassMetadata: Array<MetadataItem>;
  /**
   * Denormalized name of the tax class assigned to the shipping method.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassName?: Maybe<Scalars['String']['output']>;
  /**
   * Denormalized private metadata of the shipping method's tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  shippingTaxClassPrivateMetadata: Array<MetadataItem>;
  /** The shipping tax rate value. */
  shippingTaxRate: Scalars['Float']['output'];
  status: OrderStatus;
  /** User-friendly order status. */
  statusDisplay: Scalars['String']['output'];
  /** The sum of line prices not including shipping. */
  subtotal: TaxedMoney;
  /**
   * Returns True if order has to be exempt from taxes.
   *
   * Added in Saleor 3.8.
   */
  taxExemption: Scalars['Boolean']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
  token: Scalars['String']['output'];
  /** Total amount of the order. */
  total: TaxedMoney;
  /**
   * Total amount of ongoing authorize requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalAuthorizePending: Money;
  /** Amount authorized for the order. */
  totalAuthorized: Money;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /**
   * Total amount of ongoing cancel requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalCancelPending: Money;
  /**
   * Amount canceled for the order.
   *
   * Added in Saleor 3.13.
   */
  totalCanceled: Money;
  /**
   * Amount captured for the order.
   * @deprecated This field will be removed in Saleor 4.0. Use `totalCharged` instead.
   */
  totalCaptured: Money;
  /**
   * Total amount of ongoing charge requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalChargePending: Money;
  /**
   * Amount charged for the order.
   *
   * Added in Saleor 3.13.
   */
  totalCharged: Money;
  /**
   * Total amount of granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalGrantedRefund: Money;
  /**
   * Total amount of ongoing refund requests for the order's transactions.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalRefundPending: Money;
  /**
   * Total refund amount for the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  totalRefunded: Money;
  /**
   * The difference amount between granted refund and the amounts that are pending and refunded.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  totalRemainingGrant: Money;
  /** Google Analytics tracking client ID. This field will be removed in Saleor 4.0. */
  trackingClientId: Scalars['String']['output'];
  /**
   * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
   *
   * Added in Saleor 3.4.
   */
  transactions: Array<TransactionItem>;
  /**
   * Translated discount name.
   * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
   */
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  /** Undiscounted total amount of the order. */
  undiscountedTotal: TaxedMoney;
  updatedAt: Scalars['DateTime']['output'];
  /** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, HANDLE_PAYMENTS, OWNER. */
  user?: Maybe<User>;
  /** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
  userEmail?: Maybe<Scalars['String']['output']>;
  voucher?: Maybe<Voucher>;
  /**
   * Voucher code that was used for Order.
   *
   * Added in Saleor 3.18.
   */
  voucherCode?: Maybe<Scalars['String']['output']>;
  weight: Weight;
};


/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderAction =
  /** Represents the capture action. */
  | 'CAPTURE'
  /** Represents a mark-as-paid action. */
  | 'MARK_AS_PAID'
  /** Represents a refund action. */
  | 'REFUND'
  /** Represents a void action. */
  | 'VOID';

/**
 * Adds note to the order.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderAddNote = {
  errors: Array<OrderError>;
  /** Order note created. */
  event?: Maybe<OrderEvent>;
  /** Order with the note added. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /**
   * Note message.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  message: Scalars['String']['input'];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized and charged don't cover fully the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are authorized and charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export type OrderAuthorizeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'PARTIAL';

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderBulkCancel = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<OrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Creates multiple orders.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
 */
export type OrderBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<OrderBulkCreateError>;
  /** List of the created orders. */
  results: Array<OrderBulkCreateResult>;
};

export type OrderBulkCreateDeliveryMethodInput = {
  /** The ID of the shipping method. */
  shippingMethodId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the shipping method. */
  shippingMethodName?: InputMaybe<Scalars['String']['input']>;
  /** The price of the shipping. */
  shippingPrice?: InputMaybe<TaxedMoneyInput>;
  /** The ID of the tax class. */
  shippingTaxClassId?: InputMaybe<Scalars['ID']['input']>;
  /** Metadata of the tax class. */
  shippingTaxClassMetadata?: InputMaybe<Array<MetadataInput>>;
  /** The name of the tax class. */
  shippingTaxClassName?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the tax class. */
  shippingTaxClassPrivateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Tax rate of the shipping. */
  shippingTaxRate?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** The ID of the warehouse. */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the warehouse. */
  warehouseName?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateError = {
  /** The error code. */
  code?: Maybe<OrderBulkCreateErrorCode>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderBulkCreateErrorCode =
  | 'BULK_LIMIT'
  | 'FUTURE_DATE'
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_CURRENCY'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_QUANTITY'
  | 'METADATA_KEY_REQUIRED'
  | 'NEGATIVE_INDEX'
  | 'NON_EXISTING_STOCK'
  | 'NOTE_LENGTH'
  | 'NOT_FOUND'
  | 'NO_RELATED_ORDER_LINE'
  | 'ORDER_LINE_FULFILLMENT_LINE_MISMATCH'
  | 'PRICE_ERROR'
  | 'REQUIRED'
  | 'TOO_MANY_IDENTIFIERS'
  | 'UNIQUE';

export type OrderBulkCreateFulfillmentInput = {
  /** List of items informing how to fulfill the order. */
  lines?: InputMaybe<Array<OrderBulkCreateFulfillmentLineInput>>;
  /** Fulfillment's tracking code. */
  trackingCode?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateFulfillmentLineInput = {
  /** 0-based index of order line, which the fulfillment line refers to. */
  orderLineIndex: Scalars['Int']['input'];
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int']['input'];
  /** The external ID of the product variant. */
  variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the product variant. */
  variantId?: InputMaybe<Scalars['ID']['input']>;
  /** The SKU of the product variant. */
  variantSku?: InputMaybe<Scalars['String']['input']>;
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']['input'];
};

export type OrderBulkCreateInput = {
  /** Billing address of the customer. */
  billingAddress: AddressInput;
  /** Slug of the channel associated with the order. */
  channel: Scalars['String']['input'];
  /** The date, when the order was inserted to Saleor database. */
  createdAt: Scalars['DateTime']['input'];
  /** Currency code. */
  currency: Scalars['String']['input'];
  /** Note about customer. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** The delivery method selected for this order. */
  deliveryMethod?: InputMaybe<OrderBulkCreateDeliveryMethodInput>;
  /** List of discounts. */
  discounts?: InputMaybe<Array<OrderDiscountCommonInput>>;
  /** Determines whether displayed prices should include taxes. */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** External ID of the order. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillments of the order. */
  fulfillments?: InputMaybe<Array<OrderBulkCreateFulfillmentInput>>;
  /** List of gift card codes associated with the order. */
  giftCards?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Invoices related to the order. */
  invoices?: InputMaybe<Array<OrderBulkCreateInvoiceInput>>;
  /** Order language code. */
  languageCode: LanguageCodeEnum;
  /** List of order lines. */
  lines: Array<OrderBulkCreateOrderLineInput>;
  /** Metadata of the order. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Notes related to the order. */
  notes?: InputMaybe<Array<OrderBulkCreateNoteInput>>;
  /** Private metadata of the order. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a view, where users should be redirected to see the order details. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Status of the order. */
  status?: InputMaybe<OrderStatus>;
  /** Transactions related to the order. */
  transactions?: InputMaybe<Array<TransactionCreateInput>>;
  /** Customer associated with the order. */
  user: OrderBulkCreateUserInput;
  /**
   * Code of a voucher associated with the order.
   *
   * DEPRECATED: this field will be removed in Saleor 3.19. Use `voucherCode` instead.
   */
  voucher?: InputMaybe<Scalars['String']['input']>;
  /**
   * Code of a voucher associated with the order.
   *
   * Added in Saleor 3.18.
   */
  voucherCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the order in kg. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type OrderBulkCreateInvoiceInput = {
  /** The date, when the invoice was created. */
  createdAt: Scalars['DateTime']['input'];
  /** Metadata of the invoice. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Invoice number. */
  number?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the invoice. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of the invoice to download. */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBulkCreateNoteInput = {
  /** The app ID associated with the message. */
  appId?: InputMaybe<Scalars['ID']['input']>;
  /** The date associated with the message. */
  date?: InputMaybe<Scalars['DateTime']['input']>;
  /** Note message. Max characters: 255. */
  message: Scalars['String']['input'];
  /** The user email associated with the message. */
  userEmail?: InputMaybe<Scalars['ID']['input']>;
  /** The user external ID associated with the message. */
  userExternalReference?: InputMaybe<Scalars['ID']['input']>;
  /** The user ID associated with the message. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderBulkCreateOrderLineInput = {
  /** The date, when the order line was created. */
  createdAt: Scalars['DateTime']['input'];
  /** Gift card flag. */
  isGiftCard: Scalars['Boolean']['input'];
  /** Determines whether shipping of the order line items is required. */
  isShippingRequired: Scalars['Boolean']['input'];
  /** Metadata of the order line. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Private metadata of the order line. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** The name of the product. */
  productName?: InputMaybe<Scalars['String']['input']>;
  /** Number of items in the order line */
  quantity: Scalars['Int']['input'];
  /** The ID of the tax class. */
  taxClassId?: InputMaybe<Scalars['ID']['input']>;
  /** Metadata of the tax class. */
  taxClassMetadata?: InputMaybe<Array<MetadataInput>>;
  /** The name of the tax class. */
  taxClassName?: InputMaybe<Scalars['String']['input']>;
  /** Private metadata of the tax class. */
  taxClassPrivateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Tax rate of the order line. */
  taxRate?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Price of the order line. */
  totalPrice: TaxedMoneyInput;
  /** Translation of the product name. */
  translatedProductName?: InputMaybe<Scalars['String']['input']>;
  /** Translation of the product variant name. */
  translatedVariantName?: InputMaybe<Scalars['String']['input']>;
  /** Price of the order line excluding applied discount. */
  undiscountedTotalPrice: TaxedMoneyInput;
  /** The external ID of the product variant. */
  variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the product variant. */
  variantId?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the product variant. */
  variantName?: InputMaybe<Scalars['String']['input']>;
  /** The SKU of the product variant. */
  variantSku?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the warehouse, where the line will be allocated. */
  warehouse: Scalars['ID']['input'];
};

export type OrderBulkCreateResult = {
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<OrderBulkCreateError>>;
  /** Order data. */
  order?: Maybe<Order>;
};

export type OrderBulkCreateUserInput = {
  /** Customer email associated with the order. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Customer external ID associated with the order. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Customer ID associated with the order. */
  id?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when orders are imported.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderBulkCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The orders the event relates to. */
  orders?: Maybe<Array<Order>>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCancel = {
  errors: Array<OrderError>;
  /** Canceled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when order is canceled.
 *
 * Added in Saleor 3.2.
 */
export type OrderCancelled = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCapture = {
  errors: Array<OrderError>;
  /** Captured order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     An order is considered overcharged when the sum of the
 *     transactionItem's charge amounts exceeds the value of
 *     `order.total` - `order.totalGrantedRefund`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
 *     charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     OVERCHARGED - the charged funds are bigger than the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export type OrderChargeStatusEnum =
  | 'FULL'
  | 'NONE'
  | 'OVERCHARGED'
  | 'PARTIAL';

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderConfirm = {
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when order is confirmed.
 *
 * Added in Saleor 3.2.
 */
export type OrderConfirmed = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderCountableConnection = {
  edges: Array<OrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
 * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
 * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
 * - ORDER_CREATED (async): Triggered when order is created.
 * - NOTIFY_USER (async): A notification for order placement.
 * - NOTIFY_USER (async): A staff notification for order placement.
 * - ORDER_UPDATED (async): Triggered when order received the update after placement.
 * - ORDER_PAID (async): Triggered when newly created order is paid.
 * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
 * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
 */
export type OrderCreateFromCheckout = {
  errors: Array<OrderCreateFromCheckoutError>;
  /** Placed order. */
  order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
  /** The error code. */
  code: OrderCreateFromCheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type OrderCreateFromCheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_NOT_FOUND'
  | 'EMAIL_NOT_SET'
  | 'GIFT_CARD_NOT_APPLICABLE'
  | 'GRAPHQL_ERROR'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID_SHIPPING_METHOD'
  | 'NO_LINES'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'TAX_ERROR'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'VOUCHER_NOT_APPLICABLE';

/**
 * Event sent when new order is created.
 *
 * Added in Saleor 3.2.
 */
export type OrderCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderDirection =
  /** Specifies an ascending sort order. */
  | 'ASC'
  /** Specifies a descending sort order. */
  | 'DESC';

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  /** Returns amount of discount. */
  amount: Money;
  /** The ID of discount applied. */
  id: Scalars['ID']['output'];
  /** The name of applied discount. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Explanation for the applied discount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  reason?: Maybe<Scalars['String']['output']>;
  /** Translated name of the applied discount. */
  translatedName?: Maybe<Scalars['String']['output']>;
  /** The type of applied discount: Sale, Voucher or Manual. */
  type: OrderDiscountType;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountAdd = {
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDiscountCommonInput = {
  /** Explanation for the applied discount. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']['input'];
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountDelete = {
  errors: Array<OrderError>;
  /** Order which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** An enumeration. */
export type OrderDiscountType =
  | 'MANUAL'
  | 'PROMOTION'
  | 'SALE'
  | 'VOUCHER';

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountUpdate = {
  errors: Array<OrderError>;
  /** Order which has been discounted. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderDraftFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type OrderError = {
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: OrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of order line IDs that cause the error. */
  orderLines?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars['ID']['output']>;
};

/** An enumeration. */
export type OrderErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CANNOT_CANCEL_FULFILLMENT'
  | 'CANNOT_CANCEL_ORDER'
  | 'CANNOT_DELETE'
  | 'CANNOT_DISCOUNT'
  | 'CANNOT_FULFILL_UNPAID_ORDER'
  | 'CANNOT_REFUND'
  | 'CAPTURE_INACTIVE_PAYMENT'
  | 'CHANNEL_INACTIVE'
  | 'DUPLICATED_INPUT_ITEM'
  | 'FULFILL_ORDER_LINE'
  | 'GIFT_CARD_LINE'
  | 'GRAPHQL_ERROR'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'INVALID_QUANTITY'
  | 'INVALID_VOUCHER'
  | 'INVALID_VOUCHER_CODE'
  | 'NOT_AVAILABLE_IN_CHANNEL'
  | 'NOT_EDITABLE'
  | 'NOT_FOUND'
  | 'ORDER_NO_SHIPPING_ADDRESS'
  | 'PAYMENT_ERROR'
  | 'PAYMENT_MISSING'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'REQUIRED'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_REQUIRED'
  | 'TAX_ERROR'
  | 'TRANSACTION_ERROR'
  | 'UNIQUE'
  | 'VOID_INACTIVE_PAYMENT'
  | 'ZERO_QUANTITY';

/** History log of the order. */
export type OrderEvent = Node & {
  /** Amount of money. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
  app?: Maybe<App>;
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars['String']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** The discount applied to the order. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** Type of an email sent to the customer. */
  emailType?: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  /** The concerned lines. */
  lines?: Maybe<Array<OrderEventOrderLineObject>>;
  /** Content of the event. */
  message?: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Scalars['String']['output']>>;
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars['String']['output']>;
  /** The payment reference from the payment provider. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** The reference of payment's transaction. */
  reference?: Maybe<Scalars['String']['output']>;
  /**
   * The order event which is related to this event.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  related?: Maybe<OrderEvent>;
  /** The order which is related to this order. */
  relatedOrder?: Maybe<Order>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars['Boolean']['output']>;
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars['String']['output']>;
  /** Order event type. */
  type?: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  edges: Array<OrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderEventCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderEvent;
};

export type OrderEventDiscountObject = {
  /** Returns amount of discount. */
  amount?: Maybe<Money>;
  /** Returns amount of discount. */
  oldAmount?: Maybe<Money>;
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Type of the discount: fixed or percent. */
  oldValueType?: Maybe<DiscountValueTypeEnum>;
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']['output']>;
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars['PositiveDecimal']['output'];
  /** Type of the discount: fixed or percent. */
  valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
  /** The discount applied to the order line. */
  discount?: Maybe<OrderEventDiscountObject>;
  /** The variant name. */
  itemName?: Maybe<Scalars['String']['output']>;
  /** The order line. */
  orderLine?: Maybe<OrderLine>;
  /** The variant quantity. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export type OrderEventsEmailsEnum =
  | 'CONFIRMED'
  | 'DIGITAL_LINKS'
  | 'FULFILLMENT_CONFIRMATION'
  | 'ORDER_CANCEL'
  | 'ORDER_CONFIRMATION'
  | 'ORDER_REFUND'
  | 'PAYMENT_CONFIRMATION'
  | 'SHIPPING_CONFIRMATION'
  | 'TRACKING_UPDATED';

/** The different order event types.  */
export type OrderEventsEnum =
  | 'ADDED_PRODUCTS'
  | 'CANCELED'
  | 'CONFIRMED'
  | 'DRAFT_CREATED'
  | 'DRAFT_CREATED_FROM_REPLACE'
  | 'EMAIL_SENT'
  | 'EXPIRED'
  | 'EXTERNAL_SERVICE_NOTIFICATION'
  | 'FULFILLMENT_AWAITS_APPROVAL'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_FULFILLED_ITEMS'
  | 'FULFILLMENT_REFUNDED'
  | 'FULFILLMENT_REPLACED'
  | 'FULFILLMENT_RESTOCKED_ITEMS'
  | 'FULFILLMENT_RETURNED'
  | 'INVOICE_GENERATED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_SENT'
  | 'INVOICE_UPDATED'
  | 'NOTE_ADDED'
  | 'NOTE_UPDATED'
  | 'ORDER_DISCOUNT_ADDED'
  | 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED'
  | 'ORDER_DISCOUNT_DELETED'
  | 'ORDER_DISCOUNT_UPDATED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_LINE_DISCOUNT_REMOVED'
  | 'ORDER_LINE_DISCOUNT_UPDATED'
  | 'ORDER_LINE_PRODUCT_DELETED'
  | 'ORDER_LINE_VARIANT_DELETED'
  | 'ORDER_MARKED_AS_PAID'
  | 'ORDER_REPLACEMENT_CREATED'
  | 'OTHER'
  | 'OVERSOLD_ITEMS'
  | 'PAYMENT_AUTHORIZED'
  | 'PAYMENT_CAPTURED'
  | 'PAYMENT_FAILED'
  | 'PAYMENT_REFUNDED'
  | 'PAYMENT_VOIDED'
  | 'PLACED'
  | 'PLACED_FROM_DRAFT'
  | 'REMOVED_PRODUCTS'
  | 'TRACKING_UPDATED'
  | 'TRANSACTION_CANCEL_REQUESTED'
  | 'TRANSACTION_CHARGE_REQUESTED'
  | 'TRANSACTION_EVENT'
  | 'TRANSACTION_MARK_AS_PAID_FAILED'
  | 'TRANSACTION_REFUND_REQUESTED'
  | 'UPDATED_ADDRESS';

/**
 * Event sent when order becomes expired.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderExpired = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterInput = {
  authorizeStatus?: InputMaybe<Array<OrderAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  chargeStatus?: InputMaybe<Array<OrderChargeStatusEnum>>;
  checkoutIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  giftCardBought?: InputMaybe<Scalars['Boolean']['input']>;
  giftCardUsed?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isClickAndCollect?: InputMaybe<Scalars['Boolean']['input']>;
  isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  numbers?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/**
 * Filter shipping methods for order.
 *
 * Added in Saleor 3.6.
 */
export type OrderFilterShippingMethods = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - FULFILLMENT_CREATED (async): A new fulfillment is created.
 * - ORDER_FULFILLED (async): Order is fulfilled.
 * - FULFILLMENT_TRACKING_NUMBER_UPDATED (async): Sent when fulfillment tracking number is updated.
 * - FULFILLMENT_APPROVED (async): A fulfillment is approved.
 */
export type OrderFulfill = {
  errors: Array<OrderError>;
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<Fulfillment>>;
  /** Fulfilled order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Fulfillment tracking number.
   *
   * Added in Saleor 3.6.
   */
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: InputMaybe<Scalars['ID']['input']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int']['input'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']['input'];
};

/**
 * Event sent when order is fulfilled.
 *
 * Added in Saleor 3.2.
 */
export type OrderFulfilled = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when order is fully paid.
 *
 * Added in Saleor 3.2.
 */
export type OrderFullyPaid = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * The order is fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderFullyRefunded = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Adds granted refund to the order.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundCreate = {
  errors: Array<OrderGrantRefundCreateError>;
  /** Created granted refund. */
  grantedRefund?: Maybe<OrderGrantedRefund>;
  /** Order which has assigned new grant refund. */
  order?: Maybe<Order>;
};

export type OrderGrantRefundCreateError = {
  /** The error code. */
  code: OrderGrantRefundCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /**
   * List of lines which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: Maybe<Array<OrderGrantRefundCreateLineError>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderGrantRefundCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'SHIPPING_COSTS_ALREADY_GRANTED';

export type OrderGrantRefundCreateInput = {
  /** Amount of the granted refund. If not provided, the amount will be calculated automatically based on provided `lines` and `grantRefundForShipping`. */
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  /**
   * Determine if granted refund should include shipping costs.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantRefundForShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Lines to assign to granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: InputMaybe<Array<OrderGrantRefundCreateLineInput>>;
  /** Reason of the granted refund. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type OrderGrantRefundCreateLineError = {
  /** The error code. */
  code: OrderGrantRefundCreateLineErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The ID of the line related to the error. */
  lineId: Scalars['ID']['output'];
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderGrantRefundCreateLineErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'QUANTITY_GREATER_THAN_AVAILABLE';

export type OrderGrantRefundCreateLineInput = {
  /** The ID of the order line. */
  id: Scalars['ID']['input'];
  /** The quantity of line items to be marked to refund. */
  quantity: Scalars['Int']['input'];
  /** Reason of the granted refund for the line. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderGrantRefundUpdate = {
  errors: Array<OrderGrantRefundUpdateError>;
  /** Created granted refund. */
  grantedRefund?: Maybe<OrderGrantedRefund>;
  /** Order which has assigned updated grant refund. */
  order?: Maybe<Order>;
};

export type OrderGrantRefundUpdateError = {
  /**
   * List of lines to add which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addLines?: Maybe<Array<OrderGrantRefundUpdateLineError>>;
  /** The error code. */
  code: OrderGrantRefundUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /**
   * List of lines to remove which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeLines?: Maybe<Array<OrderGrantRefundUpdateLineError>>;
};

/** An enumeration. */
export type OrderGrantRefundUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'SHIPPING_COSTS_ALREADY_GRANTED';

export type OrderGrantRefundUpdateInput = {
  /**
   * Lines to assign to granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addLines?: InputMaybe<Array<OrderGrantRefundUpdateLineAddInput>>;
  /** Amount of the granted refund. if not provided and `addLines` or `removeLines` or `grantRefundForShipping` is provided, amount will be calculated automatically. */
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  /**
   * Determine if granted refund should include shipping costs.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantRefundForShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Reason of the granted refund. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /**
   * Lines to remove from granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeLines?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type OrderGrantRefundUpdateLineAddInput = {
  /** The ID of the order line. */
  id: Scalars['ID']['input'];
  /** The quantity of line items to be marked to refund. */
  quantity: Scalars['Int']['input'];
  /** Reason of the granted refund for the line. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type OrderGrantRefundUpdateLineError = {
  /** The error code. */
  code: OrderGrantRefundUpdateLineErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The ID of the line related to the error. */
  lineId: Scalars['ID']['output'];
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderGrantRefundUpdateLineErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'QUANTITY_GREATER_THAN_AVAILABLE';

/**
 * The details of granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderGrantedRefund = {
  /** Refund amount. */
  amount: Money;
  /** App that performed the action. */
  app?: Maybe<App>;
  /** Time of creation. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /**
   * Lines assigned to the granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: Maybe<Array<OrderGrantedRefundLine>>;
  /** Reason of the refund. */
  reason?: Maybe<Scalars['String']['output']>;
  /**
   * If true, the refunded amount includes the shipping price.If false, the refunded amount does not include the shipping price.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingCostsIncluded: Scalars['Boolean']['output'];
  /** Time of last update. */
  updatedAt: Scalars['DateTime']['output'];
  /** User who performed the action. Requires of of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user?: Maybe<User>;
};

/**
 * Represents granted refund line.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderGrantedRefundLine = {
  id: Scalars['ID']['output'];
  /** Line of the order associated with this granted refund. */
  orderLine: OrderLine;
  /** Number of items to refund. */
  quantity: Scalars['Int']['output'];
  /** Reason for refunding the line. */
  reason?: Maybe<Scalars['String']['output']>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & ObjectWithMetadata & {
  /**
   * List of allocations across warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  id: Scalars['ID']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.5.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.5.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.5.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.5.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  productName: Scalars['String']['output'];
  productSku?: Maybe<Scalars['String']['output']>;
  productVariantId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  quantityFulfilled: Scalars['Int']['output'];
  /**
   * A quantity of items remaining to be fulfilled.
   *
   * Added in Saleor 3.1.
   */
  quantityToFulfill: Scalars['Int']['output'];
  /**
   * Denormalized sale ID, set when order line is created for a product variant that is on sale.
   *
   * Added in Saleor 3.14.
   */
  saleId?: Maybe<Scalars['ID']['output']>;
  /**
   * Denormalized tax class of the product in this order line.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<TaxClass>;
  /**
   * Denormalized public metadata of the tax class.
   *
   * Added in Saleor 3.9.
   */
  taxClassMetadata: Array<MetadataItem>;
  /**
   * Denormalized name of the tax class.
   *
   * Added in Saleor 3.9.
   */
  taxClassName?: Maybe<Scalars['String']['output']>;
  /**
   * Denormalized private metadata of the tax class. Requires staff permissions to access.
   *
   * Added in Saleor 3.9.
   */
  taxClassPrivateMetadata: Array<MetadataItem>;
  taxRate: Scalars['Float']['output'];
  thumbnail?: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: TaxedMoney;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the order line without discounts. */
  undiscountedTotalPrice: TaxedMoney;
  /** Price of the single item in the order line without applied an order line discount. */
  undiscountedUnitPrice: TaxedMoney;
  /** The discount applied to the single order line. */
  unitDiscount: Money;
  unitDiscountReason?: Maybe<Scalars['String']['output']>;
  /** Type of the discount: fixed or percent */
  unitDiscountType?: Maybe<DiscountValueTypeEnum>;
  /** Value of the discount. Can store fixed value or percent value */
  unitDiscountValue: Scalars['PositiveDecimal']['output'];
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
  /**
   * Voucher code that was used for this order line.
   *
   * Added in Saleor 3.14.
   */
  voucherCode?: Maybe<Scalars['String']['output']>;
};


/** Represents order line of particular order. */
export type OrderLineMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order line of particular order. */
export type OrderLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents order line of particular order. */
export type OrderLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderLineCreateInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Custom price of the item.When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
  /** Product variant ID. */
  variantId: Scalars['ID']['input'];
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDelete = {
  errors: Array<OrderError>;
  /** A related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** An order line that was deleted. */
  orderLine?: Maybe<OrderLine>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountRemove = {
  errors: Array<OrderError>;
  /** Order which is related to line which has removed discount. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has removed discount. */
  orderLine?: Maybe<OrderLine>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountUpdate = {
  errors: Array<OrderError>;
  /** Order which is related to the discounted line. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** Order line which has been discounted. */
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineUpdate = {
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLinesCreate = {
  errors: Array<OrderError>;
  /** Related order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
  /** List of added order lines. */
  orderLines?: Maybe<Array<OrderLine>>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderMarkAsPaid = {
  errors: Array<OrderError>;
  /** Order marked as paid. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/**
 * Event sent when order metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type OrderMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Adds note to the order.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderNoteAdd = {
  errors: Array<OrderNoteAddError>;
  /** Order note created. */
  event?: Maybe<OrderEvent>;
  /** Order with the note added. */
  order?: Maybe<Order>;
};

export type OrderNoteAddError = {
  /** The error code. */
  code?: Maybe<OrderNoteAddErrorCode>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderNoteAddErrorCode =
  | 'GRAPHQL_ERROR'
  | 'REQUIRED';

export type OrderNoteInput = {
  /** Note message. */
  message: Scalars['String']['input'];
};

/**
 * Updates note of an order.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderNoteUpdate = {
  errors: Array<OrderNoteUpdateError>;
  /** Order note updated. */
  event?: Maybe<OrderEvent>;
  /** Order with the note updated. */
  order?: Maybe<Order>;
};

export type OrderNoteUpdateError = {
  /** The error code. */
  code?: Maybe<OrderNoteUpdateErrorCode>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderNoteUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type OrderOrCheckout = Checkout | Order;

/** An enumeration. */
export type OrderOriginEnum =
  | 'BULK_CREATE'
  | 'CHECKOUT'
  | 'DRAFT'
  | 'REISSUE';

/**
 * Payment has been made. The order may be partially or fully paid.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderPaid = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderRefund = {
  errors: Array<OrderError>;
  /** A refunded order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int']['input'];
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID']['input'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int']['input'];
};

export type OrderRefundProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: InputMaybe<Array<OrderRefundFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to refund. */
  orderLines?: InputMaybe<Array<OrderRefundLineInput>>;
};

/**
 * The order received a refund. The order may be partially or fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderRefunded = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID']['input'];
  /** The number of items to be returned. */
  quantity: Scalars['Int']['input'];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderReturnProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: InputMaybe<Array<OrderReturnFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of unfulfilled lines to return. */
  orderLines?: InputMaybe<Array<OrderReturnLineInput>>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents the channel-specific order settings. */
export type OrderSettings = {
  /**
   * Determine if it is possible to place unpdaid order by calling `checkoutComplete` mutation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  allowUnpaidOrders: Scalars['Boolean']['output'];
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders: Scalars['Boolean']['output'];
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean']['output'];
  /**
   * The time in days after expired orders will be deleted.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deleteExpiredOrdersAfter: Scalars['Day']['output'];
  /**
   * Expiration time in minutes. Default null - means do not expire any orders.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter?: Maybe<Scalars['Minute']['output']>;
  /**
   * Determine if voucher applied on draft order should be count toward voucher usage.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  includeDraftOrderInVoucherUsage: Scalars['Boolean']['output'];
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy: MarkAsPaidStrategyEnum;
};

export type OrderSettingsError = {
  /** The error code. */
  code: OrderSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type OrderSettingsErrorCode =
  | 'INVALID';

export type OrderSettingsInput = {
  /**
   * Determine if it is possible to place unpaid order by calling `checkoutComplete` mutation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  allowUnpaidOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * The time in days after expired orders will be deleted.Allowed range is from 1 to 120.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deleteExpiredOrdersAfter?: InputMaybe<Scalars['Day']['input']>;
  /**
   * Expiration time in minutes. Default null - means do not expire any orders. Enter 0 or null to disable.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter?: InputMaybe<Scalars['Minute']['input']>;
  /**
   * Specify whether a coupon applied to draft orders will count toward voucher usage.
   *
   * Warning:  when switching this setting from `false` to `true`, the vouchers will be disconnected from all draft orders.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  includeDraftOrderInVoucherUsage?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy?: InputMaybe<MarkAsPaidStrategyEnum>;
};

/**
 * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderSettingsUpdate = {
  errors: Array<OrderSettingsError>;
  /** Order settings. */
  orderSettings?: Maybe<OrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By default set to True. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderSortField =
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATED_AT'
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATION_DATE'
  /** Sort orders by customer. */
  | 'CUSTOMER'
  /** Sort orders by fulfillment status. */
  | 'FULFILLMENT_STATUS'
  /** Sort orders by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort orders by number. */
  | 'NUMBER'
  /** Sort orders by payment. */
  | 'PAYMENT'
  /** Sort orders by rank. Note: This option is available only with the `search` filter. */
  | 'RANK';

export type OrderSortingInput = {
  /** Specifies the direction in which to sort orders. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

/** An enumeration. */
export type OrderStatus =
  | 'CANCELED'
  | 'DRAFT'
  | 'EXPIRED'
  | 'FULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'PARTIALLY_RETURNED'
  | 'RETURNED'
  | 'UNCONFIRMED'
  | 'UNFULFILLED';

export type OrderStatusFilter =
  | 'CANCELED'
  | 'FULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'READY_TO_CAPTURE'
  | 'READY_TO_FULFILL'
  | 'UNCONFIRMED'
  | 'UNFULFILLED';

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdate = {
  errors: Array<OrderError>;
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdateShipping = {
  errors: Array<OrderError>;
  /** Order with updated shipping method. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Event sent when order is updated.
 *
 * Added in Saleor 3.2.
 */
export type OrderUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<Order>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderVoid = {
  errors: Array<OrderError>;
  /** A voided order. */
  order?: Maybe<Order>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Scalars['JSONString']['output'];
  /** Date and time at which page was created. */
  created: Scalars['DateTime']['output'];
  /** ID of the page. */
  id: Scalars['ID']['output'];
  /** Determines if the page is published. */
  isPublished: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Determines the type of page */
  pageType: PageType;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The page publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of the page for SEO. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** Title of the page for SEO. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Slug of the page. */
  slug: Scalars['String']['output'];
  /** Title of the page. */
  title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeAssign = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeUnassign = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkPublish = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  edges: Array<PageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageCreate = {
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID']['input'];
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new page is created.
 *
 * Added in Saleor 3.2.
 */
export type PageCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageDelete = {
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

/**
 * Event sent when page is deleted.
 *
 * Added in Saleor 3.2.
 */
export type PageDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PageError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: PageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PageErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type PageFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  pageTypes?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageReorderAttributeValues = {
  errors: Array<PageError>;
  /** Page from which attribute values are reordered. */
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageSortField =
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATED_AT'
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CREATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'PUBLISHED_AT'
  /** Sort pages by slug. */
  | 'SLUG'
  /** Sort pages by title. */
  | 'TITLE'
  /** Sort pages by visibility. */
  | 'VISIBILITY';

export type PageSortingInput = {
  /** Specifies the direction in which to sort pages. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

/** Represents page's original translatable fields and related translations. */
export type PageTranslatableContent = Node & {
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  /**
   * Content of the page to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the page translatable content. */
  id: Scalars['ID']['output'];
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page?: Maybe<Page>;
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Page title to translate. */
  title: Scalars['String']['output'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
};


/** Represents page's original translatable fields and related translations. */
export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PageTranslate = {
  errors: Array<TranslationError>;
  page?: Maybe<PageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** Represents page translations. */
export type PageTranslation = Node & {
  /**
   * Translated content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the page translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Translated page title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type PageTranslationInput = {
  /**
   * Translated page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars['JSONString']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  /** Page attributes of that page type. */
  attributes?: Maybe<Array<Attribute>>;
  /**
   * Attributes that can be assigned to the page type.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  /**
   * Whether page type has pages assigned.
   *
   * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  hasPages?: Maybe<Scalars['Boolean']['output']>;
  /** ID of the page type. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the page type. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Slug of the page type. */
  slug: Scalars['String']['output'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttributeWhereInput>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

export type PageTypeCountableConnection = {
  edges: Array<PageTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageTypeCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageType;
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeCreate = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new page type is created.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeDelete = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

/**
 * Event sent when page type is deleted.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PageTypeFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeReorderAttributes = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<PageType>;
};

export type PageTypeSortField =
  /** Sort page types by name. */
  | 'NAME'
  /** Sort page types by slug. */
  | 'SLUG';

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort page types. */
  direction: OrderDirection;
  /** Sort page types by the selected field. */
  field: PageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeUpdate = {
  errors: Array<PageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when page type is updated.
 *
 * Added in Saleor 3.5.
 */
export type PageTypeUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<PageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageUpdate = {
  errors: Array<PageError>;
  page?: Maybe<Page>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>;
};

/**
 * Event sent when page is updated.
 *
 * Added in Saleor 3.2.
 */
export type PageUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<Page>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type PasswordChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance with a new password. */
  user?: Maybe<User>;
};

/** Represents a payment of a given type. */
export type Payment = Node & ObjectWithMetadata & {
  /**
   * List of actions that can be performed in the current state of a payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  actions: Array<OrderAction>;
  /**
   * Maximum amount of money that can be captured.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableCaptureAmount?: Maybe<Money>;
  /**
   * Maximum amount of money that can be refunded.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  availableRefundAmount?: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount?: Maybe<Money>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  /** Checkout associated with a payment. */
  checkout?: Maybe<Checkout>;
  /** Date and time at which payment was created. */
  created: Scalars['DateTime']['output'];
  /** The details of the card used for this payment. */
  creditCard?: Maybe<CreditCard>;
  /**
   * IP address of the user who created the payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  customerIpAddress?: Maybe<Scalars['String']['output']>;
  /** Payment gateway used for payment. */
  gateway: Scalars['String']['output'];
  /** ID of the payment. */
  id: Scalars['ID']['output'];
  /** Determines if the payment is active or not. */
  isActive: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Date and time at which payment was modified. */
  modified: Scalars['DateTime']['output'];
  /** Order associated with a payment. */
  order?: Maybe<Order>;
  /**
   * Informs whether this is a partial payment.
   *
   * Added in Saleor 3.14.
   */
  partial: Scalars['Boolean']['output'];
  /** Type of method used for payment. */
  paymentMethodType: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * PSP reference of the payment.
   *
   * Added in Saleor 3.14.
   */
  pspReference?: Maybe<Scalars['String']['output']>;
  /** Unique token associated with a payment. */
  token: Scalars['String']['output'];
  /** Total amount of the payment. */
  total?: Maybe<Money>;
  /**
   * List of all transactions within this payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  transactions?: Maybe<Array<Transaction>>;
};


/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Authorize payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentAuthorize = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentCapture = {
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/**
 * Capture payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentCaptureEvent = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentChargeStatusEnum =
  | 'CANCELLED'
  | 'FULLY_CHARGED'
  | 'FULLY_REFUNDED'
  | 'NOT_CHARGED'
  | 'PARTIALLY_CHARGED'
  | 'PARTIALLY_REFUNDED'
  | 'PENDING'
  | 'REFUSED';

/** Check payment balance. */
export type PaymentCheckBalance = {
  /** Response from the gateway. */
  data?: Maybe<Scalars['JSONString']['output']>;
  errors: Array<PaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

export type PaymentCheckBalanceInput = {
  /** Information about card. */
  card: CardInput;
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars['String']['input'];
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars['String']['input'];
  /** Payment method name. */
  method: Scalars['String']['input'];
};

/**
 * Confirm payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentConfirmEvent = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PaymentCountableConnection = {
  edges: Array<PaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaymentCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type PaymentError = {
  /** The error code. */
  code: PaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PaymentErrorCode =
  | 'BALANCE_CHECK_ERROR'
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHANNEL_INACTIVE'
  | 'CHECKOUT_EMAIL_NOT_SET'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_SHIPPING_METHOD'
  | 'NOT_FOUND'
  | 'NOT_SUPPORTED_GATEWAY'
  | 'NO_CHECKOUT_LINES'
  | 'PARTIAL_PAYMENT_NOT_ALLOWED'
  | 'PAYMENT_ERROR'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'UNAVAILABLE_VARIANT_IN_CHANNEL'
  | 'UNIQUE';

export type PaymentFilterInput = {
  checkouts?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars['String']['output']>;
  /** Payment gateway ID. */
  id: Scalars['ID']['output'];
  /** Payment gateway name. */
  name: Scalars['String']['output'];
};

export type PaymentGatewayConfig = {
  /** The JSON data required to initialize the payment gateway. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors?: Maybe<Array<PaymentGatewayConfigError>>;
  /** The app identifier. */
  id: Scalars['String']['output'];
};

export type PaymentGatewayConfigError = {
  /** The error code. */
  code: PaymentGatewayConfigErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentGatewayConfigErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitialize = {
  errors: Array<PaymentGatewayInitializeError>;
  /** List of payment gateway configurations. */
  gatewayConfigs?: Maybe<Array<PaymentGatewayConfig>>;
};

export type PaymentGatewayInitializeError = {
  /** The error code. */
  code: PaymentGatewayInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentGatewayInitializeErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Event sent when user wants to initialize the payment gateway.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitializeSession = Event & {
  /** Amount requested for initializing the payment gateway. */
  amount?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Initializes payment gateway for tokenizing payment method session.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to initialize payment gateway for tokenization.
 */
export type PaymentGatewayInitializeTokenization = {
  /** A data returned by payment app. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors: Array<PaymentGatewayInitializeTokenizationError>;
  /** A status of the payment gateway initialization. */
  result: PaymentGatewayInitializeTokenizationResult;
};

export type PaymentGatewayInitializeTokenizationError = {
  /** The error code. */
  code: PaymentGatewayInitializeTokenizationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentGatewayInitializeTokenizationErrorCode =
  | 'CHANNEL_INACTIVE'
  | 'GATEWAY_ERROR'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Result of initialize payment gateway for tokenization of payment method.
 *
 *     The result of initialize payment gateway for tokenization of payment method.
 *     SUCCESSFULLY_INITIALIZED - The payment gateway was successfully initialized.
 *     FAILED_TO_INITIALIZE - The payment gateway was not initialized.
 *     FAILED_TO_DELIVER - The request to initialize payment gateway was not delivered.
 *
 */
export type PaymentGatewayInitializeTokenizationResult =
  | 'FAILED_TO_DELIVER'
  | 'FAILED_TO_INITIALIZE'
  | 'SUCCESSFULLY_INITIALIZED';

/**
 * Event sent to initialize a new session in payment gateway to store the payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentGatewayInitializeTokenizationSession = Event & {
  /** Channel related to the requested action. */
  channel: Channel;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user related to the requested action. */
  user: User;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PaymentGatewayToInitialize = {
  /** The data that will be passed to the payment gateway. */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** The identifier of the payment gateway app to initialize. */
  id: Scalars['String']['input'];
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  errors: Array<PaymentError>;
  /** Payment that was initialized. */
  initializedPayment?: Maybe<PaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  /** Initialized data by gateway. */
  data?: Maybe<Scalars['JSONString']['output']>;
  /** ID of a payment gateway. */
  gateway: Scalars['String']['output'];
  /** Payment gateway name. */
  name: Scalars['String']['output'];
};

export type PaymentInput = {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** A gateway to use with that payment. */
  gateway: Scalars['String']['input'];
  /**
   * User public metadata.
   *
   * Added in Saleor 3.1.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Payment store type.
   *
   * Added in Saleor 3.1.
   */
  storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: InputMaybe<Scalars['String']['input']>;
};

/**
 * List payment gateways.
 *
 * Added in Saleor 3.6.
 */
export type PaymentListGateways = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Tokenize payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to tokenize payment method.
 */
export type PaymentMethodInitializeTokenization = {
  /** A data returned by the payment app. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors: Array<PaymentMethodInitializeTokenizationError>;
  /** The identifier of the payment method. */
  id?: Maybe<Scalars['String']['output']>;
  /** A status of the payment method tokenization. */
  result: PaymentMethodTokenizationResult;
};

export type PaymentMethodInitializeTokenizationError = {
  /** The error code. */
  code: PaymentMethodInitializeTokenizationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentMethodInitializeTokenizationErrorCode =
  | 'CHANNEL_INACTIVE'
  | 'GATEWAY_ERROR'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Event sent when user requests a tokenization of payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentMethodInitializeTokenizationSession = Event & {
  /** Channel related to the requested action. */
  channel: Channel;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The payment flow that the tokenized payment method should support. */
  paymentFlowToSupport: TokenizedPaymentFlowEnum;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user related to the requested action. */
  user: User;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Tokenize payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION (sync): The customer continues payment method tokenization.
 */
export type PaymentMethodProcessTokenization = {
  /** A data returned by the payment app. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors: Array<PaymentMethodProcessTokenizationError>;
  /** The identifier of the payment method. */
  id?: Maybe<Scalars['String']['output']>;
  /** A status of the payment method tokenization. */
  result: PaymentMethodTokenizationResult;
};

export type PaymentMethodProcessTokenizationError = {
  /** The error code. */
  code: PaymentMethodProcessTokenizationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PaymentMethodProcessTokenizationErrorCode =
  | 'CHANNEL_INACTIVE'
  | 'GATEWAY_ERROR'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Event sent when user continues a tokenization of payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PaymentMethodProcessTokenizationSession = Event & {
  /** Channel related to the requested action. */
  channel: Channel;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** The ID returned by app from `PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION` webhook. */
  id: Scalars['String']['output'];
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user related to the requested action. */
  user: User;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PaymentMethodRequestDeleteError = {
  /** The error code. */
  code: StoredPaymentMethodRequestDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/**
 * Result of tokenization of payment method.
 *
 *     SUCCESSFULLY_TOKENIZED - The payment method was successfully tokenized.
 *     ADDITIONAL_ACTION_REQUIRED - The additional action is required to tokenize payment
 *     method.
 *     PENDING - The payment method is pending tokenization.
 *     FAILED_TO_TOKENIZE - The payment method was not tokenized.
 *     FAILED_TO_DELIVER - The request to tokenize payment method was not delivered.
 *
 */
export type PaymentMethodTokenizationResult =
  | 'ADDITIONAL_ACTION_REQUIRED'
  | 'FAILED_TO_DELIVER'
  | 'FAILED_TO_TOKENIZE'
  | 'PENDING'
  | 'SUCCESSFULLY_TOKENIZED';

/**
 * Process payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentProcessEvent = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentRefund = {
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/**
 * Refund payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentRefundEvent = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents the channel-specific payment settings. */
export type PaymentSettings = {
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy: TransactionFlowStrategyEnum;
};

export type PaymentSettingsInput = {
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.16.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy?: InputMaybe<TransactionFlowStrategyEnum>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>;
  /** Payment gateway name. */
  gateway: Scalars['String']['output'];
  /**
   * List of public metadata items.
   *
   * Added in Saleor 3.1.
   *
   * Can be accessed without permissions.
   */
  metadata: Array<MetadataItem>;
  /** ID of stored payment method. */
  paymentMethodId?: Maybe<Scalars['String']['output']>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentVoid = {
  errors: Array<PaymentError>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>;
};

/**
 * Void payment.
 *
 * Added in Saleor 3.6.
 */
export type PaymentVoidEvent = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<Payment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
};

/** An enumeration. */
export type PermissionEnum =
  | 'HANDLE_CHECKOUTS'
  | 'HANDLE_PAYMENTS'
  | 'HANDLE_TAXES'
  | 'IMPERSONATE_USER'
  | 'MANAGE_APPS'
  | 'MANAGE_CHANNELS'
  | 'MANAGE_CHECKOUTS'
  | 'MANAGE_DISCOUNTS'
  | 'MANAGE_GIFT_CARD'
  | 'MANAGE_MENUS'
  | 'MANAGE_OBSERVABILITY'
  | 'MANAGE_ORDERS'
  | 'MANAGE_ORDERS_IMPORT'
  | 'MANAGE_PAGES'
  | 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_PLUGINS'
  | 'MANAGE_PRODUCTS'
  | 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_SETTINGS'
  | 'MANAGE_SHIPPING'
  | 'MANAGE_STAFF'
  | 'MANAGE_TAXES'
  | 'MANAGE_TRANSLATIONS'
  | 'MANAGE_USERS';

/**
 * Create new permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_CREATED (async)
 */
export type PermissionGroupCreate = {
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name: Scalars['String']['input'];
  /**
   * Determine if the group has restricted access to channels.  DEFAULT: False
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when new permission group is created.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Delete permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_DELETED (async)
 */
export type PermissionGroupDelete = {
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

/**
 * Event sent when permission group is deleted.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type PermissionGroupError = {
  /** List of chnnels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type PermissionGroupErrorCode =
  | 'ASSIGN_NON_STAFF_MEMBER'
  | 'CANNOT_REMOVE_FROM_LAST_GROUP'
  | 'DUPLICATED_INPUT_ITEM'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'OUT_OF_SCOPE_CHANNEL'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'REQUIRED'
  | 'UNIQUE';

export type PermissionGroupFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Sorting options for permission groups. */
export type PermissionGroupSortField =
  /** Sort permission group accounts by name. */
  | 'NAME';

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort permission group. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

/**
 * Update permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_UPDATED (async)
 */
export type PermissionGroupUpdate = {
  errors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * List of channels to unassign from this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Determine if the group has restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Event sent when permission group is updated.
 *
 * Added in Saleor 3.6.
 */
export type PermissionGroupUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<Group>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Plugin. */
export type Plugin = {
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<PluginConfiguration>;
  /** Description of the plugin. */
  description: Scalars['String']['output'];
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration?: Maybe<PluginConfiguration>;
  /** Identifier of the plugin. */
  id: Scalars['ID']['output'];
  /** Name of the plugin. */
  name: Scalars['String']['output'];
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  /** Determines if plugin is active or not. */
  active: Scalars['Boolean']['output'];
  /** The channel to which the plugin configuration is assigned to. */
  channel?: Maybe<Channel>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<ConfigurationItem>>;
};

export type PluginConfigurationType =
  | 'GLOBAL'
  | 'PER_CHANNEL';

export type PluginCountableConnection = {
  edges: Array<PluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PluginCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Plugin;
};

export type PluginError = {
  /** The error code. */
  code: PluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PluginErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'PLUGIN_MISCONFIGURED'
  | 'REQUIRED'
  | 'UNIQUE';

export type PluginFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  type?: InputMaybe<PluginConfigurationType>;
};

export type PluginSortField =
  | 'IS_ACTIVE'
  | 'NAME';

export type PluginSortingInput = {
  /** Specifies the direction in which to sort plugins. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean']['input'];
  channels: Array<Scalars['ID']['input']>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type PluginUpdate = {
  errors: Array<PluginError>;
  plugin?: Maybe<Plugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Configuration of the plugin. */
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

/** An enumeration. */
export type PostalCodeRuleInclusionTypeEnum =
  | 'EXCLUDE'
  | 'INCLUDE';

/** Represents preorder settings for product variant. */
export type PreorderData = {
  /** Preorder end date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Total number of sold product variant during preorder.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalSoldUnits: Scalars['Int']['output'];
  /**
   * The global preorder threshold for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalThreshold?: Maybe<Scalars['Int']['output']>;
};

export type PreorderSettingsInput = {
  /** The end date for preorder. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The global threshold for preorder variant. */
  globalThreshold?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  /** Preorder threshold for product variant in this channel. */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars['Int']['output'];
};

export type PriceInput = {
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Currency code. */
  currency: Scalars['String']['input'];
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Price less than or equal to. */
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  /**
   * Get a single attribute attached to product by attribute slug.
   *
   * Added in Saleor 3.9.
   */
  attribute?: Maybe<SelectedAttribute>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /**
   * Date when product is available for purchase.
   * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
   */
  availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /** Date when product is available for purchase. */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<Category>;
  /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of availability in channels for the product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  channelListings?: Maybe<Array<ProductChannelListing>>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` field to determine whether tax collection is enabled. */
  chargeTaxes: Scalars['Boolean']['output'];
  /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<Array<Collection>>;
  /** The date and time when the product was created. */
  created: Scalars['DateTime']['output'];
  /** Default variant of the product. */
  defaultVariant?: Maybe<ProductVariant>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** The ID of the product. */
  id: Scalars['ID']['output'];
  /**
   * Get a single product image by ID.
   * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
   */
  imageById?: Maybe<ProductImage>;
  /**
   * List of images for the product.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Whether the product is in stock, set as available for purchase in the given channel, and published. */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  /** List of media for the product. */
  media?: Maybe<Array<ProductMedia>>;
  /** Get a single product media by ID. */
  mediaById?: Maybe<ProductMedia>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** SEO description of the product. */
  name: Scalars['String']['output'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Type of the product. */
  productType: ProductType;
  /** Rating of the product. */
  rating?: Maybe<Scalars['Float']['output']>;
  /** SEO description of the product. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title of the product. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Slug of the product. */
  slug: Scalars['String']['output'];
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<TaxClass>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  taxType?: Maybe<TaxType>;
  /** Thumbnail of the product. */
  thumbnail?: Maybe<Image>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
  /** The date and time when the product was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * Get a single variant by SKU or ID.
   *
   * Added in Saleor 3.9.
   * @deprecated This field will be removed in Saleor 4.0. Use top-level `variant` query.
   */
  variant?: Maybe<ProductVariant>;
  /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  variants?: Maybe<Array<ProductVariant>>;
  /** Weight of the product. */
  weight?: Maybe<Weight>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductAttributeArgs = {
  slug: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaArgs = {
  sortBy?: InputMaybe<MediaSortingInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Represents an individual item for sale in the storefront. */
export type ProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssign = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']['input'];
  /** The attribute type to be assigned as. */
  type: ProductAttributeType;
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssignmentUpdate = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']['input'];
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection: Scalars['Boolean']['input'];
};

export type ProductAttributeType =
  | 'PRODUCT'
  | 'VARIANT';

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeUnassign = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
};

/**
 * Creates products.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkCreate = {
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<ProductBulkCreateError>;
  /** List of the created products. */
  results: Array<ProductBulkResult>;
};

export type ProductBulkCreateError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductBulkCreateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ProductBulkCreateErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'BLANK'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'MAX_LENGTH'
  | 'NOT_FOUND'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'PRODUCT_WITHOUT_CATEGORY'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'UNSUPPORTED_MEDIA_PROVIDER';

export type ProductBulkCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** List of channels in which the product is available. */
  channelListings?: InputMaybe<Array<ProductChannelListingCreateInput>>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** External ID of this product. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** List of media inputs associated with the product. */
  media?: InputMaybe<Array<MediaInput>>;
  /** Fields required to update the product metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Fields required to update the product private metadata. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID']['input'];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Input list of product variants to create. */
  variants?: InputMaybe<Array<ProductVariantBulkCreateInput>>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductBulkResult = {
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<ProductBulkCreateError>>;
  /** Product data. */
  product?: Maybe<Product>;
};

/**
 * Creates/updates translations for products.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 *
 * Triggers the following webhook events:
 * - TRANSLATION_CREATED (async): Called when a translation was created.
 * - TRANSLATION_UPDATED (async): Called when a translation was updated.
 */
export type ProductBulkTranslate = {
  /** Returns how many translations were created/updated. */
  count: Scalars['Int']['output'];
  errors: Array<ProductBulkTranslateError>;
  /** List of the translations. */
  results: Array<ProductBulkTranslateResult>;
};

export type ProductBulkTranslateError = {
  /** The error code. */
  code: ProductTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

export type ProductBulkTranslateInput = {
  /** External reference of an product. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Product ID. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  languageCode: LanguageCodeEnum;
  /** Translation fields. */
  translationFields: TranslationInput;
};

export type ProductBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<ProductBulkTranslateError>>;
  /** Product translation data. */
  translation?: Maybe<ProductTranslation>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars['Date']['output']>;
  /**
   * The product available for purchase date time.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** The channel in which the product is listed. */
  channel: Channel;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<Money>;
  /** The ID of the product channel listing. */
  id: Scalars['ID']['output'];
  /** Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the product is published in the channel. */
  isPublished: Scalars['Boolean']['output'];
  /**
   * Range of margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<Margin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars['Date']['output']>;
  /**
   * The product publication date time.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Purchase cost of product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  purchaseCost?: Maybe<MoneyRange>;
  /** Indicates product visibility in the channel listings. */
  visibleInListings: Scalars['Boolean']['output'];
};


/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
  /** List of variants to which the channel should be assigned. */
  addVariants?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  availableForPurchaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductChannelListingCreateInput = {
  /** A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed. */
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductChannelListingError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of variants IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductChannelListingUpdate = {
  errors: Array<ProductChannelListingError>;
  /** An updated product instance. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels from which the product should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: InputMaybe<Array<ProductChannelListingAddInput>>;
};

export type ProductCountableConnection = {
  edges: Array<ProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductCreate = {
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID']['input'];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreated = Event & {
  /** The category of the product. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductDelete = {
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeleted = Event & {
  /** The category of the product. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ProductErrorCode =
  | 'ALREADY_EXISTS'
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'MEDIA_ALREADY_ASSIGNED'
  | 'NOT_FOUND'
  | 'NOT_PRODUCTS_IMAGE'
  | 'NOT_PRODUCTS_VARIANT'
  | 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'PRODUCT_WITHOUT_CATEGORY'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'UNSUPPORTED_MEDIA_PROVIDER'
  | 'VARIANT_NO_DIGITAL_CONTENT';

/**
 * Event sent when product export is completed.
 *
 * Added in Saleor 3.16.
 */
export type ProductExportCompleted = Event & {
  /** The export file for products. */
  export?: Maybe<ExportFile>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ProductFieldEnum =
  | 'CATEGORY'
  | 'CHARGE_TAXES'
  | 'COLLECTIONS'
  | 'DESCRIPTION'
  | 'NAME'
  | 'PRODUCT_MEDIA'
  | 'PRODUCT_TYPE'
  | 'PRODUCT_WEIGHT'
  | 'VARIANT_ID'
  | 'VARIANT_MEDIA'
  | 'VARIANT_SKU'
  | 'VARIANT_WEIGHT';

export type ProductFilterInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  /**
   * Filter by the date of availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  availableFrom?: InputMaybe<Scalars['DateTime']['input']>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter on whether product is a gift card or not. */
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  hasPreorderedVariants?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filter by visibility in product listings.
   *
   * Added in Saleor 3.8.
   */
  isVisibleInListing?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  minimalPrice?: InputMaybe<PriceRangeInput>;
  price?: InputMaybe<PriceRangeInput>;
  productTypes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter by the publication date.
   *
   * Added in Saleor 3.8.
   */
  publishedFrom?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter by variants having specific stock status. */
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Represents a product image. */
export type ProductImage = {
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The ID of the image. */
  id: Scalars['ID']['output'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** Represents a product media. */
export type ProductMedia = Node & ObjectWithMetadata & {
  /** The alt text of the media. */
  alt: Scalars['String']['output'];
  /** The unique ID of the product media. */
  id: Scalars['ID']['output'];
  /**
   * List of public metadata items. Can be accessed without permissions.
   *
   * Added in Saleor 3.12.
   */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The oEmbed data of the media. */
  oembedData: Scalars['JSONString']['output'];
  /**
   * List of private metadata items. Requires staff permissions to access.
   *
   * Added in Saleor 3.12.
   */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.12.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.12.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Product id the media refers to.
   *
   * Added in Saleor 3.12.
   */
  productId?: Maybe<Scalars['ID']['output']>;
  /** The sort order of the media. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** The type of the media. */
  type: ProductMediaType;
  /** The URL of the media. */
  url: Scalars['String']['output'];
};


/** Represents a product media. */
export type ProductMediaMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a product media. */
export type ProductMediaMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a product media. */
export type ProductMediaPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a product media. */
export type ProductMediaUrlArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaCreate = {
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  /** ID of an product. */
  product: Scalars['ID']['input'];
};

/**
 * Event sent when new product media is created.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaDelete = {
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when product media is deleted.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaReorder = {
  errors: Array<ProductError>;
  media?: Maybe<Array<ProductMedia>>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/** An enumeration. */
export type ProductMediaType =
  | 'IMAGE'
  | 'VIDEO';

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaUpdate = {
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when product media is updated.
 *
 * Added in Saleor 3.12.
 */
export type ProductMediaUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<ProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdated = Event & {
  /** The category of the product. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductMetadataUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: InputMaybe<ProductOrderField>;
};

export type ProductOrderField =
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'COLLECTION'
  /**
   * Sort products by creation date.
   *
   * Added in Saleor 3.8.
   */
  | 'CREATED_AT'
  /** Sort products by update date. */
  | 'DATE'
  /** Sort products by update date. */
  | 'LAST_MODIFIED'
  /** Sort products by update date. */
  | 'LAST_MODIFIED_AT'
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMAL_PRICE'
  /** Sort products by name. */
  | 'NAME'
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PRICE'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLICATION_DATE'
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED'
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'PUBLISHED_AT'
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  | 'RANK'
  /** Sort products by rating. */
  | 'RATING'
  /** Sort products by type. */
  | 'TYPE';

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /**
   * The discount amount in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /**
   * Determines whether displayed prices should include taxes.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<TaxedMoneyRange>;
  /**
   * The discounted price range of the product variants in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductReorderAttributeValues = {
  errors: Array<ProductError>;
  /** Product from which attribute values are reordered. */
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents product's original translatable fields and related translations. */
export type ProductTranslatableContent = Node & {
  /** List of product attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  /**
   * Product's description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the product translatable content. */
  id: Scalars['ID']['output'];
  /** Product's name to translate. */
  name: Scalars['String']['output'];
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product?: Maybe<Product>;
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars['String']['output']>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
};


/** Represents product's original translatable fields and related translations. */
export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductTranslate = {
  errors: Array<TranslationError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** An enumeration. */
export type ProductTranslateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** Represents product translations. */
export type ProductTranslation = Node & {
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the product translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated product name. */
  name?: Maybe<Scalars['String']['output']>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars['String']['output']>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars['String']['output']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  /**
   * Variant attributes of that product type with attached variant selection.
   *
   * Added in Saleor 3.1.
   */
  assignedVariantAttributes?: Maybe<Array<AssignedVariantAttribute>>;
  /**
   * List of attributes which can be assigned to this product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  /** Whether the product type has variants. */
  hasVariants: Scalars['Boolean']['output'];
  /** The ID of the product type. */
  id: Scalars['ID']['output'];
  /** Whether the product type is digital. */
  isDigital: Scalars['Boolean']['output'];
  /** Whether shipping is required for this product type. */
  isShippingRequired: Scalars['Boolean']['output'];
  /** The product type kind. */
  kind: ProductTypeKindEnum;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the product type. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Product attributes of that product type. */
  productAttributes?: Maybe<Array<Attribute>>;
  /**
   * List of products of this type.
   * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
   */
  products?: Maybe<ProductCountableConnection>;
  /** Slug of the product type. */
  slug: Scalars['String']['output'];
  /**
   * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<TaxClass>;
  /**
   * A type of tax. Assigned by enabled tax gateway
   * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
   */
  taxType?: Maybe<TaxType>;
  /**
   * Variant attributes of that product type.
   * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
   */
  variantAttributes?: Maybe<Array<Attribute>>;
  /** Weight of the product type. */
  weight?: Maybe<Weight>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttributeWhereInput>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductTypeConfigurable =
  | 'CONFIGURABLE'
  | 'SIMPLE';

export type ProductTypeCountableConnection = {
  edges: Array<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductType;
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeCreate = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeDelete = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeEnum =
  | 'DIGITAL'
  | 'SHIPPABLE';

export type ProductTypeFilterInput = {
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  kind?: InputMaybe<ProductTypeKindEnum>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductTypeInput = {
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if products are digital. */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** The product type kind. */
  kind?: InputMaybe<ProductTypeKindEnum>;
  /** Name of the product type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Product type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** ID of a tax class to assign to this product type. All products of this product type would use this tax class, unless it's overridden in the `Product` type. */
  taxClass?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.. Use tax classes to control the tax calculation for a product type. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Weight of the ProductType items. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** An enumeration. */
export type ProductTypeKindEnum =
  | 'GIFT_CARD'
  | 'NORMAL';

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeReorderAttributes = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product type from which attributes are reordered. */
  productType?: Maybe<ProductType>;
};

export type ProductTypeSortField =
  /** Sort products by type. */
  | 'DIGITAL'
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by shipping. */
  | 'SHIPPING_REQUIRED';

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort product types. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeUpdate = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductUpdate = {
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdated = Event & {
  /** The category of the product. */
  category?: Maybe<Category>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<Product>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
  channel?: Maybe<Scalars['String']['output']>;
  /**
   * List of price information in channels for the product.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channelListings?: Maybe<Array<ProductVariantChannelListing>>;
  /** The date and time when the product variant was created. */
  created: Scalars['DateTime']['output'];
  /**
   * Digital content for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent?: Maybe<DigitalContent>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** The ID of the product variant. */
  id: Scalars['ID']['output'];
  /**
   * List of images for the product variant.
   * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
   */
  images?: Maybe<Array<ProductImage>>;
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']['output']>;
  /** List of media for the product variant. */
  media?: Maybe<Array<ProductMedia>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The name of the product variant. */
  name: Scalars['String']['output'];
  /**
   * Preorder data for product variant.
   *
   * Added in Saleor 3.1.
   */
  preorder?: Maybe<PreorderData>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<VariantPricingInfo>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The product to which the variant belongs. */
  product: Product;
  /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
  quantityAvailable?: Maybe<Scalars['Int']['output']>;
  /** The maximum quantity of this variant that a customer can purchase. */
  quantityLimitPerCustomer?: Maybe<Scalars['Int']['output']>;
  /**
   * Total quantity ordered.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  quantityOrdered?: Maybe<Scalars['Int']['output']>;
  /**
   * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  revenue?: Maybe<TaxedMoney>;
  /** The SKU (stock keeping unit) of the product variant. */
  sku?: Maybe<Scalars['String']['output']>;
  /**
   * Stocks for the product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  stocks?: Maybe<Array<Stock>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory: Scalars['Boolean']['output'];
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
  /** The date and time when the product variant was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** The weight of the product variant. */
  weight?: Maybe<Weight>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: InputMaybe<AddressInput>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: InputMaybe<AddressInput>;
  countryCode?: InputMaybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStock = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>;
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  errors: Array<BulkProductError>;
  /** List of the created variants.This field will be removed in Saleor 4.0. */
  productVariants: Array<ProductVariant>;
  /**
   * List of the created variants.
   *
   * Added in Saleor 3.11.
   */
  results: Array<ProductVariantBulkResult>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<BulkAttributeValueInput>;
  /** List of prices assigned to channels. */
  channelListings?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductVariantBulkError = {
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channel listings IDs which causes the error. */
  channelListings?: Maybe<Array<Scalars['ID']['output']>>;
  /**
   * List of channel IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductVariantBulkErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /**
   * Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   *
   * Added in Saleor 3.14.
   */
  path?: Maybe<Scalars['String']['output']>;
  /**
   * List of stocks IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  stocks?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ProductVariantBulkErrorCode =
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRICE'
  | 'NOT_FOUND'
  | 'NOT_PRODUCTS_VARIANT'
  | 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
  | 'REQUIRED'
  | 'STOCK_ALREADY_EXISTS'
  | 'UNIQUE';

export type ProductVariantBulkResult = {
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<ProductVariantBulkError>>;
  /** Product variant data. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Creates/updates translations for products variants.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 *
 * Triggers the following webhook events:
 * - TRANSLATION_CREATED (async): A translation was created.
 * - TRANSLATION_UPDATED (async): A translation was updated.
 */
export type ProductVariantBulkTranslate = {
  /** Returns how many translations were created/updated. */
  count: Scalars['Int']['output'];
  errors: Array<ProductVariantBulkTranslateError>;
  /** List of the translations. */
  results: Array<ProductVariantBulkTranslateResult>;
};

export type ProductVariantBulkTranslateError = {
  /** The error code. */
  code: ProductVariantTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
};

export type ProductVariantBulkTranslateInput = {
  /** External reference of a product variant. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Product variant ID. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Translation language code. */
  languageCode: LanguageCodeEnum;
  /** Translation fields. */
  translationFields: NameTranslationInput;
};

export type ProductVariantBulkTranslateResult = {
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<ProductVariantBulkTranslateError>>;
  /** Product variant translation data. */
  translation?: Maybe<ProductVariantTranslation>;
};

/**
 * Update multiple product variants.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int']['output'];
  errors: Array<ProductVariantBulkError>;
  /** List of the updated variants. */
  results: Array<ProductVariantBulkResult>;
};

/**
 * Input fields to update product variants.
 *
 * Added in Saleor 3.11.
 */
export type ProductVariantBulkUpdateInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<BulkAttributeValueInput>>;
  /**
   * Channel listings input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channelListings?: InputMaybe<ProductVariantChannelListingUpdateInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** ID of the product variant to update. */
  id: Scalars['ID']['input'];
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /**
   * Stocks input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  stocks?: InputMaybe<ProductVariantStocksUpdateInput>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/** Represents product variant channel listing. */
export type ProductVariantChannelListing = Node & {
  /** The channel to which the variant listing belongs. */
  channel: Channel;
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>;
  /** The ID of the variant channel listing. */
  id: Scalars['ID']['output'];
  /**
   * Gross margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<Scalars['Int']['output']>;
  /**
   * Preorder variant data.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold?: Maybe<PreorderThreshold>;
  /** The price of the variant. */
  price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /**
   * The threshold for preorder variant in channel.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal']['input'];
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantChannelListingUpdate = {
  errors: Array<ProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>;
  /** An updated product variant instance. */
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantChannelListingUpdateInput = {
  /** List of channels to create variant channel listings. */
  create?: InputMaybe<Array<ProductVariantChannelListingAddInput>>;
  /** List of channel listings to remove. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of channel listings to update. */
  update?: InputMaybe<Array<ChannelListingUpdateInput>>;
};

export type ProductVariantCountableConnection = {
  edges: Array<ProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductVariantCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductVariant;
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantCreate = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID']['input'];
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantDelete = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantFilterInput = {
  isPreorder?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<PreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ProductVariantMetadataUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStock = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantPreorderDeactivate = {
  errors: Array<ProductError>;
  /** Product variant with ended preorder. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorder = {
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorderAttributeValues = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantSetDefault = {
  errors: Array<ProductError>;
  product?: Maybe<Product>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
};

export type ProductVariantSortField =
  /** Sort products variants by last modified at. */
  | 'LAST_MODIFIED_AT';

export type ProductVariantSortingInput = {
  /** Specifies the direction in which to sort productVariants. */
  direction: OrderDirection;
  /** Sort productVariants by the selected field. */
  field: ProductVariantSortField;
};

/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** Look up a warehouse. */
  warehouse?: Maybe<Warehouse>;
};


/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ProductVariantStockUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksDelete = {
  errors: Array<StockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>;
  errors: Array<BulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantStocksUpdateInput = {
  /** List of warehouses to create stocks. */
  create?: InputMaybe<Array<StockInput>>;
  /** List of stocks to remove. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of stocks to update. */
  update?: InputMaybe<Array<StockUpdateInput>>;
};

/** Represents product variant's original translatable fields and related translations. */
export type ProductVariantTranslatableContent = Node & {
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>;
  /** The ID of the product variant translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the product variant to translate. */
  name: Scalars['String']['output'];
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant?: Maybe<ProductVariant>;
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
};


/** Represents product variant's original translatable fields and related translations. */
export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductVariantTranslate = {
  errors: Array<TranslationError>;
  productVariant?: Maybe<ProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/** An enumeration. */
export type ProductVariantTranslateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** Represents product variant translations. */
export type ProductVariantTranslation = Node & {
  /** The ID of the product variant translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated product variant name. */
  name: Scalars['String']['output'];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantUpdate = {
  errors: Array<ProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<ProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type ProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<ProductVariantWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<ProductVariantWhereInput>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
};

export type ProductWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Filter by attributes associated with the product. */
  attributes?: InputMaybe<Array<AttributeInput>>;
  /** Filter by the date of availability for purchase. */
  availableFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by product category. */
  category?: InputMaybe<GlobalIdFilterInput>;
  /** Filter by collection. */
  collection?: InputMaybe<GlobalIdFilterInput>;
  /** Filter on whether product is a gift card or not. */
  giftCard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by product with category assigned. */
  hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by product with preordered variants. */
  hasPreorderedVariants?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter by availability for purchase. */
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by public visibility. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by visibility on the channel. */
  isVisibleInListing?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  minimalPrice?: InputMaybe<DecimalFilterInput>;
  /** Filter by product name. */
  name?: InputMaybe<StringFilterInput>;
  /** Filter by product variant price. */
  price?: InputMaybe<DecimalFilterInput>;
  /** Filter by product type. */
  productType?: InputMaybe<GlobalIdFilterInput>;
  /** Filter by the publication date. */
  publishedFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter by product slug. */
  slug?: InputMaybe<StringFilterInput>;
  /** Filter by variants having specific stock status. */
  stockAvailability?: InputMaybe<StockAvailability>;
  /** Filter by stock of the product variant. */
  stocks?: InputMaybe<ProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type Promotion = Node & ObjectWithMetadata & {
  /** Date time of promotion creation. */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the promotion. */
  description?: Maybe<Scalars['JSON']['output']>;
  /** End date of the promotion. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** The list of events associated with the promotion. */
  events?: Maybe<Array<PromotionEvent>>;
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the promotion. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The list of promotion rules. */
  rules?: Maybe<Array<PromotionRule>>;
  /** Start date of the promotion. */
  startDate: Scalars['DateTime']['output'];
  /** Returns translated promotion fields for the given language code. */
  translation?: Maybe<PromotionTranslation>;
  /** Date time of last update of promotion. */
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Deletes promotions.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_DELETED (async): A promotion was deleted.
 */
export type PromotionBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<DiscountError>;
};

export type PromotionCountableConnection = {
  edges: Array<PromotionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PromotionCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Promotion;
};

/**
 * Creates a new promotion.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_CREATED (async): A promotion was created.
 * - PROMOTION_STARTED (async): Optionally called if promotion was started.
 */
export type PromotionCreate = {
  errors: Array<PromotionCreateError>;
  promotion?: Maybe<Promotion>;
};

export type PromotionCreateError = {
  /** The error code. */
  code: PromotionCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRECISION'
  | 'MULTIPLE_CURRENCIES_NOT_ALLOWED'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type PromotionCreateInput = {
  /** Promotion description. */
  description?: InputMaybe<Scalars['JSON']['input']>;
  /** The end date of the promotion in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Promotion name. */
  name: Scalars['String']['input'];
  /** List of promotion rules. */
  rules?: InputMaybe<Array<PromotionRuleInput>>;
  /** The start date of the promotion in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Event sent when new promotion is created.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion the event relates to. */
  promotion?: Maybe<Promotion>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion created event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionCreatedEvent = Node & PromotionEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

/**
 * Deletes a promotion.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_DELETED (async): A promotion was deleted.
 */
export type PromotionDelete = {
  errors: Array<PromotionDeleteError>;
  promotion?: Maybe<Promotion>;
};

export type PromotionDeleteError = {
  /** The error code. */
  code: PromotionDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND';

/**
 * Event sent when promotion is deleted.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion the event relates to. */
  promotion?: Maybe<Promotion>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * The event informs about the end of the promotion.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionEnded = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion the event relates to. */
  promotion?: Maybe<Promotion>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion ended event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionEndedEvent = Node & PromotionEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

export type PromotionEvent = PromotionCreatedEvent | PromotionEndedEvent | PromotionRuleCreatedEvent | PromotionRuleDeletedEvent | PromotionRuleUpdatedEvent | PromotionStartedEvent | PromotionUpdatedEvent;

export type PromotionEventInterface = {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

/** An enumeration. */
export type PromotionEventsEnum =
  | 'PROMOTION_CREATED'
  | 'PROMOTION_ENDED'
  | 'PROMOTION_STARTED'
  | 'PROMOTION_UPDATED'
  | 'RULE_CREATED'
  | 'RULE_DELETED'
  | 'RULE_UPDATED';

/**
 * Represents the promotion rule that specifies the conditions that must be met to apply the promotion discount.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRule = Node & {
  /** The catalogue predicate that must be met to apply the rule reward. */
  cataloguePredicate?: Maybe<Scalars['JSON']['output']>;
  /**
   * List of channels where the rule applies.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channels?: Maybe<Array<Channel>>;
  /** Description of the promotion rule. */
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the promotion rule. */
  name?: Maybe<Scalars['String']['output']>;
  /** Promotion to which the rule belongs. */
  promotion?: Maybe<Promotion>;
  /** The reward value of the promotion rule. Defines the discount value applied when the rule conditions are met. */
  rewardValue?: Maybe<Scalars['PositiveDecimal']['output']>;
  /** The type of reward value of the promotion rule. */
  rewardValueType?: Maybe<RewardValueTypeEnum>;
  /** Returns translated promotion rule fields for the given language code. */
  translation?: Maybe<PromotionRuleTranslation>;
};


/**
 * Represents the promotion rule that specifies the conditions that must be met to apply the promotion discount.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates a new promotion rule.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_RULE_CREATED (async): A promotion rule was created.
 */
export type PromotionRuleCreate = {
  errors: Array<PromotionRuleCreateError>;
  promotionRule?: Maybe<PromotionRule>;
};

export type PromotionRuleCreateError = {
  /** The error code. */
  code: PromotionRuleCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionRuleCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRECISION'
  | 'MULTIPLE_CURRENCIES_NOT_ALLOWED'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type PromotionRuleCreateInput = {
  /** Defines the conditions on the catalogue level that must be met for the reward to be applied. */
  cataloguePredicate?: InputMaybe<CataloguePredicateInput>;
  /** List of channel ids to which the rule should apply to. */
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Promotion rule description. */
  description?: InputMaybe<Scalars['JSON']['input']>;
  /** Promotion rule name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the promotion that rule belongs to. */
  promotion: Scalars['ID']['input'];
  /** Defines the discount value. Required when catalogue predicate is provided. */
  rewardValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Defines the promotion rule reward value type. Must be provided together with reward value. */
  rewardValueType?: InputMaybe<RewardValueTypeEnum>;
};

/**
 * Event sent when new promotion rule is created.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion rule the event relates to. */
  promotionRule?: Maybe<PromotionRule>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion rule created event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleCreatedEvent = Node & PromotionEventInterface & PromotionRuleEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The rule ID associated with the promotion event. */
  ruleId?: Maybe<Scalars['String']['output']>;
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

/**
 * Deletes a promotion rule.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_RULE_DELETED (async): A promotion rule was deleted.
 */
export type PromotionRuleDelete = {
  errors: Array<PromotionRuleDeleteError>;
  promotionRule?: Maybe<PromotionRule>;
};

export type PromotionRuleDeleteError = {
  /** The error code. */
  code: PromotionRuleDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionRuleDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND';

/**
 * Event sent when new promotion rule is deleted.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion rule the event relates to. */
  promotionRule?: Maybe<PromotionRule>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion rule created event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleDeletedEvent = Node & PromotionEventInterface & PromotionRuleEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The rule ID associated with the promotion event. */
  ruleId?: Maybe<Scalars['String']['output']>;
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

/**
 * History log of the promotion event related to rule.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleEventInterface = {
  /** The rule ID associated with the promotion event. */
  ruleId?: Maybe<Scalars['String']['output']>;
};

export type PromotionRuleInput = {
  /** Defines the conditions on the catalogue level that must be met for the reward to be applied. */
  cataloguePredicate?: InputMaybe<CataloguePredicateInput>;
  /** List of channel ids to which the rule should apply to. */
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Promotion rule description. */
  description?: InputMaybe<Scalars['JSON']['input']>;
  /** Promotion rule name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Defines the discount value. Required when catalogue predicate is provided. */
  rewardValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Defines the promotion rule reward value type. Must be provided together with reward value. */
  rewardValueType?: InputMaybe<RewardValueTypeEnum>;
};

/**
 * Represents promotion rule's original translatable fields and related translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionRuleTranslatableContent = Node & {
  /**
   * Description of the promotion rule.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** ID of the promotion rule translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the promotion rule. */
  name?: Maybe<Scalars['String']['output']>;
  /** Returns translated promotion rule fields for the given language code. */
  translation?: Maybe<PromotionRuleTranslation>;
};


/**
 * Represents promotion rule's original translatable fields and related translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionRuleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a promotion rule.
 *
 * Added in Saleor 3.17.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PromotionRuleTranslate = {
  errors: Array<TranslationError>;
  promotionRule?: Maybe<PromotionRule>;
};

/**
 * Represents promotion rule translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionRuleTranslation = Node & {
  /**
   * Translated description of the promotion rule.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** ID of the promotion rule translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated name of the promotion rule. */
  name?: Maybe<Scalars['String']['output']>;
};

export type PromotionRuleTranslationInput = {
  /**
   * Translated promotion description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates an existing promotion rule.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_RULE_UPDATED (async): A promotion rule was updated.
 */
export type PromotionRuleUpdate = {
  errors: Array<PromotionRuleUpdateError>;
  promotionRule?: Maybe<PromotionRule>;
};

export type PromotionRuleUpdateError = {
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: PromotionRuleUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionRuleUpdateErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PRECISION'
  | 'MISSING_CHANNELS'
  | 'MULTIPLE_CURRENCIES_NOT_ALLOWED'
  | 'NOT_FOUND';

export type PromotionRuleUpdateInput = {
  /** List of channel ids to remove. */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Defines the conditions on the catalogue level that must be met for the reward to be applied. */
  cataloguePredicate?: InputMaybe<CataloguePredicateInput>;
  /** Promotion rule description. */
  description?: InputMaybe<Scalars['JSON']['input']>;
  /** Promotion rule name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of channel ids to remove. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Defines the discount value. Required when catalogue predicate is provided. */
  rewardValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Defines the promotion rule reward value type. Must be provided together with reward value. */
  rewardValueType?: InputMaybe<RewardValueTypeEnum>;
};

/**
 * Event sent when new promotion rule is updated.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion rule the event relates to. */
  promotionRule?: Maybe<PromotionRule>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion rule created event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionRuleUpdatedEvent = Node & PromotionEventInterface & PromotionRuleEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The rule ID associated with the promotion event. */
  ruleId?: Maybe<Scalars['String']['output']>;
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

export type PromotionSortField =
  /** Sort promotions by created at. */
  | 'CREATED_AT'
  /** Sort promotions by end date. */
  | 'END_DATE'
  /** Sort promotions by name. */
  | 'NAME'
  /** Sort promotions by start date. */
  | 'START_DATE';

export type PromotionSortingInput = {
  /** Specifies the direction in which to sort promotions. */
  direction: OrderDirection;
  /** Sort promotions by the selected field. */
  field: PromotionSortField;
};

/**
 * The event informs about the start of the promotion.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionStarted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion the event relates to. */
  promotion?: Maybe<Promotion>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion started event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionStartedEvent = Node & PromotionEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

/**
 * Represents promotion's original translatable fields and related translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionTranslatableContent = Node & {
  /**
   * Description of the promotion.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** ID of the promotion translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the promotion. */
  name: Scalars['String']['output'];
  /** Returns translated promotion fields for the given language code. */
  translation?: Maybe<PromotionTranslation>;
};


/**
 * Represents promotion's original translatable fields and related translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a promotion.
 *
 * Added in Saleor 3.17.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PromotionTranslate = {
  errors: Array<TranslationError>;
  promotion?: Maybe<Promotion>;
};

/**
 * Represents promotion translations.
 *
 * Added in Saleor 3.17.
 */
export type PromotionTranslation = Node & {
  /**
   * Translated description of the promotion.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** ID of the promotion translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated name of the promotion. */
  name?: Maybe<Scalars['String']['output']>;
};

export type PromotionTranslationInput = {
  /**
   * Translated promotion description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates an existing promotion.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - PROMOTION_UPDATED (async): A promotion was updated.
 * - PROMOTION_STARTED (async): Optionally called if promotion was started.
 * - PROMOTION_ENDED (async): Optionally called if promotion was ended.
 */
export type PromotionUpdate = {
  errors: Array<PromotionUpdateError>;
  promotion?: Maybe<Promotion>;
};

export type PromotionUpdateError = {
  /** The error code. */
  code: PromotionUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type PromotionUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type PromotionUpdateInput = {
  /** Promotion description. */
  description?: InputMaybe<Scalars['JSON']['input']>;
  /** The end date of the promotion in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Promotion name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The start date of the promotion in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Event sent when promotion is updated.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The promotion the event relates to. */
  promotion?: Maybe<Promotion>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * History log of the promotion updated event.
 *
 * Added in Saleor 3.17.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type PromotionUpdatedEvent = Node & PromotionEventInterface & {
  /**
   * User or App that created the promotion event.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.
   */
  createdBy?: Maybe<UserOrApp>;
  /** Date when event happened. */
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Promotion event type. */
  type: PromotionEventsEnum;
};

export type PromotionWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<PromotionWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<PromotionWhereInput>>;
  /** Filter promotions by end date. */
  endDate?: InputMaybe<DateTimeFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isOldSale?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  /** Filter by promotion name. */
  name?: InputMaybe<StringFilterInput>;
  /** Filter promotions by start date. */
  startDate?: InputMaybe<DateTimeFilterInput>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Query = {
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  /**
   * Look up an address by ID.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  address?: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<AddressValidationData>;
  /**
   * Look up an app by ID. If ID is not provided, return the currently authenticated app.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
   */
  app?: Maybe<App>;
  /**
   * Look up an app extension by ID.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtension?: Maybe<AppExtension>;
  /**
   * List of all extensions.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtensions?: Maybe<AppExtensionCountableConnection>;
  /**
   * List of the apps.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
   */
  apps?: Maybe<AppCountableConnection>;
  /**
   * List of all apps installations
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID, slug or external reference. */
  attribute?: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes?: Maybe<AttributeCountableConnection>;
  /** List of the shop's categories. */
  categories?: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category?: Maybe<Category>;
  /** Look up a channel by ID or slug. */
  channel?: Maybe<Channel>;
  /**
   * List of all channels.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channels?: Maybe<Array<Channel>>;
  /**
   * Look up a checkout by id.
   *
   * Requires one of the following permissions to query checkouts that belong to other users: MANAGE_CHECKOUTS, IMPERSONATE_USER.
   */
  checkout?: Maybe<Checkout>;
  /**
   * List of checkout lines.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  /**
   * List of checkouts.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkouts?: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<Collection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<CollectionCountableConnection>;
  /**
   * List of the shop's customers.
   *
   * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
   */
  customers?: Maybe<UserCountableConnection>;
  /**
   * Look up digital content by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent?: Maybe<DigitalContent>;
  /**
   * List of digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  /**
   * List of draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrders?: Maybe<OrderCountableConnection>;
  /**
   * Look up a export file by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFile?: Maybe<ExportFile>;
  /**
   * List of export files.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFiles?: Maybe<ExportFileCountableConnection>;
  /**
   * Look up a gift card by ID.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCard?: Maybe<GiftCard>;
  /**
   * List of gift card currencies.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCurrencies: Array<Scalars['String']['output']>;
  /**
   * Gift card related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettings: GiftCardSettings;
  /**
   * List of gift card tags.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardTags?: Maybe<GiftCardTagCountableConnection>;
  /**
   * List of gift cards.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /**
   * List of activity events to display on homepage (at the moment it only contains order-events).
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me?: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem?: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus?: Maybe<MenuCountableConnection>;
  /** Look up an order by ID or external reference. */
  order?: Maybe<Order>;
  /**
   * Look up an order by token.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  orderByToken?: Maybe<Order>;
  /**
   * Order related settings from site settings. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `channel` query to fetch the `orderSettings` field instead.
   */
  orderSettings?: Maybe<OrderSettings>;
  /**
   * List of orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orders?: Maybe<OrderCountableConnection>;
  /**
   * Return the total sales amount from a specific period.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  ordersTotal?: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page?: Maybe<Page>;
  /** Look up a page type by ID. */
  pageType?: Maybe<PageType>;
  /** List of the page types. */
  pageTypes?: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages?: Maybe<PageCountableConnection>;
  /**
   * Look up a payment by ID.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payment?: Maybe<Payment>;
  /**
   * List of payments.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payments?: Maybe<PaymentCountableConnection>;
  /**
   * Look up permission group by ID.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroup?: Maybe<Group>;
  /**
   * List of permission groups.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroups?: Maybe<GroupCountableConnection>;
  /**
   * Look up a plugin by ID.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugin?: Maybe<Plugin>;
  /**
   * List of plugins.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugins?: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  product?: Maybe<Product>;
  /** Look up a product type by ID. */
  productType?: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes?: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariant?: Maybe<ProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariants?: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<ProductCountableConnection>;
  /**
   * Look up a promotion by ID.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  promotion?: Maybe<Promotion>;
  /**
   * List of the promotions.
   *
   * Added in Saleor 3.17.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  promotions?: Maybe<PromotionCountableConnection>;
  /**
   * List of top selling products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  /**
   * Look up a sale by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `promotion` query instead.
   */
  sale?: Maybe<Sale>;
  /**
   * List of the shop's sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `promotions` query instead.
   */
  sales?: Maybe<SaleCountableConnection>;
  /**
   * Look up a shipping zone by ID.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZone?: Maybe<ShippingZone>;
  /**
   * List of the shop's shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /**
   * List of the shop's staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUsers?: Maybe<UserCountableConnection>;
  /**
   * Look up a stock by ID
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stock?: Maybe<Stock>;
  /**
   * List of stocks.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stocks?: Maybe<StockCountableConnection>;
  /**
   * Look up a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<TaxClass>;
  /**
   * List of tax classes.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClasses?: Maybe<TaxClassCountableConnection>;
  /**
   * Look up a tax configuration.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfiguration?: Maybe<TaxConfiguration>;
  /**
   * List of tax configurations.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfigurations?: Maybe<TaxConfigurationCountableConnection>;
  /**
   * Tax class rates grouped by country.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
  /**
   *
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxCountryConfigurations?: Maybe<Array<TaxCountryConfiguration>>;
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<TaxType>>;
  /**
   * Look up a transaction by ID.
   *
   * Added in Saleor 3.6.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transaction?: Maybe<TransactionItem>;
  /**
   * Lookup a translatable item by ID.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translation?: Maybe<TranslatableItem>;
  /**
   * Returns a list of all translatable items of a given kind.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translations?: Maybe<TranslatableItemConnection>;
  /**
   * Look up a user by ID or email address.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
   */
  user?: Maybe<User>;
  /**
   * Look up a voucher by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucher?: Maybe<Voucher>;
  /**
   * List of the shop's vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  vouchers?: Maybe<VoucherCountableConnection>;
  /**
   * Look up a warehouse by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouse?: Maybe<Warehouse>;
  /**
   * List of warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouses?: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  webhook?: Maybe<Webhook>;
  /**
   * List of all available webhook events.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  webhookEvents?: Maybe<Array<WebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars['JSONString']['output']>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']['input']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  cityArea?: InputMaybe<Scalars['String']['input']>;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode;
};


export type QueryAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAppExtensionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppExtensionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
  where?: InputMaybe<AttributeWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckoutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CheckoutFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CheckoutSortingInput>;
};


export type QueryCollectionArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardTagFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GiftCardFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<GiftCardSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMenuArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuItemArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPageTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageTypeSortingInput>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryProductArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductVariantArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
  where?: InputMaybe<ProductVariantWhereInput>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPromotionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PromotionSortingInput>;
  where?: InputMaybe<PromotionWhereInput>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  period: ReportingPeriod;
};


export type QuerySaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ShippingZoneFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaxClassArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxClassesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxClassFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TaxClassSortingInput>;
};


export type QueryTaxConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaxConfigurationFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaxCountryConfigurationArgs = {
  countryCode: CountryCode;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTranslationArgs = {
  id: Scalars['ID']['input'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float']['output'];
  /** A type of goods. */
  rateType: Scalars['String']['output'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
export type RefreshToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID']['input'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type ReportingPeriod =
  | 'THIS_MONTH'
  | 'TODAY';

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account email change.
 * - ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.
 */
export type RequestEmailChange = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** A user instance. */
  user?: Maybe<User>;
};

/**
 * Sends an email with the account password modification link.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for password reset.
 * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
 * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
 */
export type RequestPasswordReset = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
};

/** An enumeration. */
export type RewardValueTypeEnum =
  | 'FIXED'
  | 'PERCENTAGE';

/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type Sale = Node & ObjectWithMetadata & {
  /** List of categories this sale applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of channels available for the sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings?: Maybe<Array<SaleChannelListing>>;
  /**
   * List of collections this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections?: Maybe<CollectionCountableConnection>;
  /** The date and time when the sale was created. */
  created: Scalars['DateTime']['output'];
  /** Currency code for sale. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Sale value. */
  discountValue?: Maybe<Scalars['Float']['output']>;
  /** The end date and time of the sale. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the sale. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** The name of the sale. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this sale applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products?: Maybe<ProductCountableConnection>;
  /** The start date and time of the sale. */
  startDate: Scalars['DateTime']['output'];
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
  /** Type of the sale, fixed or percentage. */
  type: SaleType;
  /** The date and time when the sale was updated. */
  updatedAt: Scalars['DateTime']['output'];
  /**
   * List of product variants this sale applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SalePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SalePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/**
 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `Promotion` type instead.
 */
export type SaleVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleCreate` mutation instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 */
export type SaleAddCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_DELETED (async): A sale was deleted.
 */
export type SaleBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/**
 * Represents sale channel listing.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `PromotionRule` type instead.
 */
export type SaleChannelListing = Node & {
  /** The channel in which the sale is available. */
  channel: Channel;
  /** The currency in which the discount value is specified. */
  currency: Scalars['String']['output'];
  /** The value of the discount applied to the sale in the channel. */
  discountValue: Scalars['Float']['output'];
  /** The ID of the channel listing. */
  id: Scalars['ID']['output'];
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal']['input'];
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: InputMaybe<Array<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage sale's availability in channels.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleCreate` or `promotionRuleUpdate` mutations instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleChannelListingUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated sale instance. */
  sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
  edges: Array<SaleCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Sale;
};

/**
 * Creates a new sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionCreate` mutation instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_CREATED (async): A sale was created.
 */
export type SaleCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionCreated` event instead.
 */
export type SaleCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The sale the event relates to. */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionCreated` event instead.
 */
export type SaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionDelete` mutation instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_DELETED (async): A sale was deleted.
 */
export type SaleDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionDeleted` event instead.
 */
export type SaleDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The sale the event relates to. */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionDeleted` event instead.
 */
export type SaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type SaleFilterInput = {
  metadata?: InputMaybe<Array<MetadataFilter>>;
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fixed or percentage. */
  type?: InputMaybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionRuleUpdate` or `promotionRuleDelete` mutations instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 */
export type SaleRemoveCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
};

export type SaleSortField =
  /** Sort sales by created at. */
  | 'CREATED_AT'
  /** Sort sales by end date. */
  | 'END_DATE'
  /** Sort sales by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort sales by name. */
  | 'NAME'
  /** Sort sales by start date. */
  | 'START_DATE'
  /** Sort sales by type. */
  | 'TYPE'
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE';

export type SaleSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort sales. */
  direction: OrderDirection;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionStarted` and `PromotionEnded` events instead.
 */
export type SaleToggle = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.5.
   */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionStarted` and `PromotionEnded` events instead.
 */
export type SaleToggleSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Represents sale's original translatable fields and related translations.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `PromotionTranslatableContent` instead.
 */
export type SaleTranslatableContent = Node & {
  /** The ID of the sale translatable content. */
  id: Scalars['ID']['output'];
  /** Name of the sale to translate. */
  name: Scalars['String']['output'];
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale?: Maybe<Sale>;
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
};


/**
 * Represents sale's original translatable fields and related translations.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `PromotionTranslatableContent` instead.
 */
export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `PromotionTranslate` mutation instead.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type SaleTranslate = {
  errors: Array<TranslationError>;
  sale?: Maybe<Sale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

/**
 * Represents sale translations.
 *
 * DEPRECATED: this type will be removed in Saleor 4.0. Use `PromotionTranslation` instead.
 */
export type SaleTranslation = Node & {
  /** The ID of the sale translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated name of sale. */
  name?: Maybe<Scalars['String']['output']>;
};

export type SaleType =
  | 'FIXED'
  | 'PERCENTAGE';

/**
 * Updates a sale.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `promotionUpdate` mutation instead.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 * - SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.
 */
export type SaleUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionUpdated` event instead.
 */
export type SaleUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The sale the event relates to. */
  sale?: Maybe<Sale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 *
 * DEPRECATED: this event will be removed in Saleor 4.0. Use `PromotionUpdated` event instead.
 */
export type SaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<AttributeValue>;
};

/**
 * Sends a notification confirmation.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account confirmation.
 * - ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.
 */
export type SendConfirmationEmail = {
  errors: Array<SendConfirmationEmailError>;
};

export type SendConfirmationEmailError = {
  /** The error code. */
  code: SendConfirmationEmailErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type SendConfirmationEmailErrorCode =
  | 'ACCOUNT_CONFIRMED'
  | 'CONFIRMATION_ALREADY_REQUESTED'
  | 'INVALID'
  | 'MISSING_CHANNEL_SLUG';

export type SeoInput = {
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** SEO title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<AccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type ShippingError = {
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type ShippingErrorCode =
  | 'ALREADY_EXISTS'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LESS_THAN_MIN'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * List shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type ShippingListMethodsForCheckout = Event & {
  /** The checkout the event relates to. */
  checkout?: Maybe<Checkout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<ShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  /** Describes if this shipping method is active and can be selected. */
  active: Scalars['Boolean']['output'];
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** Unique ID of ShippingMethod available for Order. */
  id: Scalars['ID']['output'];
  /** Maximum delivery days for this shipping method. */
  maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Maximum order price for this shipping method. */
  maximumOrderPrice?: Maybe<Money>;
  /**
   * Maximum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  maximumOrderWeight?: Maybe<Weight>;
  /** Message connected to this shipping method. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimum delivery days for this shipping method. */
  minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** Minimal order price for this shipping method. */
  minimumOrderPrice?: Maybe<Money>;
  /**
   * Minimum order weight for this shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String']['output'];
  /** The price of selected shipping method. */
  price: Money;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /**
   * Type of the shipping method.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  /** The channel associated with the shipping method channel listing. */
  channel: Channel;
  /** The ID of shipping method channel listing. */
  id: Scalars['ID']['output'];
  /** Maximum order price. */
  maximumOrderPrice?: Maybe<Money>;
  /** Minimum order price. */
  minimumOrderPrice?: Maybe<Money>;
  /** Price of the shipping method in the associated channel. */
  price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Shipping price of the shipping method in this channel. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: InputMaybe<Array<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingMethodChannelListingUpdate = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  /** End address range. */
  end?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Inclusion type of the postal code rule. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
  /** Start address range. */
  start?: Maybe<Scalars['String']['output']>;
};

/** Represents shipping method's original translatable fields and related translations. */
export type ShippingMethodTranslatableContent = Node & {
  /**
   * Shipping method description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the shipping method translatable content. */
  id: Scalars['ID']['output'];
  /** Shipping method name to translate. */
  name: Scalars['String']['output'];
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
};


/** Represents shipping method's original translatable fields and related translations. */
export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents shipping method translations. */
export type ShippingMethodTranslation = Node & {
  /**
   * Translated description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the shipping method translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated shipping method name. */
  name: Scalars['String']['output'];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node & ObjectWithMetadata & {
  /**
   * List of channels available for the method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
  /**
   * Shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars['JSONString']['output']>;
  /**
   * List of excluded products for the shipping method.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  excludedProducts?: Maybe<ProductCountableConnection>;
  /** Shipping method ID. */
  id: Scalars['ID']['output'];
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  maximumOrderPrice?: Maybe<Money>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']['output']>;
  /** The price of the cheapest variant (including discounts). */
  minimumOrderPrice?: Maybe<Money>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Weight>;
  /** Shipping method name. */
  name: Scalars['String']['output'];
  /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
  postalCodeRules?: Maybe<Array<ShippingMethodPostalCodeRule>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Tax class assigned to this shipping method.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<TaxClass>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /** Type of the shipping method. */
  type?: Maybe<ShippingMethodTypeEnum>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export type ShippingMethodTypeEnum =
  | 'PRICE'
  | 'WEIGHT';

/**
 * List of shipping methods available for the country.
 *
 * Added in Saleor 3.6.
 */
export type ShippingMethodsPerCountry = {
  /** The country code. */
  countryCode: CountryCode;
  /** List of available shipping methods. */
  shippingMethods?: Maybe<Array<ShippingMethod>>;
};

export type ShippingPostalCodeRulesCreateInputRange = {
  /** End range of the postal code. */
  end?: InputMaybe<Scalars['String']['input']>;
  /** Start range of the postal code. */
  start: Scalars['String']['input'];
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceCreate = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceDelete = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method to delete. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceExcludeProducts = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Scalars['ID']['input']>;
};

export type ShippingPriceInput = {
  /** Postal code rules to add. */
  addPostalCodeRules?: InputMaybe<Array<ShippingPostalCodeRulesCreateInputRange>>;
  /** Postal code rules to delete. */
  deletePostalCodeRules?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Shipping method description. */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Name of the shipping method. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone this method belongs to. */
  shippingZone?: InputMaybe<Scalars['ID']['input']>;
  /** ID of a tax class to assign to this shipping method. If not provided, the default tax class will be used. */
  taxClass?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping type: price or weight based. */
  type?: InputMaybe<ShippingMethodTypeEnum>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceRemoveProductFromExclude = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethodType>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShippingPriceTranslate = {
  errors: Array<TranslationError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShippingPriceTranslationInput = {
  /**
   * Translated shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceUpdate = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<ShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  /** List of channels for shipping zone. */
  channels: Array<Channel>;
  /** List of countries available for the method. */
  countries: Array<CountryDisplay>;
  /** Indicates if the shipping zone is default one. */
  default: Scalars['Boolean']['output'];
  /** Description of a shipping zone. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of shipping zone. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Shipping zone name. */
  name: Scalars['String']['output'];
  /** Lowest and highest prices for the shipping. */
  priceRange?: Maybe<MoneyRange>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods?: Maybe<Array<ShippingMethodType>>;
  /** List of warehouses for shipping zone. */
  warehouses: Array<Warehouse>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  edges: Array<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShippingZoneCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingZone;
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneCreate = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneDelete = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ShippingZoneMetadataUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneUpdate = {
  errors: Array<ShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<ShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};


/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type ShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = ObjectWithMetadata & {
  /**
   * Determines if user can login without confirmation when `enableAccountConfrimation` is enabled.
   *
   * Added in Saleor 3.15.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  allowLoginWithoutConfirmation?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Enable automatic fulfillment for all digital products.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']['output']>;
  /** List of available external authentications. */
  availableExternalAuthentications: Array<ExternalAuthentication>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<ShippingMethod>>;
  /**
   * List of all currencies supported by shop's channels.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  channelCurrencies: Array<Scalars['String']['output']>;
  /**
   * Charge taxes on shipping.
   * @deprecated This field will be removed in Saleor 4.0. Use `ShippingMethodType.taxClass` to determine whether taxes are calculated for shipping methods; if a tax class is set, the taxes will be calculated, otherwise no tax rate will be applied.
   */
  chargeTaxesOnShipping: Scalars['Boolean']['output'];
  /** Company address. */
  companyAddress?: Maybe<Address>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']['output']>;
  /** Shop's default country. */
  defaultCountry?: Maybe<CountryDisplay>;
  /**
   * Default number of max downloads per digital content URL.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of days which digital content URL will be valid.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']['output']>;
  /**
   * Default shop's email sender's address.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderAddress?: Maybe<Scalars['String']['output']>;
  /**
   * Default shop's email sender's name.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderName?: Maybe<Scalars['String']['output']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Shop's description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Display prices with tax in store.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to determine whether to display gross or net prices.
   */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** Shop's domain data. */
  domain: Domain;
  /**
   * Determines if account confirmation by email is enabled.
   *
   * Added in Saleor 3.14.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  enableAccountConfirmationByEmail?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Allow to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid: Scalars['Boolean']['output'];
  /**
   * Automatically approve all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove: Scalars['Boolean']['output'];
  /** Header text. */
  headerText?: Maybe<Scalars['String']['output']>;
  /** ID of the shop. */
  id: Scalars['ID']['output'];
  /**
   * Include taxes in prices.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration.pricesEnteredWithTax` to determine whether prices are entered with tax.
   */
  includeTaxesInPrices: Scalars['Boolean']['output'];
  /** List of the shops's supported languages. */
  languages: Array<LanguageDisplay>;
  /**
   * Default number of maximum line quantity in single checkout (per single checkout line).
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  limitQuantityPerCheckout?: Maybe<Scalars['Int']['output']>;
  /**
   * Resource limitations and current usage if any set for a shop
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  limits: LimitInfo;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Shop's name. */
  name: Scalars['String']['output'];
  /** List of available permissions. */
  permissions: Array<Permission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars['String']['output']>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']['output']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']['output']>;
  /**
   * Minor Saleor API version.
   *
   * Added in Saleor 3.5.
   */
  schemaVersion: Scalars['String']['output'];
  /**
   * List of staff notification recipients.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipients?: Maybe<Array<StaffNotificationRecipient>>;
  /** This field is used as a default value for `ProductVariant.trackInventory`. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<ShopTranslation>;
  /**
   * Saleor API version.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  version: Scalars['String']['output'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<AddressInput>;
  channel: Scalars['String']['input'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopAddressUpdate = {
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `PUBLIC_URL` environment variable instead.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopDomainUpdate = {
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  /** The error code. */
  code: ShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ShopErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_FETCH_TAX_RATES'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopFetchTaxRates = {
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

/**
 * Event sent when shop metadata is updated.
 *
 * Added in Saleor 3.15.
 */
export type ShopMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type ShopSettingsInput = {
  /**
   * Enable possibility to login without account confirmation.
   *
   * Added in Saleor 3.15.
   */
  allowLoginWithoutConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Charge taxes on shipping.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. To enable taxes for a shipping method, assign a tax class to the shipping method with `shippingPriceCreate` or `shippingPriceUpdate` mutations.
   */
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: InputMaybe<Scalars['String']['input']>;
  /** Default email sender's name. */
  defaultMailSenderName?: InputMaybe<Scalars['String']['input']>;
  /** Default weight unit. */
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Display prices with tax in store.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable automatic account confirmation by email.
   *
   * Added in Saleor 3.14.
   */
  enableAccountConfirmationByEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable ability to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Enable automatic approval of all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** Header text. */
  headerText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Include taxes in prices.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
   *
   * Added in Saleor 3.1.
   */
  limitQuantityPerCheckout?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Shop public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Shop private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']['input']>;
  /** This field is used as a default value for `ProductVariant.trackInventory`. */
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShopSettingsTranslate = {
  errors: Array<TranslationError>;
  /** Updated shop settings. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 *
 * Triggers the following webhook events:
 * - SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
 */
export type ShopSettingsUpdate = {
  errors: Array<ShopError>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
};

/** Represents shop translations. */
export type ShopTranslation = Node & {
  /** Translated description of sale. */
  description: Scalars['String']['output'];
  /** Translated header text of sale. */
  headerText: Scalars['String']['output'];
  /** The ID of the shop translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: InputMaybe<Scalars['String']['input']>;
  /** Shop site name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes staff users. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_DELETED (async): A staff account was deleted.
 */
export type StaffBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
};

/**
 * Creates a new staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_CREATED (async): A new staff account was created.
 * - NOTIFY_USER (async): A notification for setting the password.
 * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
 */
export type StaffCreate = {
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

/** Fields required to create a staff user. */
export type StaffCreateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new staff user is created.
 *
 * Added in Saleor 3.5.
 */
export type StaffCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Deletes a staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_DELETED (async): A staff account was deleted.
 */
export type StaffDelete = {
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

/**
 * Event sent when staff user is deleted.
 *
 * Added in Saleor 3.5.
 */
export type StaffDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type StaffError = {
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>;
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

/** Represents status of a staff account. */
export type StaffMemberStatus =
  /** User account has been activated. */
  | 'ACTIVE'
  /** User account has not been activated yet. */
  | 'DEACTIVATED';

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of the staff notification recipient. */
  id: Scalars['ID']['output'];
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<User>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientCreate = {
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientDelete = {
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** Determines if a notification active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email address of a user subscribed to email notifications. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user subscribed to email notifications.. */
  user?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientUpdate = {
  errors: Array<ShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Event sent when setting a new password for staff is requested.
 *
 * Added in Saleor 3.15.
 */
export type StaffSetPasswordRequested = Event & {
  /** The channel data. */
  channel?: Maybe<Channel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars['String']['output']>;
  /** Shop data. */
  shop?: Maybe<Shop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars['String']['output']>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Updates an existing staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_UPDATED (async): A staff account was updated.
 */
export type StaffUpdate = {
  errors: Array<StaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

/** Fields required to update a staff user. */
export type StaffUpdateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Event sent when staff user is updated.
 *
 * Added in Saleor 3.5.
 */
export type StaffUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user the event relates to. */
  user?: Maybe<User>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type StaffUserInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StaffMemberStatus>;
};

/** Represents stock. */
export type Stock = Node & {
  /** The ID of stock. */
  id: Scalars['ID']['output'];
  /** Information about the product variant. */
  productVariant: ProductVariant;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars['Int']['output'];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityAllocated: Scalars['Int']['output'];
  /**
   * Quantity reserved for checkouts.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityReserved: Scalars['Int']['output'];
  /** The warehouse associated with the stock. */
  warehouse: Warehouse;
};

export type StockAvailability =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

export type StockBulkResult = {
  /** List of errors occurred on create or update attempt. */
  errors?: Maybe<Array<StockBulkUpdateError>>;
  /** Stock data. */
  stock?: Maybe<Stock>;
};

/**
 * Updates stocks for a given variant and warehouse.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 *
 * Triggers the following webhook events:
 * - PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock details were updated.
 */
export type StockBulkUpdate = {
  /** Returns how many objects were updated. */
  count: Scalars['Int']['output'];
  errors: Array<StockBulkUpdateError>;
  /** List of the updated stocks. */
  results: Array<StockBulkResult>;
};

export type StockBulkUpdateError = {
  /** The error code. */
  code: StockBulkUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type StockBulkUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type StockBulkUpdateInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars['Int']['input'];
  /** Variant external reference. */
  variantExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** Variant ID. */
  variantId?: InputMaybe<Scalars['ID']['input']>;
  /** Warehouse external reference. */
  warehouseExternalReference?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse ID. */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type StockCountableConnection = {
  edges: Array<StockCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StockCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Stock;
};

export type StockError = {
  /** The error code. */
  code: StockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type StockErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type StockFilterInput = {
  quantity?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type StockInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars['Int']['input'];
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID']['input'];
};

/**
 * Represents the channel stock settings.
 *
 * Added in Saleor 3.7.
 */
export type StockSettings = {
  /** Allocation strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: AllocationStrategyEnum;
};

export type StockSettingsInput = {
  /** Allocation strategy options. Strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: AllocationStrategyEnum;
};

export type StockUpdateInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars['Int']['input'];
  /** Stock. */
  stock: Scalars['ID']['input'];
};

/**
 * Determine how stocks should be updated, while processing an order.
 *
 *     SKIP - stocks are not checked and not updated.
 *     UPDATE - only do update, if there is enough stock.
 *     FORCE - force update, if there is not enough stock.
 *
 */
export type StockUpdatePolicyEnum =
  | 'FORCE'
  | 'SKIP'
  | 'UPDATE';

/** Enum representing the type of a payment storage in a gateway. */
export type StorePaymentMethodEnum =
  /** Storage is disabled. The payment is not stored. */
  | 'NONE'
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  | 'OFF_SESSION'
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  | 'ON_SESSION';

/**
 * Represents a payment method stored for user (tokenized) in payment gateway.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type StoredPaymentMethod = {
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>;
  /** JSON data returned by Payment Provider app for this payment method. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Payment gateway that stores this payment method. */
  gateway: PaymentGateway;
  /** Stored payment method ID. */
  id: Scalars['ID']['output'];
  /** Payment method name. Example: last 4 digits of credit card, obfuscated email, etc. */
  name?: Maybe<Scalars['String']['output']>;
  /** ID of stored payment method used to make payment actions. Note: method ID is unique only within the payment gateway. */
  paymentMethodId: Scalars['String']['output'];
  supportedPaymentFlows?: Maybe<Array<TokenizedPaymentFlowEnum>>;
  /** Type of the payment method. Example: credit card, wallet, etc. */
  type: Scalars['String']['output'];
};

/**
 * Event sent when user requests to delete a payment method.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type StoredPaymentMethodDeleteRequested = Event & {
  /** Channel related to the requested delete action. */
  channel: Channel;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The ID of the payment method that should be deleted by the payment gateway. */
  paymentMethodId: Scalars['String']['output'];
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The user for which the app should proceed with payment method delete request. */
  user: User;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Request to delete a stored payment method on payment provider side.
 *
 * Added in Saleor 3.16.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - STORED_PAYMENT_METHOD_DELETE_REQUESTED (sync): The customer requested to delete a payment method.
 */
export type StoredPaymentMethodRequestDelete = {
  errors: Array<PaymentMethodRequestDeleteError>;
  /** The result of deleting a stored payment method. */
  result: StoredPaymentMethodRequestDeleteResult;
};

/** An enumeration. */
export type StoredPaymentMethodRequestDeleteErrorCode =
  | 'CHANNEL_INACTIVE'
  | 'GATEWAY_ERROR'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Result of deleting a stored payment method.
 *
 *     This enum is used to determine the result of deleting a stored payment method.
 *     SUCCESSFULLY_DELETED - The stored payment method was successfully deleted.
 *     FAILED_TO_DELETE - The stored payment method was not deleted.
 *     FAILED_TO_DELIVER - The request to delete the stored payment method was not
 *     delivered.
 *
 */
export type StoredPaymentMethodRequestDeleteResult =
  | 'FAILED_TO_DELETE'
  | 'FAILED_TO_DELIVER'
  | 'SUCCESSFULLY_DELETED';

/**
 * Define the filtering options for string fields.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type StringFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Subscription = {
  /**
   * Look up subscription event.
   *
   * Added in Saleor 3.2.
   */
  event?: Maybe<Event>;
};

export type TaxCalculationStrategy =
  | 'FLAT_RATES'
  | 'TAX_APP';

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClass = Node & ObjectWithMetadata & {
  /** Country-specific tax rates for this tax class. */
  countries: Array<TaxClassCountryRate>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Name of the tax class. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TaxClassCountableConnection = {
  edges: Array<TaxClassCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaxClassCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TaxClass;
};

/**
 * Tax rate for a country. When tax class is null, it represents the default tax rate for that country; otherwise it's a country tax rate specific to the given tax class.
 *
 * Added in Saleor 3.9.
 */
export type TaxClassCountryRate = {
  /** Country in which this tax rate applies. */
  country: CountryDisplay;
  /** Tax rate value. */
  rate: Scalars['Float']['output'];
  /** Related tax class. */
  taxClass?: Maybe<TaxClass>;
};

/**
 * Create a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassCreate = {
  errors: Array<TaxClassCreateError>;
  taxClass?: Maybe<TaxClass>;
};

export type TaxClassCreateError = {
  /** The error code. */
  code: TaxClassCreateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxClassCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassCreateInput = {
  /** List of country-specific tax rates to create for this tax class. */
  createCountryRates?: InputMaybe<Array<CountryRateInput>>;
  /** Name of the tax class. */
  name: Scalars['String']['input'];
};

/**
 * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassDelete = {
  errors: Array<TaxClassDeleteError>;
  taxClass?: Maybe<TaxClass>;
};

export type TaxClassDeleteError = {
  /** The error code. */
  code: TaxClassDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxClassDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassFilterInput = {
  countries?: InputMaybe<Array<CountryCode>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
};

export type TaxClassRateInput = {
  /** Tax rate value. */
  rate?: InputMaybe<Scalars['Float']['input']>;
  /** ID of a tax class for which to update the tax rate */
  taxClassId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaxClassSortField =
  /** Sort tax classes by name. */
  | 'NAME';

export type TaxClassSortingInput = {
  /** Specifies the direction in which to sort tax classes. */
  direction: OrderDirection;
  /** Sort tax classes by the selected field. */
  field: TaxClassSortField;
};

/**
 * Update a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxClassUpdate = {
  errors: Array<TaxClassUpdateError>;
  taxClass?: Maybe<TaxClass>;
};

export type TaxClassUpdateError = {
  /** The error code. */
  code: TaxClassUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxClassUpdateErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxClassUpdateInput = {
  /** Name of the tax class. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of country codes for which to remove the tax class rates. Note: It removes all rates for given country code. */
  removeCountryRates?: InputMaybe<Array<CountryCode>>;
  /** List of country-specific tax rates to create or update for this tax class. */
  updateCountryRates?: InputMaybe<Array<CountryRateUpdateInput>>;
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfiguration = Node & ObjectWithMetadata & {
  /** A channel to which the tax configuration applies to. */
  channel: Channel;
  /** Determines whether taxes are charged in the given channel. */
  chargeTaxes: Scalars['Boolean']['output'];
  /** List of country-specific exceptions in tax configuration. */
  countries: Array<TaxConfigurationPerCountry>;
  /** Determines whether displayed prices should include taxes. */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Determines whether prices are entered with the tax included. */
  pricesEnteredWithTax: Scalars['Boolean']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TaxConfigurationCountableConnection = {
  edges: Array<TaxConfigurationCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaxConfigurationCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TaxConfiguration;
};

export type TaxConfigurationFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
};

/**
 * Country-specific exceptions of a channel's tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type TaxConfigurationPerCountry = {
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars['Boolean']['output'];
  /** Country in which this configuration applies. */
  country: CountryDisplay;
  /** Determines whether displayed prices should include taxes for this country. */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy?: Maybe<TaxCalculationStrategy>;
};

export type TaxConfigurationPerCountryInput = {
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars['Boolean']['input'];
  /** Country in which this configuration applies. */
  countryCode: CountryCode;
  /** Determines whether displayed prices should include taxes for this country. */
  displayGrossPrices: Scalars['Boolean']['input'];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy?: InputMaybe<TaxCalculationStrategy>;
};

/**
 * Update tax configuration for a channel.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxConfigurationUpdate = {
  errors: Array<TaxConfigurationUpdateError>;
  taxConfiguration?: Maybe<TaxConfiguration>;
};

export type TaxConfigurationUpdateError = {
  /** The error code. */
  code: TaxConfigurationUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxConfigurationUpdateErrorCode =
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type TaxConfigurationUpdateInput = {
  /** Determines whether taxes are charged in the given channel. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines whether displayed prices should include taxes. */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines whether prices are entered with the tax included. */
  pricesEnteredWithTax?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of country codes for which to remove the tax configuration. */
  removeCountriesConfiguration?: InputMaybe<Array<CountryCode>>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  taxCalculationStrategy?: InputMaybe<TaxCalculationStrategy>;
  /** List of tax country configurations to create or update (identified by a country code). */
  updateCountriesConfiguration?: InputMaybe<Array<TaxConfigurationPerCountryInput>>;
};

/**
 * Tax class rates grouped by country.
 *
 * Added in Saleor 3.9.
 */
export type TaxCountryConfiguration = {
  /** A country for which tax class rates are grouped. */
  country: CountryDisplay;
  /** List of tax class rates. */
  taxClassCountryRates: Array<TaxClassCountryRate>;
};

/**
 * Remove all tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationDelete = {
  errors: Array<TaxCountryConfigurationDeleteError>;
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
};

export type TaxCountryConfigurationDeleteError = {
  /** The error code. */
  code: TaxCountryConfigurationDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxCountryConfigurationDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Update tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxCountryConfigurationUpdate = {
  errors: Array<TaxCountryConfigurationUpdateError>;
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration?: Maybe<TaxCountryConfiguration>;
};

export type TaxCountryConfigurationUpdateError = {
  /** The error code. */
  code: TaxCountryConfigurationUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of tax class IDs for which the update failed. */
  taxClassIds: Array<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxCountryConfigurationUpdateErrorCode =
  | 'CANNOT_CREATE_NEGATIVE_RATE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'ONLY_ONE_DEFAULT_COUNTRY_RATE_ALLOWED';

/**
 * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
 *
 * Added in Saleor 3.8.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type TaxExemptionManage = {
  errors: Array<TaxExemptionManageError>;
  taxableObject?: Maybe<TaxSourceObject>;
};

export type TaxExemptionManageError = {
  /** The error code. */
  code: TaxExemptionManageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TaxExemptionManageErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_EDITABLE_ORDER'
  | 'NOT_FOUND';

export type TaxSourceLine = CheckoutLine | OrderLine;

export type TaxSourceObject = Checkout | Order;

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  /** Description of the tax type. */
  description?: Maybe<Scalars['String']['output']>;
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars['String']['output']>;
};

/** Taxable object. */
export type TaxableObject = {
  /** The address data. */
  address?: Maybe<Address>;
  channel: Channel;
  /** The currency of the object. */
  currency: Scalars['String']['output'];
  /** List of discounts. */
  discounts: Array<TaxableObjectDiscount>;
  /** List of lines assigned to the object. */
  lines: Array<TaxableObjectLine>;
  /** Determines if prices contain entered tax.. */
  pricesEnteredWithTax: Scalars['Boolean']['output'];
  /** The price of shipping method. */
  shippingPrice: Money;
  /** The source object related to this tax object. */
  sourceObject: TaxSourceObject;
};

/** Taxable object discount. */
export type TaxableObjectDiscount = {
  /** The amount of the discount. */
  amount: Money;
  /** The name of the discount. */
  name?: Maybe<Scalars['String']['output']>;
};

export type TaxableObjectLine = {
  /** Determines if taxes are being charged for the product. */
  chargeTaxes: Scalars['Boolean']['output'];
  /** The product name. */
  productName: Scalars['String']['output'];
  /** The product sku. */
  productSku?: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  quantity: Scalars['Int']['output'];
  /** The source line related to this tax line. */
  sourceLine: TaxSourceLine;
  /** Price of the order line. */
  totalPrice: Money;
  /** Price of the single item in the order line. */
  unitPrice: Money;
  /** The variant name. */
  variantName: Scalars['String']['output'];
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  /** Currency code. */
  currency: Scalars['String']['output'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

export type TaxedMoneyInput = {
  /** Gross value of an item. */
  gross: Scalars['PositiveDecimal']['input'];
  /** Net value of an item. */
  net: Scalars['PositiveDecimal']['input'];
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  /** Lower bound of a price range. */
  start?: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<TaxedMoney>;
};

/**
 * Event sent when thumbnail is created.
 *
 * Added in Saleor 3.12.
 */
export type ThumbnailCreated = Event & {
  /**
   * Thumbnail id.
   *
   * Added in Saleor 3.12.
   */
  id?: Maybe<Scalars['ID']['output']>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /**
   * Original media url.
   *
   * Added in Saleor 3.12.
   */
  mediaUrl?: Maybe<Scalars['String']['output']>;
  /**
   * Object the thumbnail refers to.
   *
   * Added in Saleor 3.12.
   */
  objectId?: Maybe<Scalars['ID']['output']>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /**
   * Thumbnail url.
   *
   * Added in Saleor 3.12.
   */
  url?: Maybe<Scalars['String']['output']>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type ThumbnailFormatEnum =
  | 'AVIF'
  | 'ORIGINAL'
  | 'WEBP';

export type TimePeriod = {
  /** The length of the period. */
  amount: Scalars['Int']['output'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars['Int']['input'];
  /** The type of the period. */
  type: TimePeriodTypeEnum;
};

/** An enumeration. */
export type TimePeriodTypeEnum =
  | 'DAY'
  | 'MONTH'
  | 'WEEK'
  | 'YEAR';

/**
 * Represents possible tokenized payment flows that can be used to process payment.
 *
 *     The following flows are possible:
 *     INTERACTIVE - Payment method can be used for 1 click checkout - it's prefilled in
 *     checkout form (might require additional authentication from user)
 *
 */
export type TokenizedPaymentFlowEnum =
  | 'INTERACTIVE';

/** An object representing a single payment. */
export type Transaction = Node & {
  /** Total amount of the transaction. */
  amount?: Maybe<Money>;
  /** Date and time at which transaction was created. */
  created: Scalars['DateTime']['output'];
  /** Error associated with transaction, if any. */
  error?: Maybe<Scalars['String']['output']>;
  /** Response returned by payment gateway. */
  gatewayResponse: Scalars['JSONString']['output'];
  /** ID of the transaction. */
  id: Scalars['ID']['output'];
  /** Determines if the transaction was successful. */
  isSuccess: Scalars['Boolean']['output'];
  /** Determines the type of transaction. */
  kind: TransactionKind;
  /** Determines the payment associated with a transaction. */
  payment: Payment;
  /** Unique token associated with a transaction. */
  token: Scalars['String']['output'];
};

export type TransactionAction = {
  /** Determines the action type. */
  actionType: TransactionActionEnum;
  /** Transaction request amount. Null when action type is VOID. */
  amount?: Maybe<Scalars['PositiveDecimal']['output']>;
  /**
   * Currency code.
   *
   * Added in Saleor 3.16.
   */
  currency: Scalars['String']['output'];
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     CANCEL - Represents a cancel action. Added in Saleor 3.12.
 *
 */
export type TransactionActionEnum =
  | 'CANCEL'
  | 'CHARGE'
  | 'REFUND';

/**
 * Event sent when transaction cancelation is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionCancelationRequested = Event & {
  /** Requested action data. */
  action: TransactionAction;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Look up a transaction. */
  transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when transaction charge is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionChargeRequested = Event & {
  /** Requested action data. */
  action: TransactionAction;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Look up a transaction. */
  transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Create transaction for checkout or order.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionCreate = {
  errors: Array<TransactionCreateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionCreateError = {
  /** The error code. */
  code: TransactionCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionCreateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_CURRENCY'
  | 'INVALID'
  | 'METADATA_KEY_REQUIRED'
  | 'NOT_FOUND'
  | 'UNIQUE';

export type TransactionCreateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars['String']['input']>;
};

/** Represents transaction's event. */
export type TransactionEvent = Node & {
  /**
   * The amount related to this event.
   *
   * Added in Saleor 3.13.
   */
  amount: Money;
  /** Date and time at which a transaction event was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * User or App that created the transaction event.
   *
   * Added in Saleor 3.13.
   */
  createdBy?: Maybe<UserOrApp>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /**
   * Idempotency key assigned to the event.
   *
   * Added in Saleor 3.14.
   */
  idempotencyKey?: Maybe<Scalars['String']['output']>;
  /**
   * Message related to the transaction's event.
   *
   * Added in Saleor 3.13.
   */
  message: Scalars['String']['output'];
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference: Scalars['String']['output'];
  /**
   * The type of action related to this event.
   *
   * Added in Saleor 3.13.
   */
  type?: Maybe<TransactionEventTypeEnum>;
};

export type TransactionEventInput = {
  /**
   * The message related to the event.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars['String']['input']>;
  /**
   * PSP Reference related to this action.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Report the event for the transaction.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type TransactionEventReport = {
  /** Defines if the reported event hasn't been processed earlier. */
  alreadyProcessed?: Maybe<Scalars['Boolean']['output']>;
  errors: Array<TransactionEventReportError>;
  /** The transaction related to the reported event. */
  transaction?: Maybe<TransactionItem>;
  /** The event assigned to this report. if `alreadyProcessed` is set to `true`, the previously processed event will be returned. */
  transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionEventReportError = {
  /** The error code. */
  code: TransactionEventReportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionEventReportErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_DETAILS'
  | 'INVALID'
  | 'NOT_FOUND';

/**
 * Represents possible event types.
 *
 *     Added in Saleor 3.12.
 *
 *     The following types are possible:
 *     AUTHORIZATION_SUCCESS - represents success authorization.
 *     AUTHORIZATION_FAILURE - represents failure authorization.
 *     AUTHORIZATION_ADJUSTMENT - represents authorization adjustment.
 *     AUTHORIZATION_REQUEST - represents authorization request.
 *     AUTHORIZATION_ACTION_REQUIRED - represents authorization that needs
 *     additional actions from the customer.
 *     CHARGE_ACTION_REQUIRED - represents charge that needs
 *     additional actions from the customer.
 *     CHARGE_SUCCESS - represents success charge.
 *     CHARGE_FAILURE - represents failure charge.
 *     CHARGE_BACK - represents chargeback.
 *     CHARGE_REQUEST - represents charge request.
 *     REFUND_SUCCESS - represents success refund.
 *     REFUND_FAILURE - represents failure refund.
 *     REFUND_REVERSE - represents reverse refund.
 *     REFUND_REQUEST - represents refund request.
 *     CANCEL_SUCCESS - represents success cancel.
 *     CANCEL_FAILURE - represents failure cancel.
 *     CANCEL_REQUEST - represents cancel request.
 *     INFO - represents info event.
 *
 */
export type TransactionEventTypeEnum =
  | 'AUTHORIZATION_ACTION_REQUIRED'
  | 'AUTHORIZATION_ADJUSTMENT'
  | 'AUTHORIZATION_FAILURE'
  | 'AUTHORIZATION_REQUEST'
  | 'AUTHORIZATION_SUCCESS'
  | 'CANCEL_FAILURE'
  | 'CANCEL_REQUEST'
  | 'CANCEL_SUCCESS'
  | 'CHARGE_ACTION_REQUIRED'
  | 'CHARGE_BACK'
  | 'CHARGE_FAILURE'
  | 'CHARGE_REQUEST'
  | 'CHARGE_SUCCESS'
  | 'INFO'
  | 'REFUND_FAILURE'
  | 'REFUND_REQUEST'
  | 'REFUND_REVERSE'
  | 'REFUND_SUCCESS';

/**
 * Determine the transaction flow strategy.
 *
 *     AUTHORIZATION - the processed transaction should be only authorized
 *     CHARGE - the processed transaction should be charged.
 *
 */
export type TransactionFlowStrategyEnum =
  | 'AUTHORIZATION'
  | 'CHARGE';

/**
 * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitialize = {
  /** The JSON data required to finalize the payment. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors: Array<TransactionInitializeError>;
  /** The initialized transaction. */
  transaction?: Maybe<TransactionItem>;
  /** The event created for the initialized transaction. */
  transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionInitializeError = {
  /** The error code. */
  code: TransactionInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionInitializeErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'UNIQUE';

/**
 * Event sent when user starts processing the payment.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionInitializeSession = Event & {
  /** Action to proceed for the transaction */
  action: TransactionProcessAction;
  /**
   * The customer's IP address. If not provided as a parameter in the mutation, Saleor will try to determine the customer's IP address on its own.
   *
   * Added in Saleor 3.16.
   */
  customerIpAddress?: Maybe<Scalars['String']['output']>;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /**
   * Idempotency key assigned to the transaction initialize.
   *
   * Added in Saleor 3.14.
   */
  idempotencyKey: Scalars['String']['output'];
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars['String']['output'];
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Look up a transaction. */
  transaction: TransactionItem;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItem = Node & ObjectWithMetadata & {
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<TransactionActionEnum>;
  /**
   * Total amount of ongoing authorization requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  authorizePendingAmount: Money;
  /** Total amount authorized for this payment. */
  authorizedAmount: Money;
  /**
   * Total amount of ongoing cancel requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  cancelPendingAmount: Money;
  /**
   * Total amount canceled for this payment.
   *
   * Added in Saleor 3.13.
   */
  canceledAmount: Money;
  /**
   * Total amount of ongoing charge requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  chargePendingAmount: Money;
  /** Total amount charged for this payment. */
  chargedAmount: Money;
  /**
   * The related checkout.
   *
   * Added in Saleor 3.14.
   */
  checkout?: Maybe<Checkout>;
  /** Date and time at which payment transaction was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * User or App that created the transaction.
   *
   * Added in Saleor 3.13.
   */
  createdBy?: Maybe<UserOrApp>;
  /** List of all transaction's events. */
  events: Array<TransactionEvent>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /**
   * Message related to the transaction.
   *
   * Added in Saleor 3.13.
   */
  message: Scalars['String']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Date and time at which payment transaction was modified. */
  modifiedAt: Scalars['DateTime']['output'];
  /**
   * Name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name: Scalars['String']['output'];
  /**
   * The related order.
   *
   * Added in Saleor 3.6.
   */
  order?: Maybe<Order>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference: Scalars['String']['output'];
  /**
   * Total amount of ongoing refund requests for the transaction.
   *
   * Added in Saleor 3.13.
   */
  refundPendingAmount: Money;
  /** Total amount refunded for this payment. */
  refundedAmount: Money;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Event sent when transaction item metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type TransactionItemMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Look up a transaction. */
  transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionKind =
  | 'ACTION_TO_CONFIRM'
  | 'AUTH'
  | 'CANCEL'
  | 'CAPTURE'
  | 'CONFIRM'
  | 'EXTERNAL'
  | 'PENDING'
  | 'REFUND'
  | 'REFUND_ONGOING'
  | 'VOID';

/**
 * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcess = {
  /** The json data required to finalize the payment. */
  data?: Maybe<Scalars['JSON']['output']>;
  errors: Array<TransactionProcessError>;
  /** The processed transaction. */
  transaction?: Maybe<TransactionItem>;
  /** The event created for the processed transaction. */
  transactionEvent?: Maybe<TransactionEvent>;
};

export type TransactionProcessAction = {
  actionType: TransactionFlowStrategyEnum;
  /** Transaction amount to process. */
  amount: Scalars['PositiveDecimal']['output'];
  /** Currency of the amount. */
  currency: Scalars['String']['output'];
};

export type TransactionProcessError = {
  /** The error code. */
  code: TransactionProcessErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionProcessErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MISSING_PAYMENT_APP'
  | 'MISSING_PAYMENT_APP_RELATION'
  | 'NOT_FOUND'
  | 'TRANSACTION_ALREADY_PROCESSED';

/**
 * Event sent when user has additional payment action to process.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionProcessSession = Event & {
  /** Action to proceed for the transaction */
  action: TransactionProcessAction;
  /**
   * The customer's IP address. If not provided as a parameter in the mutation, Saleor will try to determine the customer's IP address on its own.
   *
   * Added in Saleor 3.16.
   */
  customerIpAddress?: Maybe<Scalars['String']['output']>;
  /** Payment gateway data in JSON format, received from storefront. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars['String']['output'];
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Checkout or order */
  sourceObject: OrderOrCheckout;
  /** Look up a transaction. */
  transaction: TransactionItem;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Event sent when transaction refund is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionRefundRequested = Event & {
  /** Requested action data. */
  action: TransactionAction;
  /**
   * Granted refund related to refund request.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantedRefund?: Maybe<OrderGrantedRefund>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Look up a transaction. */
  transaction?: Maybe<TransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionRequestAction = {
  errors: Array<TransactionRequestActionError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestActionError = {
  /** The error code. */
  code: TransactionRequestActionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionRequestActionErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK'
  | 'NOT_FOUND';

/**
 * Request a refund for payment transaction based on granted refund.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type TransactionRequestRefundForGrantedRefund = {
  errors: Array<TransactionRequestRefundForGrantedRefundError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestRefundForGrantedRefundError = {
  /** The error code. */
  code: TransactionRequestRefundForGrantedRefundErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionRequestRefundForGrantedRefundErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK'
  | 'NOT_FOUND';

/**
 * Update transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type TransactionUpdate = {
  errors: Array<TransactionUpdateError>;
  transaction?: Maybe<TransactionItem>;
};

export type TransactionUpdateError = {
  /** The error code. */
  code: TransactionUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TransactionUpdateErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INCORRECT_CURRENCY'
  | 'INVALID'
  | 'METADATA_KEY_REQUIRED'
  | 'NOT_FOUND'
  | 'UNIQUE';

export type TransactionUpdateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<MoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: InputMaybe<MoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<MoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<MoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<TransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars['String']['input']>;
};

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | PromotionRuleTranslatableContent | PromotionTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  edges: Array<TranslatableItemEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TranslatableItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TranslatableItem;
};

export type TranslatableKinds =
  | 'ATTRIBUTE'
  | 'ATTRIBUTE_VALUE'
  | 'CATEGORY'
  | 'COLLECTION'
  | 'MENU_ITEM'
  | 'PAGE'
  | 'PRODUCT'
  | 'PROMOTION'
  | 'PROMOTION_RULE'
  | 'SALE'
  | 'SHIPPING_METHOD'
  | 'VARIANT'
  | 'VOUCHER';

/**
 * Event sent when new translation is created.
 *
 * Added in Saleor 3.2.
 */
export type TranslationCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The translation the event relates to. */
  translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type TranslationError = {
  /** The error code. */
  code: TranslationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type TranslationErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type TranslationInput = {
  /**
   * Translated description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
};

export type TranslationTypes = AttributeTranslation | AttributeValueTranslation | CategoryTranslation | CollectionTranslation | MenuItemTranslation | PageTranslation | ProductTranslation | ProductVariantTranslation | PromotionRuleTranslation | PromotionTranslation | SaleTranslation | ShippingMethodTranslation | VoucherTranslation;

/**
 * Event sent when translation is updated.
 *
 * Added in Saleor 3.2.
 */
export type TranslationUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** The translation the event relates to. */
  translation?: Maybe<TranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type UpdateInvoiceInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Invoice number */
  number?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of an invoice to download. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
  errors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>;
};

export type UploadError = {
  /** The error code. */
  code: UploadErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type UploadErrorCode =
  | 'GRAPHQL_ERROR';

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  /**
   * List of channels the user has access to. The sum of channels from all user groups. If at least one group has `restrictedAccessToChannels` set to False - all channels are returned.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  accessibleChannels?: Maybe<Array<Channel>>;
  /** List of all user's addresses. */
  addresses: Array<Address>;
  /** The avatar of the user. */
  avatar?: Maybe<Image>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
   */
  checkout?: Maybe<Checkout>;
  /** Returns the checkout ID's assigned to this user. */
  checkoutIds?: Maybe<Array<Scalars['ID']['output']>>;
  /**
   * Returns the checkout UUID's assigned to this user.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
   */
  checkoutTokens?: Maybe<Array<Scalars['UUID']['output']>>;
  /**
   * Returns checkouts assigned to this user.
   *
   * Added in Saleor 3.8.
   */
  checkouts?: Maybe<CheckoutCountableConnection>;
  /** The data when the user create account. */
  dateJoined: Scalars['DateTime']['output'];
  /** The default billing address of the user. */
  defaultBillingAddress?: Maybe<Address>;
  /** The default shipping address of the user. */
  defaultShippingAddress?: Maybe<Address>;
  /** List of user's permission groups which user can manage. */
  editableGroups?: Maybe<Array<Group>>;
  /** The email address of the user. */
  email: Scalars['String']['output'];
  /**
   * List of events associated with the user.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  events?: Maybe<Array<CustomerEvent>>;
  /**
   * External ID of this user.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** The given name of the address. */
  firstName: Scalars['String']['output'];
  /** List of the user gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /** The ID of the user. */
  id: Scalars['ID']['output'];
  /** Determine if the user is active. */
  isActive: Scalars['Boolean']['output'];
  /**
   * Determines if user has confirmed email.
   *
   * Added in Saleor 3.15.
   */
  isConfirmed: Scalars['Boolean']['output'];
  /** Determine if the user is a staff admin. */
  isStaff: Scalars['Boolean']['output'];
  /** User language code. */
  languageCode: LanguageCodeEnum;
  /** The date when the user last time log in to the system. */
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  /** The family name of the address. */
  lastName: Scalars['String']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * A note about the customer.
   *
   * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
   */
  note?: Maybe<Scalars['String']['output']>;
  /** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
  orders?: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  permissionGroups?: Maybe<Array<Group>>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * Determine if user have restricted access to channels. False if at least one user group has `restrictedAccessToChannels` set to False.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels: Scalars['Boolean']['output'];
  /**
   * Returns a list of user's stored payment methods that can be used in provided channel. The field returns a list of stored payment methods by payment apps. When `amount` is not provided, 0 will be used as default value.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  storedPaymentMethods?: Maybe<Array<StoredPaymentMethod>>;
  /** List of stored payment sources. The field returns a list of payment sources stored for payment plugins. */
  storedPaymentSources?: Maybe<Array<PaymentSource>>;
  /** The data when the user last update the account information. */
  updatedAt: Scalars['DateTime']['output'];
  /** List of user's permissions. */
  userPermissions?: Maybe<Array<UserPermission>>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  format?: InputMaybe<ThumbnailFormatEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserCheckoutIdsArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


/** Represents user data. */
export type UserCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents user data. */
export type UserPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents user data. */
export type UserStoredPaymentMethodsArgs = {
  channel: Scalars['String']['input'];
};


/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** An updated user instance. */
  user?: Maybe<User>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type UserBulkSetActive = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<AccountError>;
};

export type UserCountableConnection = {
  edges: Array<UserCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserCreateInput = {
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is confirmed.
   *
   * Added in Saleor 3.15.
   */
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  /** User language code. */
  languageCode?: InputMaybe<LanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<MetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrApp = App | User;

/** Represents user's permissions. */
export type UserPermission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


/** Represents user's permissions. */
export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']['input'];
};

export type UserSortField =
  /** Sort users by created at. */
  | 'CREATED_AT'
  /** Sort users by email. */
  | 'EMAIL'
  /** Sort users by first name. */
  | 'FIRST_NAME'
  /** Sort users by last modified at. */
  | 'LAST_MODIFIED_AT'
  /** Sort users by last name. */
  | 'LAST_NAME'
  /** Sort users by order count. */
  | 'ORDER_COUNT';

export type UserSortingInput = {
  /** Specifies the direction in which to sort users. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  /** Country code. */
  countryCode: Scalars['String']['output'];
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<ReducedRate>;
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars['Float']['output']>;
};

export type VariantAttributeScope =
  | 'ALL'
  | 'NOT_VARIANT_SELECTION'
  | 'VARIANT_SELECTION';

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaAssign = {
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaUnassign = {
  errors: Array<ProductError>;
  media?: Maybe<ProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /**
   * The discount amount in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']['output']>;
  /** The price, with any discount subtracted. */
  price?: Maybe<TaxedMoney>;
  /**
   * The discounted price in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  priceLocalCurrency?: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>;
  errors: Array<AccountError>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  /** User assigned to token. */
  user?: Maybe<User>;
};

/** An enumeration. */
export type VolumeUnitsEnum =
  | 'ACRE_FT'
  | 'ACRE_IN'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'FL_OZ'
  | 'LITER'
  | 'PINT'
  | 'QT';

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & ObjectWithMetadata & {
  /** Determine if the voucher usage should be limited to one use per customer. */
  applyOncePerCustomer: Scalars['Boolean']['output'];
  /** Determine if the voucher should be applied once per order. If set to True, the voucher is applied to a single cheapest eligible product in checkout. */
  applyOncePerOrder: Scalars['Boolean']['output'];
  /** List of categories this voucher applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /**
   * List of availability in channels for the voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  channelListings?: Maybe<Array<VoucherChannelListing>>;
  /** The code of the voucher.This field will be removed in Saleor 4.0. */
  code?: Maybe<Scalars['String']['output']>;
  /**
   * List of codes available for this voucher.
   *
   * Added in Saleor 3.18.
   */
  codes?: Maybe<VoucherCodeCountableConnection>;
  /**
   * List of collections this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries?: Maybe<Array<CountryDisplay>>;
  /** Currency code for voucher. */
  currency?: Maybe<Scalars['String']['output']>;
  /** Voucher value. */
  discountValue?: Maybe<Scalars['Float']['output']>;
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  /** The end date and time of voucher. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the voucher. */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Determine minimum quantity of items for checkout. */
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']['output']>;
  /** Minimum order value to apply voucher. */
  minSpent?: Maybe<Money>;
  /** The name of the voucher. */
  name?: Maybe<Scalars['String']['output']>;
  /** Determine if the voucher is available only for staff members. */
  onlyForStaff: Scalars['Boolean']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /**
   * List of products this voucher applies to.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  products?: Maybe<ProductCountableConnection>;
  /**
   * Determine if the voucher codes can be used once or multiple times.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  singleUse: Scalars['Boolean']['output'];
  /** The start date and time of voucher. */
  startDate: Scalars['DateTime']['output'];
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  /** The number of times a voucher can be used. */
  usageLimit?: Maybe<Scalars['Int']['output']>;
  /** Usage count of the voucher. */
  used: Scalars['Int']['output'];
  /**
   * List of product variants this voucher applies to.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  variants?: Maybe<ProductVariantCountableConnection>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type VoucherAddCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_DELETED (async): A voucher was deleted.
 */
export type VoucherBulkDelete = {
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  /** The channel in which voucher can be applied. */
  channel: Channel;
  /** Currency code for voucher in a channel. */
  currency: Scalars['String']['output'];
  /** The value of the discount on voucher in a channel. */
  discountValue: Scalars['Float']['output'];
  /** The ID of channel listing. */
  id: Scalars['ID']['output'];
  /** Minimum order value for voucher to apply in channel. */
  minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']['input'];
  /** Value of the voucher. */
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: InputMaybe<Array<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type VoucherChannelListingUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** An updated voucher instance. */
  voucher?: Maybe<Voucher>;
};

/**
 * Represents voucher code.
 *
 * Added in Saleor 3.18.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type VoucherCode = {
  /** Code to use the voucher. */
  code?: Maybe<Scalars['String']['output']>;
  /** Date time of code creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the voucher code. */
  id: Scalars['ID']['output'];
  /** Whether a code is active or not. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** Number of times a code has been used. */
  used?: Maybe<Scalars['Int']['output']>;
};

/**
 * Deletes voucher codes.
 *
 * Added in Saleor 3.18.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type VoucherCodeBulkDelete = {
  /** Returns how many codes were deleted. */
  count: Scalars['Int']['output'];
  errors: Array<VoucherCodeBulkDeleteError>;
};

export type VoucherCodeBulkDeleteError = {
  /** The error code. */
  code: VoucherCodeBulkDeleteErrorCode;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars['String']['output']>;
  /** List of voucher codes which causes the error. */
  voucherCodes?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type VoucherCodeBulkDeleteErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND';

export type VoucherCodeCountableConnection = {
  edges: Array<VoucherCodeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherCodeCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VoucherCode;
};

/**
 * Event sent when voucher code export is completed.
 *
 * Added in Saleor 3.18.
 */
export type VoucherCodeExportCompleted = Event & {
  /** The export file for voucher codes. */
  export?: Maybe<ExportFile>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
};

export type VoucherCountableConnection = {
  edges: Array<VoucherCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Voucher;
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_CREATED (async): A voucher was created.
 */
export type VoucherCreate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  voucher?: Maybe<Voucher>;
};


/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type VoucherCreatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_DELETED (async): A voucher was deleted.
 */
export type VoucherDelete = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type VoucherDeletedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export type VoucherDiscountType =
  | 'FIXED'
  | 'PERCENTAGE'
  | 'SHIPPING';

export type VoucherFilterInput = {
  discountType?: InputMaybe<Array<VoucherDiscountType>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
  /**
   * List of codes to add.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Categories discounted by the voucher. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Code to use the voucher. This field will be removed in Saleor 4.0. Use `addCodes` instead. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Collections discounted by the voucher. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Choices: fixed or percentage. */
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Voucher can be used only by staff user. */
  onlyForStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Products discounted by the voucher. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * When set to 'True', each voucher code can be used only once; otherwise, codes can be used multiple times depending on `usageLimit`.
   *
   * The option can only be changed if none of the voucher codes have been used.
   *
   * Added in Saleor 3.18.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  singleUse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: InputMaybe<VoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Variants discounted by the voucher.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type VoucherMetadataUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type VoucherRemoveCatalogues = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
};

export type VoucherSortField =
  /**
   * Sort vouchers by code.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | 'CODE'
  /** Sort vouchers by end date. */
  | 'END_DATE'
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'MINIMUM_SPENT_AMOUNT'
  /**
   * Sort vouchers by name.
   *
   * Added in Saleor 3.18.
   */
  | 'NAME'
  /** Sort vouchers by start date. */
  | 'START_DATE'
  /** Sort vouchers by type. */
  | 'TYPE'
  /** Sort vouchers by usage limit. */
  | 'USAGE_LIMIT'
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | 'VALUE';

export type VoucherSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the direction in which to sort vouchers. */
  direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

/** Represents voucher's original translatable fields and related translations. */
export type VoucherTranslatableContent = Node & {
  /** The ID of the voucher translatable content. */
  id: Scalars['ID']['output'];
  /** Voucher name to translate. */
  name?: Maybe<Scalars['String']['output']>;
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher?: Maybe<Voucher>;
};


/** Represents voucher's original translatable fields and related translations. */
export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type VoucherTranslate = {
  errors: Array<TranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

/** Represents voucher translations. */
export type VoucherTranslation = Node & {
  /** The ID of the voucher translation. */
  id: Scalars['ID']['output'];
  /** Translation language. */
  language: LanguageDisplay;
  /** Translated voucher name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type VoucherTypeEnum =
  | 'ENTIRE_ORDER'
  | 'SHIPPING'
  | 'SPECIFIC_PRODUCT';

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type VoucherUpdate = {
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>;
  errors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The voucher the event relates to. */
  voucher?: Maybe<Voucher>;
};


/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type VoucherUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  /** Address of the warehouse. */
  address: Address;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
  /**
   * Warehouse company name.
   * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
   */
  companyName: Scalars['String']['output'];
  /** Warehouse email. */
  email: Scalars['String']['output'];
  /**
   * External ID of this warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** The ID of the warehouse. */
  id: Scalars['ID']['output'];
  /** Determine if the warehouse is private. */
  isPrivate: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  metafield?: Maybe<Scalars['String']['output']>;
  /**
   * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  metafields?: Maybe<Scalars['Metadata']['output']>;
  /** Warehouse name. */
  name: Scalars['String']['output'];
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   *
   * Added in Saleor 3.3.
   */
  privateMetafield?: Maybe<Scalars['String']['output']>;
  /**
   * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
   *
   * Added in Saleor 3.3.
   */
  privateMetafields?: Maybe<Scalars['Metadata']['output']>;
  /** Shipping zones supported by the warehouse. */
  shippingZones: ShippingZoneCountableConnection;
  /** Warehouse slug. */
  slug: Scalars['String']['output'];
};


/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
  key: Scalars['String']['input'];
};


/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An enumeration. */
export type WarehouseClickAndCollectOptionEnum =
  | 'ALL'
  | 'DISABLED'
  | 'LOCAL';

export type WarehouseCountableConnection = {
  edges: Array<WarehouseCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WarehouseCountableEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Warehouse;
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseCreate = {
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseCreateInput = {
  /** Address of the warehouse. */
  address: AddressInput;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse name. */
  name: Scalars['String']['input'];
  /**
   * Shipping zones supported by the warehouse.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Providing the zone ids will raise a ValidationError.
   */
  shippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when new warehouse is created.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseCreated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<Warehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseDelete = {
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

/**
 * Event sent when warehouse is deleted.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseDeleted = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
  /** The error code. */
  code: WarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of shipping zones IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars['ID']['output']>>;
};

/** An enumeration. */
export type WarehouseErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type WarehouseFilterInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Event sent when warehouse metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type WarehouseMetadataUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<Warehouse>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneAssign = {
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneUnassign = {
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseSortField =
  /** Sort warehouses by name. */
  | 'NAME';

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort warehouses. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseUpdate = {
  errors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseUpdateInput = {
  /** Address of the warehouse. */
  address?: InputMaybe<AddressInput>;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /**
   * Visibility of warehouse stocks.
   *
   * Added in Saleor 3.1.
   */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Warehouse name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Event sent when warehouse is updated.
 *
 * Added in Saleor 3.4.
 */
export type WarehouseUpdated = Event & {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<App>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars['String']['output']>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<Warehouse>;
};

/** Webhook. */
export type Webhook = Node & {
  /** The app associated with Webhook. */
  app: App;
  /** List of asynchronous webhook events. */
  asyncEvents: Array<WebhookEventAsync>;
  /**
   * Custom headers, which will be added to HTTP request.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: Maybe<Scalars['JSONString']['output']>;
  /** Event deliveries. */
  eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events: Array<WebhookEvent>;
  /** The ID of webhook. */
  id: Scalars['ID']['output'];
  /** Informs if webhook is activated. */
  isActive: Scalars['Boolean']['output'];
  /** The name of webhook. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Used to create a hash signature for each payload.
   * @deprecated This field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: Maybe<Scalars['String']['output']>;
  /** Used to define payloads for specific events. */
  subscriptionQuery?: Maybe<Scalars['String']['output']>;
  /** List of synchronous webhook events. */
  syncEvents: Array<WebhookEventSync>;
  /** Target URL for webhook. */
  targetUrl: Scalars['String']['output'];
};


/** Webhook. */
export type WebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventDeliveryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventDeliverySortingInput>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookCreate = {
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookCreateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: InputMaybe<Scalars['String']['input']>;
  /**
   * The secret key used to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookDelete = {
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

/**
 * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookDryRun = {
  errors: Array<WebhookDryRunError>;
  /** JSON payload, that would be sent out to webhook's target URL. */
  payload?: Maybe<Scalars['JSONString']['output']>;
};

export type WebhookDryRunError = {
  /** The error code. */
  code: WebhookDryRunErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type WebhookDryRunErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID_ID'
  | 'MISSING_EVENT'
  | 'MISSING_PERMISSION'
  | 'MISSING_SUBSCRIPTION'
  | 'NOT_FOUND'
  | 'SYNTAX'
  | 'TYPE_NOT_SUPPORTED'
  | 'UNABLE_TO_PARSE';

export type WebhookError = {
  /** The error code. */
  code: WebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type WebhookErrorCode =
  | 'DELETE_FAILED'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_CUSTOM_HEADERS'
  | 'INVALID_NOTIFY_WITH_SUBSCRIPTION'
  | 'MISSING_EVENT'
  | 'MISSING_SUBSCRIPTION'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'SYNTAX'
  | 'UNABLE_TO_PARSE'
  | 'UNIQUE';

/** Webhook event. */
export type WebhookEvent = {
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
  /** Internal name of the event type. */
  eventType: WebhookEventTypeAsyncEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
  /** Internal name of the event type. */
  eventType: WebhookEventTypeSyncEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
};

/** Enum determining type of webhook. */
export type WebhookEventTypeAsyncEnum =
  /** An account email change is requested. */
  | 'ACCOUNT_CHANGE_EMAIL_REQUESTED'
  /** An account confirmation is requested. */
  | 'ACCOUNT_CONFIRMATION_REQUESTED'
  /** An account is confirmed. */
  | 'ACCOUNT_CONFIRMED'
  /** An account is deleted. */
  | 'ACCOUNT_DELETED'
  /** An account delete is requested. */
  | 'ACCOUNT_DELETE_REQUESTED'
  /** An account email was changed */
  | 'ACCOUNT_EMAIL_CHANGED'
  /** Setting a new password for the account is requested. */
  | 'ACCOUNT_SET_PASSWORD_REQUESTED'
  /** A new address created. */
  | 'ADDRESS_CREATED'
  /** An address deleted. */
  | 'ADDRESS_DELETED'
  /** An address updated. */
  | 'ADDRESS_UPDATED'
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  | 'ANY_EVENTS'
  /** An app deleted. */
  | 'APP_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** A new attribute is created. */
  | 'ATTRIBUTE_CREATED'
  /** An attribute is deleted. */
  | 'ATTRIBUTE_DELETED'
  /** An attribute is updated. */
  | 'ATTRIBUTE_UPDATED'
  /** A new attribute value is created. */
  | 'ATTRIBUTE_VALUE_CREATED'
  /** An attribute value is deleted. */
  | 'ATTRIBUTE_VALUE_DELETED'
  /** An attribute value is updated. */
  | 'ATTRIBUTE_VALUE_UPDATED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel metadata is updated. */
  | 'CHANNEL_METADATA_UPDATED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_FULLY_PAID'
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CHECKOUT_METADATA_UPDATED'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'COLLECTION_METADATA_UPDATED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is deleted. */
  | 'CUSTOMER_DELETED'
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CUSTOMER_METADATA_UPDATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  /** A draft order is created. */
  | 'DRAFT_ORDER_CREATED'
  /** A draft order is deleted. */
  | 'DRAFT_ORDER_DELETED'
  /** A draft order is updated. */
  | 'DRAFT_ORDER_UPDATED'
  /** A fulfillment is approved. */
  | 'FULFILLMENT_APPROVED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'FULFILLMENT_METADATA_UPDATED'
  | 'FULFILLMENT_TRACKING_NUMBER_UPDATED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /**
   * A gift card export is completed.
   *
   * Added in Saleor 3.16.
   */
  | 'GIFT_CARD_EXPORT_COMPLETED'
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'GIFT_CARD_METADATA_UPDATED'
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'GIFT_CARD_SENT'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /**
   * User notification triggered.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0. See the docs for more details about migrating from NOTIFY_USER to other events: https://docs.saleor.io/docs/next/upgrade-guides/notify-user-deprecation
   */
  | 'NOTIFY_USER'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_BULK_CREATED'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  /** An order is expired. */
  | 'ORDER_EXPIRED'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_FULLY_REFUNDED'
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'ORDER_METADATA_UPDATED'
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_PAID'
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_REFUNDED'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A new page type is created. */
  | 'PAGE_TYPE_CREATED'
  /** A page type is deleted. */
  | 'PAGE_TYPE_DELETED'
  /** A page type is updated. */
  | 'PAGE_TYPE_UPDATED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  /** A new permission group is created. */
  | 'PERMISSION_GROUP_CREATED'
  /** A permission group is deleted. */
  | 'PERMISSION_GROUP_DELETED'
  /** A permission group is updated. */
  | 'PERMISSION_GROUP_UPDATED'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /**
   * A product export is completed.
   *
   * Added in Saleor 3.16.
   */
  | 'PRODUCT_EXPORT_COMPLETED'
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_CREATED'
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_DELETED'
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_UPDATED'
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_METADATA_UPDATED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  /** A product variant is back in stock. */
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is deleted. Warning: this event will not be executed when parent product has been deleted. Check PRODUCT_DELETED. */
  | 'PRODUCT_VARIANT_DELETED'
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  /** A product variant is out of stock. */
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant stock is updated */
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  /** A promotion is created. */
  | 'PROMOTION_CREATED'
  /** A promotion is deleted. */
  | 'PROMOTION_DELETED'
  /** A promotion is deactivated. */
  | 'PROMOTION_ENDED'
  /** A promotion rule is created. */
  | 'PROMOTION_RULE_CREATED'
  /** A promotion rule is deleted. */
  | 'PROMOTION_RULE_DELETED'
  /** A promotion rule is updated. */
  | 'PROMOTION_RULE_UPDATED'
  /** A promotion is activated. */
  | 'PROMOTION_STARTED'
  /** A promotion is updated. */
  | 'PROMOTION_UPDATED'
  /** A sale is created. */
  | 'SALE_CREATED'
  /** A sale is deleted. */
  | 'SALE_DELETED'
  /** A sale is activated or deactivated. */
  | 'SALE_TOGGLE'
  /** A sale is updated. */
  | 'SALE_UPDATED'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  | 'SHOP_METADATA_UPDATED'
  /** A new staff user is created. */
  | 'STAFF_CREATED'
  /** A staff user is deleted. */
  | 'STAFF_DELETED'
  /** Setting a new password for the staff account is requested. */
  | 'STAFF_SET_PASSWORD_REQUESTED'
  /** A staff user is updated. */
  | 'STAFF_UPDATED'
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | 'THUMBNAIL_CREATED'
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  /** A new translation is created. */
  | 'TRANSLATION_CREATED'
  /** A translation is updated. */
  | 'TRANSLATION_UPDATED'
  /**
   * A voucher code export is completed.
   *
   * Added in Saleor 3.18.
   */
  | 'VOUCHER_CODE_EXPORT_COMPLETED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'VOUCHER_METADATA_UPDATED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'WAREHOUSE_METADATA_UPDATED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED';

/** Enum determining type of webhook. */
export type WebhookEventTypeEnum =
  /** An account email change is requested. */
  | 'ACCOUNT_CHANGE_EMAIL_REQUESTED'
  /** An account confirmation is requested. */
  | 'ACCOUNT_CONFIRMATION_REQUESTED'
  /** An account is confirmed. */
  | 'ACCOUNT_CONFIRMED'
  /** An account is deleted. */
  | 'ACCOUNT_DELETED'
  /** An account delete is requested. */
  | 'ACCOUNT_DELETE_REQUESTED'
  /** An account email was changed */
  | 'ACCOUNT_EMAIL_CHANGED'
  /** Setting a new password for the account is requested. */
  | 'ACCOUNT_SET_PASSWORD_REQUESTED'
  /** A new address created. */
  | 'ADDRESS_CREATED'
  /** An address deleted. */
  | 'ADDRESS_DELETED'
  /** An address updated. */
  | 'ADDRESS_UPDATED'
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  | 'ANY_EVENTS'
  /** An app deleted. */
  | 'APP_DELETED'
  /** A new app installed. */
  | 'APP_INSTALLED'
  /** An app status is changed. */
  | 'APP_STATUS_CHANGED'
  /** An app updated. */
  | 'APP_UPDATED'
  /** A new attribute is created. */
  | 'ATTRIBUTE_CREATED'
  /** An attribute is deleted. */
  | 'ATTRIBUTE_DELETED'
  /** An attribute is updated. */
  | 'ATTRIBUTE_UPDATED'
  /** A new attribute value is created. */
  | 'ATTRIBUTE_VALUE_CREATED'
  /** An attribute value is deleted. */
  | 'ATTRIBUTE_VALUE_DELETED'
  /** An attribute value is updated. */
  | 'ATTRIBUTE_VALUE_UPDATED'
  /** A new category created. */
  | 'CATEGORY_CREATED'
  /** A category is deleted. */
  | 'CATEGORY_DELETED'
  /** A category is updated. */
  | 'CATEGORY_UPDATED'
  /** A new channel created. */
  | 'CHANNEL_CREATED'
  /** A channel is deleted. */
  | 'CHANNEL_DELETED'
  /** A channel metadata is updated. */
  | 'CHANNEL_METADATA_UPDATED'
  /** A channel status is changed. */
  | 'CHANNEL_STATUS_CHANGED'
  /** A channel is updated. */
  | 'CHANNEL_UPDATED'
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'CHECKOUT_CALCULATE_TAXES'
  /** A new checkout is created. */
  | 'CHECKOUT_CREATED'
  /** Filter shipping methods for checkout. */
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  | 'CHECKOUT_FULLY_PAID'
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CHECKOUT_METADATA_UPDATED'
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | 'CHECKOUT_UPDATED'
  /** A new collection is created. */
  | 'COLLECTION_CREATED'
  /** A collection is deleted. */
  | 'COLLECTION_DELETED'
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'COLLECTION_METADATA_UPDATED'
  /** A collection is updated. */
  | 'COLLECTION_UPDATED'
  /** A new customer account is created. */
  | 'CUSTOMER_CREATED'
  /** A customer account is deleted. */
  | 'CUSTOMER_DELETED'
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'CUSTOMER_METADATA_UPDATED'
  /** A customer account is updated. */
  | 'CUSTOMER_UPDATED'
  /** A draft order is created. */
  | 'DRAFT_ORDER_CREATED'
  /** A draft order is deleted. */
  | 'DRAFT_ORDER_DELETED'
  /** A draft order is updated. */
  | 'DRAFT_ORDER_UPDATED'
  /** A fulfillment is approved. */
  | 'FULFILLMENT_APPROVED'
  /** A fulfillment is cancelled. */
  | 'FULFILLMENT_CANCELED'
  /** A new fulfillment is created. */
  | 'FULFILLMENT_CREATED'
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'FULFILLMENT_METADATA_UPDATED'
  | 'FULFILLMENT_TRACKING_NUMBER_UPDATED'
  /** A new gift card created. */
  | 'GIFT_CARD_CREATED'
  /** A gift card is deleted. */
  | 'GIFT_CARD_DELETED'
  /**
   * A gift card export is completed.
   *
   * Added in Saleor 3.16.
   */
  | 'GIFT_CARD_EXPORT_COMPLETED'
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'GIFT_CARD_METADATA_UPDATED'
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'GIFT_CARD_SENT'
  /** A gift card status is changed. */
  | 'GIFT_CARD_STATUS_CHANGED'
  /** A gift card is updated. */
  | 'GIFT_CARD_UPDATED'
  /** An invoice is deleted. */
  | 'INVOICE_DELETED'
  /** An invoice for order requested. */
  | 'INVOICE_REQUESTED'
  /** Invoice has been sent. */
  | 'INVOICE_SENT'
  | 'LIST_STORED_PAYMENT_METHODS'
  /** A new menu created. */
  | 'MENU_CREATED'
  /** A menu is deleted. */
  | 'MENU_DELETED'
  /** A new menu item created. */
  | 'MENU_ITEM_CREATED'
  /** A menu item is deleted. */
  | 'MENU_ITEM_DELETED'
  /** A menu item is updated. */
  | 'MENU_ITEM_UPDATED'
  /** A menu is updated. */
  | 'MENU_UPDATED'
  /**
   * User notification triggered.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0. See the docs for more details about migrating from NOTIFY_USER to other events: https://docs.saleor.io/docs/next/upgrade-guides/notify-user-deprecation
   */
  | 'NOTIFY_USER'
  /** An observability event is created. */
  | 'OBSERVABILITY'
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_BULK_CREATED'
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'ORDER_CALCULATE_TAXES'
  /** An order is cancelled. */
  | 'ORDER_CANCELLED'
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | 'ORDER_CONFIRMED'
  /** A new order is placed. */
  | 'ORDER_CREATED'
  /** An order is expired. */
  | 'ORDER_EXPIRED'
  /** Filter shipping methods for order. */
  | 'ORDER_FILTER_SHIPPING_METHODS'
  /** An order is fulfilled. */
  | 'ORDER_FULFILLED'
  /** Payment is made and an order is fully paid. */
  | 'ORDER_FULLY_PAID'
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_FULLY_REFUNDED'
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'ORDER_METADATA_UPDATED'
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_PAID'
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'ORDER_REFUNDED'
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | 'ORDER_UPDATED'
  /** A new page is created. */
  | 'PAGE_CREATED'
  /** A page is deleted. */
  | 'PAGE_DELETED'
  /** A new page type is created. */
  | 'PAGE_TYPE_CREATED'
  /** A page type is deleted. */
  | 'PAGE_TYPE_DELETED'
  /** A page type is updated. */
  | 'PAGE_TYPE_UPDATED'
  /** A page is updated. */
  | 'PAGE_UPDATED'
  /** Authorize payment. */
  | 'PAYMENT_AUTHORIZE'
  /** Capture payment. */
  | 'PAYMENT_CAPTURE'
  /** Confirm payment. */
  | 'PAYMENT_CONFIRM'
  | 'PAYMENT_GATEWAY_INITIALIZE_SESSION'
  | 'PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION'
  /** Listing available payment gateways. */
  | 'PAYMENT_LIST_GATEWAYS'
  | 'PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION'
  | 'PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION'
  /** Process payment. */
  | 'PAYMENT_PROCESS'
  /** Refund payment. */
  | 'PAYMENT_REFUND'
  /** Void payment. */
  | 'PAYMENT_VOID'
  /** A new permission group is created. */
  | 'PERMISSION_GROUP_CREATED'
  /** A permission group is deleted. */
  | 'PERMISSION_GROUP_DELETED'
  /** A permission group is updated. */
  | 'PERMISSION_GROUP_UPDATED'
  /** A new product is created. */
  | 'PRODUCT_CREATED'
  /** A product is deleted. */
  | 'PRODUCT_DELETED'
  /**
   * A product export is completed.
   *
   * Added in Saleor 3.16.
   */
  | 'PRODUCT_EXPORT_COMPLETED'
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_CREATED'
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_DELETED'
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | 'PRODUCT_MEDIA_UPDATED'
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_METADATA_UPDATED'
  /** A product is updated. */
  | 'PRODUCT_UPDATED'
  /** A product variant is back in stock. */
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  /** A new product variant is created. */
  | 'PRODUCT_VARIANT_CREATED'
  /** A product variant is deleted. Warning: this event will not be executed when parent product has been deleted. Check PRODUCT_DELETED. */
  | 'PRODUCT_VARIANT_DELETED'
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  /** A product variant is out of stock. */
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  /** A product variant stock is updated */
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  /** A product variant is updated. */
  | 'PRODUCT_VARIANT_UPDATED'
  /** A promotion is created. */
  | 'PROMOTION_CREATED'
  /** A promotion is deleted. */
  | 'PROMOTION_DELETED'
  /** A promotion is deactivated. */
  | 'PROMOTION_ENDED'
  /** A promotion rule is created. */
  | 'PROMOTION_RULE_CREATED'
  /** A promotion rule is deleted. */
  | 'PROMOTION_RULE_DELETED'
  /** A promotion rule is updated. */
  | 'PROMOTION_RULE_UPDATED'
  /** A promotion is activated. */
  | 'PROMOTION_STARTED'
  /** A promotion is updated. */
  | 'PROMOTION_UPDATED'
  /** A sale is created. */
  | 'SALE_CREATED'
  /** A sale is deleted. */
  | 'SALE_DELETED'
  /** A sale is activated or deactivated. */
  | 'SALE_TOGGLE'
  /** A sale is updated. */
  | 'SALE_UPDATED'
  /** Fetch external shipping methods for checkout. */
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
  /** A new shipping price is created. */
  | 'SHIPPING_PRICE_CREATED'
  /** A shipping price is deleted. */
  | 'SHIPPING_PRICE_DELETED'
  /** A shipping price is updated. */
  | 'SHIPPING_PRICE_UPDATED'
  /** A new shipping zone is created. */
  | 'SHIPPING_ZONE_CREATED'
  /** A shipping zone is deleted. */
  | 'SHIPPING_ZONE_DELETED'
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  /** A shipping zone is updated. */
  | 'SHIPPING_ZONE_UPDATED'
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  | 'SHOP_METADATA_UPDATED'
  /** A new staff user is created. */
  | 'STAFF_CREATED'
  /** A staff user is deleted. */
  | 'STAFF_DELETED'
  /** Setting a new password for the staff account is requested. */
  | 'STAFF_SET_PASSWORD_REQUESTED'
  /** A staff user is updated. */
  | 'STAFF_UPDATED'
  | 'STORED_PAYMENT_METHOD_DELETE_REQUESTED'
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | 'THUMBNAIL_CREATED'
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CANCELATION_REQUESTED'
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CHARGE_REQUESTED'
  | 'TRANSACTION_INITIALIZE_SESSION'
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  | 'TRANSACTION_PROCESS_SESSION'
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_REFUND_REQUESTED'
  /** A new translation is created. */
  | 'TRANSLATION_CREATED'
  /** A translation is updated. */
  | 'TRANSLATION_UPDATED'
  /**
   * A voucher code export is completed.
   *
   * Added in Saleor 3.18.
   */
  | 'VOUCHER_CODE_EXPORT_COMPLETED'
  /** A new voucher created. */
  | 'VOUCHER_CREATED'
  /** A voucher is deleted. */
  | 'VOUCHER_DELETED'
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'VOUCHER_METADATA_UPDATED'
  /** A voucher is updated. */
  | 'VOUCHER_UPDATED'
  /** A new warehouse created. */
  | 'WAREHOUSE_CREATED'
  /** A warehouse is deleted. */
  | 'WAREHOUSE_DELETED'
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | 'WAREHOUSE_METADATA_UPDATED'
  /** A warehouse is updated. */
  | 'WAREHOUSE_UPDATED';

/** Enum determining type of webhook. */
export type WebhookEventTypeSyncEnum =
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'CHECKOUT_CALCULATE_TAXES'
  /** Filter shipping methods for checkout. */
  | 'CHECKOUT_FILTER_SHIPPING_METHODS'
  | 'LIST_STORED_PAYMENT_METHODS'
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | 'ORDER_CALCULATE_TAXES'
  /** Filter shipping methods for order. */
  | 'ORDER_FILTER_SHIPPING_METHODS'
  /** Authorize payment. */
  | 'PAYMENT_AUTHORIZE'
  /** Capture payment. */
  | 'PAYMENT_CAPTURE'
  /** Confirm payment. */
  | 'PAYMENT_CONFIRM'
  | 'PAYMENT_GATEWAY_INITIALIZE_SESSION'
  | 'PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION'
  /** Listing available payment gateways. */
  | 'PAYMENT_LIST_GATEWAYS'
  | 'PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION'
  | 'PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION'
  /** Process payment. */
  | 'PAYMENT_PROCESS'
  /** Refund payment. */
  | 'PAYMENT_REFUND'
  /** Void payment. */
  | 'PAYMENT_VOID'
  /** Fetch external shipping methods for checkout. */
  | 'SHIPPING_LIST_METHODS_FOR_CHECKOUT'
  | 'STORED_PAYMENT_METHOD_DELETE_REQUESTED'
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CANCELATION_REQUESTED'
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_CHARGE_REQUESTED'
  | 'TRANSACTION_INITIALIZE_SESSION'
  | 'TRANSACTION_PROCESS_SESSION'
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | 'TRANSACTION_REFUND_REQUESTED';

/** An enumeration. */
export type WebhookSampleEventTypeEnum =
  | 'ACCOUNT_CHANGE_EMAIL_REQUESTED'
  | 'ACCOUNT_CONFIRMATION_REQUESTED'
  | 'ACCOUNT_CONFIRMED'
  | 'ACCOUNT_DELETED'
  | 'ACCOUNT_DELETE_REQUESTED'
  | 'ACCOUNT_EMAIL_CHANGED'
  | 'ACCOUNT_SET_PASSWORD_REQUESTED'
  | 'ADDRESS_CREATED'
  | 'ADDRESS_DELETED'
  | 'ADDRESS_UPDATED'
  | 'APP_DELETED'
  | 'APP_INSTALLED'
  | 'APP_STATUS_CHANGED'
  | 'APP_UPDATED'
  | 'ATTRIBUTE_CREATED'
  | 'ATTRIBUTE_DELETED'
  | 'ATTRIBUTE_UPDATED'
  | 'ATTRIBUTE_VALUE_CREATED'
  | 'ATTRIBUTE_VALUE_DELETED'
  | 'ATTRIBUTE_VALUE_UPDATED'
  | 'CATEGORY_CREATED'
  | 'CATEGORY_DELETED'
  | 'CATEGORY_UPDATED'
  | 'CHANNEL_CREATED'
  | 'CHANNEL_DELETED'
  | 'CHANNEL_METADATA_UPDATED'
  | 'CHANNEL_STATUS_CHANGED'
  | 'CHANNEL_UPDATED'
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_FULLY_PAID'
  | 'CHECKOUT_METADATA_UPDATED'
  | 'CHECKOUT_UPDATED'
  | 'COLLECTION_CREATED'
  | 'COLLECTION_DELETED'
  | 'COLLECTION_METADATA_UPDATED'
  | 'COLLECTION_UPDATED'
  | 'CUSTOMER_CREATED'
  | 'CUSTOMER_DELETED'
  | 'CUSTOMER_METADATA_UPDATED'
  | 'CUSTOMER_UPDATED'
  | 'DRAFT_ORDER_CREATED'
  | 'DRAFT_ORDER_DELETED'
  | 'DRAFT_ORDER_UPDATED'
  | 'FULFILLMENT_APPROVED'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_CREATED'
  | 'FULFILLMENT_METADATA_UPDATED'
  | 'FULFILLMENT_TRACKING_NUMBER_UPDATED'
  | 'GIFT_CARD_CREATED'
  | 'GIFT_CARD_DELETED'
  | 'GIFT_CARD_EXPORT_COMPLETED'
  | 'GIFT_CARD_METADATA_UPDATED'
  | 'GIFT_CARD_SENT'
  | 'GIFT_CARD_STATUS_CHANGED'
  | 'GIFT_CARD_UPDATED'
  | 'INVOICE_DELETED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_SENT'
  | 'MENU_CREATED'
  | 'MENU_DELETED'
  | 'MENU_ITEM_CREATED'
  | 'MENU_ITEM_DELETED'
  | 'MENU_ITEM_UPDATED'
  | 'MENU_UPDATED'
  | 'NOTIFY_USER'
  | 'OBSERVABILITY'
  | 'ORDER_BULK_CREATED'
  | 'ORDER_CANCELLED'
  | 'ORDER_CONFIRMED'
  | 'ORDER_CREATED'
  | 'ORDER_EXPIRED'
  | 'ORDER_FULFILLED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_FULLY_REFUNDED'
  | 'ORDER_METADATA_UPDATED'
  | 'ORDER_PAID'
  | 'ORDER_REFUNDED'
  | 'ORDER_UPDATED'
  | 'PAGE_CREATED'
  | 'PAGE_DELETED'
  | 'PAGE_TYPE_CREATED'
  | 'PAGE_TYPE_DELETED'
  | 'PAGE_TYPE_UPDATED'
  | 'PAGE_UPDATED'
  | 'PERMISSION_GROUP_CREATED'
  | 'PERMISSION_GROUP_DELETED'
  | 'PERMISSION_GROUP_UPDATED'
  | 'PRODUCT_CREATED'
  | 'PRODUCT_DELETED'
  | 'PRODUCT_EXPORT_COMPLETED'
  | 'PRODUCT_MEDIA_CREATED'
  | 'PRODUCT_MEDIA_DELETED'
  | 'PRODUCT_MEDIA_UPDATED'
  | 'PRODUCT_METADATA_UPDATED'
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_VARIANT_BACK_IN_STOCK'
  | 'PRODUCT_VARIANT_CREATED'
  | 'PRODUCT_VARIANT_DELETED'
  | 'PRODUCT_VARIANT_METADATA_UPDATED'
  | 'PRODUCT_VARIANT_OUT_OF_STOCK'
  | 'PRODUCT_VARIANT_STOCK_UPDATED'
  | 'PRODUCT_VARIANT_UPDATED'
  | 'PROMOTION_CREATED'
  | 'PROMOTION_DELETED'
  | 'PROMOTION_ENDED'
  | 'PROMOTION_RULE_CREATED'
  | 'PROMOTION_RULE_DELETED'
  | 'PROMOTION_RULE_UPDATED'
  | 'PROMOTION_STARTED'
  | 'PROMOTION_UPDATED'
  | 'SALE_CREATED'
  | 'SALE_DELETED'
  | 'SALE_TOGGLE'
  | 'SALE_UPDATED'
  | 'SHIPPING_PRICE_CREATED'
  | 'SHIPPING_PRICE_DELETED'
  | 'SHIPPING_PRICE_UPDATED'
  | 'SHIPPING_ZONE_CREATED'
  | 'SHIPPING_ZONE_DELETED'
  | 'SHIPPING_ZONE_METADATA_UPDATED'
  | 'SHIPPING_ZONE_UPDATED'
  | 'SHOP_METADATA_UPDATED'
  | 'STAFF_CREATED'
  | 'STAFF_DELETED'
  | 'STAFF_SET_PASSWORD_REQUESTED'
  | 'STAFF_UPDATED'
  | 'THUMBNAIL_CREATED'
  | 'TRANSACTION_ITEM_METADATA_UPDATED'
  | 'TRANSLATION_CREATED'
  | 'TRANSLATION_UPDATED'
  | 'VOUCHER_CODE_EXPORT_COMPLETED'
  | 'VOUCHER_CREATED'
  | 'VOUCHER_DELETED'
  | 'VOUCHER_METADATA_UPDATED'
  | 'VOUCHER_UPDATED'
  | 'WAREHOUSE_CREATED'
  | 'WAREHOUSE_DELETED'
  | 'WAREHOUSE_METADATA_UPDATED'
  | 'WAREHOUSE_UPDATED';

/**
 * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type WebhookTrigger = {
  delivery?: Maybe<EventDelivery>;
  errors: Array<WebhookTriggerError>;
};

export type WebhookTriggerError = {
  /** The error code. */
  code: WebhookTriggerErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export type WebhookTriggerErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID_ID'
  | 'MISSING_EVENT'
  | 'MISSING_PERMISSION'
  | 'MISSING_QUERY'
  | 'MISSING_SUBSCRIPTION'
  | 'NOT_FOUND'
  | 'SYNTAX'
  | 'TYPE_NOT_SUPPORTED'
  | 'UNABLE_TO_PARSE';

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookUpdate = {
  errors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>;
};

export type WebhookUpdateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<WebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: InputMaybe<Scalars['JSONString']['input']>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The new name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: InputMaybe<Scalars['String']['input']>;
  /**
   * Use to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<WebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float']['output'];
};

/** An enumeration. */
export type WeightUnitsEnum =
  | 'G'
  | 'KG'
  | 'LB'
  | 'OZ'
  | 'TONNE';

/** _Entity union as defined by Federation spec. */
export type _Entity = Address | App | Category | Collection | Group | Order | PageType | Product | ProductMedia | ProductType | ProductVariant | User;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
  sdl?: Maybe<Scalars['String']['output']>;
};

export type ProductCardFragment = { isAvailable?: boolean | null, isAvailableForPurchase?: boolean | null, name: string, rating?: number | null, id: string, thumbnail?: { alt?: string | null, url: string } | null, pricing?: { priceRange?: { start?: { gross: { amount: number } } | null } | null } | null, category?: { name: string } | null };

export type ProductFragment = { name: string, id: string, slug: string };

export type CategoryFragment = { name: string, id: string, slug: string };

export type AuthMutationVariables = Types.Exact<{
  email: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type AuthMutation = { tokenCreate?: { token?: string | null, refreshToken?: string | null, errors: Array<{ field?: string | null, message?: string | null }> } | null };

export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { me?: { id: string, lastLogin?: string | null, dateJoined: string, email: string, firstName: string, lastName: string, avatar?: { url: string, alt?: string | null } | null, orders?: { totalCount?: number | null } | null } | null };

export type GetCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { categories?: { edges: Array<{ node: { name: string, id: string, slug: string, products?: { edges: Array<{ node: { name: string, id: string, slug: string } }> } | null } }> } | null };

export type GetProductsQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetProductsQuery = { products?: { totalCount?: number | null, edges: Array<{ cursor: string, node: { isAvailable?: boolean | null, isAvailableForPurchase?: boolean | null, name: string, rating?: number | null, id: string, thumbnail?: { alt?: string | null, url: string } | null, pricing?: { priceRange?: { start?: { gross: { amount: number } } | null } | null } | null, category?: { name: string } | null } }>, pageInfo: { hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };

export type GetProductQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['ID']['input']> | Types.Scalars['ID']['input']>;
}>;


export type GetProductQuery = { products?: { edges: Array<{ node: { isAvailable?: boolean | null, isAvailableForPurchase?: boolean | null, name: string, rating?: number | null, id: string, thumbnail?: { alt?: string | null, url: string } | null, pricing?: { priceRange?: { start?: { gross: { amount: number } } | null } | null } | null, category?: { name: string } | null } }> } | null };

export const ProductCardFragmentDoc = `
    fragment ProductCard on Product {
  isAvailable
  isAvailableForPurchase
  name
  rating
  id
  thumbnail {
    alt
    url
  }
  pricing {
    priceRange {
      start {
        gross {
          amount
        }
      }
    }
  }
  category {
    name
  }
}
    `;
export const ProductFragmentDoc = `
    fragment PRODUCT on Product {
  name
  id
  slug
}
    `;
export const CategoryFragmentDoc = `
    fragment CATEGORY on Category {
  name
  id
  slug
}
    `;
export const AuthDocument = Apollo.gql`
    mutation Auth($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    errors {
      field
      message
    }
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<Types.AuthMutation, Types.AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<Types.AuthMutation, Types.AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AuthMutation, Types.AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<Types.AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<Types.AuthMutation, Types.AuthMutationVariables>;
export const CurrentUserDocument = Apollo.gql`
    query CurrentUser {
  me {
    id
    lastLogin
    dateJoined
    email
    firstName
    lastName
    avatar {
      url
      alt
    }
    orders {
      totalCount
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>;
export const GetCategoriesDocument = Apollo.gql`
    query GetCategories {
  categories(first: 10) {
    edges {
      node {
        ...CATEGORY
        products(first: 10, channel: "default-channel") {
          edges {
            node {
              ...PRODUCT
            }
          }
        }
      }
    }
  }
}
    ${CategoryFragmentDoc}
${ProductFragmentDoc}`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetCategoriesQuery, Types.GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCategoriesQuery, Types.GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCategoriesQuery, Types.GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCategoriesQuery, Types.GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<Types.GetCategoriesQuery, Types.GetCategoriesQueryVariables>;
export const GetProductsDocument = Apollo.gql`
    query GetProducts($after: String, $search: String) {
  products(channel: "default-channel", first: 12, after: $after, search: $search) {
    edges {
      node {
        ...ProductCard
      }
      cursor
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    ${ProductCardFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetProductsQuery, Types.GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetProductsQuery, Types.GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProductsQuery, Types.GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetProductsQuery, Types.GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<Types.GetProductsQuery, Types.GetProductsQueryVariables>;
export const GetProductDocument = Apollo.gql`
    query GetProduct($ids: [ID!]) {
  products(channel: "default-channel", first: 1, where: {ids: $ids}) {
    edges {
      node {
        ...ProductCard
      }
    }
  }
}
    ${ProductCardFragmentDoc}`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetProductQuery, Types.GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetProductQuery, Types.GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProductQuery, Types.GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetProductQuery, Types.GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<Types.GetProductQuery, Types.GetProductQueryVariables>;