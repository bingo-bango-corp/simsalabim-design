<template>
  <div class="HeadlineContentPair">
    <div class="headline">
      <h1>{{ headline }}</h1>
    </div>
    <div class="description">
      <h3>{{ description }}</h3>
      <div v-if="refreshButton" class="refreshButton" @click="handleRefreshButton">
        <svg class="icon" :class="{ animate: loading }" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>
        <h3>Refresh</h3>
      </div>
    </div>
      
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
    type: Boolean,
    default: false
  }) readonly refreshButton!: boolean

  @Prop({
    type: Boolean,
  }) readonly loading!: boolean | undefined

  @Prop({
    type: String,
    default: 'Description'
  }) readonly description!: string | undefined

  handleRefreshButton() {
    this.$emit('refreshButtonClicked')
  }
} 
</script>

<style scoped lang="sass" src="./HeadlineContentPair.sass" />
