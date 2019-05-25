<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="(component, key) in components" :to="key" :key="component.id">
        {{ key }}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import components from './components'
export default {
  data() {
    return {
      components: components
    }
  },
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
