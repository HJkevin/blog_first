<template>
  <div class="classmain">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
        <template v-if="state">
            <h3>一级分类列表</h3>
            <el-form-item label="一级中文标识" prop="cnname">
                <el-input type="text" v-model="ruleForm.cnname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="一级英文标识" prop="enname">
                <el-input type="text" v-model="ruleForm.enname" auto-complete="off"></el-input>
            </el-form-item>
        </template>
      
        <template v-else>
            <h3>二级分类列表</h3>
            <el-form-item label="二级中文标识" prop="cnname">
                <el-input type="text" v-model="ruleForm.cnname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="二级英文标识" prop="enname">
                <el-input type="text" v-model="ruleForm.enname" auto-complete="off"></el-input>
            </el-form-item>
        </template>

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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入英文姓名"));
      } else if (!/^[a-zA-Z]{4,10}$/.test(value)) {
        //this.$refs.ruleForm.validateField('checkPass');
        callback(new Error("请输入正确的英文姓名!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        
      },
      rules: {
        enname: [{ validator: validatePass, trigger: "blur" }],
        // cnname_two: [{ trigger: "blur" }],
        // enname_two: [{ validator: validateEnname_one, trigger: "blur" }]
      },
      state: true
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.state) {
            this.axios
              .post("/api/back/class/amendClassOne", this.ruleForm)
              .then((data) => {
                // console.log(data);
                if (data.data.code == "2031") {
                  this.$message({
                    showClose: true,
                    type: "success",
                    message: data.data.msg
                  });
                } else {
                  this.$message({
                    showClose: true,
                    type: "error",
                    message: data.data.msg
                  });
                }
              });
          } else {
            this.axios
              .post("/api/back/class/amendClassTwo", this.ruleForm)
              .then((data) => {
                console.log(data);
                if (data.data.code == "2071") {
                  this.$message({
                    showClose: true,
                    type: "success",
                    message: data.data.msg
                  });
                } else {
                  this.$message({
                    showClose: true,
                    type: "error",
                    message: data.data.msg
                  });
                }
              });
          }
        } else {
          // this.$message({
          //   type: "error",
          //   message: data.data.msg
          // });
          console.log('error')
          return false
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted () {
      let state = this.$route.query.state;
      if (state == 'one') {
          this.state = true;
          const data = JSON.parse(sessionStorage.getItem('oneClassData'))
          // Object.assign(this.ruleForm, data)
          Object.entries(data).forEach((i) => {
            this.$set(this.ruleForm, i[0], i[1])
          }, this);
          // console.log(this.ruleForm, '.................')
          // console.log(Object.getOwnPropertyDescriptor(this.ruleForm, 'enname'), '-----')
          this.ruleForm.oldenname = data.enname
      } else {
          this.state = false;
          const data = JSON.parse(sessionStorage.getItem('twoClassData'))
          Object.entries(data).forEach((i) => {
            this.$set(this.ruleForm, i[0], i[1])
          }, this);
          // console.log(this.ruleForm, '.................')
      }
  }
};
</script>

<style>
  h3{
    margin: 20px 30px;
  }
</style>
