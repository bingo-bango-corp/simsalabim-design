export interface Reward {
  value: {
    cents: number
    currency: string
  }
  icon: string
}

export type RewardList = Reward[]