<template>
  <div class="about">
    <component v-bind="{ test: true }" :is="$route.params.id">
      slot content
    </component>
  </div>
</template>

<script lang="ts">
import components from '@/components'
export default {
  components: components
}
</script>
