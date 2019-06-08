<template>
  <div class="Card" :class="{'elevated':elevated}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Card extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) readonly elevated!: boolean | undefined
} 
</script>

<style scoped lang="sass" src="./Card.sass" />
