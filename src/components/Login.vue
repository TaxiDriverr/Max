<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
      </div>
      <!-- 表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名框 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名称"
            prefix-icon="el-icon-user-solid">
          </el-input>
        </el-form-item>
        <!-- 密码框 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入登录密码"
            prefix-icon="el-icon-lock"
            type="password">
          </el-input>
        </el-form-item>
        <div class="radio">
          <span>请选择您的身份：</span>
          <el-radio-group v-model="loginForm.choice" class="ChooseID">
            <el-radio label="教师" value="教师"></el-radio>
            <el-radio label="学生" value="学生"></el-radio>
            <el-radio label="管理员" value="管理员"></el-radio>
          </el-radio-group>
        </div>
        <!-- </el-form-item>  -->
        <!-- 按钮 -->
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginForm')">立即登录</el-button>
          <el-button @click="resetForm('loginForm','form.choice')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

      form: {
        act: '',
        psw: '',
        choice: ''

      },
      loginForm: {
        username: '',
        password: '',
        verifyCode: '',
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {
            min: 3,
            max: 16,
            message: '长度在 3 到 16 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {
            min: 3,
            max: 16,
            message: '长度在 3 到 16 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          if (this.loginForm.choice === '学生') {
            this.$router.push('/student')
          } else if (this.loginForm.choice === '教师') {
            this.$router.push('/teacher')
          } else {
            this.$router.push('/administrator')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (loginForm) {
      this.$refs[loginForm].resetFields();
      this.loginForm.choice = ''
    },
  },
}
</script>

<style Lang="less" scoped>
.login_container {
  height: 900px;
  background-color: #809cb8;
}

.login_box {
  padding: 10px;
  width: 450px;
  height: 360px;
  background-color: #f8f8f8;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #EEEEEE;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: -65px auto;
  background-color: #FFFFFF;
}

/* //   img{
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background-color: #EEEEEE;
//   } */
/* } */

.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}

.radio {
  display: flex;
  margin-bottom: 20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-bottom: 36px;
  color: darkgray;
  font-size: 15px;
  margin-left: 15px;
  height: 25px;
}

/* span{
  /* line-height: 25px; */

/* } */


/

.ChooseID {
  width: 70%;
  justify-content: left;
  padding-top: 2px;
  /* line-height: 25px; */
}

</style>
