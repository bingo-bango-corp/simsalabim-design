<template>
  <div class="ChatMessage">
    <span v-if="!mine" class="displayName">📫 {{ displayName }}</span>
    <div class="photoMessage">
      <img v-if="!mine" class="photo" :src="photoURL" />
      <div class="message">{{ message }}</div>
      <img v-if="mine" class="photo" :src="photoURL" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ChatMessage extends Vue {
  @Prop({
    type: String,
    required: true,
  }) readonly displayName!: string

  @Prop({
    type: String,
    required: true,
  }) readonly photoURL!: string

  @Prop({
    type: Boolean,
    default: false
  }) readonly mine!: boolean

  @Prop({
    type: String,
    required: true,
    default: 'Hey dog, got the beers yet? Need any help finding the place?'
  }) readonly message!: string
}
</script>

<style scoped lang="sass" src="./ChatMessage.sass">
