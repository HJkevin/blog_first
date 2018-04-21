  <template>
  <div class="classmain">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <p>一级分类列表</p>
       <el-form-item  :model="ruleForm" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option v-for='item in ruleForm.oneDate' :label="item.cnname" :value="item.id"  ></el-option>
        </el-select>
      </el-form-item> 

        <p>二级分类列表</p>
        <el-form-item label='二级中文类名' prop='cnname_two' :rules="{required: true, message: '不能为空'}">
          <el-input type='text' v-model='ruleForm.cnname_two' auto-complete='off'></el-input>
        </el-form-item>

        <el-form-item label='二级英文标识' prop='enname_two'>
          <el-input type='text' v-model = 'ruleForm.enname_two' auto-complete='off'></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
  export default {
      name: 'index',
      data () {
        var validatePass = (rule, value, callback) =>{
          if(value === '') {
            callback(new Error('请输入英文姓名'));
          }else{
            if(/^[a-zA-Z]{4,12}$/.test(value)) {
              callback()
            }else{
              callback(new Error('请输入正确的英文姓名'))
            }
          }
        };
        return {
          ruleForm: {
            enname_two:'',
            cnname_two:'',
            oneId:'',
            region: '',
            oneDate: null
          },
          options:[],
          rules: {
            cnname_two: [{ trigger: "input" }],
            enname_two: [{ validator: validatePass, trigger: "blur" }]
          }
        }
      },
      methods: {
        submitForm() {
          this.axios.post('/api/back/class/insertTwoClass',{
            //oneId,enname_two,cnname_two
              oneId:this.ruleForm.region,//父级的id
              enname_two:this.ruleForm.enname_two,
              cnname_two:this.ruleForm.cnname_two
          }).then(data=>{
              if(data.data.code == "2011") {
                  this.$message({
                      showClose: true,
                      message: data.data.msg,
                      type: 'success'
                  })
              } else {
                  this.$message({
                      showClose: true,
                      message: data.data.msg,
                      type: 'error'
                  })
              }
          })
        },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    },
      mounted(){
        this.axios.get('/api/back/class/getOneClass').then((data)=>{
          console.log(data)
          if(data.data.code == '2021'){
              this.ruleForm.oneDate=data.data.data
          }
        })
      }
  }
</script>

<style scoped>

</style> 


 



 