<template>
  <div class="RewardPicker">
    <div 
      class="reward" 
      v-for="(reward, index) in rewards"
      :key="index"
      :class="{ selected: (selected === index) }"
      @click="selectReward(index)"
    >
      <div class="icon">
        <p class="emoji">{{ reward.icon }}</p>
      </div>
      <h4 class="amount">{{ valueString(reward.value) }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { RewardList, Reward } from './types'

const testRewards: RewardList = [
  {
    value: {
      cents: 0,
      currency: 'EUR'
    },
    icon: '🆓'
  },
  {
    value: {
      cents: 200,
      currency: 'EUR'
    },
    icon: '🐌'
  },
  {
    value: {
      cents: 500,
      currency: 'EUR'
    },
    icon: '🐢'
  },
  {
    value: {
      cents: 1000,
      currency: 'EUR'
    },
    icon: '🐇'
  },
]

@Component
export default class RewardPicker extends Vue {
  selected: number | null = null

  @Prop({
    type: Array,
    required: true
  }) readonly rewards!: RewardList

  @Prop({
    type: String,
    default: 'en-US'
  }) readonly locale!: string

  selectReward(index: number): void {
    this.selected = index
    this.$emit('input', this.rewards[index])
  }

  valueString(value: {
    cents: number
    currency: string
  }): string {
    return new Intl.NumberFormat(
      this.locale, 
      { 
        style: 'currency', 
        currency: value.currency,
        maximumSignificantDigits: 1
      }
    ).format(value.cents / 100)
  }
}
</script>

<style scoped lang="sass" src="./RewardPicker.sass" />
