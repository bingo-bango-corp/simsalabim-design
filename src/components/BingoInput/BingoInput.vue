<template>
  <input 
    class="BingoInput"
    v-model="content"
    @input="handleInput"
    @blur="handleBlur"
    :placeholder="placeholder"
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BingoInput extends Vue {
  @Prop({
    type: String,
  }) readonly value!: string | undefined

  @Prop({
    type: String,
  }) readonly placeholder!: string | undefined

  content = this.value || ''

  handleInput(e: Event) {
    this.$emit('input', this.content)
  }

  handleBlur(e: Event) {
    this.$emit('blur', e)
  }
} 
</script>

<style scoped lang="sass" src="./BingoInput.sass" />
