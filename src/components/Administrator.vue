<template>
  

<el-container class="main_container">
    <!-- 头部布局 -->
  <el-header>
      <!--logo和项目名称-->
      <div class="left_box">
          <img src="../assets/img/logo.png">
          <span>学习交互管理系统</span>
        </div>
      
      <!--用户登录展示的头像-->
      <div class="right_box">
        <el-dropdown>
         <img src="../assets/img/Boy-06.png">
          <!--下拉菜单-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-house">系统首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-ship">交流讨论</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

  <el-container>
      <!--侧边栏-->
      <el-aside :width="isCollapse?'64px':'200px'">
        <!--展开/收起-->
        <div class="toggle_box" @click="toggleCollapse">|||</div>
         <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :default-active="activePath"
          :collapse-transition="false"
          :unique-opened="true"
          :router="true">
          <MenuTree :menuList="this.MenuList"></MenuTree>
        </el-menu>
      </el-aside>
      <el-main>
        <!--路由视图-->
        
        <router-view></router-view>
        
      </el-main>
    </el-container>
  </el-container>
    
</template>

<script>
import MenuTree from '../components/Menu/A_MenuTree'
  export default {
      
      name:'Main',
      data(){
          return {
              isCollapse:false,
              activePath: '',
        MenuList: [
          {
            "id": 1,
            
            "parentId": 0,
            "menuName": "班级管理",
            "url": "",
            "icon": "el-icon-setting",
            "orderNum": 1,
            "open": 1,
            "disabled": false,
            "perms": null,
            "type": 0,
            "children": [
              
              {
                "id": 226,
                "parentId": 1,
                // " @click":"gtStudy",
                "menuName": "班级列表",
                "url": '/administrator/a_class',
                "icon": "el-icon-user",
                "orderNum": 2,
                "open": 0,
                "disabled": false,
                "perms": "class_creat",
                "type": 0,
                "children": []
              },
              
              {
                "id": 235,
                "parentId": 1,
                "menuName": "角色管理",
                "url": "/roles",
                "icon": "el-icon-postcard",
                "orderNum": 3,
                "open": 0,
                "disabled": false,
                "perms": "",
                "type": 0,
                "children": []
              },
             
            ]
          },

          {
            "id": 2,
            "parentId": 0,
            "menuName": "教师管理",
            "url": null,
            "icon": "el-icon-s-goods",
            "orderNum": 2,
            "open": 0,
            "disabled": false,
            "perms": null,
            "type": 0,
            "children": [
              {
                "id": 229,
                "parentId": 312,
                "menuName": "教师列表",
               "url": '/administrator/a_teacher',
                "icon": "el-icon-date",
                "orderNum": 1,
                "open": 1,
                "disabled": false,
                "perms": "el-icon-date",
                "type": 0,
                "children": []
              },     
            ]
          },

          {
            "id": 3,
            "parentId": 0,
            "menuName": "个人中心",
            "url": null,
            "icon": "el-icon-s-goods",
            "orderNum": 3,
            "open": 0,
            "disabled": false,
            "perms": null,
            "type": 0,
            "children" :[]
              },
          
          
        ]
      }
    },
    components: {
      MenuTree
    },
          
    methods: {
      gtStudy(){
      this.$router.push('/student/s_study')
    },
        toggleCollapse(){
            this.isCollapse = !this.isCollapse;
        },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

</script>

<style Lang = "less" scoped>

 /*设置整个容器的高度*/
  .main_container {
    height: 800px;
  }

  /*头部布局*/
  .el-header {
    background-color: #001529;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    color: #FFFFFF;
    align-items: center;
    font-size: 20px;}

    /*左边logo和标题*/

    .left_box {
      display: flex;
      align-items: center;   }


      /*logo*/

      img {
        width: 50px;
        height: 40px;
        margin: 0px 0px 10px 15px;
      }

      /*标题*/

      span {
        margin-left: 15px;
      }
    /* } */

    /*右边的登录头像*/

    /* .right_box {
      .el-dropdown > img { */
        /* width: 60px;
        height: 60px; */
        /* border-radius: 50%; */
        /* background-color: #FFFFFF; */
        /* margin: 0px 15px 0px 0px; */
        /* background-size: contain; */
      /* }
    } */
    .el-dropdown > img{
         width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #FFFFFF;
        margin: 0px 15px 0px 0px;
        background-size: contain;

    }
  /* } */
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  /*侧边栏*/
  .el-aside {
    background-color: #001529; }

    .el-menu {
      border-right: none;
    }

    /*展开/收起*/

    .toggle_box {
      background-color: rgb(153, 230, 76);
      font-size: 15px;
      font-weight: bold;
      line-height: 24px;
      color: #353434;
      letter-spacing: 0.2em;
      text-align: center;
      cursor: pointer;

    }
  /* } */

  /*内容主体*/
  .el-main {
    background-color: #c8d1da;
  }

  /*下拉菜单的样式*/
  .el-dropdown-link {
    cursor: pointer;
    color: #6994c0;
  }

</style>
