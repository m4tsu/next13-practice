import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Providers } from './Providers';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head />
      <Providers>
        <body>
          <div className="h-screen flex flex-col">
            <header className="border-b-gray-400 border-b-2">
              <div className="container mx-auto py-2">
                <h1 className="text-3xl font-bold">Header!!!</h1>
              </div>
            </header>
            <main className="flex-1 container mx-auto py-4">{children}</main>
            <footer className="border-t-gray-400 border-t-2">
              <div className="container mx-auto py-2">
                <h1 className="text-xl font-bold">Footer!!!</h1>
              </div>
            </footer>
          </div>
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
