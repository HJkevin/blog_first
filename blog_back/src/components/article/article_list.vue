<template>
    
     <div class="classmain">
         <el-table
          :data="formData"
          border
          style="width: 800px" >
          <el-table-column
            label="标题"
            width="180">
            <template scope="scope">
              <span style="margin-left: 0px">{{ scope.row.article_name }}</span>
            </template>
          </el-table-column>
         <el-table-column
            label="作者"
            width="180">
            <template scope="scope">
              <span style="margin-left: 0px">{{ scope.row.editer }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="时间"
            width="180">
            <template scope="scope">
              <span style="margin-left: 0px">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
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
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="nowPage"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="everyrows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.olddata.length">
        </el-pagination>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOK">确 定</el-button>
        </span>
      </el-dialog>
      </div>

</template>

<script>
export default {
  name: "article_list",
  data() {
    return {
      olddata: [],
      formData: [],
      everyrows: 5,
      nowPage: 1,
      dialogVisible: false,
      id: ""
    };
  },
  created() {
    this.getInitData();
  },
  methods: {
    getInitData() {
      this.axios.get("/api/back/article/getArticleList").then(data => {
        console.log(data);
        if (data.data.code == "3021") {
          console.log(data.data.data);
          this.olddata = data.data.data;
          this.formData = this.olddata.slice(0, this.everyrows);
        }
      });
    },
    dbclick() {
      
    },
    handleEdit(index, row) {

    },
    handleSizeChange(val) {

    },
    handleCurrentChange(val) {

    },
    handleDelete(index, row) {

    },
    handleOK() {

    },
    handleClose(done) {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
