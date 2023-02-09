<template>
  <div class="about">
    <h1>总数量：{{ count }}</h1>
    <el-button type="primary" @click="add">Increment</el-button>
    <el-button type="primary" @click="sub(1)">Decrement</el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState({ count: state => state.count.count })
  },
  methods: {
    ...mapActions({
      add: 'count/incrementCount',
      sub: 'count/decrementCount'
    })
  }
}
</script>
