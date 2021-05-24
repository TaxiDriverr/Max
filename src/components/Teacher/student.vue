<template>
  <el-row class="tac">
    <el-col :span="3.5">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">学习情况</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style>
.el-menu-item{
  font-size: 18px;
  width: 200px;
  height: 70px;
  text-align: center;
  line-height: 70px;
}

</style>
