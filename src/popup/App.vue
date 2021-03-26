<template>
  <div>
    <h1 id="test">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Дарова',
    }
  },
}
</script>

<style lang="scss">
#test {
  color: red;
}
</style>
