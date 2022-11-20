import { gql } from '@/graphql/generated';
import { PokemonCard_PokemonFragment } from '@/graphql/generated/graphql';
import { FC } from 'react';

const PokemonCard_Pokemon = gql(`
  fragment PokemonCard_Pokemon on PokemonItem {
    id
    name
    image
  }
`);

type Props = {
  pokemon: PokemonCard_PokemonFragment;
};
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <div className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
      <div className="space-y-6 xl:space-y-10">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
          src={pokemon.image}
          alt={`${pokemon.name}の画像`}
        />
        <div className="space-y-1 text-2xl font-medium leading-6">
          <h3 className="text-white">{pokemon.name}</h3>
        </div>
      </div>
    </div>
  );
};
