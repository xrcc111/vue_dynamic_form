<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this._getMenu()
  },
  methods: {
    ...mapActions({
      _getMenu: 'menu/_getMenu'
    })
  }
}
</script>
