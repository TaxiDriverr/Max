<template>
  <el-row class="tac">
    <div>
      
    
  </div>
    <div class="left">
      <el-col :span="3.5">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">我管理的班级</span>
        </el-menu-item>
        <!-- <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">2班</span>
        </el-menu-item> -->
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">添加班级</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </div>
    <div class="right">
      <div class="title">
        学生信息管理列表
        
      </div>
      
      
      <div class="tab">
        
        
      <el-table
    :data="tableData"
    border
    style="width: 100%">
     <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="id"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tele"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
       width="180px">
    </el-table-column>
    <el-table-column
      prop="psw"
      label="密码"
       width="180px">
    </el-table-column>

    
   <el-table-column width="180">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
          
      
    </el-table-column>
     
    
  </el-table>
    </div>
    </div>
  </el-row>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
         tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
        }, {
          tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
        }, {
          tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
        }, {
          tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
           }, {
          tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
        }, {
         tele: '138830000',
          name: '王小虎',
          psw: '123456',
          sex:'男',
          id:'200700'
        }]
      }
    }
  }
</script>

<style>
.el-menu-item{
  font-size: 18px;
  width: 200px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  
}
.tab{
  width: 1080px;
  margin:0 auto ;
  margin-top: 80px;
  margin-left: 200px;
  /* background-color: rgb(245, 245, 245); */

}
.right{
  height: 100%;
  width: 800px;
  /* background-color: rgb(197, 129, 129); */
  /* margin-left: 20px; */
}
/* .right{
  background-color: rgb(83, 79, 79);
  height: 800px;
} */
/* .left{
  width: 100px;
  height: 800px;
} */
.title {
    /* width: 480px; */
    font:30px bold ;
    margin: 20px;
    margin-bottom: 60px;
    margin-top:50px ;
    margin-left:540px ;

  }



</style>
