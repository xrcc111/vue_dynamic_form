<template>
  <div class="drag">
    <div class="col-a">
      <draggable v-model="arr" :group="group" animation="300">
        <transition-group :style="style">
          <div class="item" v-for="item in arr" :key="item.id">
            {{ item.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <!-- 右侧 -->
    <div class="col-b">
      <div class="title">B组（本组是个空数组）</div>
      <draggable v-model="arr1" :group="group1">
      <transition-group>
        <div class="item" v-for="item in arr1" :key="item.id" animation="300">
          {{ item.name }}
        </div>
      </transition-group>
</draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  name: '',
  data() {
    return {
      arr: [
        { id: 1, name: 'www.itxst.com' },
        { id: 2, name: 'www.jd.com' },
        { id: 3, name: 'www.baidu.com' },
        { id: 4, name: 'www.taobao.com' }
      ],
      arr1: [],
      group: {
        name: 'drag',
        put: true, // 可以拖入
        pull: () => {
          if (this.arr.length <= 1) {
            this.message = '元素小于等于1不允许再拖拽了'
          }
          return this.arr.length > 1
        }
      },
      group1: {
        name: 'drag',
        pull: true,
        put: true
      },
      style: 'min-height:120px;display: block;'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.drag{
  .col-a, .col-b{
    .item{
      cursor: move;
    }
  }
}
</style>
