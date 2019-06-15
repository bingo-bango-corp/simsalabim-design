<template>
  <input 
    class="BingoInput"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @change="handleChange"
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

  handleBlur(e: Event) {
    this.$emit('blur', e)
  }

  handleChange(e: Event) {
    this.$emit('change', e)
  }
}
</script>

<style scoped lang="sass" src="./BingoInput.sass" />
