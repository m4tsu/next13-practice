import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://graphql-pokeapi.graphcdn.app/',
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    'src/graphql/generated/': {
      preset: 'gql-tag-operations-preset',
      plugins: [],
      config: {
        skipTypename: true,
        enumsAsConst: true,
        enumsAsTypes: true,
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
        maybeValue: 'T', // 何故か全て Maybe になってしまうので無理やりなかったことにする...
      },
    },
  },
};

export default config;
