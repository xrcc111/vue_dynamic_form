<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <el-button type="primary" @click="handleClick">Increment</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState({ count: state => state.count.count })
  },
  methods: {
    handleClick() {
      console.log(this.$store.dispatch('count/incrementCount', 10))
      this.$store.dispatch('count/incrementCount')
    }
  }
}
</script>
