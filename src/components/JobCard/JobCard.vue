<template>
  <div class="JobCard">
    <Card class="card" :elevated="shouldBeElevated">
      <div class="tip" :class="{expanded:!collapsed}">
        {{ tipString }}
      </div>
      <div class="title" :class="{expanded:!collapsed}">
        {{ title }}
      </div>
      <div class="content" id="smooth">
          <div v-if="!collapsed" class="expanded" :key="expanded">
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
                :color="action.color"
                :backgroundColor="action.backgroundColor"
              >
                {{ action.title }}
              </BingoButton>
            </div>
          </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Card from '../Card'
import BingoButton from '../BingoButton'
import smoothReflow from 'vue-smooth-reflow'

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

const testActions: BingoAction[] = [
  {
    title: '👋 Example Action',
    backgroundColor: 'var(--primary)',
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
  },
  mixins: [smoothReflow],
})
export default class JobCard extends Vue {
  @Prop({
    type: Boolean,
    default: undefined
  }) readonly elevated!: boolean | undefined

  @Prop({
    type: Boolean,
    default: true
  }) readonly collapsed!: boolean

  @Prop({
    type: Object,
    default() { return {
      cents: 100,
      currency: 'EUR'
    }}
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

  get shouldBeElevated(): boolean {
    return this.elevated != undefined
      ? this.elevated
      : !this.collapsed
  }

  get getDistanceString(): string | null {
    return this.distance
    ? `${Math.round(this.distance * 1000)}m`
    : null
  }

  mounted() {
    if (this.$smoothReflow) this.$smoothReflow({
      el: '#smooth',
      transition: 'height .3s'
    })
  }
} 
</script>

<style scoped lang="sass" src="./JobCard.sass" />
