<template>
  <div class="about">
    <component :is="$route.params.id">
      slot content
    </component>
  </div>
</template>

<script>
import '@/components'
export default {}
</script>
