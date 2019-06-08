import Card from './Card'
import BingoButton from './BingoButton'
import BottomNav from './BottomNav'
import ThemeProvider from './ThemeProvider'
import JobCard from './JobCard'

export { default as Card } from './Card'
export { default as BingoButton } from './BingoButton'
export { default as BottomNav } from './BottomNav'
export { default as ThemeProvider } from './ThemeProvider'
export { default as JobCard } from './JobCard'

export { default as themes } from './ThemeProvider/themes'

export { RouteList, BingoRoute, BingoMeta } from './BottomNav/interfaces'
export { themeColor, theme } from './ThemeProvider/types'

const components = {
  Card,
  BingoButton,
  BottomNav,
  ThemeProvider,
  JobCard
}

export default components