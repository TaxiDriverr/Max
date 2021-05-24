<template>
  <el-card class="box-card">
    <div class="title">
      班级信息管理列表
    </div>
    <el-form
      :model="formInline"
      :inline="true"
      :rules="loginRules"
      ref="formInline"
      class="demo-form-inline">
      <el-form-item>添加班级</el-form-item>
      <el-form-item prop="name">
        <el-input v-model="formInline.name" placeholder="请输入班级名"></el-input>
      </el-form-item>

      <!--      <el-radio-group :inline="true" v-model="formInline.sex" prop="sex">-->
      <!--        <el-radio-button label="男"></el-radio-button>-->
      <!--        <el-radio-button label="女"></el-radio-button>-->
      <!--      </el-radio-group>-->

      <el-select v-model="value" filterable placeholder="请选择教师">
        <el-option
          v-for="item in teacher_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-form-item>
        <el-button type="primary" id="createButton" @click="createClass">创建</el-button>
        <el-button plain >重置</el-button>

      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      ref="table"
      border
      style="width: 100%">
      <el-table-column
        prop="index"
        label="序号"
        type="index"
        width="180">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="任课老师"
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
        name: '',
        teacher: ''
      },
      value:{
        value:'',
        label:''
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
    }
  },
  methods:{
    createClass(){
        if (this.formInline.name && this.formInline.name.length >= 2 && this.formInline.name.length <= 10) {
          this.tableData.push({
            name: this.formInline.name.toString(),
            teacher: this.value.label
          })
        } else {
          alert('添加失败');
        }
    }
  }
  // mounted () {
  //   bus.$on('passValue', function (msg){
  //     // data.teacher_options.push({
  //     //   value : localStorage.counter.toString(),
  //     //   label: msg
  //     // });
  //     alert(msg);
  //   })
  // },
  // created () {
  //   bus.$on('passValue', (value) => {
  //
  //     console.log(value)
  //     })
  // }
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
   height: 800px;
  margin: 20px;
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
