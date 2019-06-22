export interface BingoAction {
  title: string
  color?: string
  backgroundColor?: string
  onClick: Function
}

export interface BingoValue {
  cents: number,
  currency: string
}
