export type themeColor = {
  r: number
  g: number
  b: number
  a: number
}

export type theme = {
  name: string
  tokens: {
    foreground: themeColor
    background: themeColor
    cardBackground: themeColor
    primary: themeColor
    secondary: themeColor
    level1: themeColor
    level2: themeColor
    level3: themeColor
    level4: themeColor
    level5: themeColor
  }
}