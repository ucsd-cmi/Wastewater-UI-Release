export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateVariantDB: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getLabelColors: Array<LabelColor>;
  variantFractions: Array<VariantFraction>;
  variantStats: VariantStats;
};


export type QueryVariantFractionsArgs = {
  date: Scalars['Time'];
};


export type QueryVariantStatsArgs = {
  date: Scalars['Time'];
};

export type VariantFraction = {
  __typename?: 'VariantFraction';
  date: Scalars['Time'];
  fraction: Scalars['Float'];
  lineage: Scalars['String'];
  manholeID: Scalars['String'];
  variant: Scalars['String'];
};

export type VariantStats = {
  __typename?: 'VariantStats';
  fraction: Scalars['Float'];
  lineage: Scalars['String'];
  variant: Scalars['String'];
};

export type LabelColor = {
  __typename?: 'labelColor';
  lineageLabel: Scalars['String'];
  variantLabel: Scalars['String'];
  labelColor: Scalars['String'];
  textColor: Scalars['String'];
};
