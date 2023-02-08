<template>
  <div class="form">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :inline="true"
    >
      <div v-for="(item, index) in ruleForm.loopData" :key="index">
        <el-form-item
          label="名称"
          :prop="'loopData.' + index + '.name'"
          :rules="{
            required: true,
            message: '设备名称不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="item.name"
            placeholder="设备名称不能为空"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="状态"
          :prop="'loopData.' + index + '.status'"
          :rules="{
            required: true,
            message: '状态不能为空',
            trigger: 'change',
          }"
        >
          <el-select v-model="item.status" placeholder="请选择状态" clearable>
            <el-option label="启用" :value="1"></el-option>
            <el-option label="禁用" :value="0"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Form',
  data() {
    return {
      ruleForm: {
        loopData: [
          {
            name: '设备1',
            status: 0
          },
          {
            name: '设备2',
            status: 1
          },
          {
            name: '设备3',
            status: 0
          },
          {
            name: '设备四',
            status: 1
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang='less' scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
