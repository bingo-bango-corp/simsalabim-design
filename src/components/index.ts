import Vue, { VueConstructor } from 'vue'

import Ripple from 'vue-ripple-directive'

import Card from './Card'
import BingoButton from './BingoButton'

Vue.directive('ripple', Ripple);

interface ComponentList { [key: string]: VueConstructor }

const Components: ComponentList = {
  Card,
  BingoButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components