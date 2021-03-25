# andyhook.dev

Source code for my personal portfolio. Built with [Next.js](https://nextjs.org/), [Styled Components](https://styled-components.com/) and [Framer Motion](https://www.framer.com/api/motion/).

## Development

To start development:

```sh
yarn dev
```

By default this will spin up a local server on `localhost:3000`

## Image dimensions

Static image dimensions are generated during a build step, either on each run of the dev server or for every production build. If you add, update or change any images you must run `yarn generate-image-sizes` or restart the dev server to get the latest dimensions and [ImagePath](https://github.com/andy-hook/andyhook.dev/blob/main/data/images.ts) typings.

## Building

To build for Node environments:

```sh
yarn build
```

or for a [static export](https://nextjs.org/docs/advanced-features/static-html-export):

```sh
yarn build-static
```

## Testing

Run the tests:

```sh
yarn test
```

## Type checking and linting

Type checking and linting is handled by a single script:

```sh
yarn lint
```

## Formatting your code

Prettier is supported but you'll need to add your own script if you wish to use the cli.

I personally use [this vscode package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to format automatically within my editor.

## License

MIT, see [LICENSE](LICENSE).
