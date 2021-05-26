<template>
  <el-card class="box-card">
    <span id="title">
      班级信息管理列表
    </span>
    <el-button type="plain" @click="dialogFormVisible = true">
      <i class="el-icon-plus"></i> 添加班级</el-button>
    <!--    <el-button plain><i class="el-icon-search"></i>  搜 索</el-button>-->
    <div id="search_f">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        id="search_"
        placeholder="请输入班级名"
        prefix-icon="el-icon-search"
        @select="handleSelect"
      ></el-autocomplete>
    </div>

    <div id="dialog">
      <el-dialog title="添加教师"
                 :visible.sync="dialogFormVisible">
        <el-form :model="form"
                 :rules="loginRules"
                 ref="form"
                 id="createForm">
          <el-form-item label="教师姓名" prop="name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="教师电话" prop="phone" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="教师性别" prop="sex" :label-width="formLabelWidth">
            <el-select v-model="form.sex" placeholder="请选择教师性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="CreateTeacher">确 定</el-button>
          <el-button plain @click="resetForm('form')">重 置</el-button>
          <el-button @click="Cancel">取 消</el-button>
        </div>
      </el-dialog>
    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="index"
        label="序号"
        type="index"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="班级名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建日期"
        width="180px">
      </el-table-column>
      <el-table-column>
        <!--        <el-button type="primary" @click="edit" icon="el-icon-edit" circle></el-button>-->
        <!--        <el-button type="success" @click="finish" icon="el-icon-check" circle></el-button>-->
        <el-button type="danger" @click="deleteUser()" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>

  </el-card>
</template>
<script>
export default {
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        phone: '',
        sex: ''
      },
      formLabelWidth: '120px',
      tableData: [{
        phone: '12345',
        name: '王小虎',
        sex: '男',
        psw: '123456'
      }, {
        phone: '2016-05-04',
        name: '王小虎',
        sex: '男',
        psw: '123456'
      }, {
        phone: '2016-05-03',
        name: '王小虎',
        sex: '男',
        psw: '123456',
        index: ''
      }],
      loginRules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur',
          },
        ],
        phone: [
          {required: true, message: '请输入电话', trigger: 'blur'},
          {
            min: 7,
            max: 11,
            message: '长度在 7 到 11 个字符',
            trigger: 'blur',
          },
        ],
        sex: [
          {required: true, message: '请选择教师性别', trigger: 'blur'},
        ]
      },
    }
  },
  methods: {
    CreateTeacher () {
      if (this.form.sex && this.form.name && this.form.phone
        && this.form.name.length >= 2 && this.form.name.length <= 10
        && this.form.phone.length >= 7 && this.form.phone.length <= 11) {
        let length = this.form.phone.length
        let psw = this.form.phone.slice(length - 4, length)
        this.tableData.unshift({
          name: this.form.name.toString(),
          phone: this.form.phone.toString(),
          sex: this.form.sex,
          psw: psw
        })
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.dialogFormVisible = false
      } else {
        alert('添加失败')
      };
    },
    resetForm (form) {
      this.$refs[form].resetFields();
      this.form.sex = '';
    },
    Cancel(){
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
