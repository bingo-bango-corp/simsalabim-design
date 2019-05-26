<template>
  <div class="BottomNav">
    <div
      v-for="route in navTargets"
      :key="route.meta.friendlyName"
      :class="{ active : route === activeRoute}"
      class="route"
      @click="navigate(route.name)"
    >
      <span class="emoji">{{ route.meta.iconEmoji }}</span>
      <span class="title">{{ route.meta.friendlyName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import RouteConfig from 'vue-router'
import { RouteList, BingoRoute } from './interfaces'
import { routes } from './exampleRouteList'

@Component
export default class BottomNav extends Vue {
  @Prop({
    type: Array as () => RouteList,
    default() { return routes }
  }) public routes!: RouteList

  test_currentRouteName: String = this.routes[0].name

  @Prop({
    type: String,
    required: true,
  }) public currentRouteName!: String

  @Prop({
    type: Boolean,
    default: false
  }) public test!: Boolean

  @Emit('navigate')
  navigate(routeName: String): String {
    if (this.test) this.test_currentRouteName = routeName
    return routeName
  }

  get navTargets(): RouteList {
    return this.routes.filter(r => (r.meta && r.meta.topLevel === true))
  }

  get routeName(): String {
    if (this.test) return this.test_currentRouteName
    else return this.currentRouteName
  }

  get activeRoute(): BingoRoute {
    return this.filterRouteByName(this.routeName)
  }

  filterRouteByName(name: String): BingoRoute {
    const matched = this.routes.filter(r => r.name === name)
    if (matched.length != 0) return matched[0]
    else {
      throw new Error(
        'Current route does not exist in routes provided to BottomNav. Please pass the full RouteList as provided to vue-router.'
      )
    }
  }
}

</script>

<style scoped lang="sass" src="./BottomNav.sass">
