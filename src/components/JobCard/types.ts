export interface BingoAction {
  title: string
  color?: string
  backgroundColor?: string
  onClick(): Promise<void>
}

export interface BingoValue {
  cents: number,
  currency: string
}
