<template>
  <div 
    @click="$emit('click', $event)"
    class="JobBadge"
    :style="{
      background: theme.background,
      color: theme.foreground
    }"
  >
    <div class="profileSection">
      <img class="profilePic" src="https://lh3.googleusercontent.com/-PZ3VyvQfdqY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rej4p2auTZi8BVvyXzXDW4X-fn7kw.CMID/s64-c-mo/photo.jpg"/>
      <transition name="bounce">
        <div v-if="unreadCount > 0" class="unread">
          {{ unreadCount }}
        </div>
      </transition>
    </div>
    <div class="info">
      <h3>{{ headline }}</h3>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class JobBadge extends Vue {
  hasUnread = false

  @Prop({
    type: String,
    required: true
  }) readonly title!: string

  @Prop({
    type: String,
    required: false,
  }) readonly headline!: string | undefined

  @Prop({
    type: String,
    required: true,
  }) readonly pictureUrl!: URL

  @Prop({
    type: Number,
    required: false,
    default: 0
  }) readonly unreadCount!: number

  @Prop({
    type: Object,
    default() {
      return {
        background: 'var(--secondary)',
        foreground: 'var(--background)'
      }
    }
  }) readonly theme!: {
    background: string,
    foreground: string
  }
}
</script>

<style scoped lang="sass" src="./JobBadge.sass" />
