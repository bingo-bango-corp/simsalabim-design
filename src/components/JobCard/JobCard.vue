<template>
  <div class="JobCard">
    <Card class="card" :elevated="shouldBeElevated">
      <div 
        class="tip"
       :class="{expanded:!collapsed}"
       :style="{'--rotationAmount':randomRotationCssVariable}"
      >
        {{ tipString }}
      </div>
      <div class="title" :class="{expanded:!collapsed}">
        {{ title }}
      </div>
      <div class="content" id="smooth">
          <div v-if="!collapsed" class="expanded">
            <div class="location" v-if="location">
              {{ location }}
            </div>
            <div class="distance" v-if="distance">
              {{ getDistanceString }}
            </div>
            <div class="owner" v-if="owner">
              <img class="profilePic" :src="owner.pictureURL"/>
              <span class="name">{{ owner.displayName }}</span>
            </div>
            <div class="description">
              {{ description }}
            </div>
            <div v-if="actions" class="actions">
              <BingoButton 
                v-for="(action, index) in actions"
                class="actionButton"
                :key="index"
                :eventMetadata="{ jobId: jobId }"
                @clicked="callAction(action.onClick)"
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

import { BingoAction, BingoValue } from './types'

const testActions: BingoAction[] = [
  {
    title: '👋 Example Action',
    backgroundColor: 'var(--primary)',
    onClick(jobId: string) {
      // eslint-disable-next-line no-console
      console.log('Test Action clicked', jobId)
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
  get randomRotationCssVariable() {
    let min = Math.ceil(-10)
    let max = Math.floor(20)
    const rotationValue = Math.floor(Math.random() * (max - min + 1)) + min
    return `${rotationValue}deg`
  }

  @Prop({
    type: String,
    required: true,
  }) readonly jobId!: string

  @Prop({
    type: Object,
  }) readonly owner!: object | undefined

  @Prop({
    type: Boolean,
    default: undefined
  }) readonly elevated!: boolean | undefined

  @Prop({
    type: Boolean,
    default: false
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

  callAction(action: Function): void {
    this.$emit('actionClicked')
    action()
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
