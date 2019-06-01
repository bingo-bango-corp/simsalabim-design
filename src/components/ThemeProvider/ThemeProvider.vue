<template>
  <div class="ThemeProvider" :style="renderedTheme">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { theme, themeColor } from './types'
import { light, dark } from './themes'

@Component
export default class ThemeProvider extends Vue {
  activeTheme: theme | null = light

  get renderedTheme() {
    if (!this.activeTheme) throw new Error('No active theme selected')
    return {
      '--foreground': this.flattenThemeColor(this.activeTheme.tokens.foreground),
      '--background': this.flattenThemeColor(this.activeTheme.tokens.background),
      '--level1': this.flattenThemeColor(this.activeTheme.tokens.level1),
      '--level2': this.flattenThemeColor(this.activeTheme.tokens.level2),
      '--level3': this.flattenThemeColor(this.activeTheme.tokens.level3),
      '--level4': this.flattenThemeColor(this.activeTheme.tokens.level4),
    }
  }

  flattenThemeColor(tc: themeColor): string {
    return `rgba(${tc.r}, ${tc.g}, ${tc.b}, ${tc.a})`
  }
}
</script>

<style lang="sass" src="./ThemeProvider.sass" />
