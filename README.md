# miniShop
miniShop is an open source project that tries to show the features and methods of using nuxt 3, type script, tailwind,pinia, etc,in different aspects of an online shop project.
Currently, this project is not complete, but it will be updated over time.

If you are using Nuxt 2, check this [link](https://github.com/atenazr/miniShop-nuxt2).

## Features

### [validation composable](https://github.com/atenazr/miniShop/blob/nuxt-v3/src/composables/useValidation.ts)
By using composition API and the [yup](https://github.com/jquense/yup) package, we create a validation composable that receives a yup schema as an argument and then declares values and errors objects to use in form validation. Functions validate and validateAll are used to evaluate single fields and the overall evaluation of a form, respectively.

[usage](https://github.com/atenazr/miniShop/blob/nuxt-v3/src/pages/ContactUs.vue)

### [products store](https://github.com/atenazr/miniShop/blob/nuxt-v3/src/store/product.ts)
by using [pinia](https://github.com/vuejs/pinia) and type script, a state management is created to call APIs and load fake data from the server.

#### next features 
These features will be added soon: Update using Fetch and useFetch, styling and adding content to privacy page, connecting contactUs form to server, adding addProduct page,adding auth page and defining user access permissions,...
 

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
