<template>
  <div class="BingoButton">
    <button
      :style="{'color':color, 'background':backgroundColor}"
      @click="onClick"
    >
      <slot>Button</slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'bingo-button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'var(--secondary)'
    },
    color: {
      type: String,
      default: 'var(--background)'
    },
  },
})
</script>

<style scoped lang="sass" src="./BingoButton.sass">

