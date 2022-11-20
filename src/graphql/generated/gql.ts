/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      nextOffset\n      prevOffset\n      status\n      results {\n        ...PokemonCard_Pokemon\n      }\n    }\n  }\n": types.PokemonsDocument,
    "\n  fragment PokemonCard_Pokemon on PokemonItem {\n    id\n    name\n    image\n  }\n": types.PokemonCard_PokemonFragmentDoc,
};

export function gql(source: "\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      nextOffset\n      prevOffset\n      status\n      results {\n        ...PokemonCard_Pokemon\n      }\n    }\n  }\n"): (typeof documents)["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      nextOffset\n      prevOffset\n      status\n      results {\n        ...PokemonCard_Pokemon\n      }\n    }\n  }\n"];
export function gql(source: "\n  fragment PokemonCard_Pokemon on PokemonItem {\n    id\n    name\n    image\n  }\n"): (typeof documents)["\n  fragment PokemonCard_Pokemon on PokemonItem {\n    id\n    name\n    image\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;