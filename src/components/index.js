import Vue from 'vue'

import Card from './Card'

const Components = {
  Card
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components