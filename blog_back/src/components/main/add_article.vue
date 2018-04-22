<template>
    <div >
      <h3>增加文章标题</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="一级类名" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域" >
            <el-option v-for="(item,index) in list" :label="item.cnname"  :value="item.cnname"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级类名" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option  v-for="(itm,idx) in listtwo" :label="itm.cnname"  :value="itm.cnname"></el-option>
          </el-select>
        </el-form-item>
        <div>
          <label for="">是否显示：</label>
          <el-radio v-model="radio7" label="1" >是</el-radio>
          <el-radio v-model="radio7" label="2" >否</el-radio>
        </div>
        <div style="margin-top: 20px">
          <label for="">是否推荐：</label>
          <el-radio v-model="radio8" label="1" >是</el-radio>
          <el-radio v-model="radio8" label="2" >否</el-radio>
        </div>
        <el-form-item label="作者" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="导读" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!-- <div> -->
            <!--editor的div为富文本的承载容器-->
            <!-- <div id="editor"></div>  
            <button type="" @click="gettext">点击</button>
        </div> -->

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
</el-form>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1',
        list:null,
        listtwo:null,
        //editor: null,
        ruleForm: {
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
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // gettext() {
      //           // 获取editor中的文本
      //           console.log(this.editor.getContent())
      //       }
    }, 
    mounted() {
        // 实例化editor编辑器
        //this.editor = UE.getEditor('editor');
        // console.log(this.editor.setContent("1223"))
        this.axios.get('/api/back/class/Class').then((data) =>{
            console.log(data.data.data.oneData)
            console.log(data.data.data.twoData)
            this.list=data.data.data.oneData
            this.listtwo = data.data.data.twoData
            data.data.data.oneData.map((item,index) =>{
              data.data.data.twoData.map((itm,idx) =>{
                if(itm.parent_id == item.id){
                  console.log(itm.cnname)
                }
              })
            })
            
        })
       
    },
    //     destroyed() {
    //         // 将editor进行销毁
    //         this.editor.destroy();
    //     }


 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
