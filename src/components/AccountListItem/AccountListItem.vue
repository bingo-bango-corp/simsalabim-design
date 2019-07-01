<template>
  <div class="AccountListItem">
    <div :style="{ background: colorForAccountType }" class="icon">
      <img :src="iconForAccountType" />
    </div>
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
    if (!icons[this.accountType]) {
      throw new Error('Unknown account type')
    }

    return icons[this.accountType]
  }

  get colorForAccountType() {
    return colors[this.accountType]
  }
}
</script>

<style scoped lang="sass" src="./AccountListItem.sass"/>
