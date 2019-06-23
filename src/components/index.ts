import Card from './Card'
import JobBadge from './JobBadge'
import BingoButton from './BingoButton'
import BottomNav from './BottomNav'
import ThemeProvider from './ThemeProvider'
import JobCard from './JobCard'
import BingoInput from './BingoInput'
import HeadlineContentPair from './HeadlineContentPair'
import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'

export { default as Card } from './Card'
export { default as BingoButton } from './BingoButton'
export { default as BottomNav } from './BottomNav'
export { default as ThemeProvider } from './ThemeProvider'
export { default as JobCard } from './JobCard'
export { default as BingoInput } from './BingoInput'
export { default as HeadlineContentPair } from './HeadlineContentPair'
export { default as ChatMessage } from './ChatMessage'
export { default as TypingIndicator } from './TypingIndicator'
export { default as JobBadge } from './JobBadge'

export { default as themes } from './ThemeProvider/themes'

export { RouteList, BingoRoute, BingoMeta } from './BottomNav/interfaces'
export { themeColor, theme } from './ThemeProvider/types'
export { BingoAction, BingoValue } from './JobCard/types'

const components = {
  Card,
  BingoButton,
  BottomNav,
  ThemeProvider,
  JobCard,
  BingoInput,
  HeadlineContentPair,
  ChatMessage,
  TypingIndicator,
  JobBadge
}

export default components