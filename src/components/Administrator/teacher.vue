<template>
  <el-card class="box-card">
    <div class="title">
      教师信息管理列表
    </div>
    <el-form
      :model="formInline"
      :inline="true"
      :rules="loginRules"
      ref="formInline"
      class="demo-form-inline">
      <el-form-item>添加教师</el-form-item>
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="请输入教师姓名"></el-input>
      </el-form-item>

      <el-form-item prop="phone">
        <el-input v-model="formInline.phone" placeholder="请输入教师电话"></el-input>
      </el-form-item>

      <el-radio-group :inline="true" v-model="formInline.sex" prop="sex">
        <el-radio-button label="男"></el-radio-button>
        <el-radio-button label="女"></el-radio-button>
      </el-radio-group>

      <el-form-item>
        <el-button type="primary" @click="CreateTeacher" id="createButton">添加</el-button>
        <el-button plain @click="resetForm('formInline')">重置</el-button>
      </el-form-item>
    </el-form>

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
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180px">
      </el-table-column>
      <el-table-column
        prop="psw"
        label="密码(默认手机号后四位)"
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
      formInline: {
        name: [],
        phone: [],
        sex: '',
        psw: ''
      },
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
      },
    }
  },
  methods: {
    CreateTeacher () {
      if (this.formInline.sex && this.formInline.name && this.formInline.phone
        && this.formInline.name.length >= 2 && this.formInline.name.length <= 10
      && this.formInline.phone.length >= 7 && this.formInline.phone.length <= 11) {
        let length = this.formInline.phone.length
        let psw = this.formInline.phone.slice(length - 4, length)
        this.tableData.push({
          name: this.formInline.name.toString(),
          phone: this.formInline.phone.toString(),
          sex: this.formInline.sex,
          psw: psw
        })
      } else {
        alert('添加失败');
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
  }
}
</script>

<style scoped Lang="less">
.title {
  /* width: 480px; */
  font: 30px bold;
  margin: 20px 0 60px 0;
}

.box-card {
  background-color: rgb(233, 233, 233);
  margin: 20px;
  height: 800px;
  text-align: center;
  /* width: 480px; */
}

.el-radio-group {
  line-height: 30px;
}

#createButton {
  margin-left: 14px;
}
</style>
