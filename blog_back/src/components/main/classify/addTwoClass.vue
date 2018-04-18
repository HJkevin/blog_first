<template>
  <div>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <h3>一级分类添加</h3>
        <el-form-item label="一级中文类名">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <h3>二级分类列表</h3>
        <el-form-item label="二级中文类名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="二级英文标识">
          <el-input></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>
