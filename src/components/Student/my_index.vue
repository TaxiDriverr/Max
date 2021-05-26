<template>

  <div class="content">
    <div class="title">
      个人信息
    </div>
    <div class="main">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="头像">
          <div class="el-upload">
            <i class="el-icon-plus"></i>
          </div>

        </el-form-item>

        <div class="name" style="text-align:left">
          <el-form-item label="姓名">
            <!-- <el-input v-model="form.name"></el-input> -->
            张一衣
          </el-form-item>
        </div>
        <div class="idCard" style="text-align:left">
          <el-form-item label="学号">
            <el-text v-model="form.name" style="text-align:left">200701001</el-text>

          </el-form-item>
        </div>

        <el-form-item label="出生日期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>


        </el-form-item>

        <el-form-item label="性别">
          <div class="box">
<!--            <el-radio-group v-model="form.resource">-->

<!--              <el-radio label="男" class="radio"></el-radio>-->
<!--              <el-radio label="女"  class="radio"></el-radio>-->

<!--            </el-radio-group>-->
          </div>
        </el-form-item>

        <!-- <img src="../../assets/img/lock.png"> -->
        <el-form-item label="密码设置">
          <div class="left"  style="color:rgb(6,198,182)">
            <i class="el-icon-circle-check" style="color:rgb(6,198,182)"></i>
            已设置</div>
          <div class="right" >
            <el-button type="primary" plain style="margin-left:100px;background-color:#ffffff" @click="dialogFormVisible = true">点击修改</el-button>
          </div>
        </el-form-item>
        <el-form-item label="手机号码">
          <div class="left"  style="color:rgb(6,198,182)">
            <i class="el-icon-circle-check" style="color:rgb(6,198,182)"></i>
            已设置</div>
          <div class="right" >
            <el-button type="primary" plain style="margin-left:100px;background-color:#ffffff"  @click="dialogFormVisible = true">点击修改</el-button>
          </div>
        </el-form-item>

        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" style="width:1000px;height:800px">
          <el-form :model="form1" :rules="old_pswRules">
            <el-form-item label="原密码" :label-width="formLabelWidth">
              <el-input v-model="form1.psw" autocomplete="off" type="password"></el-input>
            </el-form-item>

          </el-form>
          <el-form :model="form2" :rules="newPswRules">
            <el-form-item label="新密码" :label-width="formLabelWidth" >
              <el-input v-model="form2.psw" autocomplete="off" type="password" ></el-input>
            </el-form-item>


          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>




        <div class="but_botm">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <!-- <el-button style="margin-left:50px">取消</el-button> -->
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPswRules: {
        psw: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
      },

      form: {
        name: '',

      },

      dialogTableVisible: false,
      dialogFormVisible: false,
      form1: {
        psw: ''
      },
      form2: {
        psw: ''
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped >
.el-upload{
  /* background-color: rgb(83, 57, 57); */
  width: 70px;
  height: 80px;
  float: left;
  padding-top: 30px;
}

.but_botm >>> .el-form-item__content{
  /* background-color: #fff; */
  text-align: left;
  /* padding-left: 50px; */
  margin-top: 30px;
}
.left >>> .el_button{
  margin-left: 10px;
}
.right{
  float: left;
  /* margin-left: 140px; */
}
.right >>> .el-button{
  width: 80px;
  text-align: center;
  padding-left: 10px;
  padding-top: 7px;
  height: 30px;

}
.left{
  /* text-align: left; */
  float: left;
}

.el-input >>> .el-input__inner{
  width: 300px;
}
.el-input{
  text-align: left;
}
.title{
  font-size: 24px;
  color: #ada9a9;
  height: 120px;
  padding-left: 20px;
  padding-top: 0px;
  line-height: 120px;
  /* background-color: rgb(156, 107, 107); */
  text-align: left;
  margin-bottom: 30px;

}
.main{
  margin-left: 250px;
}
.content{
  background-color: #FFFFFF;
  margin: 15px;
  height: 800px;
  text-align: center;
  /* padding-top: 100px; */
  /* padding-left: 200px; */


}
.radio{
  padding-left: 10px;
}
.box>>>.el-radio-group{
  /* background-color: #fff; */
  padding-left:0px;

}
.box{
  text-align: left;

}

</style>
