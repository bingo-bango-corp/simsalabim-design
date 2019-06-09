<template>
  <div class="HeadlineContentPair">
    <h1 class="headline">{{ headline }}</h1>
    <p class="description">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HeadlineContentPair extends Vue {
  @Prop({
    type: String,
    default: 'Headline'
  }) readonly headline!: string | undefined

  @Prop({
    type: String,
    default: 'Description'
  }) readonly description!: string | undefined
} 
</script>

<style scoped lang="sass" src="./HeadlineContentPair.sass" />
