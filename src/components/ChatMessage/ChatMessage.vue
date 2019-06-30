<template>
  <div class="ChatMessage">
    <div class="message" v-if="!notice">
      <span v-if="!mine" class="displayName">📫 {{ displayName }}</span>
      <div class="photoMessage">
        <img v-if="!mine" class="photo" :src="photoURL" />
        <div class="message">{{ message }}</div>
        <img v-if="mine" class="photo" :src="photoURL" />
      </div>
    </div>
    <div class="notice" v-else>
      <div class="line" />
      <div class="message">{{ message }}</div>
      <div class="line" />
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
    type: Boolean,
    default: false
  }) readonly notice!: boolean

  @Prop({
    type: String,
    required: true,
    default: 'You cancelled this job.'
  }) readonly message!: string
}
</script>

<style scoped lang="sass" src="./ChatMessage.sass">
