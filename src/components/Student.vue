<template>
 <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"  @click="gtStudy">学习</el-menu-item>
    <el-menu-item index="2" @click="gtTest">测试</el-menu-item>
    <el-menu-item index="3" @click="gtGrade">学习报告</el-menu-item>
    <el-menu-item index="4" @click="gtContent">消息中心</el-menu-item>
    
  </el-menu>
  
  <router-view></router-view>
 </div>
 
 
</template>

<script>
export default {
  methods: {
    beforeInquiry () {
        const { href } = this.$router.resolve({
          name:'consult'
        });
        window.open(href, '_blank');
      },
    gtStudy(){
      this.$router.push('/student/s_study')
    },
    gtTest(){
      this.$router.push('/student/s_test')
    },
    gtGrade(){
      this.$router.push('/student/s_grade')
    },
    gtContent(){
      this.$router.push('/student/s_index')
    }
  }
}
</script>

<style>
  .el-menu-item{
    width: 200px;
  }
</style>
