# simsalabim-design 🧙‍♂️

Simsalabim is Bingo Bango's UI library of Vue components.

Just install it like this `yarn add simsalabim-design` and then import the components like this `import 'simsalabim-design'` in your `main.js` or as a nuxt plugin or whatever. The package automatically registers all components globally so you can just go ahead and use them in your templates.

# Components

- **Card**: It's a super basic card. Bit of border radius and a white background and some padding. No props, nothing.
- **BingoButton**: Simple button with two `color` modes: `red` and `white`. Pass `onClick` prop. Pass `color` prop as string.

## Project setup
```
yarn install
```

## Build the bundle
```
yarn run build-bundle
```

## Publish to npm
1. Bump version in `package.json`
2. Run `npm publish`
3. Publish