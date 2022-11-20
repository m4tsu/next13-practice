'use client';

import { graphqlClient } from '@/libs/urql/client';
import { FC, ReactNode } from 'react';
import { Provider } from 'urql';

type Props = {
  children: ReactNode;
};
export const Providers: FC<Props> = ({ children }) => (
  <Provider value={graphqlClient}>{children}</Provider>
);
