<template>
  <div class="container">
    <!-- 头部盒子 -->
    <div class="header">
      <div class="h_title">
        我的测验
        <div class="right_box">

          <img src="../../../assets/img/Boy-06.png">

        </div>
      </div>


    </div>
    <!-- 内容盒子 -->
    <div class="main">
      <div class="main_title">
        <h3>1.1无源单口网络的阻抗综合测试题</h3>
        <p>学生：XXX</p>
        <p>总分: 30.0;成绩：20.0</p>
        <p>截止时间：2021-05-24 00:00:00</p>
      </div>
      <div class="choice">
        1.单选题（共7题）
      </div>
      <!-- 题目盒子 -->
      <div class="question">
        <div class="q1"></div>
      </div>
      <div class="submit">
        <el-popover
          placement="top"
          width="160"
          v-model="visible">
          <p>提交后不可更改，确定提交吗</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference" type="primary">提交</el-button>
        </el-popover>
      </div>

    </div>
    <!-- 底部盒子 -->
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  }
}


</script>

<style scoped>
.right_box{
  /* padding-right: 10px; */
  text-align: right;
  margin-right: 30px;
  /* margin-bottom:50px; */
  line-height: 40px;
  /* padding-bottom: 40px; */

}
img {
  width: 50px;
  height: 40px;
  /* margin: 0px 0px 10px 15px; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #FFFFFF;
  /* margin: 0px 15px 0px 0px; */
  background-size: contain;

}
.container{
  width: 100%;
  height: 900px;
  background-color: rgb(238,238,238);
  margin-top: 0;
}
/* 头部样式 */
.header{
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: rgb(126, 139, 158);
}
.h_title{
  font: 22px bold;
  text-align: center;
  /* margin: 0 auto; */
  padding-top: 20px;
}
.main{
  width: 80%;
  background-color: #fff;
  height: 830px;
  margin: 0 auto;
  margin-top: 20px;
}
.main_title{
  text-align: center;
  padding-top: 30px;
}
.choice{
  width: 80%;
  margin: 0 auto;
}
.question{
  width: 80%;
  margin: 0 auto;

}
.question>.q1{
  height: 380px;
  border: 1px solid;
}
.submit{
  width: 80%;
  margin: 0 auto;
  text-align: right;
  margin-top: 20px;
  /* margin-right: 150px; */

}
.footer{
  width: 100%;
  height: 80px;
  background-color: rgb(126, 139, 158);
}
</style>
