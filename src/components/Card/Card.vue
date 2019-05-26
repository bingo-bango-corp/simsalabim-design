<template>
  <div class="Card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Card extends Vue {} 
</script>

<style scoped lang="sass" src="./Card.sass" />
