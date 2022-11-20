import { devtoolsExchange } from '@urql/devtools';
import { createClient, defaultExchanges } from 'urql';

export const graphqlClient = createClient({
  url: 'https://graphql-pokeapi.graphcdn.app/',
  suspense: true,
  requestPolicy: 'cache-and-network',
  exchanges: [devtoolsExchange, ...defaultExchanges],
});
