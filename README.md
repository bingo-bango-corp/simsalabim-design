# simsalabim-design 🧙‍♂️

Simsalabim is Bingo Bango's UI library of Vue components.

Just install it like this `yarn add simsalabim-design` and then import the components like this `import { component } from 'simsalabim-design'`. Or you can go ahead and globally register them all by importing like this `import components from 'simsalabim-design'` and then iterating over `components` and calling `Vue.component` for each. Cool!

# Components

### Card
It's a super basic card. Bit of border radius and a white background and some padding. No props, nothing.

### BingoButton
Simple button with two `color` modes: `red` and `white`. Pass `onClick` prop. Pass `color` prop as string.

### BottomNav
Wew, this one's a tad more complicated.

`BottomNav` receives a `RouteList`, an array-like type that consists of multiple `BingoRoutes`, each with an optional `BingoMeta` attribute.

Each route can have a meta attribute called `topLevel`. If this is true, the route will appear in the Bottom Nav. If this is true, you will also need to set an `friendlyEmoji` (literally just an emoji), as well as a `friendlyName`. You can also set a vue-i18n `translationKey`.

In order to use this component best, import the `RouteList` type in your `router.ts` file and export `routes` as a variable that you then pass to `new Router`. This way, you can `import { routes }` in the view or component where you want to add this BottomNav.

Then, simply add `BottomNav` where you want it, and pass two required props: `routes` (RouteList) and `currentRouteName` (`this.$route.name`). In order to make it actually do something, listen to `@navigate` and then — presumably — navigate to that route. Your handler for this event will receive a `BingoRoute` which means you can do `$router.push(route.path)`, for example. If you want to use translation keys, you need to pass your project's `i18n` instance like this: `:i18n="this._i18n"`.

Oh — if you just wanna see how it looks, slap `test` on it and it'll display some imaginary routes and you can click around.

Bingo Bango 🧙‍♂️

### ThemeProvider

ThemeProvier provides themes. It does so in the form of CSS variables. There's two themes available: 'dark' or 'light'. Select your theme by passing the `theme` prop with a string that reads the theme you want. The component will then simply attach theme values as variables onto itself. Wrap your app in the theme provider and you can use the values inside. This way, you get an easy light/dark theme!

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
