<template>
  <div class="AccountListItem">
    <div :style="{ background: colorForAccountType }" class="icon" v-html="iconForAccountType" />
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { accountType } from './types'

import icons from './icons'
import colors from './colorsForAccountType'

@Component
export default class AccountListItem extends Vue {
  @Prop({
    type: String,
    required: true,
  }) readonly accountType!: accountType

  @Prop({
    type: String,
    required: true,
  }) readonly label!: string

  get iconForAccountType() {
    if (!(icons as any)[this.accountType.split('.')[0]]) {
      throw new Error('Unknown account type')
    }
    return (icons as any)[this.accountType.split('.')[0]]
  }

  get colorForAccountType() {
    return (colors as any)[this.accountType.split('.')[0]]
  }
}
</script>

<style scoped lang="sass" src="./AccountListItem.sass"/>
