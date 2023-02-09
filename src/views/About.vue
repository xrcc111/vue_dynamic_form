<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <el-button type="primary" @click="add">Increment</el-button>
    <el-button type="warning" @click="sub(10)">Decrement</el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions({
      add: 'count/incrementCount',
      sub: 'count/decrementCount'
    })
  }
}
</script>

