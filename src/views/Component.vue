<template>
  <div class="about">
    <ThemeProvider theme="light">
      <component v-bind="{ test: true }" :is="$route.params.id">
        slot content
      </component>
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import components from '@/components'
export default {
  components: components
}
</script>
