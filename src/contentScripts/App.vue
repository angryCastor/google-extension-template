<template>
  <div class="block">
    <div v-for="item in todos" :key="item.id">
      {{ item.id }} - {{ item.title }}
    </div>
    <div class="title" @click="clickHandler">load</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      msg: 'Welcome!',
      todos: [],
    }
  },
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    ...mapMutations(['increment']),
    clickHandler() {
      const self = this
      chrome.runtime.sendMessage({ command: 'load-todos' }, (response) => {
        self.todos = response
      })
    },
  },
}
</script>

<style lang="scss"></style>
