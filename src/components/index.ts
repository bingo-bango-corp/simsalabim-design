import Card from './Card'
import BingoButton from './BingoButton'
import BottomNav from './BottomNav'
import ThemeProvider from './ThemeProvider'

export { default as Card } from './Card'
export { default as BingoButton } from './BingoButton'
export { default as BottomNav } from './BottomNav'
export { default as ThemeProvider } from './ThemeProvider'

export { RouteList, BingoRoute, BingoMeta } from './BottomNav/interfaces'

const components = {
  Card,
  BingoButton,
  BottomNav,
  ThemeProvider
}

export default components