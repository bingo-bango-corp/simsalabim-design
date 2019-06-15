<template>
  <div class="TypingIndicator">
    <img class="photo" :src="photoURL"/>
    <div class="typing">
      <div class="dot" />
      <div class="dot two" />
      <div class="dot three" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BingoInput extends Vue {
  @Prop({
    type: String,
    required: true,
    default: "https://lh3.googleusercontent.com/-PZ3VyvQfdqY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rej4p2auTZi8BVvyXzXDW4X-fn7kw.CMID/s64-c-mo/photo.jpg"
  }) readonly photoURL!: string
}
</script>

<style scoped lang="sass" src="./TypingIndicator.sass" />
