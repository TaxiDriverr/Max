<template>
  <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0" class="offset"></el-menu-item>
         <!-- <el-menu-item index="0" @click="gtContent" class="item">教学内容</el-menu-item> -->
        <el-menu-item index="1" @click="gtContent" class="item">教学内容</el-menu-item>
        <el-menu-item index="2" @click="gtTest">测试管理</el-menu-item>
        <el-menu-item index="3" @click="gtClass">班级管理</el-menu-item>
        <el-menu-item index="4" @click="gtStudent">学生数据</el-menu-item>
        <el-menu-item index="5">个人信息</el-menu-item>
        <el-menu-item index="6">消息中心</el-menu-item>
      </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    gtContent(){
      this.$router.push('/teacher/t_content')
    },
    gtTest(){
      this.$router.push('/teacher/t_test')
    },
    gtClass(){
      this.$router.push('/teacher/t_class')
    },
    gtStudent(){
      this.$router.push('/teacher/t_student')
    }
  }
}
</script>

<style>
.el-menu-item {
  width: 100px;
 
}
/* .item {
    color: aqua;
    background-color: rgb(49, 41, 41);
    margin-left:10px;

} */
.offset{
  width: 100px;
}



</style>
