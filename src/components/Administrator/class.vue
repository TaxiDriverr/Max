<template>
  <el-card class="box-card">
    <span id="title">班级信息管理列表</span>
    <el-button type="plain" @click="dialogFormVisible = true" id="createButton">
      <i class="el-icon-plus"></i> 创建班级
    </el-button>
    <div id="search_f">
      <el-autocomplete
        id="search"
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入班级名或教师"
        prefix-icon="el-icon-search"
        @select="handleSelect"
      ></el-autocomplete>
    </div>

    <div id="dialog">
      <el-dialog title="创建班级"
                 :visible.sync="dialogFormVisible"
                 center="true"
                 width="35%">
        <el-form :model="form"
                 :rules="loginRules"
                 ref="form"
                 id="createForm">
          <el-form-item label="班级名" prop="name" id="className">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="教师" prop="teacher">
            <el-select v-model="form.teacher" filterable placeholder="请选择教师">
              <el-option
                v-for="item in teacher_options"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div id="bottom">
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="createClass">确 定</el-button>
            <el-button plain @click="resetForm('form')">重 置</el-button>
            <el-button @click="Cancel">取 消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>

    <el-table
      :data="tableData"
      ref="table"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="index"
        label="序号"
        type="index"
        width="130"
        height="40">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级名"
        width="130"
        height="40">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="任课老师"
        width="130px"
        height="40">
      </el-table-column>
      <el-table-column>
        <!--        <el-button type="primary" @click="edit" icon="el-icon-edit" circle></el-button>-->
        <!--        <el-button type="success" @click="finish" icon="el-icon-check" circle></el-button>-->
        <el-button type="danger" @click="deleteUser()" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="2">
    </el-pagination>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        teacher: ''
      },
      value: {
        value: '',
        label: ''
      },
      tableData: [{
        class: '一班',
        teacher: '王小虎',
      }, {
        class: '一班',
        teacher: '王小虎',
      }, {
        class: '一班',
        teacher: '王小虎',
      }],
      loginRules: {
        name: [
          {required: true, message: '请输入班级名', trigger: 'blur'},
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur',
          },
        ],
        teacher: [
          {required: true, message: '请选择教师性别', trigger: 'blur'},
        ]
      },
      teacher_options: [{
        value: '1',
        label: '张三'
      }, {
        value: '2',
        label: '李四'
      }, {
        value: '3',
        label: '路人甲'
      }],
      // dialogTableVisible: false,
      dialogFormVisible: false,
    }
  },
  methods: {
    createClass () {
      if (this.form.name) {
        this.tableData.unshift({
          class: this.form.name.toString(),
          teacher: this.form.teacher,
        })
        this.$message({
          type: 'success',
          message: '创建成功'
        })
        this.dialogFormVisible = false
      } else {
        alert('添加失败')
      }
    },
    resetForm (form) {
      this.$refs[form].resetFields()
      this.value = ''
    },
    Cancel () {
      this.dialogFormVisible = false
    }
  }
}

</script>

<style scoped Lang="less">
#title {
  /* width: 480px; */
  font: 30px bold;
  margin-top: 30px;
  height: 35px;
  display: block;
}

.box-card {
  background-color: #fff;
  //margin: 10px;
  height: 800px;
  text-align: center;
  /* width: 480px; */
}

.el-radio-group {
  line-height: 30px;
}

#search_f {
  display: inline;
}

#search_f.el-autocomplete {
  height: 60px;
}

#className > > > .el-input {
  width: 250px;
}

#createForm {
  width: 200px;
  height: 200px;
  margin-left: 100px
}

#dialog > > > .el-dialog {
  height: 600px;
}

#dialog >>> .el-dialog__body{
  padding: 0 0 30px 0;
}

#head > > > .el-dialog__header {
  height: 100px;
}

#bottom > > > .dialog-footer {
  height: 100px;
  margin: 0 0 30px 80px;
}
</style>
