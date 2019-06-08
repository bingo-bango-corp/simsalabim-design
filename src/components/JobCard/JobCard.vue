<template>
  <div class="JobCard">
    <Card>
      <div class="tip">
        {{ tipString }}
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="location" v-if="location">
        {{ location }}
      </div>
      <div class="distance" v-if="distance">
        {{ getDistanceString }}
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div v-if="actions" class="actions">
        <BingoButton 
          v-for="(action, index) in actions"
          class="actionButton"
          :key="index"
          :onClick="action.onClick"
        >
          {{ action.title }}
        </BingoButton>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Card from '../Card'
import BingoButton from '../BingoButton'

export interface BingoAction {
  title: string
  onClick: Function
}

export interface BingoValue {
  cents: number,
  currency: string
}

const testActions: BingoAction[] = [
  {
    title: 'hello',
    onClick() {
      // eslint-disable-next-line no-console
      console.log('Test Action clicked')
    }
  },
]

@Component({
  components: {
    Card,
    BingoButton
  }
})
export default class JobCard extends Vue {
  @Prop({
    type: Object,
    default: {
      cents: 100,
      currency: 'EUR'
    }
  }) readonly tip!: BingoValue

  @Prop({
    type: String,
    default: 'en-US'
  }) readonly locale!: string

  @Prop({
    type: String,
    default: 'Title'
  }) readonly title!: string

  @Prop({
    type: String,
  }) readonly location!: string | undefined

  @Prop({
    type: Number,
  }) readonly distance!: number | undefined

  @Prop({
    type: String,
    default: 'Description'
  }) readonly description!: string

  @Prop({
    type: Array,
    default: () => {
      return testActions
    }
  }) readonly actions!: BingoAction[] | undefined

  get tipString(): string {
    return new Intl.NumberFormat(
      this.locale, 
      { 
        style: 'currency', 
        currency: this.tip.currency,
        maximumSignificantDigits: 1
      }
    ).format(this.tip.cents / 100)
  }

  get getDistanceString(): string | null {
    return this.distance
    ? `${this.distance * 1000}m`
    : null
  }
} 
</script>

<style scoped lang="sass" src="./JobCard.sass" />
