<template>
    <div >
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
          <h2>一级分类</h2>
          <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="一级分类名字">
        <el-select v-model="form.region" placeholder="请选择" >
          <el-option v-for="i in arr" :label="i" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      </el-form>
          <h2>二级分类</h2>
          <el-form-item label="二级中文名字" prop="cnname_two" :rules="[{required: true, message: '不能为空'}]">
            <el-input type="text" v-model="ruleForm.cnname_two" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="二级英文名字" prop="enname_two" >
            <el-input type="text" v-model="ruleForm.enname_two" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        datas:null,
        arr:[],
        ruleForm: {
          cnname_one: '',
          enname_one: '',
          cnname_two: '',
          enname_two: ''
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {

        }
      };
    },
    created(){
      this.axios.get("/api/back/class/getOneClass").then((data)=>{
        data.data.data.map((i,idx) =>{
          this.arr.push(i.cnname)
        })
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/back/class/insertTwoClass",this.ruleForm).then((data)=>{
              console.log(data)
            })
          } else {
            
          }
        });
      },
      resetForm(formName) {
        
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
