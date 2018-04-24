<template>
  <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="接口地址" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="types">
            <el-select v-model="ruleForm.types" placeholder="请选择活动区域">
                <el-option label="前台接口" value="font"></el-option>
                <el-option label="后台接口" value="back"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="请求类型" prop="requesttype">
            <el-select v-model="ruleForm.requesttype" placeholder="请选择活动区域">
                <el-option label="post" value="post"></el-option>
                <el-option label="get" value="get"></el-option>
                <el-option label="formdata" value="formdata"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="请求参数" prop="reqparameters">
            <el-input type="textarea" v-model="ruleForm.reqparameters"></el-input>
        </el-form-item>
        <el-form-item label="相应数据" prop="resdata">
            <el-input type="textarea" v-model="ruleForm.resdata"></el-input>
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
        ruleForm: {
          title:'',
          url:'',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          types:'',
          reqtype:''
        },
        rules: {
          title: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ],
          url: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ],
          types: [
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          reqtype: [
            { required: true, message: '不能为空', trigger: 'change' }
          ],
          reqparameters: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          resdata: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/back/api/select",this.ruleForm).then((data) =>{
                console.log(data)
                if(data.data.code=='3031'){
                 this.$message({
                    showClose: true,
                    message: '提交成功',
                    type: 'success'
                  });
                }else{
                    this.$message({
                        showClose: true,
                        message: '提交失败',
                        type: 'error'
                    });
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

