import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const PokemonsPageLayout = ({ children }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-2 border-b-2 border-b-gray-400">
        Pokemons Page
      </h2>
      <div className="py-4">{children}</div>
    </div>
  );
};

export default PokemonsPageLayout;
