# simsalabim-design 🧙‍♂️

Simsalabim is Bingo Bango's UI library of Vue components.

Just install it like this `yarn add simsalabim-design` and then import the components like this `import 'simsalabim-design'` in your `main.js` or as a nuxt plugin or whatever. The package automatically registers all components globally so you can just go ahead and use them in your templates.

# Components

### Card
It's a super basic card. Bit of border radius and a white background and some padding. No props, nothing.

### BingoButton
Simple button with two `color` modes: `red` and `white`. Pass `onClick` prop. Pass `color` prop as string.

### BottomNav
Wew, this one's a tad more complicated.

`BottomNav` receives a `RouteList`, an array-like type that concludes of multiple `BingoRoutes`, each with an optional `BingoMeta` attribute.

Each route can have a meta attribute called `topLevel`. If this is true, the route will appear in the Bottom Nav. If it is true, you will also need to set an `friendlyEmoji` (literally just an emoji), as well as a `friendlyName`.

In order to use this component best, import `RouteList` in your `router.ts` file and export `routes` as a variable that you then pass to `new Router` too. This way, you can `import { routes }` in the view or component where you want to add this BottomNav.

Then, simply add `BottomNav` where you want it, and pass two required props: `routes` (RouteList) and `currentRouteName` (`this.$route.name`). In order to make it actually do something, listen to `@navigate` and then — presumably — navigate to that route.

Oh — if you just wanna see how it looks, slap `test` on it and it'll display some imaginary routes and you can click around.

Bingo Bango 🧙‍♂️

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