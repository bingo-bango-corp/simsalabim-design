import { theme, themeColor } from './types'

export const light: theme = {
  name: 'light',
  tokens: {
    foreground: {r: 51, g: 51, b: 51, a: 1},
    background: {r: 255, g: 255, b: 255, a: 1},
    level1: {r: 51, g: 51, b: 51, a: .07},
    level2: {r: 51, g: 51, b: 51, a: .15},
    level3: {r: 51, g: 51, b: 51, a: .25},
    level4: {r: 51, g: 51, b: 51, a: .5},
    level5: {r: 51, g: 51, b: 51, a: .75},
  }
}

export const dark: theme = {
  name: 'dark',
  tokens: {
    foreground: {r: 255, g: 255, b: 255, a: 1},
    background: {r: 34, g: 35, b: 41, a: 1},
    level1: {r: 255, g: 255, b: 255, a: .1},
    level2: {r: 255, g: 255, b: 255, a: .17},
    level3: {r: 255, g: 255, b: 255, a: .28},
    level4: {r: 255, g: 255, b: 255, a: .5},
    level5: {r: 255, g: 255, b: 255, a: .75},
  }
}