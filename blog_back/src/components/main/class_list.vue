<template>
  <el-table
    :data="tableData5"
    style="width: 80%">
    <el-table-column type="expand">
      <template scope="props">
        <el-table
          :data="props.row.twoClass"
          style="width:100%"
        >
          <el-table-column
            label="中文名称"
            prop="cnname">
          </el-table-column>
          <el-table-column
            label="英文名称"
            prop="enname">
          </el-table-column>
          <el-table-column
            label="英文名称"
            prop="name">
          </el-table-column>
          <el-table-column>
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
    <el-table-column
      label="中文名称"
      prop="id">
    </el-table-column>
    <el-table-column
      label="英文名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc">
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
</template>

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

<script>
  export default {
    data() {
      return {
        tableData5: [{
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
        } ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>