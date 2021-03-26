import './index.scss'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    count: (state) => state.count,
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
  },
})

const nodeSidebar = document.querySelector('.issuable-context-form')
const nodeVueRoot = document.createElement('div')
nodeVueRoot.id = 'time-checker-vue'
nodeSidebar.prepend(nodeVueRoot)

const app = createApp(App)
app.use(store)
app.mount(nodeVueRoot)
// createApp({}).mount(nodeVueRoot).use()

// new Vue({
// 	el: nodeVueRoot,
// 	store: store,
// 	render: h => h(App),
// })
