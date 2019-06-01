<template>
  <div class="ThemeProvider" :style="renderedTheme">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { theme, themeColor } from './types'
import { light, dark } from './themes'

@Component
export default class ThemeProvider extends Vue {
  @Prop({
    type: String,
    default: 'light'
  }) public theme!: string

  get selectedTheme() {
    switch (this.theme) {
      case 'light':
        return light
      case 'dark':
        return dark
      default:
        return light
    }
  }

  get renderedTheme() {
    return {
      '--foreground': this.flattenThemeColor(this.selectedTheme.tokens.foreground),
      '--background': this.flattenThemeColor(this.selectedTheme.tokens.background),
      '--level1': this.flattenThemeColor(this.selectedTheme.tokens.level1),
      '--level2': this.flattenThemeColor(this.selectedTheme.tokens.level2),
      '--level3': this.flattenThemeColor(this.selectedTheme.tokens.level3),
      '--level4': this.flattenThemeColor(this.selectedTheme.tokens.level4),
    }
  }

  flattenThemeColor(tc: themeColor): string {
    return `rgba(${tc.r}, ${tc.g}, ${tc.b}, ${tc.a})`
  }
}
</script>

<style lang="sass" src="./ThemeProvider.sass" />
