/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Ability = {
  ability: Maybe<BaseName>;
  is_hidden: Maybe<Scalars['Boolean']>;
  slot: Maybe<Scalars['Int']>;
};

export type BaseList = {
  count: Maybe<Scalars['Int']>;
  message: Maybe<Scalars['String']>;
  next: Maybe<Scalars['String']>;
  previous: Maybe<Scalars['String']>;
  results: Maybe<Array<Maybe<BaseName>>>;
  status: Maybe<Scalars['Boolean']>;
};

export type BaseName = {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type BaseResponse = {
  message: Maybe<Scalars['String']>;
  params: Maybe<Scalars['JSON']>;
  response: Maybe<Scalars['JSON']>;
  status: Maybe<Scalars['Boolean']>;
};

export type CacheControlScope =
  | 'PRIVATE'
  | 'PUBLIC';

export type GameIndex = {
  game_index: Maybe<Scalars['Int']>;
  version: Maybe<BaseName>;
};

export type HeldItem = {
  item: Maybe<BaseName>;
  version_details: Maybe<Array<Maybe<VersionDetail>>>;
};

export type Move = {
  move: Maybe<BaseName>;
  version_group_details: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Pokemon = {
  abilities: Maybe<Array<Maybe<Ability>>>;
  base_experience: Maybe<Scalars['Int']>;
  forms: Maybe<Array<Maybe<BaseName>>>;
  game_indices: Maybe<Array<Maybe<GameIndex>>>;
  height: Maybe<Scalars['Int']>;
  held_items: Maybe<Array<Maybe<HeldItem>>>;
  id: Maybe<Scalars['Int']>;
  is_default: Maybe<Scalars['Boolean']>;
  location_area_encounters: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  moves: Maybe<Array<Maybe<Move>>>;
  name: Maybe<Scalars['String']>;
  order: Maybe<Scalars['Int']>;
  species: Maybe<BaseName>;
  sprites: Maybe<Sprite>;
  stats: Maybe<Array<Maybe<Stat>>>;
  status: Maybe<Scalars['Boolean']>;
  types: Maybe<Array<Maybe<Type>>>;
  weight: Maybe<Scalars['Int']>;
};

export type PokemonItem = {
  artwork: Maybe<Scalars['String']>;
  dreamworld: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type PokemonList = {
  count: Maybe<Scalars['Int']>;
  message: Maybe<Scalars['String']>;
  next: Maybe<Scalars['String']>;
  nextOffset: Maybe<Scalars['Int']>;
  params: Maybe<Scalars['JSON']>;
  prevOffset: Maybe<Scalars['Int']>;
  previous: Maybe<Scalars['String']>;
  results: Maybe<Array<Maybe<PokemonItem>>>;
  status: Maybe<Scalars['Boolean']>;
};

export type Query = {
  abilities: Maybe<BaseList>;
  ability: Maybe<BaseResponse>;
  berries: Maybe<BaseList>;
  berry: Maybe<BaseResponse>;
  eggGroup: Maybe<BaseResponse>;
  eggGroups: Maybe<BaseList>;
  encounterMethod: Maybe<BaseResponse>;
  encounterMethods: Maybe<BaseList>;
  evolutionChain: Maybe<BaseResponse>;
  evolutionChains: Maybe<BaseList>;
  evolutionTrigger: Maybe<BaseResponse>;
  evolutionTriggers: Maybe<BaseList>;
  gender: Maybe<BaseResponse>;
  genders: Maybe<BaseList>;
  growthRate: Maybe<BaseResponse>;
  growthRates: Maybe<BaseList>;
  location: Maybe<BaseResponse>;
  locations: Maybe<BaseList>;
  move: Maybe<BaseResponse>;
  moves: Maybe<BaseList>;
  nature: Maybe<BaseResponse>;
  natures: Maybe<BaseList>;
  pokemon: Maybe<Pokemon>;
  pokemons: Maybe<PokemonList>;
  region: Maybe<BaseResponse>;
  regions: Maybe<BaseList>;
  species: Maybe<BaseList>;
  types: Maybe<BaseList>;
};


export type QueryAbilityArgs = {
  ability: Scalars['String'];
};


export type QueryBerryArgs = {
  berry: Scalars['String'];
};


export type QueryEggGroupArgs = {
  eggGroup: Scalars['String'];
};


export type QueryEncounterMethodArgs = {
  encounterMethod: Scalars['String'];
};


export type QueryEvolutionChainArgs = {
  id: Scalars['String'];
};


export type QueryEvolutionTriggerArgs = {
  name: Scalars['String'];
};


export type QueryGenderArgs = {
  gender: Scalars['String'];
};


export type QueryGrowthRateArgs = {
  growthRate: Scalars['String'];
};


export type QueryLocationArgs = {
  location: Scalars['String'];
};


export type QueryMoveArgs = {
  move: Scalars['String'];
};


export type QueryNatureArgs = {
  nature: Scalars['String'];
};


export type QueryPokemonArgs = {
  name: Scalars['String'];
};


export type QueryPokemonsArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  region: Scalars['String'];
};

export type Sprite = {
  back_default: Maybe<Scalars['String']>;
  back_female: Maybe<Scalars['String']>;
  back_shiny: Maybe<Scalars['String']>;
  back_shiny_female: Maybe<Scalars['String']>;
  front_default: Maybe<Scalars['String']>;
  front_female: Maybe<Scalars['String']>;
  front_shiny: Maybe<Scalars['String']>;
  front_shiny_female: Maybe<Scalars['String']>;
};

export type Stat = {
  base_stat: Maybe<Scalars['Int']>;
  effort: Maybe<Scalars['Int']>;
  stat: Maybe<BaseName>;
};

export type Type = {
  slot: Maybe<Scalars['Int']>;
  type: Maybe<BaseName>;
};

export type VersionDetail = {
  rarity: Maybe<Scalars['Int']>;
  version: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  level_learned_at: Maybe<Scalars['Int']>;
  move_learn_method: Maybe<BaseName>;
  version_group: Maybe<BaseName>;
};

export type PokemonsQueryVariables = Exact<{
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
}>;


export type PokemonsQuery = { pokemons: { count: number, next: string, previous: string, nextOffset: number, prevOffset: number, status: boolean, results: Array<{ id: number, name: string, image: string }> } };

export type PokemonCard_PokemonFragment = { id: number, name: string, image: string };

export const PokemonCard_PokemonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PokemonCard_Pokemon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PokemonItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<PokemonCard_PokemonFragment, unknown>;
export const PokemonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pokemons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"previous"}},{"kind":"Field","name":{"kind":"Name","value":"nextOffset"}},{"kind":"Field","name":{"kind":"Name","value":"prevOffset"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PokemonCard_Pokemon"}}]}}]}}]}},...PokemonCard_PokemonFragmentDoc.definitions]} as unknown as DocumentNode<PokemonsQuery, PokemonsQueryVariables>;