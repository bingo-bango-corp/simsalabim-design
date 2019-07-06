<template>
  <div class="BingoButton" :class="{ disabled }">
    <button
      :style="{'color':color, 'background':backgroundColor}"
      @click="handleClick"
      :disabled="disabled"
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
    backgroundColor: {
      type: String,
      default: 'var(--secondary)'
    },
    color: {
      type: String,
      default: 'var(--background)'
    },
    eventMetadata: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick(event: Event) {
      this.$emit('clicked', {
        meta: this.eventMetadata,
        event: event
      })
    }
  }
})
</script>

<style scoped lang="sass" src="./BingoButton.sass">

