<template>
  <div class="BingoButton">
    <button :style="styles.buttonStyles" v-ripple="styles.ripple" @click="onClick">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'bingo-button',
  props: {
    onClick: {
      type: Function,
      required: true,
      default() {
        // eslint-disable-next-line no-console
        console.log("button clicked")
      }
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    styles() {
      switch(this.color) {
        case 'red':
          return {
            ripple: 'rgba(255, 255, 255, 0.1)',
            buttonStyles: {
              background: '#EB5757',
              color: '#FFFFFF'
            }
          }
        case 'white':
          return {
            ripple: 'rgba(0, 0, 0, 0.1)',
            buttonStyles: {
              background: '#FFFFFF',
              color: '#333333'
            }
          }
        default: 
          return null
      }
    },
  }
}
</script>

<style scoped lang="sass" src="./BingoButton.sass">
