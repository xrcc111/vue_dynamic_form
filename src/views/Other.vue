<template>
  <div class="other">
    <el-button type="primary" @click="handelClick">点我</el-button>
     <el-button type="primary" @click="handelAdd">add</el-button>
  </div>
</template>

<script>
import { getUserInfo, getPermission, submit } from '@/api/other'
export default {
  name: 'Other',
  data() {
    return {
      form: {
        birth: '',
        qq: '',
        name: '',
        age: '',
        sex: '',
        status: ''
      }
    }
  },
  methods: {
    async _submit(data) {
      const result = await submit(data)
      console.log(result)
    },
    async _getUserInfo(data) {
      const result = await getUserInfo(data)
      return result
    },
    async _getPermission(data) {
      const result = await getPermission(data)
      console.log(result)
    },
    handelClick() {
      Promise.all([
        getUserInfo({ num: 1 }),
        getPermission({ num: 2 })
      ]).then((res) => {
        console.log(res)
        this._submit({ ...res[0], ...res[1].data })
      })
    },
    handelAdd() {
      const arrayList = [this._getPermission(), this._getUserInfo()]
      Promise.allSettled(arrayList).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
