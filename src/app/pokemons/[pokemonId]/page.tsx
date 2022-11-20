'use client';

import { NextPage } from 'next';
import { gql } from '@/graphql/generated';
import { useQuery } from 'urql';
import { PokemonCard } from '@/components/features/Pokemon/PokemonCard';

const pokemons = gql(`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      results {
        ...PokemonCard_Pokemon
      }
    }
  }
`);

const UserPage: NextPage = () => {
  const [{ data }] = useQuery({ query: pokemons });
  console.log(data);
  return (
    <div>
      <p>UserPage!!!!!!</p>
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
        {data?.pokemons.results.map((pokemonItem) => (
          <PokemonCard key={pokemonItem.id} pokemon={pokemonItem} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
