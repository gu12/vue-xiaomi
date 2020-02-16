<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import storage from './storage/index'

  export default {
    mounted() {
      storage.setItem('a',1,'user')
    }
  }
</script>
<style>
  @import "./resource/scss/reset.scss";
</style>