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

<script lang="ts">
import Vue from 'vue'
import components from './components'
export default Vue.extend({
  data() {
    return {
      components: components
    }
  },
})
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
