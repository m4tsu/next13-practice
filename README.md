This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## あとで同じような構成で作るとき用の叩くコマンド

```bash
// install next
npx create-next-app nextjs13-sample --ts --use-npm

// install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// install linters (eslint は next と一緒に install される)
npm i -D @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports
```

## 利用させていただいているAPI
https://graphql-pokeapi.vercel.app/