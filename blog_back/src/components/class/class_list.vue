<template>
<div>
  <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <el-table :data="props.row.twoClass" style="width:100%" >
            <el-table-column label="中文名称" prop="cnname"></el-table-column>
            <el-table-column label="英文名称" prop="enname"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="中文名称" prop="oneClass.cnname"></el-table-column>
      <el-table-column label="英文名称" prop="oneClass.enname"></el-table-column>
      
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row, 'one')">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row, 'one')">删除</el-button>
        </template>
      </el-table-column>
  </el-table>
  <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
    <span>您是否删除{{dialogMsg}}分类</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleOk">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      oneId: '',
      one_enname: '',
      twoId: '',
      dialogMsg: ''
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 处理数据
    initData (data) {
      return data.oneData.map((i) => {
        let obj = {
          oneClass: i,
          twoClass: []
        }
        data.twoData.forEach((j) => {
          if (j.parent_id = i.id) {
            obj.twoClass.push(j)
          }
        })
        return obj;
      })
    },
    handleEdit (index, data, state) {
        if (state == 'one') {
            // console.log(data);
            sessionStorage.setItem('oneClassData', JSON.stringify(data.oneClass))
            this.$router.push({path: '/back/amend_class', query: {state: 'one'}})
        } else {
            // console.log(data)
            sessionStorage.setItem('twoClassData', JSON.stringify(data))
            this.$router.push({path: '/back/amend_class', query: {state: 'two'}})
        }
    },
    handleDelete (index, data, state) {
      this.dialogVisible = true;
      this.state = state;
      if (state == 'one') {
        this.dialogMsg = data.oneClass.cnname;
        this.oneId = data.oneClass.id;
        this.one_enname = data.oneClass.enname
      } else {
        var oneenname = null;
        this.tableData.forEach((i) => {
          if (i.oneClass.id == data.parent_id) {
            oneenname = i.oneClass.enname
          }
        }, this);

        this.twoId = data.id
        this.one_enname = oneenname
        this.oneId = data.parent_id
      }
    },
    handleOk () {
      if (this.state == 'one') {
        this.axios.post('/api/back/class/deleteClassOne', {id:this.oneId,enname_one: this.one_enname})
          .then((data) => {
            console.log(data)
            if (data.data.code == '2041') {
              this.$message({
                showClose: true,
                type: "success",
                message: data.data.msg
              });
              this.$router.go(0)
            } else {
              this.$message({
                showClose: true,
                type: "error",
                message: data.data.msg
              });
            }
          })
      } else {
        this.axios.post('/api/back/class/deleteClassTwo', {oneId:this.oneId,twoId:this.twoId,enname_one: this.one_enname})
          .then((data) => {
            console.log(data)
            if (data.data.code == '2051') {
              this.$message({
                showClose: true,
                type: "success",
                message: data.data.msg
              });
              this.$router.go(0)
            } else {
              this.$message({
                showClose: true,
                type: "error",
                message: data.data.msg
              });
            }
          })
      }
      this.dialogVisible = false;
    }
  },
  created () {
    this.axios.get('/api/back/class/Class').then((data) => {
      // console.log(data)
      this.tableData = this.initData(data.data.data)
      // this.tableData = data.data.data
    })
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>